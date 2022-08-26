import {BaseAPI} from './baseAPI.js';
export class FireBaseService extends BaseAPI{
   
    getAll(endPoint){
        return this.get(endPoint);
    }
    getById(endPoint){
        return this.get(endPoint);
    }
    addItem(endPoint, data){
        return this.post(endPoint,data);
       }
    
}