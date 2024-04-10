import { __decorate } from "tslib";
import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
let VoteService = class VoteService {
    constructor() {
        this.http = inject(HttpClient);
        this.baseUrl = 'http://localhost:3000';
    }
    hasUserVoted(user_id, thing_id) {
        return this.http.get(`${this.baseUrl}/hasvoted?user_id=${user_id}&thing_id=${thing_id}`);
    }
    updateVotes(thing_id, value) {
        return this.http.post(`${this.baseUrl}/things/updatevotes`, { thing_id: thing_id, votevalue: value });
    }
    vote(user_id, thing_id) {
        return this.http.post(`${this.baseUrl}/vote`, { user_id, thing_id });
    }
};
VoteService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], VoteService);
export { VoteService };
//# sourceMappingURL=vote.service.js.map