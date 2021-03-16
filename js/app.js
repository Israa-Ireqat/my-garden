'use strict'
//start with images array:
let imagesArray = ['alstroemerias.jpeg',''];
//bring elements by thier Id :
const myForm = document.getElementById('myForm');
const myTable = document.getElementById('myTable');
//make the constructor:
 let flowersArray = [];
function flowers(theName,theImage,theSeason) {
    this.theName = theName;
    this.theImage = theImage;
    this.theSeason = theSeason;
    flowersArray.push(this);
}
//prototype:
flowers.prototype.images = function () {
    //  for (let index = 0; index < imagesArray.length; index++) {
    //      this.theImage = imagesArray[index];
    //  }
    
    
}
//need to restore data and render the table:
restoreData();
fillTable();
//make the handeler:
function theHandeler(event) {
    event.preventDefault();

    let myName = event.target.theName.value;
    let myCategory = event.target.theCategory.value;
    let mySeason = event.target.theSeason.value;

    let newFlower = new flowers(myName,myCategory,mySeason);
     newFlower.images();

    //add to local storage:
    localStorage.setItem('flower',JSON.stringify(flowersArray));
    myTable.innerHTML = '';
    restoreData();
    fillTable();
}
//listener:
myForm.addEventListener('submit',theHandeler);
//restore function:
function restoreData() {
    let data = localStorage.getItem('flower');
    if (data) {
        let myData = JSON.parse(data);
        flowersArray = myData;
    }
    
}
// table function:
function fillTable() {
    
    const headerRow = document.createElement('tr');
    myTable.appendChild(headerRow);
    
    let th1 = document.createElement('th');
        headerRow.appendChild(th1);
        th1.textContent = 'Image';

        let th2 = document.createElement('th');
        headerRow.appendChild(th2);
        th2.textContent = 'Name';


        let th3 = document.createElement('th');
        headerRow.appendChild(th3);
        th3.textContent = 'Season';
        
    
    for (let index = 0; index < flowersArray.length; index++) {
        const tableRow = document.createElement('tr');
        myTable.appendChild(tableRow);

        let flowerImage = document.createElement('td');
        tableRow.appendChild(flowerImage);
        flowerImage.textContent = flowersArray[index].theImage;


        let flowerName = document.createElement('td');
        tableRow.appendChild(flowerName);
        flowerName.textContent = flowersArray[index].theName;


        let flowerSeason = document.createElement('td');
        tableRow.appendChild(flowerSeason);
        flowerSeason.textContent = flowersArray[index].theSeason;
    }
}