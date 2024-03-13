import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { Flight } from '../model/flight';
import { CommonModule } from '@angular/common';
import { validateCity, validateCityWithParams } from '../shared/validation/city-validator';

@Component({
  selector: 'app-flight-edit-reactive',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatDialogModule
  ],
  templateUrl: './flight-edit-reactive.component.html',
  styleUrl: './flight-edit-reactive.component.scss'
})
export class FlightEditReactiveComponent {
  private fb = inject(FormBuilder);
  private dialogRef = inject(MatDialogRef);
  private data = inject<{ flight: Flight }>(MAT_DIALOG_DATA);

  protected flight = this.data.flight;

  editForm = this.fb.nonNullable.group({
    id: [0],
    from: ['', [
      Validators.required,
      Validators.minLength(3),
      validateCity
    ]],
    to: ['', [
      Validators.required,
      Validators.minLength(3),
      validateCityWithParams([
        'Graz', 'Hamburg', 'Madrid'
      ])
    ]],
    date: [new Date().toISOString()],
    delayed: [false],
  });

  constructor() {
    this.editForm.patchValue(this.flight);
  }

  protected save(): void {
    console.log('value', this.editForm.value);
    console.log('valid', this.editForm.valid);
    console.log('dirty', this.editForm.dirty);
    console.log('touched', this.editForm.touched);
  }

  protected close(): void {
    this.dialogRef.close();
  }
}
