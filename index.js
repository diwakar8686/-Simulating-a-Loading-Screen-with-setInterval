let intervalId;
function simulateLoadingScreen() {
    let count = 0; // To track the elapsed time
    intervalId = setInterval(() => {
        count++;
        console.log("Loading...");
        if (count === 5) {
            clearInterval(intervalId);
            console.log("Loaded successfully!");
        }
    }, 1000); 
}
simulateLoadingScreen();
