const btn = document.getElementById("button");
const imgBox = document.getElementById("imgBox");
const qr = document.getElementById("qrImg");
const input = document.getElementById("qrText");

btn.addEventListener("click", () => {
  const inputVal = input.value.trim();
  if (inputVal === "") {
    input.classList.add("error");
    setTimeout(() => {
      input.classList.remove("error");
    }, 1000);
    return;
  }
  const api = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(
    inputVal
  )}`;
  qr.src = api;
  imgBox.classList.add("show-img");
});
