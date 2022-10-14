function tabsFunc() {
  const btnTab = document.querySelectorAll(".tab-button");
  const contentDOM = document.querySelectorAll(".content");
  const tabsButtons = document.querySelector(".tab-list");

  tabsButtons.addEventListener("click", function (e) {
    e.preventDefault();
    const id = e.target.dataset.id;
    if (id) {
      btnTab.forEach((button) => button.classList.remove("active"));
      e.target.classList.add("active");
      contentDOM.forEach((content) => content.classList.remove("active"));
      console.log(id);
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
}

export default tabsFunc();
