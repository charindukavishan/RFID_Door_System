var connection = require('../config/db');

module.exports.Create = (req, res) => {
    var group = {
        "group-name": req.body.name,
        "stuents": req.body.index,
        "lecture" : req.body.lecture        
    }

    connection.query(
        'SELECT * FROM groups WHERE name = ?', group.name, function (error, results, fields) {
            if (!results) {
                connection.query('INSERT INTO groups SET ?', group, function (error, results, fields) {
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
                            message: 'group registered sucessfully'
                        })
                    }
                });
            }
            else {
                return res.status(200).json({ status: false, message: "group is already exist" });
            }
        }
    );
}

// module.exports.AllStudents = (req, res) => {
//     connection.query('SELECT * FROM students', req._id, function (error, results, fields) {
//         if (!results)
//             return res.status(404).json({ status: false, message: 'User record not found.' });
//         else {
//             return res.status(200).json({ status: true, results });
//         }
//     });
// }