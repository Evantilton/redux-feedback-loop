const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

//Get Route
router.get('/', (req, res) => {
    console.log('GET /submit');
    pool.query('SELECT * from "feedback" ORDER BY "id";').then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error GET feedback', error)
        res.sendStatus(500);
    });
})//end GET route
    
//Post Route
router.post( '/', ( req, res )=>{
    console.log( "in /submit POST:", req.body );
    const query = `INSERT INTO "feedback" ( feeling, understanding, support, comments ) VALUES ( $1, $2, $3, $4 )`;
    const values = [ req.body.feeling, req.body.understanding, req.body.support, req.body.comments ];
    pool.query( query, values ).then( ( results )=>{
        res.sendStatus( 201 );
    }).catch( ( err )=>{
        console.log( 'ERROR with INSERT:', err );
        res.sendStatus( 500 );
    })
   }) //end POST route


module.exports = router;