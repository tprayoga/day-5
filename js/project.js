let projects =[]
console.log( 'data',projects);

function addProject(event) {
    event.preventDefault()

    let name = document.getElementById('input-name').value

    let start = document.getElementById('input-start').value 
    let end = document.getElementById('input-end').value

    let description = document.getElementById('input-description').value

    let node = document.getElementById('input-node').checked
    let react = document.getElementById('input-react').checked
    let next = document.getElementById('input-next').checked
    let type = document.getElementById('input-type').checked

    let image = document.getElementById('input-image').files


    if(node){
        node=document.getElementById('input-node').value
    } else{
        node= ''
    }
    if(react){
        react=document.getElementById('input-react').value
    } else{
        react= ''
    }
    if(next){
        next=document.getElementById('input-next').value
    } else{
        next= ''
    }
    if(type){
        type=document.getElementById('input-type').value
    } else{
        type= ''
    }

    image = URL.createObjectURL(image[0])

    let project = {
        name: name,
        start: start,
        end: end,
        description: description,
        node: node,
        react: react,
        next: next,
        type: type,
        image: image,
    }

    projects.push(project)
    console.log(projects);

    renderProject()
}


function renderProject() {

    document.getElementById('project-list').innerHTML = ''
    
    for (let dataProject = 0; dataProject < projects.length; dataProject++) {
        document.getElementById('project-list').innerHTML +=
        `
        <div class="project-card">
        <div class="card-image">
            <img src=${projects[dataProject].image} alt="ggwwp">
        </div>
        <h4 class="project-name">
            <a href="detail-project.html">${projects[dataProject].name}</a>
        </h4>
        <p class="durasi">${projects[dataProject].duration}</p>
        <p class="description">${projects[dataProject].description}</p>
        <i class="${projects[dataProject].node}"></i>
        <i class="${projects[dataProject].react}"></i>
        <i class="${projects[dataProject].next}"></i>
        <i class="${projects[dataProject].type}"></i>
        <div class="div-button-project">
            <button class="btn-aksi">edit</button>
            <button class="btn-aksi">delete</button>
        </div>
    </div>
    `
    }
}