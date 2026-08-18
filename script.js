//variables

let projects = [
    {
        id: 1,
        name: "chungus",
        color: "#FFB886"
    }
];

//const

const startButton = document.querySelector('#start-button');
const welcomeScreen = document.querySelector('.welcome-screen')
const projectForm = document.getElementById("project-form");
const newProjectButton = document.querySelector('.new-project');
const cancelButton = document.getElementById('cancel-button');
const projectNameInput = document.getElementById('project-name');
const projectColorInput = document.getElementById('project-color');
const colorPreview = document.getElementById('color-preview');
const projectList = document.querySelector('.project-list');

//                                               EVENT LISTENERS

//let's start button
startButton.addEventListener('click', () => {
    showProjectForm();
    welcomeScreen.classList.add('hide');
});

projectColorInput.addEventListener('input', patataColorPreview);

newProjectButton.addEventListener('click', () => {
    showProjectForm();
});

cancelButton.addEventListener('click', () => {
    hideProjectForm();
});

projectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const projectName = projectNameInput.value.trim();
    const projectColor = hueToHex(projectColorInput.value);
    createProject(projectName, projectColor);
    hideProjectForm();
    welcomeScreen.classList.add('hide');
});

//                                                   FUNCTIONS

//creating projects
    function createProject(projectName, projectColor) {
        if (!projectName) {
            return;
        }

        const newProject = {
            id: projects.length + 1,
            name: projectName,
            color: projectColor
        };

        projects.push(newProject);

        const projectElement = document.createElement('div');

        projectElement.classList.add('project');

        projectElement.style.setProperty(
            '--project-color',
            newProject.color
        );

        projectElement.innerHTML = `
        <span class="project-name">${newProject.name}</span>
    `;

        projectList.appendChild(projectElement);
    }


function showProjectForm() {
    projectForm.classList.add('show');
    projectNameInput.focus();
}

function hideProjectForm() {
    projectForm.classList.remove('show');
    projectNameInput.value = '';
}

function patataColorPreview(){
    const hue = projectColorInput.value;
    colorPreview.style.background = `hsl(${hue}, 100%, 50%)`;
}

function hueToHex(hue) {
    const s = 100, l = 50;
    const k = n => (n + hue / 30) % 12;
    const a = (s / 100) * Math.min(l / 100, 1 - l / 100);
    const f = n => (l / 100) - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
    const toHex = v => Math.round(v * 255).toString(16).padStart(2, '0');
    return `#${toHex(f(0))}${toHex(f(8))}${toHex(f(4))}`;
}