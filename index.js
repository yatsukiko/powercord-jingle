const { React } = require('powercord/webpack')
const { Plugin } = require("powercord/entities");
const { waitFor } = require('powercord/util');
const Settings = require('./Settings')
const JAudio = document.createElement("AUDIO");
const defaultJSoundURL = '/assets/773745b4ebae9f47e802724ec33b8a3f.mp3'
const defaultJVolume = 0.4


module.exports = class jingle extends Plugin {
	async startPlugin () {	
		powercord.api.settings.registerSettings(this.entityID, {
			category: this.entityID,
			label: 'Startup Sound',
			render: props => React.createElement(Settings, {...props, defaultJVolume, defaultJSoundURL, JAudio})
		  })

		await waitFor(`.container-YkUktl`) //waits till this shows up then do rest? idk
			JAudio.autoplay = true
			JAudio.src = this.settings.get('JSoundURL', defaultJSoundURL) //default to diskodo
			JAudio.volume = this.settings.get('JVolume', defaultJVolume)//change from 0-1
	}

	pluginWillUnload () {
		powercord.api.settings.unregisterSettings(this.entityID)
	  }
}
