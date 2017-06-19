/**
 * Routing file
 * This file holds all the possible routes our app can make. It also has a reference to services to help keep logic out of this layer.
 */
'use strict';
import * as userService from '../services/userService';


export default (app) => {


    // We can create an API by this.
    app.get('/', (req, res) => {
        res.render('index');
    });

 /*
* C R U D : All Functions work with one or many depending on the query (u) passed in
*/

/* Create All User profiles */
app.post('/api/user/', (req, res) => {
    userService.readUser(req.body, (err, data) => {
            if(!err){
                console.log(data);
                res.status(201)
                res.json(data);
            }
            else {
                res.status(400)
                res.json(err);
            }
        });
    });


/* Get All User profiles */
app.get('/api/user/', (req, res) => {
        userService.readUser({}, (err, data) => {
            if(!err){
                console.log(data);
                res.status(200)
                res.json(data);
            }
            else {
                res.status(400)
                res.json(err);
            }
        });
    });

/* Get User profiles by id (email) */
app.get('/api/user/:id', (req, res) => {
        userService.readUser({email: req.params.id}, (err, data) => {
            if(!err){
                console.log(data);
                res.status(200)
                res.json(data);
            }
            else {
                res.status(400)
                res.json(err);
            }
        });
    });


/* Update User profiles by id (email) */
app.put('/api/user/:id', (req, res) => {
        uuserService.pdateUser({email: req.params.id}, (err, data) => {
            if(!err){
                console.log(data);
                res.status(200)
                res.json(data);
            }
            else {
                res.status(400)
                res.json(err);
            }
        });
    });

/* Delete User profiles by id (email) */
app.delete('/api/user/:id', (req, res) => {
        userService.removeUser({email: req.params.id}, (err, data) => {
            if(!err){
                console.log(data);
                res.status(200)
                res.json(data);
            }
            else {
                res.status(400)
                res.json(err);
            }
        });
    });

/* Remove endPoint to User profiles */
app.delete('/api/user/:id/removeEndpoint/:url', (req, res) => {

        userService.removeEndPointFromUser({email: u}, req.params.url, (err, data) => {
            if(!err){
                console.log(data);
                res.status(200)
                res.json(data);
            }
            else {
                res.status(400)
                res.json(err);
            }
        });
    });


/* Add endPoint to User profiles */
app.post('/api/user/:id/addEndpoint/:url', (req, res) => {

        userService.addEndPointToUser({email: u}, req.params.url, (err, data) => {
            if(!err){
                console.log(data);
                res.status(200)
                res.json(data);
            }
            else {
                res.status(400)
                res.json(err);
            }
        });
    });


}