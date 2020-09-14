var connection = require('../config/db');

module.exports.admin = (req, res) => {
    console.log('router work!');
}

module.exports.login = (req, res) => {
    var body = {
        "username": req.body.username,
        "password": req.body.password
    }

        //Test username password
        if (body.username==='admin' && body.password==='admin@123'){
            console.log(req.body)
            return res.status(200).json({ status: true, message: 'success' });
        }
    

    connection.query(
        'SELECT * FROM admin WHERE username = ?', body.username, function (error, results, fields) {
            
            if (!results[0]) {
                return res.status(404).json({ status: false, message: 'Admin record not found.' });
            }
            else if (results[0].password === body.password) {
                return res.status(200).json({ status: true, message: 'success' });
            }
            else {
                return res.status(401).json({ status: false, message: 'Password not match' });
            }
        });
}