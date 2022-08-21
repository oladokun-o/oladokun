import React from 'react';
import Body from './Body';
import Header from './Header';
import Footer from './Footer';
import Hello from './Hello';
import About from './About_me';
import Project from './Project';
import Contact from './Contact_me';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			page: '_hello',
		}
		this.getPage = this.getPage.bind(this);
		this.DisplayPage = this.DisplayPage.bind(this);
	}

	getPage(page) {
		this.setState({ page: page });	
	}

	DisplayPage() {
		if (this.state.page === '_hello') return <Hello></Hello>
		if (this.state.page === '_contact_me') return <Contact></Contact>
		if (this.state.page === '_about_me') return <About></About>
		if (this.state.page === '_projects') return <Project></Project>
	}
	
	render() {
		return (
			<div className='main-background position-relative container-fluid p-0'>
				<Header getPage={this.getPage} page={this.state.page}></Header>
				<Body page={this.DisplayPage}></Body>
				<Footer></Footer>
			</div>
		)
	}
}

export default Home;