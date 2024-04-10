import { __decorate } from "tslib";
import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ValidatorsService } from '../../services/validators.service.js';
import { ThingsService } from '../../services/things.service.js';
let AddThingComponent = class AddThingComponent {
    constructor() {
        this.thingForm = new FormGroup({
            thing_title: new FormControl('', [Validators.required, Validators.minLength(3)]),
            location: new FormControl('', [Validators.required, Validators.minLength(3)]),
            category: new FormControl('', Validators.required),
            img_name: new FormControl('', Validators.required)
        });
        this.activeModal = inject(NgbActiveModal);
        this.validatorsService = inject(ValidatorsService);
        this.thingsService = inject(ThingsService);
    }
    ngOnInit() {
        this.thingForm.reset();
        this.thingForm.get('thing_title').markAsUntouched;
    }
    isValidField(field) {
        return this.validatorsService.isValidField(this.thingForm, field);
    }
    getFieldError(field) {
        if (!this.thingForm.controls[field])
            return null;
        const errors = this.thingForm.controls[field].errors || {};
        for (const key of Object.keys(errors)) {
            if (key === 'required') {
                return 'This field is required';
            }
            ;
            if (key === 'minlength') {
                return `This field must have ${errors['minlength'].requiredLength} caracters minimum`;
            }
            ;
        }
        return null;
    }
    onImageLoad(event) {
        this.file = event.target.files[0];
    }
    addThing() {
        if (this.thingForm.invalid) {
            this.thingForm.markAllAsTouched();
            return;
        }
        let fd = new FormData();
        fd.append('image', this.file);
        fd.append('user_name', this.thingForm.value.user_name);
        fd.append('thing_title', this.thingForm.value.thing_title);
        fd.append('location', this.thingForm.value.location);
        fd.append('category', this.thingForm.value.category);
        this.thingsService.addThing(fd).subscribe({
            next: (response) => {
                alert(`${this.thingForm.value.user_name} successfuly uploaded ${this.thingForm.value.thing_title}`);
                this.activeModal.close();
                this.thingForm.reset();
            },
            error: (error) => {
                console.error('Error:', error);
                alert('Error adding thing. Please try again.');
            }
        });
    }
    ;
    closeModal() {
        this.activeModal.close();
    }
    ;
};
AddThingComponent = __decorate([
    Component({
        selector: 'app-addThing',
        standalone: true,
        imports: [CommonModule, ReactiveFormsModule],
        templateUrl: './addThing.component.html',
        styleUrl: './addThing.component.css',
    })
], AddThingComponent);
export { AddThingComponent };
//# sourceMappingURL=addThing.component.js.map