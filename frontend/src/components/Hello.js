import React, { useRef } from 'react';
import Typer from './Typer';
import snake from '../assets/images/Snake.png';
import snakeFood from "../assets/images/Snake's Food.png";


function Hello() {
	const ref = useRef(null);

	function scrollInView() {
		ref.current?.scrollIntoView({ behavior: 'smooth' })
	}

    return (
        <div className='container-fluid fill d-flex justify-content-center align-items-center'>
            <div className="col-md-12 col-lg-10 fill p-2 px-3">
                <div className="row fill">
                    <div className="col-12 col-md-6 d-flex fill pb-5 pb-md-0 justify-content-center align-items-center position-relative home-text p-0">
                        <div className="container-fluid text-start position-relative pb-5 p-md-0">
                            <span className='text'>Hi, I am</span>
                            <h2 className="text mb-0">Oladokun Oladipupo</h2>
							<Typer dataText={[
								'Front_end Developer', 
								'Web Developer'
								]}/>											
							<small className='text-comment'>
								 {/* eslint-disable */}
								//play the game to continue or you can just skip :)
							</small>
							<br />
							<small className='text-comment'>//or check it out on my GitHub page</small>
							<br />
							<small className='primary-text'>const </small>
							<small className='code-b'>gitHubUrl </small>
							<small className="text"> = </small>
							<small className="code-c">
								<a href="https://github.com/honcho-man?tab=repositories" target={"_blank"} rel="noreferrer">"https://github.com/honcho-man"</a>
							</small>															
							<button title='Continue' onClick={scrollInView} className="ghost-btn col-auto d-block d-md-none continue-btn">
								<i className="ri-arrow-down-line pe-0"></i>
								Continue
							</button>
                        </div>	
                    </div>
					<div  ref={ref} className="col-12 col-md-6 d-flex fill justify-content-center align-items-end align-items-md-center pt-5 px-0 mt-5 m-md-0 p-md-0">
						<div className="container-fluid position-relative p-0 mt-5 m-md-0">
							<div className="gradient-a"></div>
							<div className="gradient-b"></div>
							<div className="game-box col-12 px-4 py-5 px-lg-5 py-lg-5 px-md-4 py-md-5 mt-5 m-md-0">
								<div className="screw top left">
									<i className="ri-close-fill"></i>
								</div>
								<div className="screw top right">
									<i className="ri-close-fill"></i>
								</div>
								<div className="screw bottom left">
									<i className="ri-close-fill"></i>
								</div>
								<div className="screw bottom right">
									<i className="ri-close-fill"></i>
								</div>
								<div className="col-12 px-0 p-md-0">
									<div className="row ps-md-2">
										<div id="game" className="col-12 col-md-7 mb-3 game position-relative">
											<div className="game-place-holder fill col-12 d-flex justify-content-center align-items-center">
												<div className="container">
													<div className="row">
														<div className="col-12 d-flex justify-content-center">
															<div className="snake-food-plate">
																<img src={snakeFood} alt="" className="snake-food" />
															</div>
														</div>
														<div className="col-12 d-flex justify-content-center position-relative">
															<img src={snake} alt="" className="snake" />	
														</div>
													</div>
												</div>																					
											</div>
											<div className="sticky-contn-bottom pb-4 col-12 d-flex justify-content-center align-items-center">											
												<button title='start game' className="primary-btn">start-game</button>
											</div>
										</div>
										<div className="col-12 col-md-5 px-0 px-md-2 position-relative">
											<div className="game-info col-12 p-2">
												<small className='text'>//use keyboard arrows</small>
												<br />
												<small className='text'>//use arrow buttons to play</small>
												<div className="col-12 game-controls py-2 py-md-1">
													<div className="row">
														<div className="col-12 p-0 mb-3 d-flex justify-content-center align-items-center">
															<button>
																<i className="ri-arrow-up-s-fill"></i>
															</button>
														</div>
														<div className="col-4 p-0 d-flex justify-content-center align-items-center">
															<button>
																<i className="ri-arrow-left-s-fill"></i>
															</button>
														</div>
														<div className="col-4 p-0 d-flex justify-content-center align-items-center">
															<button>
																<i className="ri-arrow-down-s-fill"></i>
															</button>
														</div>
														<div className="col-4 p-0 d-flex justify-content-center align-items-center">
															<button>
																<i className="ri-arrow-right-s-fill"></i>
															</button>
														</div>
													</div>
												</div>
											</div>
											<div className="col-12 p-2 px-0">
												<small className='text px-2'>//food left</small>
												<br />
												<div className="snake-food-tray col-12 row pt-2 px-1">
													<div className="col-auto">
														{[...Array(5)].map((food) => <img src={snakeFood} className="col-auto" alt="" />) }
													</div>
												</div>
											</div>
											<div className="col-12 skip-btn-contn pe-md-3">
												<button title='skip game to continue' className="ghost-btn">skip</button>
											</div>
										</div>									
									</div>
								</div>
							</div>
						</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hello;