const colors = [
    "#1abc9c",
    "#3498db",
    "#9b59b6",
    "#e74c3c",
    "#f39c12",
    "#2c3e50"
];

function changeBg(){
    const randomIndex = Math.floor(Math.random() * colors.length);
    document.body.style.background = colors[randomIndex];
}