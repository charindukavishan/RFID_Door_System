var connection = require('../config/db');

module.exports.admin = (req, res) => {
    console.log('router work!');
}

module.exports.login = (req, res) => {
    var body = {
        "username": req.body.username,
        "password": req.body.password
    }
    connection.query(
        'SELECT * FROM admin WHERE username = ?', body.username, function (error, results, fields) {
            let user = results[0];
            if (!results)
                return res.status(404).json({ status: false, message: 'Admin record not found.' });
            else if (user.password == body.password) {
                return res.status(200).json({ status: true, message: 'success' });
            }
            else {
                return res.status(200).json({ status: false, message: 'Password not match' });
            }
        });
}