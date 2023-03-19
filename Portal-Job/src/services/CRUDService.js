import db from "../models/index";
import bcrypt from 'bcryptjs';
const salt = bcrypt.genSaltSync(10);


let createNewEmployer = async (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hashUserPasswordFromBcrypt = await hashUserPassword(data.password);
            await db.Employer.create({
                email: data.email,
                password: hashUserPasswordFromBcrypt,
                fullName: data.fullName,
                phone: data.phone,
                gender: data.gender === '1' ? true : false,
            })

            resolve('ok create a new user succees!')

        } catch (e) {
            reject(e);
        }
    })

}
let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            var hashPassword = await bcrypt.hashSync(password, salt);
            resolve(hashPassword);
        } catch (e) {
            reject(e);
        }
    })
}
let getAllEmployer = () => {

    return new Promise(async (resolve, reject) => {
        try {
            let users = db.Employer.findAll({
                raw: true,
            });
            resolve(users);
        } catch (e) {
            reject(e);
        }
    })
}

module.exports = {
    createNewEmployer: createNewEmployer,

    hashUserPassword: hashUserPassword, getAllEmployer,
    getAllEmployer: getAllEmployer
}
