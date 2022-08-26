import {Config} from './config.js'
export class BaseAPI{
    URL=Config.URL;
    //get data
    get(endPoint){
        return fetch(`${this.URL}/${endPoint}.json`)
    }
    ///post data    
    post(endPoint,data){
        return fetch(`${this.URL}/${endPoint}.json`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
          });
    }
} 

