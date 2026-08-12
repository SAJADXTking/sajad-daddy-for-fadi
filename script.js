projects = [
    {id: 1, name: "chungus",color: "white"}
]; 
const button = document.querySelector('.new-project');
button.addEventListener('click',() => {const projectName = prompt("Enter project name:");});