let projects = [
    {
        id: 1,
        name: "chungus",
        color: "#FFB886"
    }
];

const startButton = document.querySelector('#start-button');
const welcomeScreen = document.querySelector('.welcome-screen')

const button = document.querySelector('.new-project');
const projectList = document.querySelector('.project-list');

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
//start button
startButton.addEventListener('click', () => {
    const projectName = prompt("Enter project name:");
    createProject(projectName)
    welcomeScreen.classList.add('hide');
});
//+new project
button.addEventListener('click', () => {
    const projectName = prompt("Enter project name:");
    createProject(projectName);
});