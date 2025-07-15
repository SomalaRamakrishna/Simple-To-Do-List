const { userLoginController } = require("../controllers/userLoginController");
const { userRegisterController } = require("../controllers/userRegisterController");


const router = require("express").Router();


router.post("/register", userRegisterController);
router.post("/login", userLoginController);


module.exports = router;