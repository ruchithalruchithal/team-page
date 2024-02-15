let body =document.getElementsByTagName('body')[0];
body.style.backgroundColor = 'red';
console.log(body);


let yellow = document.getElementsByTagName("ul")[0];
yellow.style.backgroundColor = "yellow";
console.log(yellow);

let result = document.getElementById("list3");
result.style.backgroundColor = "black";
result.style.color= "white";
console.log(result);

let dom = document.querySelectorAll("th");
for(let i =0;i<dom.length;i++){
    dom[i].style.color = "green";
    console.log(dom) 
}

let nd = document.querySelector('#list2');
nd.style.backgroundColor = "pink";
console.log(nd);

/* give grey by to 2,4,6 the row without using any class name*/

let makechanges = document.querySelectorAll("tr");
for(let i=0; i<makechanges.length ; i++){
    if(i % 2 !==0){
        makechanges[i].style.color = "grey";
        console.log(makechanges);   
    }
    
}

/* get only reference of the element which contains specific ID .*/
let myId = document.querySelectorAll("#list2 , #list3");
console.log(myId);

/* using getelementsbytagname , give box shadow to second Ul ele*/

let box = document.getElementsByTagName("ul")[1];
box.style.border = '2px solid black';
console.log(box);

let boxName = document.getElementsByTagName("ul")[1];
boxName.style.boxShadow = '5px 5px 5px pink';
console.log(boxName);





