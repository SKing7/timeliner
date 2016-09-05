import Dexie from 'dexie';

class IndexedDB {
    constructor() {
        this.dbName = 'timeliner';
        this.dbVersion = 1;
        this.init();
    }
    createTable (name, colsInfo) {
        this.db.version(this.dbVersion).stores({ [name]: colsInfo});
    }
    init() {
        this.db = new Dexie(this.dbName);
        this.createTable('project', '++id, name, desc, createdTimestamp, updatedTimestamp');
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
    getAll(table, cb) {
        return this.db[table].toArray();
    }
}
export default new IndexedDB();
