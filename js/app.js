// =========================
// SEARCH DATA
// =========================
const searchData = [
  { title: "Movie 1", type: "movie", link: "https://movie.loooooa.com" },
  { title: "Movie 2", type: "movie", link: "https://movie.loooooa.com" },
  { title: "Live Sports", type: "sports", link: "https://sports.loooooa.com" },
  { title: "Football Live", type: "sports", link: "https://sports.loooooa.com" },
  { title: "Image Resizer", type: "tool", link: "https://tools.loooooa.com" },
  { title: "SEO Analyzer", type: "tool", link: "https://tools.loooooa.com" },
  { title: "AI Writer", type: "ai", link: "https://ai.loooooa.com" }
];

// =========================
// PASS QUERY TO SEARCH RESULTS PAGE
// =========================
function getQueryParam(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name) || '';
}

// =========================
// DISPLAY SEARCH RESULTS
// =========================
function displaySearchResults() {
  const query = getQueryParam('q').toLowerCase().trim();
  const resultsContainer = document.getElementById('searchResults');
  const summaryContainer = document.getElementById('searchSummary');

  if(!query) {
    summaryContainer.textContent = "Please enter a search term.";
    return;
  }

  // Filter results
  const results = searchData.filter(item => item.title.toLowerCase().includes(query));

  summaryContainer.textContent = `About ${results.length} results for "${query}"`;

  // Show results
  resultsContainer.innerHTML = "";
  if(results.length === 0){
    resultsContainer.innerHTML = "<p>No results found.</p>";
    return;
  }

  results.forEach(item => {
    const div = document.createElement('div');
    div.classList.add('result-item');
    div.innerHTML = `
      <a href="${item.link}" class="result-title">${item.title}</a>
      <p class="result-link">${item.link}</p>
      <p class="result-desc">${item.type.charAt(0).toUpperCase() + item.type.slice(1)} content from Looooa</p>
    `;
    resultsContainer.appendChild(div);
  });
}

// =========================
// MODIFY INDEX SEARCH BAR TO REDIRECT TO RESULTS
// =========================
document.querySelector(".search-box").addEventListener("submit", function(e){
  e.preventDefault();
  const input = this.querySelector("input").value.trim();
  if(input === "") return;

  // Redirect to search results page with query
  window.location.href = `search.html?q=${encodeURIComponent(input)}`;
});

// =========================
// SEARCH FUNCTION
// =========================
document.querySelector(".search-box").addEventListener("submit", function(e){
  e.preventDefault();
  const input = this.querySelector("input").value.toLowerCase().trim();
  if(input === "") return;

  // Find the first match
  const result = searchData.find(item => item.title.toLowerCase().includes(input));

  if(result) {
    // Redirect to corresponding link
    window.location.href = result.link;
  } else {
    alert("No results found!");
  }
});
