const auth_service = require("../services/auth_service");

exports.login = async (req, res) => {

    try{

        const result =
            await auth_service.login(req.body);

        res.json(result);

    }catch(err){

        res.status(401).json({
            error: err.message
        });

    }

};