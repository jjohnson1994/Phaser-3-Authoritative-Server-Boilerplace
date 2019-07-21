/* globals __DEV__ */
import Phaser from 'phaser'
import io from 'socket.io-client'

import Mushroom from '../sprites/Mushroom'

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'GameScene' })
  }
  init () {}
  preload () {}

  create () {
	this.socket = io();

    this.player = new Mushroom({
      scene: this,
      x: 400,
      y: 300,
      asset: 'mushroom'
    })

    this.add.existing(this.player)
    this.add.text(100, 100, 'Phaser 3 - ES6 - Webpack ', {
      font: '64px Bangers',
      fill: '#7744ff'
    })
  }
}
