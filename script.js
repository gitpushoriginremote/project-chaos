let entropy = 50;
const gauge = document.getElementById('entropy-gauge');
const logList = document.getElementById('log-list');

document.getElementById('add-chaos-btn').addEventListener('click', () => {
    // INTENTIONAL BUG: The junior dev subtracted instead of adding
    entropy -= 10;
    
    if (entropy > 100) entropy = 100;
    if (entropy < 0) entropy = 0;
    
    updateUI("Chaos Injected");
});

document.getElementById('reset-btn').addEventListener('click', () => {
    entropy = 0;
    updateUI("Order Restored");
});

function updateUI(action) {
    gauge.innerText = entropy + "%";
    
    const li = document.createElement('li');
    li.innerText = `[${new Date().toLocaleTimeString()}] ${action}: Level at ${entropy}%`;
    logList.prepend(li);

    // TODO: Add a visual shake effect when entropy goes over 80%
    if (entropy > 80) {
        console.log("WARNING: CRITICAL ENTROPY");
    }
}

// Initial log
updateUI("System Initialized");