import Dexie from 'dexie';

class IndexedDB {
  constructor() {
    this.dbName = 'timeliner';
    this.dbVersion = 1;
    this.init();
  }
  createTable (name, colsInfo) {
    return this.db.version(this.dbVersion++).stores({ [name]: colsInfo});
  }
  init() {
    this.db = new Dexie(this.dbName);
    if (!this.db.project) {
      this.createTable('project', '++id, name, desc, createdTimestamp, updatedTimestamp');
    }
    if (!this.db.schedule) {
      this.createTable('schedule', '++id, name, content, workerId, startDate, endDate, createdTimestamp, updatedTimestamp');
    }
  }
  openDb() {
  }
  add(table, obj) {
    var _this = this;
    obj.updatedTimestamp = new Date().getTime();
    return this.db[table].add(obj);
  }
  clear(table) {
    return this.db[table].clear();
  }
  getAll(table, params, cb) {
    if (!isEmptyObj(params)) {
      var keys = Object.keys(params);
      var rt = this.db[table].filter(item => {
        return keys.some(function (key) {
          if (Number(item[key]) === Number(params[key])) {
            return true;
          }
        });
      }).toArray();
    } else {
      rt = this.db[table].toArray()
    }
    return rt;
  }
}
function isEmptyObj (obj) {
  if (!obj) return true;
  return Object.keys(obj).length === 0;
}
export default new IndexedDB();
