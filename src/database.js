const lowdb = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");

class Database {

  constructor(directory) {
    const adapter = new FileSync(directory);
    this.db = lowdb(adapter);
    this.db.defaults({ groups: [] }).write();
  }

  addGroup(id, title, link) {
    const group = { id, title, link };
    this.db.get("groups").push(group).write();
  }

  removeGroup(id) {
    this.db.get("groups").remove({ id }).write();
  }

  updateGroupTitle(id, title) {
    this.db.get("groups").find({ id }).assign({ title }).write();
  }

  getGroup(id) {
    return this.db.get("groups").find({ id }).value();
  }

  getGroups() {
    return this.db.get("groups").sortBy("title").value();
  }
  
  groupExist(id) {
    return this.db.get("groups").find({ id }).size() > 0;
  }

}

module.exports = Database;
