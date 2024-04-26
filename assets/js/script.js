const generateBtn = document.querySelector(".generate");
const downloadBtn = document.querySelector(".download");
const input = document.querySelector(".title input");
const image = document.querySelector(".image");
const container = document.querySelector(".container");
const toast = document.querySelector(".tost-notification");

generateBtn.addEventListener("click", () => {
  if (input.value === "") {
    container.classList.add("error");
    toast.style.display = "flex";
    image.innerHTML = "";
  } else {
    toast.style.display = "none";
    container.classList.remove("error");
    const qrCodeImageURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      input.value
    )}`;

    // Display QR code image
    image.innerHTML = `<div class="img">
      <img src="${qrCodeImageURL}" alt="QR Code" />
    </div>`;
    input.value = "";
  }
});

setInterval(() => {
  container.classList.remove("error");
}, 1500);

setInterval(() => {
  toast.style.display = "none";
}, 2500);
