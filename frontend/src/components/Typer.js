import React from 'react';
const TYPING_SPEED = 150,
	DELETING_SPEED = 30;

class Typer extends React.Component {
	constructor(props) {
		super(props);
		
		this.state = {
			text: '',
			isDeleting: false,
			loopNum: 0,
			typingSpeed: TYPING_SPEED
		};

		this.handleType = this.handleType.bind(this)
	}

	componentDidMount() {
		this.handleType();
	}

	handleType() {
		const { dataText } = this.props;
		const { isDeleting, loopNum, text, typingSpeed } = this.state;
		const i = loopNum % dataText.length;
		const fullText = dataText[i];

		this.setState({
			text: isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1),
			typingSpeed: isDeleting ? DELETING_SPEED : TYPING_SPEED
		});

		if (!isDeleting && text === fullText) {
			setTimeout(() => {
				this.setState({ isDeleting: true })
			}, 500);
		} else if (isDeleting && text === '') {
			this.setState({
				isDeleting: false,
				loopNum: loopNum + 1
			});
		}

		setTimeout(this.handleType, typingSpeed);
	}

	render() {
		return (
			<h4 className='mb-5'>
				<span className='primary-text'>
					<i className="ri-arrow-drop-right-line terminal-co"></i>
				</span>
				<span className='primary-text'>{ this.state.text }</span>
				<span id="cursor"></span>
			</h4>
		) 
	}
}

export default Typer;