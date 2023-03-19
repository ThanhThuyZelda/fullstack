import db from "../models/index";
import bcrypt from 'bcryptjs';


let handleEmployerLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let employerData = {};
            let isExist = await checkEmployerEmail(email);
            if (isExist) {
                //user already exist
                //compare password

                let employer = await db.Employer.findOne({
                    attributes: ['email', 'fullname', 'password'],

                    where: { email: email },
                    raw: true
                });
                if (employer) {
                    //compare password
                    let check = await bcrypt.compareSync(password, employer.password);
                    // let check = true;
                    if (check) {
                        employerData.errCode = 0;
                        employerData.errMessage = 'OK';
                        console.log(employer)
                        delete employer.password;
                        employerData.employer = employer;
                    }
                    else {
                        employerData.errCode = 3;
                        employerData.errMessage = 'Wrong password';
                    }

                } else {
                    employerData.errCode = 2;
                    employerData.errMessage = `User's not found~`;
                }
            }
            else {
                //return error
                employerData.errCode = 1;
                employerData.errMessage = `Your's email isn't exist in your system. Please try other email!!`;

            }
            resolve(employerData)
        }
        catch (e) {
            reject(e)
        }
    })
}


let checkEmployerEmail = (employerEmail) => {
    return new Promise(async (resolve, reject) => {
        try {
            let employer = await db.Employer.findOne({
                where: { email: employerEmail }
            })
            if (employer) {
                resolve(true)
            }
            else {
                resolve(false)
            }
        } catch (e) {
            reject(e);
        }
    })
}
module.exports = {
    handleEmployerLogin: handleEmployerLogin
}