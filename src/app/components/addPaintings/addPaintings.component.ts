import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ValidatorsService } from '../../services/validators.service.js';
import { PaintingsService } from '../../services/paintings.service.js';
import { Paintings } from '../../interfaces/paintings.interface';

@Component({
  selector: 'app-addPaintings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule ],
  templateUrl: './addPaintings.component.html',
  styleUrl: './addPaintings.component.css',
})

export class AddPaintingComponent implements OnInit{

  public file: any;

  public paintingForm: FormGroup = new FormGroup({
    painting_title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    location: new FormControl('', [Validators.required, Validators.minLength(3)]),
    category: new FormControl('', Validators.required),
    img_name: new FormControl('', Validators.required)
  });


  activeModal= inject(NgbActiveModal);
  validatorsService= inject(ValidatorsService);
  paintingsService= inject(PaintingsService);

  ngOnInit(): void {
    this.paintingForm.reset();
    this.paintingForm.get('paintings_title')!.markAsUntouched;
    }


  isValidField(field: string): boolean | null {
    return this.validatorsService.isValidField(this.paintingForm, field);
  }

  getFieldError(field: string): string | null {
    if (!this.paintingForm.controls[field]) return null;
    const errors = this.paintingForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      if (key === 'required') {
        return 'This field is required';
      };
      if (key === 'minlength') {
        return `This field must have ${errors['minlength'].requiredLength} caracters minimum`;
      };
    }
    return null;
  }

  onImageLoad(event: any){
    this.file = event.target.files[0];
  }

  addPainting(): void {
    if (this.paintingForm.invalid) {
      this.paintingForm.markAllAsTouched();
      return;
    }

    let fd = new FormData();
    fd.append('image', this.file);
    fd.append('author', this.paintingForm.value.author);
    fd.append('name', this.paintingForm.value.name);
    fd.append('description', this.paintingForm.value.description);
    fd.append('year', this.paintingForm.value.year);

    this.paintingsService.addPainting(fd).subscribe({
      next: (response) => {
        alert(`${this.paintingForm.value.user_name} successfuly uploaded ${this.paintingForm.value.painting_title}`);
        this.activeModal.close();
        this.paintingForm.reset();
      },
      error: (error) => {
        console.error('Error:', error);
        alert('Error adding painting. Please try again.');
      }
    });
  };

  closeModal() {
    this.activeModal.close();
  };

}
