/**
 * Created by bhuang on 12/4/17.
 * Holds all the routes needed.
 */

let express = require('express');
let router = express.Router();

const sms = require('./sms');

//let user = require('./users.js');
//let stdParam = require('./std-param');

let onTestee = require('./on-testee');
//router.get('/api/projects', user.service.getProjects);
//router.get('/api/projects/:userName', user.service.getProjectsByUserName);

//router.get('/api/ashare/:code', user.service.getCompany);
// financial parameters
//router.get('/api/roe/:code', user.service.getRoeByCompany);
//router.get('/api/roes/:codesstr', stdParam.getRoesByCompanies);

//router.post('/new-testee', onTestee.create);
router.get('/api/test', (req, res)=> {res.json({success: true, message: "test success"})});

//router.get('/api/tasks/:poster_uuid', onTester.getTasksByPosterUuid);
//router.delete('/task/:_id', onTester.deleteTaskById);
//router.post('/tasks/:limit', onTask.getTasksWithFilterAndLimit);
//router.get('/api/testee/:uuid', onTestee.getTesteeByUuid);

router.post('/sms', sms.sendSms);

module.exports = router;
