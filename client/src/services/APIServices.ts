import axios from "axios";
axios.defaults.headers.get['Accept'] = 'application/json, text/plain, */*';
axios.defaults.headers.post['Accept'] = 'application/json, text/plain, */*';
axios.defaults.headers['Cache-Control'] = 'no-cache, no-store';
axios.defaults.headers.source = 'runtime';
axios.defaults.withCredentials = false;

export class APIServices{
    static getData(httpMethod:string, endPoint:string, requestData:any){
        let response:Promise<any> = new Promise(()=>{});
        switch(httpMethod){
            case "GET":
                response = axios.get(endPoint, requestData);
                break;
            case "POST":
                response = axios.post(endPoint, requestData);
                break;
        }
        return response;
    }
}