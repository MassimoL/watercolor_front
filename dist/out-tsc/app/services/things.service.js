import { __decorate } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, map, of } from 'rxjs';
let ThingsService = class ThingsService {
    constructor() {
        this.http = inject(HttpClient);
        this.baseUrl = 'http://localhost:3000';
    }
    getThing(thing_id) {
        return this.http.get(`${this.baseUrl}/things/${thing_id}`);
    }
    getAllThings() {
        return this.http.get(`${this.baseUrl}/things`);
    }
    delThing(thing_id) {
        return this.http.delete(`${this.baseUrl}/things/${thing_id}`).pipe(catchError((err) => of(false)), map((resp) => true));
    }
    addThing(fdThing) {
        return this.http.post(`${this.baseUrl}/things`, fdThing);
    }
};
ThingsService = __decorate([
    Injectable({
        providedIn: 'root',
    })
], ThingsService);
export { ThingsService };
//# sourceMappingURL=things.service.js.map