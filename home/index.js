    <script>



        // JavaScript to trigger the loading animation and reveal the portfolio content
        document.addEventListener("DOMContentLoaded", function () {
            setTimeout(function () {
                const loading = document.getElementById("loading");
                loading.classList.add("hidden");
                document.body.style.overflow = "visible";

                // Start dynamic text animation after loading
                const container = document.querySelector(".container");
                container.style.display = "block";

                const words = [ "ANANDITA", " A STUDENT", "A WEB DEVELOPER", "A GAME ENTHUSIAST", "A SRK FAN"];
                const dynamicText = document.getElementById('dynamicText');
                let wordIndex = 0;
                let paused = false;

                function changeWord() {
                    if (!paused) {
                        dynamicText.textContent = words[wordIndex];
                        if (wordIndex === 100 || wordIndex === 500) {
                            dynamicText.classList.add('highlighted');
                        } else {
                            dynamicText.classList.remove('highlighted');
                        }
                        wordIndex = (wordIndex + 1) % words.length;
                    }
                }

                setInterval(changeWord, 1500); // Change the word every 1.5 seconds

                setTimeout(() => {
                    paused = true;
                    setTimeout(() => {
                        paused = false;
                    }, 500); // Pause for 5 seconds
                }, 500); // Pause after 5 seconds

                // Show the navigation bar after 10 seconds
                setTimeout(() => {
                    const navbar = document.getElementById("navbar");
                    navbar.style.display = "block";
                }, 10000);
            }, 2000); // Adjust the time (in milliseconds) for the loading animation
        });
    </script>
