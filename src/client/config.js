import Phaser from 'phaser'

export default {
  type: Phaser.AUTO,
  parent: 'content',
  width: 800,
  height: 600,
  localStorageName: 'phasergame',
  backgroundColor: 'black',
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 }
    }
  },
  pixelArt: true,
  roundPixels: true
}
