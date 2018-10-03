import React, { Component } from 'react';

export default class Project extends Component {
	constructor() {
		super();
		this.state = {
			page: 0,
			file: [
                { picture: require('./website2.png') },
                { picture: require('./website3.png') },
                { picture: require('./website4.png') },
                { picture: require('./website5.png') },
            ],
		}
	}
	
	project = (file, color) => {
		return (
			<div className='p-wrapper' style={{ backgroundColor: color }}>
				<div className='p-projectContainer'>
					<div className='p-projects'>
							<img className='p-image' src={ file }/>
							<div className='p-projectInfo'>
								<h2 className='g-f p-projectInfoTitleFont'>IBENTA - WebApp</h2>
								<p className='g-f p-projectInfoFont'>Javascript, React.js, Node.js, Express.js, MongoDB</p>
							</div>
					</div>
				</div>		
			</div>
		)
	}
	
	handleButton = (page) => {
		this.setState({ page: page });
	}

	render = () => {
		const page = this.state.page;
		const file = this.state.file;
		const props = this.props;
		return (
			<div className='p-container' className=	{`p-container ${ props.position[1] === 3 ? '' : props.position[1] === 4 ? 'a-animateEnter' : props.position[1] === 5 ? 'a-animateLeave' : null }`}>
				<div className='p-projectNavContainer'>
					<div className='p-projectNav'>
						<div className='p-navigation'>
							<div className='p-navButton' onClick={ () => this.handleButton(0) }/>
							<div className='p-navButton' onClick={ () => this.handleButton(1) }/>
							<div className='p-navButton' onClick={ () => this.handleButton(2) }/>
						</div>
					</div>
				</div>
				{ page === 0 ? this.project(file[0].picture, '#042c53') : '' }
				{ page === 1 ? this.project(file[1].picture, '#1a3f62') : '' }
				{ page === 2 ? this.project(file[2].picture, '#042c53') : '' }
				{ page === 3 ? this.project(file[3].picture, '#1a3f62') : '' }
			</div>
	  )
	}
}
