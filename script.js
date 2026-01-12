const form = document.getElementById("orderForm");
const popup = document.getElementById("successPopup");

if (form) {
    form.addEventListener("submit", e => {
        e.preventDefault();

        const summary =
            `J³ PRINT & PRESS ORDER

Name: ${custName.value}
Contact: ${contact.value}
Location: ${loc.value}
Order Type: ${orderType.value}
Details: ${notes.value}

Please contact us for confirmation.`;

        summaryText.value = summary;
        summaryBox.style.display = "block";
        popup.style.display = "flex";
    });
}

function closePopup() {
    popup.style.display = "none";
}

function copyOrder() {
    summaryText.select();
    document.execCommand("copy");
    alert("Order copied! Paste it to Messenger or Email.");
}

let currentIndex = 0;
let currentImages = [];

/* IMAGE SETS */
const galleries = {
    xia: [
        "./Xia's 7th Bday/1.jpg", "./Xia's 7th Bday/2.jpg", "./Xia's 7th Bday/3.jpg", "./Xia's 7th Bday/4.jpg", "./Xia's 7th Bday/5.jpg",
        "./Xia's 7th Bday/6.jpg", "./Xia's 7th Bday/7.jpg", "./Xia's 7th Bday/8.jpg", "./Xia's 7th Bday/9.jpg", "./Xia's 7th Bday/10.jpg"
    ],
    wedding: [
        "./Mikko & Khariza's Wedding/1.jpg", "./Mikko & Khariza's Wedding/2.jpg", "./Mikko & Khariza's Wedding/3.jpg",
        "./Mikko & Khariza's Wedding/4.jpg", "./Mikko & Khariza's Wedding/5.jpg", "./Mikko & Khariza's Wedding/6.jpg",
        "./Mikko & Khariza's Wedding/7.jpg", "./Mikko & Khariza's Wedding/8.jpg", "./Mikko & Khariza's Wedding/9.jpg",
        "./Mikko & Khariza's Wedding/10.jpg"
    ],
    ila: [
        "./Ila's 7th Birthday!/1.jpg", "./Ila's 7th Birthday!/2.jpg", "./Ila's 7th Birthday!/3.jpg", "./Ila's 7th Birthday!/4.jpg",
        "./Ila's 7th Birthday!/5.jpg", "./Ila's 7th Birthday!/6.jpg", "./Ila's 7th Birthday!/7.jpg",
        "./Ila's 7th Birthday!/8.jpg", "./Ila's 7th Birthday!/9.jpg", "./Ila's 7th Birthday!/10.jpg"
    ]
};

/* OPEN EVENT */
function openEvent(eventName) {
    currentImages = galleries[eventName];
    currentIndex = 0;
    document.getElementById("lightbox").style.display = "flex";
    updateImage();
}

function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

function nextImage() {
    currentIndex = (currentIndex + 1) % currentImages.length;
    updateImage();
}

function prevImage() {
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    updateImage();
}

function updateImage() {
    document.getElementById("lightbox-img").src = currentImages[currentIndex];
}

/* KEYBOARD SUPPORT */
document.addEventListener("keydown", e => {
    if (document.getElementById("lightbox").style.display === "flex") {
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "Escape") closeLightbox();
    }
});
