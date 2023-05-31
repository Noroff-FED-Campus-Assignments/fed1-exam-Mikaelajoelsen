const url =
  "https://mikaela-exam.flywheelsites.com//wp-json/wp/v2/posts/?per_page=30";
const postsPerPage = 10;
let currentPage = 1;
let totalPages = 0;
let allPosts = [];

async function fetchResults() {
  try {
    const response = await fetch(url);
    const results = await response.json();
    allPosts = results;
    totalPages = Math.ceil(allPosts.length / postsPerPage);
    makeCards(allPosts, currentPage);
    showMoreButton.addEventListener("click", showMorePosts);
  } catch (error) {
    console.log(error);
  }
}

fetchResults();

function getImgUrl(someObject) {
  if (someObject && someObject.rendered) {
    const regex = /<img[^>]+src="([^">]+)"/g;
    const matches = regex.exec(someObject.rendered);
    if (matches && matches.length >= 2) {
      return matches[1];
    }
  }
  return null;
}

function makeCards(postsArray, page) {
  const blogContainer = document.querySelector("#blog-container");
  const startIndex = (page - 1) * postsPerPage;
  const endIndex = startIndex + postsPerPage;

  for (let i = startIndex; i < endIndex && i < postsArray.length; i++) {
    const post = postsArray[i];
    const imageUrl = getImgUrl(post.content);
    const postElement = document.createElement("div");
    postElement.innerHTML = `
      <a href="details.html?id=${post.id}" style="height: auto;">
        <h2>${post.title.rendered}</h2> 
        <img class="blog-img" src="${imageUrl}" alt="blog image" style="height: 324px; width: 400px;">
      </a>`;
    blogContainer.appendChild(postElement);
  }

  if (currentPage >= totalPages) {
    showMoreButton.style.display = "none";
  } else {
    showMoreButton.style.display = "block";
  }
}

const showMoreButton = document.getElementById("more-button");

const showMorePosts = () => {
  currentPage++;
  makeCards(allPosts, currentPage);

  if (currentPage >= totalPages) {
    showMoreButton.style.display = "none";
  }
};
