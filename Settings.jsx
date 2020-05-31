const { React } = require('powercord/webpack')
const { TextInput } = require('powercord/components/settings')
const { Button } = require('powercord/components');

module.exports = class Settings extends React.PureComponent {
    render() {
        return <>
            <TextInput
                value={ this.props.getSetting('soundURL', 'https://raw.githubusercontent.com/melmsie/powercord-jingle/master/audio/ok.mp3') }
                note='This must be a URL to an audio file, I am 40% sure it needs to end in a proper audio extension too (.mp3/.wav/.opus)'
                onChange={ val => this.props.updateSetting('soundURL', val) }
            >URL to sound file</TextInput>
            <Button color={Button.Colors.GREEN} onClick={() => {
    this.props.mainPlugin.audio = document.createElement("audio")
    this.props.mainPlugin.audio.autoplay = true
    this.props.mainPlugin.audio.src = this.props.getSetting('soundURL', 'https://raw.githubusercontent.com/melmsie/powercord-jingle/master/audio/ok.mp3'), //default to "ok"
    this.props.mainPlugin.audio.volume = 0.4 //change from 0-1
}}>Test audio</Button>
        </>
    }
}

