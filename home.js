/* <div class="single-task one">
  <h4 class="description text">Daily ui Challange</h4>
  <p class="caption text"> create a to-do list</p>
</div>; */

let singleCard = document.createElement("div");
singleCard.classList.add("single-task");

let cardTitle = document.createElement("h4");
cardTitle.innerText = "Daily ui Challange";
let cardDesciption = document.createElement("p");
cardDesciption.innerText = "Daily ui Challange";

singleCard.appendChild(cardTitle);
singleCard.appendChild(cardDesciption);

console.log(singleCard);
document.querySelector(".toady-task");
document.querySelector(".today-task").append(".single-task");
