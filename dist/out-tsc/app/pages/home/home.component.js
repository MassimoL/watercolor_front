import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
import { HttpClientModule } from '@angular/common/http';
let HomeComponent = class HomeComponent {
};
HomeComponent = __decorate([
    Component({
        selector: 'app-home',
        standalone: true,
        templateUrl: './home.component.html',
        styleUrl: './home.component.css',
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [
            CommonModule,
            NavbarComponent,
            HttpClientModule
        ]
    })
], HomeComponent);
export { HomeComponent };
//# sourceMappingURL=home.component.js.map