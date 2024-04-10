import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { ThingsService } from '../../services/things.service';
import { VoteService } from '../../services/vote.service';
import { UsersService } from '../../services/users.service';
let ThingPageComponent = class ThingPageComponent {
    constructor() {
        this.baseUrl = 'http://localhost:3000/';
        this.route = inject(ActivatedRoute);
        this.thingsService = inject(ThingsService);
        this.router = inject(Router);
        this.voteService = inject(VoteService);
        this.usersService = inject(UsersService);
    }
    ngOnInit() {
        this.currentUser = this.usersService.currentUser();
        console.log('thing-page-comp, ngOnInit, currentUser:', this.currentUser);
        this.route.params.subscribe((params) => {
            this.id = params?.['thing_id'];
            this.thingsService.getThing(this.id).subscribe((thing) => {
                this.currentThing = thing;
            });
        });
        this.isLogged = this.usersService.isLogged();
    }
    goBack() {
        this.router.navigate(['things']);
    }
    userVote(user_id, thing_id, value) {
        this.voteService
            .hasUserVoted(this.currentUser.user_id, this.currentThing.thing_id)
            .subscribe((resp) => {
            this.hasVoted = resp.hasVoted;
            console.log('userVote hasVoted:', this.hasVoted);
            if (this.hasVoted) {
                alert('you have already voted this Thing');
                return;
            }
            this.voteService.vote(user_id, thing_id).subscribe((resp) => console.log('user voted:', resp), (error) => {
                console.error('Error registering vote:', error);
                alert(error);
            });
            this.voteService.updateVotes(thing_id, value).subscribe(() => {
                this.thingsService.getThing(this.id).subscribe((thing) => {
                    this.currentThing = thing;
                    alert('Thank you for voting!');
                });
            });
        });
    }
    comment() {
    }
};
ThingPageComponent = __decorate([
    Component({
        selector: 'app-thing-page',
        standalone: true,
        imports: [CommonModule, NavbarComponent],
        templateUrl: './thing-page.component.html',
        styleUrl: './thing-page.component.css',
    })
], ThingPageComponent);
export { ThingPageComponent };
//# sourceMappingURL=thing-page.component.js.map