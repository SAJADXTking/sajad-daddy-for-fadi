let projects = [
    {
        id: 1,
        name: "chungus",
        color: "#FFB886"
    }
];

const startButton = document.querySelector('#start-button');
const welcomeScreen = document.querySelector('.welcome-screen')

const projectForm = document.getElementById("project-form");
const newProjectButton = document.querySelector('.new-project');
const cancelButton = document.getElementById('cancel-button');
const projectNameInput = document.getElementById('project-name');
const projectList = document.querySelector('.project-list');

//let's start button
startButton.addEventListener('click', () => {
    showProjectForm();
    welcomeScreen.classList.add('hide');
});

//creating projects
    function createProject(projectName) {
        if (!projectName) {
            return;
        }

        const newProject = {
            id: projects.length + 1,
            name: projectName,
            color: "#FFB886"
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

newProjectButton.addEventListener('click', () => {
    showProjectForm();
});

cancelButton.addEventListener('click', () => {
    hideProjectForm();
});

projectForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const projectName = projectNameInput.value.trim();
    createProject(projectName);
    hideProjectForm();
    welcomeScreen.classList.add('hide');
});