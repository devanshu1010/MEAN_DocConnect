import { Component, OnInit } from '@angular/core';
import { NavbarService } from 'src/app/navbar.service';

@Component({
  selector: 'app-home-patient',
  templateUrl: './home-patient.component.html',
  styleUrls: ['./home-patient.component.css']
})
export class HomePatientComponent implements OnInit {
  
  constructor(private navbarService: NavbarService) {}
  
  ngOnInit() :void {
    
    this.navbarService.showNavbar();
  }

  doctorsData:any = [{
      name: "Dr. Smith",
      specialty: "Cardiologist",
      image: "p1.jpeg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      social: {
          facebook: "#",
          twitter: "#",
          linkedin: "#"
      }
  },
  {
      name: "Dr. Smith",
      specialty: "Cardiologist",
      image: "p1.jpeg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      social: {
          facebook: "#",
          twitter: "#",
          linkedin: "#"
      }
  },
  {
      name: "Dr. Smith",
      specialty: "Cardiologist",
      image: "p1.jpeg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      social: {
          facebook: "#",
          twitter: "#",
          linkedin: "#"
      }
  },
  {
      name: "Dr. Smith",
      specialty: "Cardiologist",
      image: "p1.jpeg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      social: {
          facebook: "#",
          twitter: "#",
          linkedin: "#"
      }
  },
  {
      name: "Dr. Smith",
      specialty: "Cardiologist",
      image: "p1.jpeg",
      bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
      social: {
          facebook: "#",
          twitter: "#",
          linkedin: "#"
      }
  },
  // Add more doctor profiles here...
  ];

  displayProfiles() :void  {

  const profilesContainer = document.getElementById("profiles-container");


    this.doctorsData.forEach((doctor: { image: string; name: string | null; specialty: string | null; bio: string | null; }) => {
      const profileCard = document.createElement("div");
      profileCard.classList.add("profile-card");


      const profileImage = document.createElement("img");
      profileImage.src = doctor.image;

      const profileDetails = document.createElement("div");
      profileDetails.classList.add("profile-details");


      const profileName = document.createElement("h2");
      profileName.classList.add("profile-name");
      profileName.textContent = doctor.name;


      const profileSpecialty = document.createElement("p");
      profileSpecialty.classList.add("profile-specialty");
      profileSpecialty.textContent = doctor.specialty;


      const profileBio = document.createElement("p");
      profileBio.classList.add("profile-bio");
      profileBio.textContent = doctor.bio;


      const profileIcons = document.createElement("div");
      profileIcons.classList.add("profile-icons");



      profileDetails.appendChild(profileName);
      profileDetails.appendChild(profileSpecialty);
      profileDetails.appendChild(profileBio);
      profileDetails.appendChild(profileIcons);


      profileCard.appendChild(profileImage);
      profileCard.appendChild(profileDetails);


      profilesContainer?.appendChild(profileCard);
  });


  }  
  
}
