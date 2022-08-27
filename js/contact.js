let grid_container = document.querySelector('.grid_container');
generateGrid();
window.addEventListener('resize', () => {
    //on resizing window re-calculate the grids
    generateGrid();
});

function generateGrid(){
    //generating hexagonal grid
    let m = Math.floor(grid_container.clientWidth / 128);
    let n = Math.floor(grid_container.clientHeight / 68);
    for (let i = 0; i < m; i++) {
        let temp = document.createElement('div');
        temp.style.position = "relative";
        for (let j = 0; j < n; j++) {
            let hexagon = document.createElement('span');
            hexagon.classList.add("hexagon");
            //update left 
            if (i % 2 == 0) {
                hexagon.style.left = `${200 * j - 96}px`;
            }
            else {
                hexagon.style.left = `${(200 * j + 4)}px`;
            }
            //push all hexagon inside a row
            temp.appendChild(hexagon);
        }
        //update top
        temp.style.top = `${67 * i}px`;
        //push a row inside grid_container
        grid_container.appendChild(temp);
    }
}

//moving light with cursor
let light = document.querySelector('.gradient_light');
console.log(light);
grid_container.addEventListener('mousemove', (event) => {
    light.style.left = `${event.clientX - light.clientWidth / 2}px`;
    light.style.top = `${event.clientY - light.clientHeight / 2}px`;
    light.style.opacity = 1;
    light.style.transition = "opacity 0.5s ease";
});
grid_container.addEventListener('mouseleave', () => {
    light.style.opacity = 0;
});