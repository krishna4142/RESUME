let password=document.getElementById("txt");

let mca1=document.querySelector('.mca1');
let mca2=document.querySelector('.mca2');
let mca3=document.querySelector('.mca3');
let body=document.querySelector('.body');

let degree=document.querySelector('.d-marks');

let inter=document.querySelector('.I-marks');

let tenth=document.querySelector('.tenth')
function sai(){
    if(password.value=='MCA MARKS'){
        mca1.src='MCA1SEM.jpeg';
        mca2.src='MCA2NDSEM.jpeg';
        mca3.src='MCA3RDSEM.jpeg'
        body.classList.add('one');
    }
    else if(password.value=='DEGREE MARKS'){
        degree.src='degree.jpg'
        body.classList.add('two');
    }
    else if(password.value=='INTER MARKS'){
        inter.src='inter.jpg'
        body.classList.add('three');
    }
    else if(password.value=='MARKS-10'){
        tenth.src='tenth.jpg';
        body.classList.add('fore');
    }
    else{
        alert("enter currect detailes");
    }
 }
 
