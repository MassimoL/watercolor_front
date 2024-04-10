import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NavbarComponent } from "../../shared/navbar/navbar.component";
let MapComponent = class MapComponent {
};
MapComponent = __decorate([
    Component({
        selector: 'app-map',
        standalone: true,
        templateUrl: './map.component.html',
        styleUrl: './map.component.css',
        changeDetection: ChangeDetectionStrategy.OnPush,
        imports: [
            CommonModule,
            NavbarComponent
        ]
    })
], MapComponent);
export { MapComponent };
//# sourceMappingURL=map.component.js.map