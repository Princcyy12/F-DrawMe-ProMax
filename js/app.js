// app.js

// Core Application State Management
const state = {
    currentPage: 'home',
    user: null,
    data: {}
};

function setState(newState) {
    Object.assign(state, newState);
    render();
}

// Routing Logic
const routes = {
    home: () => '<h1>Home Page</h1>',
    about: () => '<h1>About Page</h1>',
};

function navigate(page) {
    if (routes[page]) {
        setState({ currentPage: page });
    } else {
        console.error('Page not found');
    }
}

// Page Management System
function render() {
    const app = document.getElementById('app');
    app.innerHTML = routes[state.currentPage]();
}

// Main Initialization Code
document.addEventListener('DOMContentLoaded', () => {
    render();
    // Add event listeners for navigation links
    document.getElementById('homeLink').addEventListener('click', () => navigate('home'));
    document.getElementById('aboutLink').addEventListener('click', () => navigate('about'));
});