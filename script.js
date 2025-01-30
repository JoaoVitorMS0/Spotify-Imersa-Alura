const searchInput = document.getElementById('search-input');
const resultArtist = document.getElementById("result-artist");
const resultPlaylist = document.getElementById('result-playlists');

function requestApi(searchTerm) {
    const url = `http://localhost:3000/artists?name_like=${searchTerm}`
    fetch(url)
        .then((response) => response.json())
        .then((result) => displayResults(result))
}

function displayResults(result) {
    resultPlaylist.classList.add("hidden")
    const artistName = document.getElementById('artist-name');
    const artistImage = document.getElementById('artist-img');

    result.forEach(element => {
        artistName.innerText = element.name;
        artistImage.src = element.urlImg;
    });

    resultArtist.classList.remove('hidden');
}

document.addEventListener('input', function () {
    const searchTerm = searchInput.value.toLowerCase();
    if (searchTerm === '') {
        resultPlaylist.classList.remove('hidden');
        resultArtist.classList.add('hidden');
        return;
    }
    
    requestApi(searchTerm);
});


document.querySelector("#footer__button").addEventListener("mousemove", function(e) {
    const rect = this.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    this.style.background = `radial-gradient(circle at ${x}% ${y}%,#11a645, #1ed760)`;
    this.style.boxShadow = "0 0 15px rgba(26, 111, 56, 0.8)";
});

document.querySelector("#footer__button").addEventListener("mouseleave", function() {
    this.style.background = "white";
    this.style.boxShadow = "none";
});


function updateGreeting() {
    const greetingElement = document.getElementById('greeting-title');
    const hour = new Date().getHours();
    
    let greeting;
    
    if (hour >= 5 && hour < 12) {
        greeting = '☀️ Bom dia, João!';
    } else if (hour >= 12 && hour < 18) {
        greeting = '🌅 Boa tarde, João!';
    } else {
        greeting = '🌙 Boa noite, João!';
    }
    
    greetingElement.textContent = greeting;
}

updateGreeting();

setInterval(updateGreeting, 60000);