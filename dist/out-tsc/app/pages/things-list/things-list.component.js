import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { RouterLink } from '@angular/router';
import { TitleCasePipe, UpperCasePipe } from '@angular/common';
let ThingsListComponent = class ThingsListComponent {
    constructor(thingsService) {
        this.thingsService = thingsService;
        this.things = [];
        this.baseUrl = 'http://localhost:3000/';
    }
    ngOnInit() {
        this.thingsService.getAllThings()
            .subscribe((things) => {
            this.things = things;
        }, (error) => {
            console.log("Could not retrieve things list");
        });
    }
};
ThingsListComponent = __decorate([
    Component({
        selector: 'app-things-list',
        standalone: true,
        templateUrl: './things-list.component.html',
        styleUrl: './things-list.component.css',
        imports: [NavbarComponent, RouterLink, UpperCasePipe, TitleCasePipe]
    })
], ThingsListComponent);
export { ThingsListComponent };
//# sourceMappingURL=things-list.component.js.map