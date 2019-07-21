import Phaser from 'phaser'
import WebFont from 'webfontloader'

import loaderBg from '../assets/images/loader-bg.png';
import loaderBar from '../assets/images/loader-bar.png';

export default class extends Phaser.Scene {
  constructor () {
    super({ key: 'BootScene' })
  }

  preload () {
    this.fontsReady = false
    this.fontsLoaded = this.fontsLoaded.bind(this)
    this.add.text(100, 100, 'loading fonts...')

    this.load.image('loaderBg', loaderBg)
    this.load.image('loaderBar', loaderBar)

    WebFont.load({
      google: {
        families: ['Bangers']
      },
      active: this.fontsLoaded
    })
  }

  update () {
    if (this.fontsReady) {
      this.scene.start('SplashScene')
    }
  }

  fontsLoaded () {
    this.fontsReady = true
  }
}
