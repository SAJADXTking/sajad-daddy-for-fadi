let projects = [
    {
        id: 1,
        name: "chungus",
        color: "#FFB886"
    }
];

const button = document.querySelector('.new-project');
const projectList = document.querySelector('.project-list');

button.addEventListener('click', () => {

    const projectName = prompt("Enter project name:");

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
});