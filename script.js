document.querySelectorAll(".footer__button").forEach(button => {
    button.addEventListener("mousemove", function(e) {
        const rect = this.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width) * 100;
        const y = ((e.clientY - rect.top) / rect.height) * 100;

        this.style.background = `radial-gradient(circle at ${x}% ${y}%, #1DB954, #1ed760)`;
        this.style.boxShadow = "0 0 15px rgba(26, 111, 56, 0.8)";
    });

    button.addEventListener("mouseleave", function() {
        this.style.background = "white";
        this.style.boxShadow = "none";
    });
});





function updateGreeting() {
    const greetingElement = document.getElementById('greeting-title');
    const hour = new Date().getHours();
    
    let greeting;
    
    if (hour >= 5 && hour < 12) {
        greeting = 'Bom Dia, João!';
    } else if (hour >= 12 && hour < 18) {
        greeting = 'Boa Tarde, João!';
    } else {
        greeting = 'Boa Noite, João!';
    }
    
    greetingElement.textContent = greeting;
}

updateGreeting();

setInterval(updateGreeting, 60000);