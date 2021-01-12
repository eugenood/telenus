const express = require("express");

class Server {

  constructor(port, db) {

    this.app = express();
    this.port = port;

    this.app.use(express.static("public"));

    this.app.get('/', (request, response) => {
      response.sendFile(__dirname + "/public/index.html");
    });

    this.app.get('/groups', (request, response) => {
      response.send(db.getGroups());
    });

  }

  startPolling() {
    this.app.listen(this.port);
  }

}

module.exports = Server;
