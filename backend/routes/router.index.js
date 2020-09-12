const express = require('express');
const router = express.Router();

const ctrlAdmin = require('../controllers/admin.controller');
const doorCtrl = require('../controllers/doors.controller');
const studentCtrl = require('../controllers/student.controller');
const accessCtrl = require('../controllers/accessGrant.controller');

router.get('/admin', ctrlAdmin.admin);
router.post('/login',ctrlAdmin.login);
router.post('/getaccess', accessCtrl.allowAccess);

// **** DOORS ****

// --- Get Requests ---

// get the status of all doors
router.get('/alldoors', doorCtrl.AllDoors);

// get the status of door for a specific session
router.get('/sessionDoorstatus/:id', doorCtrl.SessionDoorStatus);

// get the door for the session at a specific time
router.get('/doorforsession/:sessionId/:timeSlotId', )

// get status of specific door
router.get('/doorStatus/:id', doorCtrl.Status);

//---------------------------------------------------------------------------------------------------------------------------------------


// --- Post Requests --

// Lock or unlock the door, Lock = True for lock , lock = false for unclock
router.post('/doorlock', doorCtrl.LockDoor);



//---------------------------------------------------------------------------------------------------------------------------------------



// **** SESSIONS ****
// --- Get Requests ---
//---------------------------------------------------------------------------------------------------------------------------------------


// --- POST Requests ---
//router.post('/createsession', );


//router.put('session');
//router.delete('session')
//---------------------------------------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------------------------------------



// **** USER ****
// --- Get Requests ---
//---------------------------------------------------------------------------------------------------------------------------------------

//TODO crud user

router.post('/register', studentCtrl.register);
router.get('/allstudents', studentCtrl.AllStudents);
// --- POST Requests ---
//---------------------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------------------------------



// **** LOG ****
// --- Get Requests ---
//---------------------------------------------------------------------------------------------------------------------------------------

//TODO LOG

// --- POST Requests ---
//---------------------------------------------------------------------------------------------------------------------------------------

//---------------------------------------------------------------------------------------------------------------------------------------




// **** SAMPLE ****
// --- Get Requests ---
//---------------------------------------------------------------------------------------------------------------------------------------

//TODO 

// --- POST Requests ---
//---------------------------------------------------------------------------------------------------------------------------------------


//---------------------------------------------------------------------------------------------------------------------------------------





module.exports = router;