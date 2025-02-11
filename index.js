// https://api.unsplash.com/photos/random/?client_id=_DDIVJSgdK-GI1wA3aHOtxC9YTt8tCY6-4jMk7guznY&count=10
const APIKEY = "aTzJL0zwWdsju9-0z1wEbegZE-_FrLmvo1TrhTwEf_o";
const imageContainer = document.querySelector(".container");

function updateUI(data){
    data.forEach((eachObj) => {
        const link = document.createElement('a');
        let eachImageElement = document.createElement('img');
        link.appendChild(eachImageElement);
        eachImageElement.src = eachObj.urls.small;
        link.href = eachObj.links.html;
        link.target = "_blank";
        imageContainer.appendChild(link);
    });
}

async function fetchImages(){
    const response = await fetch(`https://api.unsplash.com/photos/random/?client_id=${APIKEY}&count=10`);
    const data = await response.json();
    console.log(data);
    updateUI(data);
}

fetchImages();
let timer;
document.addEventListener('scroll',()=>{
    if(timer) clearTimeout(timer);
    timer = setTimeout(()=>{
        if(window.innerHeight+window.scrollY>=document.body.offsetHeight-10) fetchImages();
    },300)
})
// console.log("inner height",window.innerHeight);
// console.log("scrollY",window.scrollY);
// console.log("offset Height",document.body.offsetHeight);


