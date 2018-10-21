const db = require('../conn').getDB();
const mongodb = require('mongodb');
// console.log(db);
let movies = new mongodb.GridFSBucket(db,{bucketName:'movies'});
let music = new mongodb.GridFSBucket(db,{bucketName:'music'});
let other = new mongodb.GridFSBucket(db,{bucketName:'other'});

module.exports = {movies,music,other}

              
