const express = require("express");
const path = require("path");

class Server {

  constructor(port, botToken, db) {

    this.app = express();
    this.port = port;

    this.app.use(express.static("public"));

    this.app.get("/", (request, response) => {
      response.sendFile(__dirname + "/public/index.html");
    });

    this.app.get("/groups", (request, response) => {
      response.send(db.getGroups());
    });

    this.app.get("/logs", (request, response) => {
      if (request.query.token === botToken) {
        response.sendFile(path.resolve(".logs/combined.log"));
      } else {
        response.send("");
      }
    });

    this.app.get("/remove", (request, response) => {
      if (request.query.token === botToken) {
        if (db.groupExist(request.query.id)) {
          db.removeGroup(request.query.id);
        }
      }
      response.send("");
    });

  }

  startPolling() {
    this.app.listen(this.port);
  }

}

module.exports = Server;
