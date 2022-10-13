function sidebarFunc() {
  //! home sidebar start
  const btnOpenSidebar = document.querySelector("#btn-menu");
  const sidebar = document.querySelector("#sidebar");
  const btnCloseSidebar = document.querySelector("#close-sidebar");
  btnOpenSidebar.addEventListener("click", function () {
    sidebar.style.left = "0";
  });

  btnCloseSidebar.addEventListener("click", function () {
    sidebar.style.left = "-100%";
  });

  /* click outside start */
  document.addEventListener("click", function (event) {
    if (
      !event.composedPath().includes(sidebar) &&
      !event.composedPath().includes(btnOpenSidebar)
    ) {
      sidebar.style.left = "-100%";
    }
  });
  /* click outside end */

  //! home sidebar end
}

function searchModalFunc() {
  //! search modal start
  const btnOpenSearch = document.querySelector(".search-button");
  const btnCloseSearch = document.getElementById("close-search");
  const modalSearch = document.getElementsByClassName("modal-search");
  const modalSearchWrapper = document.getElementsByClassName("modal-wrapper");

  btnOpenSearch.addEventListener("click", function () {
    modalSearch[0].style.visibility = "visible";
    modalSearch[0].style.opacity = "1";
  });

  btnCloseSearch.addEventListener("click", function () {
    modalSearch[0].style.visibility = "hidden";
    modalSearch[0].style.opacity = "0";
  });

  /* click outside start */
  document.addEventListener("click", function (e) {
    if (
      !e.composedPath().includes(modalSearchWrapper[0]) &&
      !e.composedPath().includes(btnOpenSearch)
    ) {
      modalSearch[0].style.visibility = "hidden";
      modalSearch[0].style.opacity = "0";
    }
  });

  /* click outside end */

  //! search modal end
}

function headerFunc() {
  sidebarFunc();
  searchModalFunc();
}

export default headerFunc();
