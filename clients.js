// establishes a connection with the game server
// const connect = function () {
//   const conn = net.createConnection({
//     host: '165.227.47.243' ,// IP address here,
//     port: 50541,// PORT number here,
//   });

//   // interpret incoming data as text
//   conn.setEncoding("utf8");

//   conn.on("connect", () => {
//     // code that does something when the connection is first established
//     console.log("the connection is succussfully established");
//   });
//   conn.on("data", (data) => {
//     // code that does something when the connection is first established
//     console.log(data);
//   });

//   return conn;
// };
net = require("net");
const conn = net.createConnection({
  host: '165.227.47.243' ,// IP address here,
  port: 50541,// PORT number here,
});

const textEncoding = conn.setEncoding("utf8");
const connData = conn.on("data", (data) => {
  // code that does something when the connection is first established
  console.log(data);
});

const connect = conn.on("connect", (client) => {
       // code that does something when the connection is first established
       console.log("the connection is succussfully established");
       conn.write("Name: AG");
       

     });
const connect1 = conn.on("connect", (client) => {
      // code that does something when the connection is first established
      
      // setInterval(() => {
      //   conn.write("Move: up");
      // }, 50);
      

    });


module.exports = {conn,textEncoding,connData,connect,connect1};