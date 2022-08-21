import React from 'react';

function Footer() {
	return (
		<footer className='fixed-bottom sticky-md-bottom b-top px-2 header'>
			<div className="row">
				<button title='Find me on social media' className="col-auto col-md-auto d-none d-md-block ps-3 text-center">
					<span>Find me:</span>
				</button>
				<a target={"_blank"} rel="noreferrer" href='#!' title='Twitter' className="col-auto col-md-auto p-2 px-3 hoverable text-center b-left">
					<span>
						<i className="bi bi-twitter"></i>
					</span>
				</a>
				<a target={"_blank"} rel="noreferrer" href='#!' title='Linkedin' className="col-auto col-md-auto p-2 px-3 hoverable text-center b-left">
					<span>
						<i className="bi bi-linkedin"></i>
					</span>
				</a>
				<a target={"_blank"} rel="noreferrer" href='#!' title='Instagram' className="col-auto col-md-auto p-2 px-3 hoverable text-center b-left b-right">
					<span>
						<i className="bi bi-instagram"></i>
					</span>
				</a>
				<button className="col d-none d-md-block"></button>
				<a target={"_blank"} rel="noreferrer" href='https://github.com/honcho-man?tab=repositories' title='GitHub' className="col-auto col-md-auto p-2 px-3 px-md-4 ms-auto hoverable b-left text-center">
					<span>
						@honcho-man 
						<i className="bi bi-github ps-2"></i>
					</span>
				</a>
			</div>
		</footer>
	)
}

export default Footer;