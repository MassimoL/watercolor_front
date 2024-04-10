import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddThingComponent } from '../../components/addThing/addThing.component';
import { UsersService } from '../../services/users.service';
import { RegisterComponent } from '../../components/register/register.component';
import { LoginComponent } from '../../components/login/login.component';
let NavbarComponent = class NavbarComponent {
    constructor() {
        this.router = inject(Router);
        this.usersService = inject(UsersService);
        this.modalService = inject(NgbModal);
    }
    addThing() {
        const modalRef = this.modalService.open(AddThingComponent);
    }
    open(event) {
        const id = event.target.id;
        if (id === 'register') {
            const modalRef = this.modalService.open(RegisterComponent);
        }
        else if (id === 'login') {
            const modalRef = this.modalService.open(LoginComponent);
        }
        else
            return;
    }
    logout() {
        localStorage.removeItem('token');
        this.usersService.currentUser.set({
            user_id: 0,
            user_name: '',
            email: '',
            password: '',
            accessToken: ''
        });
        this.router.navigate(['/home']);
    }
};
NavbarComponent = __decorate([
    Component({
        selector: 'app-navbar',
        standalone: true,
        imports: [CommonModule, RouterModule],
        templateUrl: './navbar.component.html',
        styleUrl: './navbar.component.css'
    })
], NavbarComponent);
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map