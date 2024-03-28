import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Patient } from 'src/app/models/patient';

@Component({
  selector: 'app-edit-patient',
  templateUrl: './edit-patient.component.html',
  styleUrls: ['./edit-patient.component.css']
})
export class EditPatientComponent implements OnInit {
  @Input() patient: Patient | undefined;
  @Output() saveChanges = new EventEmitter<Patient>();
  @Output() closeModal = new EventEmitter<void>();

  submitForm() {
    // Emit the updated doctor object to save changes
    this.saveChanges.emit(this.patient);
    this.closeModal.emit();
    
  }

  genders = [
    { label: 'Select Your Gender', value: '0'},
    { label: 'Male', value: 'Male'},
    { label: 'Female', value: 'Female'},
  ];

  async loadFile(event: any) {
    const input = event.target;
    if (input.files && input.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        // this.patient?.Profile_picture = reader.result;
      };
      reader.readAsDataURL(input.files[0]);
    }
  }

  async ngOnInit(): Promise<void> {

    console.log(this.patient);
  }
}


