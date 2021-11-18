//Select the Elements
var currentList = [
    {
        "id": 1,
        "title" : "Ecommerce",
        "details" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl vel erat finibus condimentum. Sed a turpis ac massa luctus porta. Proin blandit, turpis interdum consequat dictum",
        "moredetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "id": 2,
        "title": "Products",
        "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl vel erat finibus condimentum. Sed a turpis ac massa luctus porta. Proin blandit, turpis interdum consequat dictum",
        "moredetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
        "id": 3,
        "title": "Brands",
        "details": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean dapibus nisl vel erat finibus condimentum. Sed a turpis ac massa luctus porta. Proin blandit, turpis interdum consequat dictum",
        "moredetails": "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
];

const mainbox = document.querySelector("#main-box");
const acc = document.getElementsByClassName("more");
let output = "";

currentList.forEach(function(item){
    output += `<div id="box" class="col-sm-4 box p-1">
                <h2>${item.title}</h2>
                <p>${item.details}</p>
                <button id="more" class="btn btn-danger more" id="1">Read More</button>
                <p style="display:none;" class ="second-text" id="1">${item.moredetails}</p>
               </div>`;
    mainbox.innerHTML = output;
});

for(let i =0; i<acc.length; i++) {
    acc[i].onclick = function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        }else {
            panel.style.display = 'block';
        }
    }
}


