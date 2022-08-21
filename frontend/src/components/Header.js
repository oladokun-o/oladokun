import React from 'react';
import faviLogo from '../assets/images/logo.png';

function Header({getPage, page}) {
	//const ref = useRef(null);

	function scrollInView(e) {
		e.currentTarget?.scrollIntoView({ behavior: 'smooth' })
	}

	return (
		<div className='container-fluid header fixed-top sticky-md-top px-0'>
			<div className="row">
				<button className="col-12 col-md-4 col-lg-3 b-bottom p-2 ps-4 text-start name-tab">
					<span className='ps-0 ps-md-2'>
						<img src={faviLogo} width="15" alt="" className='me-2'  />
						oladokun-oladipupo
					</span>
				</button>
				<div className="col-12 col-md-8 col-lg-9 px-md-0">
					<div className="d-flex justify-content-start scroll col-auto">
						<button onClick={(e) => {getPage('_hello'); scrollInView(e)}} className={"col-auto col-md-auto p-2 px-4 hoverable text-center b-left b-right b-bottom " + (page === '_hello'?"b-active":"")}>					
							<i>&lt;/&gt;</i>
							<span>hello.me</span>
						</button>
						<button onClick={(e) => {getPage('_about_me'); scrollInView(e)}} className={"col-auto col-md-auto p-2 px-4 hoverable text-center b-right b-bottom " + (page === '_about_me'?"b-active":"")}>
							<i>&lt;/&gt;</i>
							<span>about.me</span>
						</button>
						<button onClick={(e) => {getPage('_projects'); scrollInView(e)}} className={"col-auto col-md-auto p-2 px-4 hoverable text-center b-right b-bottom " + (page === '_projects'?"b-active":"")}>
							<i>&lt;/&gt;</i>
							<span>projects.me</span>
						</button>
						<button className="col d-lg-block d-none b-bottom"></button>
						<button onClick={(e) => {getPage('_contact_me'); scrollInView(e)}} className={"col-auto col-md-auto p-2 px-4 ms-auto hoverable b-left b-bottom text-center " + (page === '_contact_me'?"b-active":"")}>
							<i>&lt;/&gt;</i>
							<span>contact.me</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header;