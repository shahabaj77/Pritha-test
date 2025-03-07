
      
 
let isOn = false;
// Toggle Lights
function toggleLights() {
    const bulbs = document.querySelectorAll(".bulb");
    const button = document.querySelector(".lights button");

    if (!isOn) {
        bulbs.forEach(bulb => bulb.classList.add("on"));
        button.textContent = "Turn Off Lights";
    } else {
        bulbs.forEach(bulb => bulb.classList.remove("on"));
        button.textContent = "Turn On Lights";
    }

    isOn = !isOn;
	
}

 function playMusic() {
    var audio = document.getElementById("audio");

    // Ensure volume is set
    audio.volume = 1;

    // If audio is not already playing, play it
    if (audio.paused || audio.currentTime === 0) {
        audio.play().catch(error => {
            console.log("Autoplay blocked: ", error);
        });
        
        localStorage.setItem("isPlaying", "true"); // Store audio state
    }
}


 let currentIndex = 0;
    const images = document.querySelectorAll('.photo');

    function showNextImage() {
        images[currentIndex].style.opacity = 0;
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].style.opacity = 1;
    }

    setInterval(showNextImage, 3000); // Change image every 3 seconds
	
	
	function createFirework() {
    let firework = document.createElement("div");
    firework.classList.add("firework");

    // Random position
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    
    firework.style.left = `${x}px`;
    firework.style.top = `${y}px`;

    document.body.appendChild(firework);

    // Create sparks
    for (let i = 0; i < 20; i++) {
        let spark = document.createElement("div");
        spark.classList.add("spark");
        spark.style.left = `${x}px`;
        spark.style.top = `${y}px`;
        spark.style.background = randomColor(); // Set random colors

        // Random explosion angle
        let angle = Math.random() * 360;
        let distance = Math.random() * 80 + 20;
        spark.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
        spark.style.setProperty("--y", `${Math.sin(angle) * distance}px`);

        document.body.appendChild(spark);

        setTimeout(() => spark.remove(), 1500);
    }

    // Remove firework after explosion
    setTimeout(() => firework.remove(), 1200);
}

// Function for random colors
function randomColor() {
    const colors = ["red", "yellow", "blue", "green", "purple", "orange", "pink"];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Launch firecrackers every 1.5 seconds
setInterval(createFirework, 1500);


 