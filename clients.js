// establishes a connection with the game server
net = require("net");
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243' ,// IP address here,
    port: 50541,// PORT number here,
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