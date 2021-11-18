let myIndex = 0;
const x = document.getElementsByClassName("slideshow");
let i;


function carousel() {
    for (i =0; i < x.length;i++) {
        x[i].style.display = 'none';
    } 
    myIndex++;
    if(myIndex > x.length) {myIndex = 1};
    x[myIndex-1].style.display = "block";
    setTimeout(carousel, 3000);
}

carousel();