const config = {
  type: Phaser.HEADLESS,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  scene: {
    preload,
    create,
    update
  },
  autoFocus: false
};

function preload() {
}

function create() {
  io.on('connection', function (socket) {
    console.log('a user connected');

    socket.on('disconnect', function () {
      console.log('user disconnected');
    });
  });
}

function update() {
}

const game = new Phaser.Game(config);

window.gameLoaded();
