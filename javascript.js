const picturesArray = [
    "pictures/human1.jpg", 
    "pictures/human2.jpg",
    "pictures/human3.jpg",
    "pictures/human4.jpg",
    "pictures/human5.jpg",
    "pictures/human6.jpg",
    "pictures/human7.jpg",
    "pictures/human8.jpg",
    "pictures/human9.jpg",
    "pictures/human10.jpg", 
    "pictures/human11.jpg",
    "pictures/human12.jpg",
    "pictures/human13.jpg", 
    "pictures/human14.jpg", 
    "pictures/human15.jpg", 
    "pictures/human16.jpg",
    "pictures/human17.jpg", 
    "pictures/human18.jpg",
    "pictures/human19.jpg",
    "pictures/human20.jpg", 
    "pictures/human21.jpg",
    "pictures/human22.jpg"
]; 

const container = document.querySelector("div.container")
container.addEventListener("click", function(evt) {
    let picture = evt.target; 
    let random = Math.floor((Math.random() * picturesArray.length)); 
    picture.setAttribute("src", picturesArray[random]); 
})