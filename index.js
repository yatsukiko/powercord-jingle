const { Plugin } = require("powercord/entities");
const { waitFor } = require('powercord/util');

module.exports = class jingle extends Plugin {
	async startPlugin () {	
		await waitFor(`div[class*="members"]`) //waits till this shows up then do rest? idk
			this.audio = document.createElement("audio")
			this.audio.autoplay = true
			this.audio.src = "https://yatsukiko.me/u/jingle.mp3" //source file, idk how to make it local 
			this.audio.volume = 0.2 //change from 0-1
		
	}
}