import db from "../models/index";
import CRUDService from "../services/CRUDService"

let getAboutPage = (req, res) => {
    return res.send("Thanh Thuy");
}

let getHomePage = async (req, res) => {

    try {
        let data = await db.Post.findAll();
        return res.render('homepage.ejs', {
            dataTable: data
        });
    } catch (e) {
        console.log(e);
    }
}
let getEmployer = async (req, res) => {
    return res.render('crud.ejs');
}

let postEmployer = async (req, res) => {

    let message = await CRUDService.createNewEmployer(req.body);
    console.log(message);
    return res.send('post crud from server')
}

let displayGetEmployer = async (req, res) => {
    let data = await CRUDService.getAllEmployer();
    console.log('-------------------------');
    console.log(data);
    return res.render('homepage.ejs', {
        dataTable: data
    });
}

module.exports = {
    getAboutPage, getHomePage, getEmployer, postEmployer, displayGetEmployer
}