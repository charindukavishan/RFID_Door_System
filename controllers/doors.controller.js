module.exports.Status = (req, res) => {
    console.log("door status");
    //res.send('door status');
}

module.exports.AllDoors = (req, res) => {
    console.log('All Doors');
}

module.exports.SessionDoorStatus = (req, res) => {
    console.log('Doors for a session', req.prams.id);
}

module.exports.LockDoor = (req, res) => {
    console.log('Door lock : ');
}

module.exports.DoorForSession = (req, res) => {
    console.log('Door for a seession: ');
}