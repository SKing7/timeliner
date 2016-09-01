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
        obj.updatedTimestamp = new Date();
        this.db[table].add(obj);
    }
}
export default new IndexedDB();
