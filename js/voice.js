// voice.js for DrawMe ProMax

// Initialize speech recognition
const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

// Define commands
const commands = {
    'draw': drawCommand,
    'color': colorCommand,
    'size': sizeCommand,
    // Add more commands here, 40+ as needed...
};

// Command processing functions
function drawCommand() {
    console.log('Executing draw command...');
    // Code to handle draw command
}

function colorCommand(color) {
    console.log(`Setting color to ${color}...`);
    // Code to handle color change
}

function sizeCommand(size) {
    console.log(`Setting size to ${size}...`);
    // Code to handle size change
}

// Command recognition logic
recognition.onresult = function(event) {
    const transcript = event.results[0][0].transcript;
    console.log(`Recognized: ${transcript}`);
    handleCommand(transcript);
};

function handleCommand(transcript) {
    const command = parseCommand(transcript);
    if (commands[command]) {
        commands[command]();
    } else {
        console.error('Command not recognized.');
        // Handle unrecognized command
    }
}

function parseCommand(transcript) {
    // Logic to parse the command from the transcript
    // Return the command string to execute
    return transcript.trim(); // Simple example, improve parsing as needed
}

// Start recognition
recognition.start();

// UI Panel for Voice Commands
// Create and manage UI feedback for voice commands.
