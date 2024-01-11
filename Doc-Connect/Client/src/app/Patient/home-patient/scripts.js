// const doctorsData = [{
//     name: "Dr. Smith",
//     specialty: "Cardiologist",
//     image: "p1.jpeg",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
//     social: {
//         facebook: "#",
//         twitter: "#",
//         linkedin: "#"
//     }
// },
// {
//     name: "Dr. Smith",
//     specialty: "Cardiologist",
//     image: "p1.jpeg",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
//     social: {
//         facebook: "#",
//         twitter: "#",
//         linkedin: "#"
//     }
// },
// {
//     name: "Dr. Smith",
//     specialty: "Cardiologist",
//     image: "p1.jpeg",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
//     social: {
//         facebook: "#",
//         twitter: "#",
//         linkedin: "#"
//     }
// },
// {
//     name: "Dr. Smith",
//     specialty: "Cardiologist",
//     image: "p1.jpeg",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
//     social: {
//         facebook: "#",
//         twitter: "#",
//         linkedin: "#"
//     }
// },
// {
//     name: "Dr. Smith",
//     specialty: "Cardiologist",
//     image: "p1.jpeg",
//     bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quam velit, vulputate eu pharetra nec, mattis ac neque.",
//     social: {
//         facebook: "#",
//         twitter: "#",
//         linkedin: "#"
//     }
// },
// // Add more doctor profiles here...
// ];

// function displayProfiles() {

// const profilesContainer = document.getElementById("profiles-container");


// doctorsData.forEach(doctor => {
//     const profileCard = document.createElement("div");
//     profileCard.classList.add("profile-card");


//     const profileImage = document.createElement("img");
//     profileImage.src = doctor.image;
//     profileImage.alt = doctor.name;


//     const profileDetails = document.createElement("div");
//     profileDetails.classList.add("profile-details");


//     const profileName = document.createElement("h2");
//     profileName.classList.add("profile-name");
//     profileName.textContent = doctor.name;


//     const profileSpecialty = document.createElement("p");
//     profileSpecialty.classList.add("profile-specialty");
//     profileSpecialty.textContent = doctor.specialty;


//     const profileBio = document.createElement("p");
//     profileBio.classList.add("profile-bio");
//     profileBio.textContent = doctor.bio;


//     const profileIcons = document.createElement("div");
//     profileIcons.classList.add("profile-icons");


//     const socialIcons = ["facebook", "twitter", "linkedin"];
//     socialIcons.forEach(icon => {
//         const socialIcon = document.createElement("i");
//         socialIcon.classList.add(`fab`, `fa-${icon}`);
//         socialIcon.setAttribute("aria-hidden", "true");
//         socialIcon.addEventListener("click", () => window.open(doctor.social[icon], "_blank"));
//         profileIcons.appendChild(socialIcon);
//     });


//     profileDetails.appendChild(profileName);
//     profileDetails.appendChild(profileSpecialty);
//     profileDetails.appendChild(profileBio);
//     profileDetails.appendChild(profileIcons);


//     profileCard.appendChild(profileImage);
//     profileCard.appendChild(profileDetails);


//     profilesContainer.appendChild(profileCard);
// });


// Initialize Slick slider after adding profiles
$('.profiles-container').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<div class="custom-prev-arrow"><i class="fas fa-chevron-left"></i></div>',
    nextArrow: '<div class="custom-next-arrow"><i class="fas fa-chevron-right"></i></div>',
    responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});



window.onload = displayProfiles;
