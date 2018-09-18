import { Injectable } from '@angular/core';

@Injectable()
export class UserService  {
    user: any;
    log = false;
    constructor() { }

    setUser(user) {
        this.user = user;
    }

    getUser() {
        return this.user;
    }
}
