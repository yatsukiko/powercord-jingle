const { React } = require('powercord/webpack')
const { Plugin } = require("powercord/entities");
const { waitFor } = require('powercord/util');
const Settings = require('./Settings')

module.exports = class jingle extends Plugin {
	async startPlugin () {	
		powercord.api.settings.registerSettings(this.entityID, {
			category: this.entityID,
			label: 'Startup Sound',
			render: props => React.createElement(Settings, {
				...props,
				mainPlugin: this
			  })
		  })


		await waitFor(`.container-3baos1`) //waits till this shows up then do rest? idk
			this.audio = document.createElement("audio")
			this.audio.autoplay = true
			this.audio.src = this.settings.get('soundURL', 'https://raw.githubusercontent.com/melmsie/powercord-jingle/master/audio/ok.mp3'), //default to "ok"
			this.audio.volume = this.settings.get('volumej')/100 //change from 0-1
	}

	pluginWillUnload () {
		powercord.api.settings.unregisterSettings('startupSound')
	  }
}
