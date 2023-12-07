let instance;

class DBConnection{
    constructor(url){
        if(instance){
            throw new Error('You can not establish more than one db connection.')
        }
        this.url = url;
        instance = this;
    }

    connect(){
        console.log(`DB ${this.url} has been connected.`);
    }

    disconnect(){
        console.log(`DB ${this.url} has been disconnected.`);
    }
}

const db = Object.freeze(new DBConnection('postgress:3038//...'))

export default db;