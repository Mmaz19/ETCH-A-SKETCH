//al caricamento della pagina crea la  griglia

//create the div element
let container = document.querySelector('.grid-container');
let setGrid = document.querySelector('#changeGrid');
setGrid.addEventListener('click', function getInput(){
    let val = prompt('Insert a number lower then 100')
    val = parseInt(val);
    if (val > 100 || val < 0){
        prompt('Please insert a valid number between 0 and 100');
    }else{
        gridCreation(val);
    }
});
//grid-template-columns: repeat(16,1fr);
//grid-template-rows: repeat(16,1fr);


function gridCreation(val){
    //setTimeout( ()=> console.log('ho atteso'), 5000)
    while (container.lastChild) {
    container.removeChild(container.lastChild);}
    container.setAttribute("style", `grid-template-columns:repeat(${val},1fr);grid-template-rows:repeat(${val},1fr);`);
    container.style.gridTemplateRows = `repeat(${val},1fr)`;
    for (let i = 0; i<val*val; i++){
        let dv = document.createElement('div');
        container.appendChild(dv);
        dv.classList.add('grid-item');
    }
    
}

//random Bg color
function random() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  container.addEventListener('mouseover', function(e){
      e.target.style.backgroundColor = random();
  });
  gridCreation(16)