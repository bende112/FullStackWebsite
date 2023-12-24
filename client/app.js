const form = document.getElementById("scoreForm");

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const formData =  new FormData(form);
  const formValues = Object.fromEntries(formData);
  console.log(formValues, ' from Values');

  const response = await fetch("http://localhost:8080/football_scores", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formValues),
  });
  const json = await response.json();

  console.log(json);
});

async function getFootball_Scores () {
  const response = await fetch("http://localhost:8080/football_scores");
  console.log("Check check");
  const football_scores = await response.json();
  console.log(football_scores);


  football_scores.forEach(function (football_score) {
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const td = document.createElement("td");


    // h3.textContent = football_score.team;
    // p.textContent = football_score.results;

    tbody.textContent = football_score.team;
    tr.textContent = football_score.team;
    td.textContent = football_score.results;




    const scoreContainer = document.getElementById("scoreContainer");
    scoreContainer.appendChild(h3);
    scoreContainer.appendChild(p);

    scoreContainer.appendChild(tbody);
    scoreContainer.appendChild(tr);
    scoreContainer.appendChild(td);
  });
}
getFootball_Scores();
clearInputField()

function clearInputField() {
  document.getElementById("scoreForm").value ="";
}

document.querySelectorAll(".rating");
//Missing a step here

const ratings = rating.querySelectorAll(".rating");
const likeRating = ratings[0];

ratings.forEach(rating => {
  const button = rating.querySelector(".rating-btn");
  const count = rating.querySelector(".rating-btn");

  // button.addEventListener
  console.log(button);
  console.log(count);
});





