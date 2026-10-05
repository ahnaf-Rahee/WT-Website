// WT_main.js
const searchInput = document.getElementById('player-search');
const outputBox = document.getElementById('player-output');

searchInput.addEventListener('keypress', async function(event) {
    if (event.key === 'Enter') {
        const playerName = searchInput.value.trim();
        if (!playerName) return;
        
        outputBox.innerText = `Searching for ${playerName}...`;
        
        // TODO: Send data to backend endpoint
    }
});