const { React } = require('powercord/webpack')
const { TextInput } = require('powercord/components/settings')

module.exports = class Settings extends React.PureComponent {
    render() {
        return <>
            <TextInput
                value={ this.props.getSetting('soundUrl', 'https://raw.githubusercontent.com/melmsie/powercord-jingle/master/audio/ok.mp3') }
                note='testing eating ass'
                onChange={ val => this.props.updateSetting('soundUrl', val) }
            >URL to sound file</TextInput>
        </>
    }
}
