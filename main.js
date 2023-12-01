let lua = document.getElementById('lua');
let y = 0;

function moveLua() {
 y += 5;
 lua.style.transform = 'translateY(' + y + 'px)';
}

setInterval(moveLua, 50);