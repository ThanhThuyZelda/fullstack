import express from "express";
import homeController from "../controllers/homeController";
import employerController from "../controllers/employerController";
let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);
    //   router.get('/get-crud', homeController.displayGetCRUD);
    router.get('/about', homeController.getAboutPage);
    router.get('/create-employer', homeController.getEmployer);

    router.post('/post-employer', homeController.postEmployer);
    router.get('/get-employer', homeController.displayGetEmployer);

    //API
    router.post('/api/loginEmployer', employerController.handleLoginEmployer);

    return app.use("/", router);
}

module.exports = initWebRoutes;