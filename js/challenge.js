document.addEventListener("DOMContentLoaded", () => {
    // Timer Increment
    let counter = document.getElementById("counter");
    let count = 0;
    let interval = setInterval(() => {
      counter.innerText = ++count;
    }, 1000);
  
    // Manual Increment/Decrement
    document.getElementById("plus").addEventListener("click", () => {
      counter.innerText = ++count;
    });
  
    document.getElementById("minus").addEventListener("click", () => {
      counter.innerText = --count;
    });
  
    // Like Button
    document.getElementById("heart").addEventListener("click", () => {
      let likesList = document.querySelector(".likes");
      let likeItem = document.getElementById(`like-${count}`);
  
      if (likeItem) {
        let likes = likeItem.querySelector("span");
        likes.innerText = parseInt(likes.innerText) + 1;
      } else {
        let newLike = document.createElement("li");
        newLike.id = `like-${count}`;
        newLike.innerHTML = `${count} has been liked <span>1</span> time`;
        likesList.appendChild(newLike);
      }
    });
  
    // Pause/Resume Counter
    const pauseButton = document.getElementById("pause");
    pauseButton.addEventListener("click", () => {
      if (pauseButton.innerText === "pause") {
        clearInterval(interval);
        pauseButton.innerText = "resume";
        toggleButtons(true);
      } else {
        interval = setInterval(() => {
          counter.innerText = ++count;
        }, 1000);
        pauseButton.innerText = "pause";
        toggleButtons(false);
      }
    });
  
    function toggleButtons(disabled) {
      document.getElementById("plus").disabled = disabled;
      document.getElementById("minus").disabled = disabled;
      document.getElementById("heart").disabled = disabled;
    }
  
    // Comment Box
    document.getElementById("comment-form").addEventListener("submit", (e) => {
      e.preventDefault();
      let commentInput = document.getElementById("comment-input");
      let newComment = document.createElement("p");
      newComment.innerText = commentInput.value;
      document.getElementById("list").appendChild(newComment);
      commentInput.value = "";
    });
  });
  