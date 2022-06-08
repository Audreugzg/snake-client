// establishes a connection with the game server
net = require("net");
const { IP, PORT } = require("./constants");
const connect = function () {
  const conn = net.createConnection({
    host: IP ,// IP address here,
    port: PORT,// PORT number here,
  });

  // interpret incoming data as text
  conn.setEncoding("utf-8");

  conn.on("connect", () => {
    // code that does something when the connection is first established
       console.log("the connection is succussfully established");
       conn.write("Name: AG");
  });

  
  conn.on("data", (data) => {
    // code that does something when the connection is first established
    console.log(data);
  });

  return conn;
};

module.exports = {connect};