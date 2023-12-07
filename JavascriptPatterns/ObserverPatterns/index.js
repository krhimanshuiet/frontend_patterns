import observable from "./observable.js";
import { googleLogger4 } from "./observable.js";
const googleLogger1 = (data) => {
    console.log(`${Date.now()}: ${data}`)
}
const googleLogger2 = (data) => {
    console.log(`${Date.now()}: ${data}`)
}
const googleLogger3 = (data) => {
    console.log(`${Date.now()}: ${data}`)
}


observable.subscribe(googleLogger1);
observable.subscribe(googleLogger2);
observable.subscribe(googleLogger3);
observable.subscribe(googleLogger4);
observable.notify("Google analytics called!!🚀🚀");
// observable.unsubscribe(googleLogger);
// observable.notify("Google analytics called!!🚀🚀");