import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
let ValidatorsService = class ValidatorsService {
    constructor() {
        this.emailPattern = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
    }
    isValidField(form, field) {
        return (form.controls[field].errors && (form.controls[field].touched));
    }
    getFieldError(form, field) {
        if (!form.controls[field])
            return null;
        const errors = form.controls[field].errors || {};
        for (const key of Object.keys(errors)) {
            if (key === 'required') {
                return 'This field is required';
            }
            else if (key === 'minlength') {
                return `This field must be ${errors['minlength'].requiredLength} caracters minimum`;
            }
            else if (key === 'pattern') {
                return 'Please, enter a valid email';
            }
        }
        return null;
    }
};
ValidatorsService = __decorate([
    Injectable({ providedIn: 'root' })
], ValidatorsService);
export { ValidatorsService };
//# sourceMappingURL=validators.service.js.map