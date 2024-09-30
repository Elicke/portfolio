document.addEventListener('DOMContentLoaded', function() {
    const homeIcon = document.getElementById('home-icon');
    
    homeIcon.addEventListener('click', function(e) {
        e.preventDefault();
        
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    fetchProjects();
});

function fetchProjects() {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const projectsContainer = document.getElementById('projects-container');
            data.projects.forEach(project => {
                const projectElement = createProjectElement(project);
                projectsContainer.appendChild(projectElement);
            });
        })
        .catch(error => console.error('Error fetching projects:', error));
}

function createProjectElement(project) {
    const projectDiv = document.createElement('div');
    projectDiv.className = 'project';

    const link = document.createElement('a');
    link.href = project.link;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';

    const img = document.createElement('img');
    img.src = project.thumbnail;
    img.alt = project.name;
    img.className = 'project-thumbnail';

    const name = document.createElement('p');
    name.textContent = project.name;
    name.className = 'project-name';

    link.appendChild(img);
    link.appendChild(name);
    projectDiv.appendChild(link);

    return projectDiv;
}