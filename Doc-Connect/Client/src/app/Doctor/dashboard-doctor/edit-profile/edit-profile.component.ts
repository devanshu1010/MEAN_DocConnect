import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Doctor } from 'src/app/models/doctor';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  @Input() doctor: Doctor | undefined;
  @Output() saveChanges = new EventEmitter<Doctor>();
  @Output() closeModal = new EventEmitter<void>();

  submitForm() {
    // Emit the updated doctor object to save changes
    this.saveChanges.emit(this.doctor);
    this.closeModal.emit();
    
  }

  genders = [
    { label: 'Select Your Gender', value: '0'},
    { label: 'Male', value: 'Male'},
    { label: 'Female', value: 'Female'},
  ];

  doctorCategories = [
    { label: 'Select Category', value: '0' },
    { label: 'xyz', value: 'Cardiologist' },
    { label: 'Dermatologist', value: 'Dermatologist' },
    { label: 'Orthopedic Surgeon', value: 'Orthopedic Surgeon' },
    { label: 'Pediatrician', value: 'Pediatrician' },
    { label: 'Pediatrician', value: 'Pediatrician' },
    { label: 'Pediatrician', value: 'Pediatrician' },
    { label: 'Pediatrician', value: 'Pediatrician' },
    // Add more categories as needed
  ];

  doctorSpeciality = [
    { label: 'Select Specialist', value: '0' },
    { label: 'xyz', value: 'Cardiologist' },
    { label: 'Dermatologist', value: 'Dermatologist' },
    { label: 'Orthopedic Surgeon', value: 'Orthopedic Surgeon' },
    { label: 'Pediatrician', value: 'Pediatrician' },
    { label: 'Pediatrician', value: 'Pediatrician' },
    { label: 'Pediatrician', value: 'Pediatrician' },
    { label: 'Pediatrician', value: 'Pediatrician' },
  ];

  slotTiming = [
    { label : '30 minute', value : 30 },
    { label : '60 minute', value : 60 }
  ]

  selectedGender:string = '';
  selectedCategory:string = '';
  selectedSpeciality:string = '';
  selectedSlotlen:number = 0;

  async loadFile(event: any) {
    const input = event.target;
    if (input.files && input.files[0]) {
      // const reader = new FileReader();
      // reader.onload = () => {
      //   this.doctor?.Profile_photo = reader.result;
      // };
      // reader.readAsDataURL(input.files[0]);
    }
  }

  async ngOnInit(): Promise<void> {

    console.log(this.doctor);
  }

}
