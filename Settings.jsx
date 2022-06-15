const { React } = require('powercord/webpack')
const { TextInput, SliderInput } = require('powercord/components/settings')
const { Button } = require('powercord/components');
var addnote = "👍"
module.exports = class Settings extends React.PureComponent {
		render() {
		const { getSetting, updateSetting } = this.props;
		if (getSetting('soundURL') !== undefined && getSetting('JSoundURL') == undefined){
			addnote = "Detected sound url from previous version: " + getSetting('soundURL') //as you can see im like even worse than string editor 
		}
        return <>
            <TextInput
				note={'This must be a URL to an audio file, I am 40% sure it needs to end in a proper audio extension too (.mp3/.wav/.opus). ' + addnote}
                value={getSetting('JSoundURL', this.props.defaultJSoundURL)}
                onChange={(value) =>updateSetting("JSoundURL", value)}
            >URL to sound file</TextInput>
			
			<SliderInput
                minValue={ 0 }
                maxValue={ 100 }
                initialValue={getSetting('JVolume', this.props.defaultJVolume)*100}
                markers={[ 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ]}
                onValueChange={ v => this.props.updateSetting('JVolume', v/100) }
            >Jingle volume</SliderInput>
			
			
            <Button color={Button.Colors.GREEN} onClick={() => {
				if (!this.props.JAudio) {
					this.props.JAudio = document.createElement("audio")
					this.props.JAudio.autoplay = true
				}
				this.props.JAudio.volume = getSetting('JVolume', this.props.defaultJVolume)
				this.props.JAudio.src = getSetting('JSoundURL', this.props.defaultJSoundURL)	
				this.props.JAudio.load()
			}}>Test audio</Button>
        </>
    }
}

