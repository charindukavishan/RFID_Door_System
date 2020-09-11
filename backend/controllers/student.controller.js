var connection = require('../config/db');

module.exports.register = (req, res) => {
    var student = {
        "name": req.body.name,
        "index": req.body.index
    }

    connection.query(
        'SELECT * FROM students WHERE index = ?', student.index, function (error, results, fields) {
            if (!results) {
                connection.query('INSERT INTO students SET ?', student, function (error, results, fields) {
                    if (error) {
                        console.log(error);
                        res.json({
                            status: false,
                            message: 'there are some error with query'
                        })
                    } else {
                        res.json({
                            status: true,
                            data: results,
                            message: 'user registered sucessfully'
                        })
                    }
                });
            }
            else {
                return res.status(200).json({ status: false, message: "user already exist" });
            }
        }
    );
}

module.exports.AllStudents = (req, res) => {
    connection.query('SELECT * FROM students', req._id, function (error, results, fields) {
        if (!results)
            return res.status(404).json({ status: false, message: 'User record not found.' });
        else {
            return res.status(200).json({ status: true, results });
        }
    });
}