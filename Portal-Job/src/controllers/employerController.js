
import EmployerService from "../services/EmployerService"

let handleLoginEmployer = async (req, res) => {

    //lay dl dc nhap
    let email = req.body.email;
    console.log('your email: ' + email)
    let password = req.body.password;

    //check email exist
    if (!email || !password) {
        return res.status(500).json({
            errCode: 1,
            message: 'Missing inputs parameter!'
        })
    }
    //compare password
    //return 
    //access_token: JWT
    let employerData = await EmployerService.handleEmployerLogin(email, password);


    return res.status(200).json({
        errCode: employerData.errCode,
        message: employerData.errMessage,
        employer: employerData.employer ? employerData.employer : {}
    })
}



module.exports = {
    handleLoginEmployer: handleLoginEmployer
}