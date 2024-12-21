const container = document.querySelector(".container");
var audio = document.getElementById('background-music');
const dropped = () => {
    const drop = document.createElement("span");

    drop.classList.add("drop");

    container.appendChild(drop); //we want to append this drop as a child to the region container

    //Now let us increase it's height and width randomly with Math.random()
    drop.style.top = Math.random() * innerHeight + "px";
    drop.style.left = Math.random() * innerWidth + "px";
    // now i need to remove the dirty drops that remain with  constant dimensions
    // so, i  will simply remove the ones that have appeared the first and have ended to grow
    setTimeout(() => {
        drop.remove();
    }, 6500); 
}

setInterval(dropped, 50);

document.addEventListener('DOMContentLoaded', function() {
  
  // Démarrer la musique automatiquement
  audio.play();
  
  // Gérons la fin de la lecture
  audio.addEventListener('ended', function() {
    this.currentTime = 0;
    this.play();
  }, false);
});

document.addEventListener('DOMContentLoaded', function() {
  const playButton = document.createElement('button');
  playButton.textContent = 'Play Music';
  document.body.appendChild(playButton);

  playButton.addEventListener('click', () => {
    audio.play();
    playButton.remove(); // Supprime le bouton après avoir démarré la musique
  });
});

