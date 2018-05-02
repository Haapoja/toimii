var cells = [];



function setup(){
  var canvas =  createCanvas(windowWidth, windowHeight);
    cells.push(new Cell());  //solujen määrä //
    cells.push(new Cell());
    cells.push(new Cell());
    cells.push(new Cell());
    canvas.parent('mito-hold');  //solujen pidike //
    button = createButton('reset');
    button.position(30,20);
    button.mousePressed(resetSketch);
    
}

function resetSketch(){
	for(x = 0; x < 2000; x++){ // Tekee alla olevan komennon 2000 kertaa
	cells.pop(); // Puhdistaa viimeisen piirroksen
	}
	cells.push(new Cell()); // Tekee osan setupista uudestaan
	cells.push(new Cell());
    cells.push(new Cell());
    cells.push(new Cell());// Ei kuitenkaan kaikkea, kuten esim. nappia
	}

function draw (){
    background(0);
    clear();
    for (var i = 0; i < cells.length; i++){
    cells[i].move();
    cells[i].show();
}
}


function mousePressed(){
        for (var i = cells.length-1; i >=0; i--){
   if (cells[i].clicked(mouseX, mouseY)){
    
       cells.push(cells[i].mitosis());  // jakaantumisen määrä //
       cells.push(cells[i].mitosis());
       
       cells.splice(i, 1);
       // console.log("clicked");
   }
}
        }

