const { React } = require('powercord/webpack')
const { TextInput, SliderInput } = require('powercord/components/settings')
const { Button } = require('powercord/components');

module.exports = class Settings extends React.PureComponent {
    render() {
        return <>
            <TextInput
                value={ this.props.getSetting('soundURL', 'https://raw.githubusercontent.com/melmsie/powercord-jingle/master/audio/ok.mp3') }
                note='This must be a URL to an audio file, I am 40% sure it needs to end in a proper audio extension too (.mp3/.wav/.opus)'
                onChange={ val => this.props.updateSetting('soundURL', val) }

            >URL to sound file</TextInput>
			<SliderInput
                minValue={ 0 }
                maxValue={ 100 }
                initialValue={ this.props.getSetting('volumej', 40) }
                markers={[ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]}
                onValueChange={ v => this.props.updateSetting('volumej', v) }
            >Jingle volume</SliderInput>
            <Button color={Button.Colors.GREEN} onClick={() => {
	if (!this.props.mainPlugin.audio) {
		this.props.mainPlugin.audio = document.createElement("audio")
		this.props.mainPlugin.audio.autoplay = true
	}
    this.props.mainPlugin.audio.src = this.props.getSetting('soundURL', 'https://raw.githubusercontent.com/melmsie/powercord-jingle/master/audio/ok.mp3'), //default to "ok"
    this.props.mainPlugin.audio.volume = this.props.getSetting('volumej')/100 //change from 0-1
	this.props.mainPlugin.audio.load()
	this.props.mainPlugin.audio.play()
}}>Test audio</Button>
        </>
    }
}

