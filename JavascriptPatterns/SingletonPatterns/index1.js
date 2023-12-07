import singletonCounter1 from "./counter.js"
import "./index.2.js";
import db from "./dbConnection.js";



singletonCounter1.increment()
console.log(singletonCounter1.getCount());
db.connect();
