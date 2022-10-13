export function thumbsActiveFunc() {
  const thumbs = document.querySelectorAll(".gallery-thumbs .img-fluid");
  const singleImage = document.querySelector("#single-image");
  console.log(thumbs);
  thumbs.forEach((item) => {
    item.classList.remove("active");
    item.addEventListener("click", function () {
      thumbs.forEach((image) => {
        image.classList.remove("active");
      });
      singleImage.src = item.src;
      item.classList.add("active");
    });
  });
}
