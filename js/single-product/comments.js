const commentReviewsFunc = function () {
  const commentStarsDOM = document.querySelectorAll(
    ".comment-form-rating .star"
  );

  commentStarsDOM.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      commentStarsDOM.forEach((star) => star.classList.remove("active"));
      item.classList.add("active");
    });
  });
};

const addNewCommentFunc = () => {
  let comments = [];
  let commentTextDOM = document.getElementById("comment-text");
  let commentNameDOM = document.getElementById("comment-name");
  let commentBtnDOM = document.querySelector(".form-submit input");
  let commentListDOM = document.querySelector(".comment-list");
  let commentText = "";
  let commentName = "";

  commentTextDOM.addEventListener("input", function (e) {
    commentText = e.target.value;
  });

  commentNameDOM.addEventListener("input", function (e) {
    commentName = e.target.value;
  });

  function addComment(e) {
    e.preventDefault();
    comments.push({ text: commentText, author: commentName });
    let result = "";
    comments.forEach((item) => {
      result += `
        <li class="comment-item">
            <div class="comment-avatar">
                <img src="img/avatars/avatar1.jpg" alt="">
            </div>
            <div class="comment-text">
                <ul class="comment-star">
                    <li>
                        <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i class="bi bi-star-fill"></i>
                    </li>
                    <li>
                        <i class="bi bi-star-fill"></i>
                    </li>
                </ul>
                <div class="comment-meta">
                    <strong>${item.author}</strong>
                    <span>-</span>
                    <time>April 23, 2022</time>
                </div>
                <div class="comment-description">
                    <p>${item.text}</p>
                </div>
            </div>
    </li>
        `;
    });
    commentListDOM.innerHTML = result;
    commentTextDOM.value = "";
    commentNameDOM.value = "";
  }
  commentBtnDOM.addEventListener("click", addComment);
};

function commentsFunc() {
  commentReviewsFunc();
  addNewCommentFunc();
}

export default commentsFunc();
