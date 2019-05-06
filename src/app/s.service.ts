import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class SService {
    private username: string;
    private clientid = '1895a42d6e4fb55798ad';
    private clientsecret = 'fa73a965ca5d9ea680ec7af4ff0d83b40c634a85';

    constructor(private http: HttpClient) {
        console.log('Ready for display');
        this.username = 'kazugufaith';
    }
    getprofileInfo(username) {
        console.log(this.username);
    
        return this.http.get('https://api.github.com/users/' + this.username + '?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);

    }
    getprofileRepos() {

        return this.http.get('https://api.github.com/users/' + this.username + '/repos?client_id=' + this.clientid + '&client_secret=' + this.clientsecret);


    }

    updateprofile(username: string) {
        this.username = username;
    }

}
