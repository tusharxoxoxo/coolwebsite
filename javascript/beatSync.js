document.addEventListener("DOMContentLoaded", function() {
    const audioElement = document.getElementById('musicPlayer');
    let audioContext; // Define audioContext outside of event listener

    // Function to create AudioContext after user gesture
    function initializeAudioContext() {
        audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const analyser = audioContext.createAnalyser();
        
        // Check if the audioElement is valid
        if (audioElement instanceof HTMLMediaElement) {
            const source = audioContext.createMediaElementSource(audioElement);
            source.connect(analyser);
            analyser.connect(audioContext.destination);

            const bufferLength = analyser.frequencyBinCount;
            const dataArray = new Uint8Array(bufferLength);

            // Function to update background size based on bass frequency range
            function updateBackgroundSize() {
                analyser.getByteFrequencyData(dataArray);

                // Extract bass frequencies (20Hz - 200Hz)
                const bassArray = dataArray.slice(0, Math.floor(bufferLength * (50 / analyser.frequencyBinCount)));

                // Calculate the average bass amplitude
                let total = 0;
                for (let i = 0; i < bassArray.length; i++) {
                    total += bassArray[i];
                }
                const averageBassAmplitude = total / bassArray.length;

                // Set background size based on the average bass amplitude
                const newSize = 130 + averageBassAmplitude / 10; // Adjust multiplier to control sensitivity
                document.body.style.backgroundSize = `${Math.max(newSize, 100)}%`; // Ensure minimum size of 100%
            }

            // Start updating background size on audio play
            audioElement.addEventListener('play', () => {
                setInterval(updateBackgroundSize, 50); // Adjust interval as needed
            });
        } else {
            console.error("The 'audioElement' is not a valid HTMLMediaElement.");
        }
    }

    // Event listener for user gesture (e.g., click event)
    document.addEventListener('click', function() {
        // Check if AudioContext is already created or resumed
        if (!audioContext) {
            initializeAudioContext(); // Create AudioContext
        } else if (audioContext.state === 'suspended') {
            audioContext.resume(); // Resume AudioContext if it's suspended
        }
    });
});
