import { __decorate } from "tslib";
import { Injectable, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
let UsersService = class UsersService {
    constructor() {
        this.http = inject(HttpClient);
        this.baseUrl = 'http://localhost:3000';
        this.currentUser = signal({
            user_id: 0,
            user_name: '',
            email: '',
            password: '',
            accessToken: ''
        });
    }
    register(user) {
        return firstValueFrom(this.http.post(`${this.baseUrl}/register`, user));
    }
    login(user) {
        return firstValueFrom(this.http.post(`${this.baseUrl}/login`, user));
    }
    async isMailRegistered(email) {
        try {
            const user = await firstValueFrom(this.http.get(`${this.baseUrl}/users/${email}`));
            let userArray = [];
            if (Array.isArray(user) === false) {
                userArray.push(user);
            }
            ;
            const isRegistered = userArray.length > 0;
            return isRegistered;
        }
        catch (error) {
            console.log(error);
            throw new Error('Error verifying email:' + error);
        }
    }
    isLogged() {
        return localStorage.getItem('token') ? true : false;
    }
};
UsersService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], UsersService);
export { UsersService };
//# sourceMappingURL=users.service.js.map