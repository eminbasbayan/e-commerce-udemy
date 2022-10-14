const commentReviewsFunc = function () {
  const commentStarsDOM = document.querySelectorAll(
    ".comment-form-rating .star"
  );

  commentStarsDOM.forEach((item) => {
    item.addEventListener("click", () => {
      commentStarsDOM.forEach((star) => star.classList.remove("active"));
      item.classList.add("active");
    });
  });
};

const addNewCommentFunc = () => {
  let commentTextDOM = document.getElementById("comment-text");
};

function commentsFunc() {
  commentReviewsFunc();
  addNewCommentFunc();
}

export default commentsFunc();
