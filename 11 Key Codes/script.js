const insert = document.getElementById('insert')

hideBorder();

window.addEventListener('keydown', (event) => {

    insert.innerHTML = ` 
    <div class="key">
        ${event.key === ' ' ? 'Space' : event.key}
        <small>event.key</small>
    </div>

    <div class="key">
        ${event.keyCode}
        <small>event.keyCode</small>
    </div>

    <div class="key">
        ${event.code}
        <small>event.code</small>
    </div>
    
    `
    showBorder();
})

function showBorder(){
    insert.style.setProperty("border", "2px solid white", "important");
}

function hideBorder(){
    insert.style.setProperty("border", "none", "important");

}