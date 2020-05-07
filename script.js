console.log(document.location);
console.log(document.doctype);
console.log("Document dingen doen");
function myFunction() {
    var text = document.querySelector("#text").innerText = "All the elements";
    document.getElementById("box").classList.add("classbox")
    const boxes = document.querySelectorAll(".classbox");
    console.log(boxes);
    boxes.forEach((e) => {
        e.style.color = 'blue';
        e.style.font = 'calibri';
    })
}   
