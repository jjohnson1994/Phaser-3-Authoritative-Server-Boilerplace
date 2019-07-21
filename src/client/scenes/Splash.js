import Phaser from 'phaser'

import mushroom from '../assets/images/mushroom2.png';

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'SplashScene' })
  }

  preload () {
    //
    // load your assets
    //
    this.load.image('mushroom', mushroom)
  }

  create () {
    this.scene.start('GameScene')
  }

  update () {}
}
