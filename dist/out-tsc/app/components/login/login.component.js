import { __decorate } from "tslib";
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsersService } from '../../services/users.service';
import { ValidatorsService } from '../../services/validators.service';
import { Router } from '@angular/router';
import { RegisterComponent } from '../register/register.component';
let LoginComponent = class LoginComponent {
    constructor() {
        this.activeModal = inject(NgbActiveModal);
        this.usersService = inject(UsersService);
        this.customValidators = inject(ValidatorsService);
        this.router = inject(Router);
        this.modalService = inject(NgbModal);
        this.userForm = new FormGroup({
            email: new FormControl('', [Validators.required, Validators.pattern(this.customValidators.emailPattern)]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)]),
        });
    }
    isValidField(field) {
        return this.customValidators.isValidField(this.userForm, field);
    }
    getFieldError(form, field) {
        return this.customValidators.getFieldError(this.userForm, field);
    }
    async onSubmit() {
        try {
            if (this.userForm.invalid) {
                return;
            }
            const response = await this.usersService.login(this.userForm.value);
            if (!response.error) {
                localStorage.setItem('token', response.token);
                this.usersService.currentUser.set(response.results[0]);
                this.userForm.reset();
                alert("User logged in successfuly");
                this.activeModal.close();
                this.router.navigate(['/home']);
            }
        }
        catch (error) {
            console.log(error);
            alert("Incorrect email or password");
            this.userForm.reset();
            this.activeModal.close();
        }
    }
    cancel() {
        this.activeModal.close();
    }
    register(event) {
        event.preventDefault();
        this.activeModal.close();
        this.modalService.open(RegisterComponent);
    }
};
LoginComponent = __decorate([
    Component({
        selector: 'app-login',
        standalone: true,
        imports: [
            CommonModule, ReactiveFormsModule
        ],
        templateUrl: './login.component.html',
        styleUrl: './login.component.css',
        changeDetection: ChangeDetectionStrategy.OnPush,
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map