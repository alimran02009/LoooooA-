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

/* ===== LOOP MP4 PREVIEW ===== */
const mp4Video = document.getElementById('trendingMP4');
if(mp4Video){
  const previewDuration = 60 * 5; // 5 minutes
  mp4Video.addEventListener('timeupdate', ()=>{
    if(mp4Video.currentTime >= previewDuration){
      mp4Video.currentTime = 0;
      mp4Video.play();
    }
  });
}

/* ===== LOOP HLS PREVIEW ===== */
const hlsVideo = document.getElementById('trendingHLS');
if(hlsVideo){
  const previewDuration = 60*5; // 5 minutes
  hlsVideo.addEventListener('timeupdate', ()=>{
    if(hlsVideo.currentTime >= previewDuration){
      hlsVideo.currentTime = 0;
      hlsVideo.play();
    }
  });
}

<script src="https://cdn.jsdelivr.net/npm/hls.js@latest"></script>
<script>
  const liveVideo = document.getElementById('liveSports');
  const liveSrc = 'https://example.com/live/stream.m3u8'; // YOUR LIVE STREAM

  if (Hls.isSupported()) {
    const hls = new Hls({
      liveSyncDurationCount: 3,
      enableWorker: true
    });
    hls.loadSource(liveSrc);
    hls.attachMedia(liveVideo);
    hls.on(Hls.Events.MANIFEST_PARSED, () => {
      liveVideo.play();
    });

    // Auto-recover if stream breaks
    hls.on(Hls.Events.ERROR, function (event, data) {
      if (data.fatal) {
        hls.startLoad();
      }
    });

  } else if (liveVideo.canPlayType('application/vnd.apple.mpegurl')) {
    liveVideo.src = liveSrc;
    liveVideo.addEventListener('loadedmetadata', () => {
      liveVideo.play();
    });
  }
</script>
// 3D TILT FOR ABOUT CARD
const tilt = document.querySelector(".tilt");

tilt.addEventListener("mousemove", (e) => {
  const rect = tilt.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = ((y / rect.height) - 0.5) * 10;
  const rotateY = ((x / rect.width) - 0.5) * -10;

  tilt.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

tilt.addEventListener("mouseleave", () => {
  tilt.style.transform = "rotateX(0) rotateY(0)";
});

// GOOGLE FORM SUCCESS MESSAGE
function formSuccess() {
  document.getElementById("formMsg").innerText =
    "✅ Thanks! You are successfully subscribed.";
}
// 3D TILT FOR ABOUT CARD
const tilt = document.querySelector(".tilt");

tilt.addEventListener("mousemove", (e) => {
  const rect = tilt.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const rotateX = ((y / rect.height) - 0.5) * 10;
  const rotateY = ((x / rect.width) - 0.5) * -10;

  tilt.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

tilt.addEventListener("mouseleave", () => {
  tilt.style.transform = "rotateX(0) rotateY(0)";
});

// GOOGLE FORM SUCCESS MESSAGE
function formSuccess() {
  document.getElementById("formMsg").innerText =
    "✅ Thanks! You are successfully subscribed.";
}
document.querySelectorAll(".hover-3d").forEach(card => {
  card.addEventListener("mousemove", e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateX = ((y / rect.height) - 0.5) * 10;
    const rotateY = ((x / rect.width) - 0.5) * -10;

    card.style.transform =
      `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-6px)`;
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "rotateX(0) rotateY(0)";
  });
});

function handleFormSubmit() {
  setTimeout(() => {
    document.getElementById("successPopup").classList.add("show");
  }, 500);
}

function closePopup() {
  document.getElementById("successPopup").classList.remove("show");
    }
