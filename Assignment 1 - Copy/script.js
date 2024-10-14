let slideIndex = 0;

const skills = [
  { name: 'HTML', icon: 'fab fa-html5' },
  { name: 'CSS', icon: 'fab fa-css3' },
  { name: 'Java', icon: 'fab fa-java' },
  { name: 'JavaScript', icon: 'fab fa-js' },
  { name: 'React', icon: 'fab fa-react' },
  { name: 'Git/Github', icon: 'fab fa-github-alt' },
  { name: 'MySQL', icon: 'fas fa-database' },
  { name: 'Python', icon: 'fab fa-python' }
];

const education = [
  {
    title: 'Education',
    details: 'B.Tech CSE - Sharda University (2021-2025)',
    icon: './assets/education.png'
  },
  {
    title: 'Experience',
    details: '6 Months Web Development - Telus International, Noida',
    icon: './assets/experience.png'
  }
];

const projects = [
  {
    title: 'BuyEase',
    description: 'Buyease is a user-friendly e-commerce platform.',
    img: './assets/project-1.jpg',
    githubLink: '#',
    liveDemoLink: '#'
  },
  {
    title: 'ChatBot',
    description: 'The JavaScript-based chatbot project.',
    img: './assets/project-2.jpg',
    githubLink: '#',
    liveDemoLink: '#'
  }
];

function populateSkills() {
  const skillsContainer = document.getElementById('skills-container');
  skills.forEach(skill => {
    const skillDiv = document.createElement('div');
    skillDiv.className = 'skill';
    skillDiv.innerHTML = `<i class="${skill.icon}"></i><h3>${skill.name}</h3>`;
    skillsContainer.appendChild(skillDiv);
  });
}

function populateEducation() {
  const educationContainer = document.getElementById('education-container');
  education.forEach(item => {
    const detailDiv = document.createElement('div');
    detailDiv.className = 'details-container';
    detailDiv.innerHTML = `
      <img src="${item.icon}" alt="${item.title} icon" class="icon" />
      <h3>${item.title}</h3>
      <p>${item.details}</p>
    `;
    educationContainer.appendChild(detailDiv);
  });
}

function populateProjects() {
  const projectsContainer = document.getElementById('projects-container');
  projects.forEach(project => {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'slide';
    projectDiv.innerHTML = `
      <div class="details-container color-container">
        <img src="${project.img}" alt="${project.title}" class="project-img" />
        <h2 class="experience-sub-title project-title">${project.title}</h2>
        <p>${project.description}</p>
        <div class="btn-container">
          <button class="btn btn-color-2 project-btn" onclick="window.open('${project.githubLink}')">Github</button>
          <button class="btn btn-color-2 project-btn" onclick="window.open('${project.liveDemoLink}')">Live Demo</button>
        </div>
      </div>
    `;
    projectsContainer.appendChild(projectDiv);
  });
}

function moveSlide(n) {
  const slides = document.querySelectorAll('.slide');
  slideIndex += n;

  if (slideIndex >= slides.length) {
    slideIndex = 0; // Go back to the first slide
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1; // Go to the last slide
  }

  document.querySelector('.slider-wrapper').style.transform = `translateX(-${slideIndex * 100}%)`;
}

// Call the populate functions when the document loads
document.addEventListener('DOMContentLoaded', () => {
  populateSkills();
  populateEducation();
  populateProjects();
});
document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(".dropdown-toggle");
  const navLinks = document.querySelector(".nav-links");

  dropdownToggle.addEventListener("click", function () {
    navLinks.classList.toggle("hidden"); // Toggle hidden class on click
  });
});

