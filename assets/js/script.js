 const hoverSound = document.getElementById("hover-sfx");

        // Flag to allow playback only after interaction
        let audioUnlocked = false;

        // Unlock audio on first user interaction
        const unlockAudio = () => {
            hoverSound.play().catch(() => { }); // silent catch
            hoverSound.pause();
            hoverSound.currentTime = 0;
            audioUnlocked = true;
            document.removeEventListener("click", unlockAudio);
            document.removeEventListener("mousemove", unlockAudio);
        };

        document.addEventListener("click", unlockAudio);
        document.addEventListener("mousemove", unlockAudio);

        // Hover logic
        document.querySelectorAll(".hover-sound").forEach(item => {
            item.addEventListener("mouseenter", () => {
                if (audioUnlocked) {
                    hoverSound.currentTime = 0;
                    hoverSound.play();
                }
            });
        });