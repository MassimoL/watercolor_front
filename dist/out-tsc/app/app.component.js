import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./shared/navbar/navbar.component";
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'things_front';
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        standalone: true,
        templateUrl: './app.component.html',
        styleUrl: './app.component.css',
        imports: [CommonModule, RouterOutlet, NavbarComponent, RouterLink, RouterLinkActive]
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map