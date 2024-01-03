// Middleware for handling auth
const {Admin} = require("../db");
function adminMiddleware(req, res, next) {
    // Implement admin auth logic
    // You need to check the headers and validate the admin from the admin DB. Check readme for the exact headers to be expected
//     it's querying a database to find a document in the "Admin" collection where the username and password match the provided values.
// The findOne method returns a promise, and the then block is a callback function that will be executed if the promise is fulfilled (i.e., the database query is successful).
    const username = req.headers.username;
    const password = req.headers.password;
    Admin.findOne({
        username:username,
        password:password
    })
    .then(function(value){
        if(value){
            next();
        }
        else
        {
            res.status(403).json({
                msg:"Admin does not exist"
            })
        }
    })

}

module.exports = adminMiddleware;