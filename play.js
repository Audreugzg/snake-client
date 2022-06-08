const {connect} = require("./clients.js");
const {setupInput}  = require('./input');

console.log("Connecting ...");

const conn = connect(); 

setupInput(conn);



