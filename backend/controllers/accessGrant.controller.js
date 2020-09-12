var connection = require('../config/db');

module.exports.allowAccess = (req, res) => {
    var student = {
        "RFID": req.body.rfid,
        "doorId": req.body.doorId
    }

    session = checkSession(student.doorId);

    if (session) {
        if (checkAccess(session, student.RFID)) {
            res.json({
                status: true,
                message: 'Access Granted'
            })
        } else {
            res.json({
                status: false,
                message: 'student has no access'
            })
        }
    }
}

checkSession = (doorId) => {

    connection.query(
        '', doorId, function (error, results, fields) {
            if (!results) {
                return results;
            }

            return false;
        }
    )
}

checkAccess = (session, rfid) => {
    // check the session's allocated group has the given RFID
}



