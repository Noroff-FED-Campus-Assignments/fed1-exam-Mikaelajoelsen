const cardSliderTrack = document.querySelector(".card-slider-track");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentSlide = 0;
const cardsPerPage = 4;
const cardWidth = 320;

// Fetch data from the API
fetch(
  "https://mikaela-exam.flywheelsites.com//wp-json/wp/v2/posts/?per_page=30"
)
  .then((response) => response.json())
  .then((data) => {
    const cards = data.map(
      (post) => `
      <div class="card">
        <h3>${post.title.rendered}</h3>
        <p class="Title">${post.excerpt.rendered}</p>
      </div>
    `
    );

    cardSliderTrack.innerHTML = cards.join("");

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
  });
