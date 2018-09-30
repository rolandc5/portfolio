import React, { Component } from 'react';

const Project = (props) => {
	return (
		<div className=	{`p-container ${ props.position[1] === 3 ? '' : props.position[1] === 4 ? 'a-animateEnter' : props.position[1] === 5 ? 'a-animateLeave' : null }`}>
			<div className="p-wrapper">
				<div>
					<div className="g-f p-introFont">
						<span> Check out some of my work </span>
					</div>
					<div className="p-introStyle">
						<div className="g-f p-introSLine">Front-End</div>
						<div style={{ width: 25 }}/>
						<div className="g-f p-introSLine">Back-End/API</div>
					</div>
				</div>
				<div className='p-projectContainer'>
					<div><a target="_blank" rel="noopener noreferrer" href='http://www.rolandcanuto.me'><img className='p-image' src={ props.file[0].picture }/></a></div>
					<div><a><img className='p-image' src={ props.file[1].picture }/></a></div>
					<div><a><img className='p-image' src={ props.file[2].picture }/></a></div>
					<div><a><img className='p-image' src={ props.file[3].picture }/></a></div>
					
				</div>
			</div>
		</div>
  )
}

export default Project;


/*

export default class Projects extends Component {
	constructor() {
		super();
		this.state = {
		file: [
			{ picture: require('./website2.png') },
			{ picture: require('./website3.png') },
			{ picture: require('./website4.png') },
			{ picture: require('./website5.png') },
		],
		}	
	};


  render() {
    return (
		<div className="p-container">
			<div className="p-wrapper">
				<div>
					<div className="g-f p-introFont">
						<span> Check out some of my work </span>
					</div>
					<div className="p-introStyle">
						<div className="g-f p-introSLine">Front-End</div>
						<div style={{ width: 25 }}/>
						<div className="g-f p-introSLine">Back-End/API</div>
					</div>
				</div>
				<div className='p-projectContainer'>
					<div><a target="_blank" rel="noopener noreferrer" href='http://www.rolandcanuto.me'><img className='p-image' src={ this.state.file[0].picture }/></a></div>
					<div><a><img className='p-image' src={ this.state.file[1].picture }/></a></div>
					<div><a><img className='p-image' src={ this.state.file[2].picture }/></a></div>
					<div><a><img className='p-image' src={ this.state.file[3].picture }/></a></div>
					
				</div>
			</div>
		</div>
    )
  }
}


	<div className="p-projectContainer">
					<div>
						<div className="p-projectWrapper">
							<div className="p-topBImage">
								
							</div>
							<div>
								{ this.state.file.map((value, i) => {
									return (
									<div>
										{ this.state.number === i ? <div className="p-hContainer"><div className="p-buttonModal" onClick={ this.handleButtonPress }><img className="p-projectImage animated fadeIn" src={ value.picture }/></div></div>: null }
									</div>
									)
								})}
							</div>
						</div>
					</div>
				</div>

						{ this.state.modal && (
					<div className="p-showModal">
						<div className='p-modal-content' ref={node => { this.node = node; }}>
							<div className="p-topBImage">
								<div className='p-modalButtonsContainer'>
									<div className="p-button p-colorR" onClick={ () => this.handleClick() }/>
									<div className="p-button p-colorB" onClick={ () => this.handleClick() }/>
									<div className="p-button p-colorG" onClick={ () => this.handleClick() }/>
								</div>
							</div>
							<div className='p-projectDisplayed'>
								<img className='p-imageDisplayed' src={ this.state.file[0].picture }/>
							</div>
						</div>
						<div className='p-projectDescriptionContainer'>
							<div className='p-projectDescriptionWrapper'>
								<div className='p-projectDescription'>
									<h1>IBENTA</h1>
									<div className='p-projectD'>
										<p>A project that works similarly to Facebook's Marketplace and LetGo</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				)}
*/

/*
      <div className="p-container">
        <div className="p-wrapper">
          <div className="p-innerContainer">

            <div style={{ height: 100 }}/>
            <div>
              <div className="g-f p-introFont">
                <span> Check out some of my work </span>
              </div>
              <div style={{ height: 25 }}/>
              <div className="p-introStyle">
                <div className="g-f p-introSLine">Front-End</div>
                <div style={{ width: 25 }}/>
                <div className="g-f p-introSLine">Back-End/API</div>
              </div>
              <div style={{ height: 25 }}/>
            </div>
            <div style={{ height: 100 }}/>

            <div>
              <div className="p-projectContainer">
                <div className="p-projectWrapper">
                  <div className="p-innerProjectContainer">
                      <div>
                        <div>
                          <div className="p-topBImage">
                            <div style={{ width: 10 }}/>
                            <div className="p-button p-colorR"/>
                            <div style={{ width: 10 }}/>
                            <div className="p-button p-colorB"/>
                            <div style={{ width: 10 }}/>
                            <div className="p-button p-colorG"/>
                          </div>
                        </div>
                        <Map.Project projects={ this.state.file } number={ this.state.number } press={ this.handleButtonPress }/>
                      </div>
                  </div>
                </div>
              </div>
              <div style={{ height: 20 }}/>
            </div>
            <div>

              <div className="p-changeProjectB">
                <a className="g-f p-introSLine p-links" href="https://pass-client.herokuapp.com/"> Link </a>
                <div style={{ width: 20 }}/>
                <div className="g-f p-change"/>
                <div style={{ width: 20 }}/>
                <a className="g-f p-introSLine p-links" href="https://github.com/rolandc5/password-client/tree/modalBranch"> Code </a>

              </div>
            <div style={{ height: 100 }}/>
            </div>

          </div>
        </div>
      </div>
*/