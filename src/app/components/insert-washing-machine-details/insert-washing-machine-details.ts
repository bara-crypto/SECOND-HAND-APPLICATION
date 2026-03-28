import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-insert-washing-machine-details',
  imports: [ReactiveFormsModule],
  templateUrl: './insert-washing-machine-details.html',
  styleUrl: './insert-washing-machine-details.css',
})
export class InsertWashingMachineDetails
{
  
  public applianceForm: FormGroup;
  public selectedFile: File | null = null;


  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.applianceForm = this.fb.group({
      name: ['', Validators.required],
      capacity: ['', [Validators.required, Validators.min(1)]],
      load: ['', Validators.required],
      spin: ['', Validators.required],
      notes: ['', Validators.required],
      digital: [false],
      child: [false],
      auto: [false],
      eco: [false],
      timer: [false],
      image: [null, Validators.required]
    });
  }



  // Handle file upload
  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file && file.type.startsWith('image/')) {
      this.selectedFile = file;
      this.applianceForm.patchValue({ image: file });
    } else {
      alert('Only image files are allowed!');
      event.target.value = null;
    }
  }

  // Submit form
  /*
  onSubmit() {
    if (this.applianceForm.invalid || !this.selectedFile) {
      alert('Please fill all required fields and upload a valid image.');
      return;
    }

    const formData = new FormData();
    formData.append('name', this.applianceForm.get('name')?.value);
    formData.append('capacity', this.applianceForm.get('capacity')?.value);
    formData.append('load', this.applianceForm.get('load')?.value);
    formData.append('spin', this.applianceForm.get('spin')?.value);
    formData.append('notes', this.applianceForm.get('notes')?.value);

    // Append each checkbox as root-level boolean
    formData.append('digital', this.applianceForm.get('digital')?.value);
    formData.append('child', this.applianceForm.get('child')?.value);
    formData.append('auto', this.applianceForm.get('auto')?.value);
    formData.append('eco', this.applianceForm.get('eco')?.value);
    formData.append('timer', this.applianceForm.get('timer')?.value);

    formData.append('image', this.selectedFile);

    this.http.post('http://localhost:3000/api/appliance/add', formData)
      .subscribe({
        next: (res) => {
          alert('Appliance added successfully!');
          this.applianceForm.reset();
          this.selectedFile = null;
        },
        error: (err) => {
          console.error(err);
          alert('Error while adding appliance.');
        }
      });
  }*/
  // Submit form
onSubmit() {
  if (this.applianceForm.invalid || !this.selectedFile) {
    alert('Please fill all required fields and upload a valid image.');
    return;
  }

  const formData = new FormData();
  formData.append('name', this.applianceForm.get('name')?.value);

  // Convert to numbers before appending
  formData.append('capacity', String(Number(this.applianceForm.get('capacity')?.value)));
  formData.append('load', String(Number(this.applianceForm.get('load')?.value)));
  formData.append('spin', String(Number(this.applianceForm.get('spin')?.value)));

  formData.append('notes', this.applianceForm.get('notes')?.value);

  // Append each checkbox as root-level boolean
  formData.append('digital', String(this.applianceForm.get('digital')?.value));
  formData.append('child', String(this.applianceForm.get('child')?.value));
  formData.append('auto', String(this.applianceForm.get('auto')?.value));
  formData.append('eco', String(this.applianceForm.get('eco')?.value));
  formData.append('timer', String(this.applianceForm.get('timer')?.value));

  formData.append('image', this.selectedFile);

  this.http.post('http://localhost:3000/api/appliance/add', formData)
    .subscribe({
      next: (res) => {
        alert('Appliance added successfully!');
        this.applianceForm.reset();
        this.selectedFile = null;
      },
      error: (err) => {
        console.error(err);
        alert('Error while adding appliance.');
      }
    });
}


  onClear() {
    this.applianceForm.reset();
    this.selectedFile = null;
  }
}
