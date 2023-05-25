const cardSliderTrack = document.querySelector(".card-slider-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;
const cardsPerPage = 4;
const cardWidth = 320;

// fetch(
//   "https://mikaela-exam.flywheelsites.com//wp-json/wp/v2/posts/?per_page=30"
// )
//   .then((response) => response.json())
//   .then((data) => {
//     const cards = data.map(
//       (post) => `
//       <a href="details.html?id=${post.id}" class="card">
//         <h3>${post.title.rendered}</h3>
//         <p class="Title">${post.excerpt.rendered}</p>
//       </a>
//     `
//     );

const url =
  "https://mikaela-exam.flywheelsites.com//wp-json/wp/v2/posts/?per_page=30";
async function fetchResults() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    makeCards(results);
  } catch (error) {
    console.log(error);
  }
}
fetchResults();

function getImgUrl(someObject) {
  if (someObject && someObject) {
    const regex = /<img[^>]+src="([^">]+)"/g;
    const matches = regex.exec(someObject.rendered);
    if (matches && matches.length >= 2) {
      return matches[1];
    } else {
      return null;
    }
  }
}

let cards = []; // Declare cards variable outside the makeCards function

function makeCards(postsArray) {
  cards = postsArray.map((post, index) => {
    // Push generated card HTML into the cards array
    return `<a href="details.html?id=${
      post.id
    }" class="container" style="height: auto;"> <h2>${post.title.rendered}</h2> 
      <img src="${getImgUrl(
        post.content
      )}" alt="blog-image" style="height: 324px; object-fit: cover;"> </a> `;
  });
  cardSliderTrack.innerHTML = cards.join("");
}

prevBtn.addEventListener("click", () => {
  if (currentSlide > 0) {
    currentSlide--;
    cardSliderTrack.style.transform = `translateX(-${
      currentSlide * cardWidth * cardsPerPage
    }px)`;
  }
});

nextBtn.addEventListener("click", () => {
  if (currentSlide < Math.floor(cards.length / cardsPerPage) - 1) {
    currentSlide++;
    cardSliderTrack.style.transform = `translateX(-${
      currentSlide * cardWidth * cardsPerPage
    }px)`;
  }
});
