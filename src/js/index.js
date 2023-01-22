console.log('Show the document', document);
console.log(document.querySelector(".trailer-btn"));
const trailerBtn  = document.querySelector(".trailer-btn");
trailerBtn.addEventListener("click", () => { 
    modal.classList.add("opened")
});
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");
closeModal.addEventListener("click", () => {modal.classList.remove("opened");
video.setAttribute("src", "")
})

const video = document.getElementById("video");