const generateBtn = document.querySelector(".generate");
const downloadBtn = document.querySelector(".download");
const input = document.querySelector(".title input");
const image = document.querySelector(".image");
const container = document.querySelector(".container");

const showToast = (message) => {
  const toast = document.querySelector(".tost-notification");
  const toastContent = document.querySelector(".tost-notification p");

  toast.style.display = "flex";
  toastContent.innerText = message;
  setTimeout(() => (toast.style.display = "none"), 2500);
};

generateBtn.addEventListener("click", () => {
  if (!input.value) {
    container.classList.add("error");
    image.innerHTML = "";
    showToast("At first, type anything");
    setTimeout(() => container.classList.remove("error"), 1500);
  } else {
    container.classList.remove("error");
    const qrCodeImageURL = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
      input.value
    )}`;
    image.innerHTML = `<div class="img">
    <img src="${qrCodeImageURL}" alt="QR Code" />
  </div>`;
    showToast(`Your Text with "${input.value}" is generated in QR Code`);
    input.value = "";
  }
});
