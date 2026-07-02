const auth_service = require("../services/auth_service");

exports.login = async (req, res) => {

    try{
        const { email, password } = req.body;
        const result =
            await auth_service.login_user(email, password);

        res.json(result);

    }catch(err){

        res.status(401).json({
            error: err.message
        });

    }

};