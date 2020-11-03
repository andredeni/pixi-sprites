const app = new PIXI.Application(
  {
    width: 480,
    height: 320,
    backgroundColor: 0x7799CC,
    antialias: true
  }
);

document.body.appendChild(app.view);

player = new PIXI.Sprite.from(
  'assets/player/idle.png'
);
player.anchor.set(0.5);
player.x = app.view.width / 2;
player.y = app.view.height / 2;

app.stage.addChild(player);

const keys = {};

window.addEventListener('keydown', event => {
  keys[event.keyCode] = true;
  console.log(keys);
});

window.addEventListener('keyup', event => {
  keys[event.keyCode] = false;
});

app.ticker.add(gameLoop);

function gameLoop() {
  if (keys['37']) {
    player.x -= 2;
  }
  if (keys['38']) {
    player.y -= 2;
  }
  if (keys['39']) {
    player.x += 2;
  }
  if (keys['40']) {
    player.y += 2;
  }
}