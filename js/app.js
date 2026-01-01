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
