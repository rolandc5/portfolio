import React, { Component } from 'react';

export default class Project extends Component {
	constructor() {
		super();
		this.state = {
			page: 0,
			file: [
				{ picture: require('../png/website1.png'), name: 'Showabel - WebApp', description: 'Javascript, React.js, Node.js, Express.js, MongoDB', link: 'https://showabel.herokuapp.com/' },
            ],
		}
	}

	project = (file, page) => {
		return (
			<div className='p-wrapper' style={{ backgroundColor: `${ page % 2 === 0 ? '#042c53' : '#1a3f62' }` }}>
				<div className='p-projectContainer'>
					<div className='p-projects'>
						{
							file.map((value, index) => {
								return (
									<div>
										{ page === index ? <a target="_blank" rel="noopener noreferrer" href={ value.link }><img className='p-image' src={ value.picture } alt='wow'/></a> : <div className='p-imageNot'/> }
									</div>
								)
							})
						}
						<div className='p-projectInfo' style={{ backgroundColor: `${ page % 2 === 0 ? '#1a3f62' : '#042c53' }`}}>
							<h2 className='g-f p-projectInfoTitleFont'>{file[page].name}</h2>
							<p className='g-f p-projectInfoFont'>{file[page].description}</p>
						</div>
					</div>
				</div>		
			</div>
		)
	}
	
	handleButton = (page, color) => {
		this.setState({ page: page, color: color });
	}

	render = () => {
		const page = this.state.page; 
		const file = this.state.file;
		const position = this.props.position[1];
		return (
			<div className={`p-container ${ position === 3 ? '' : position === 4 ? 'a-animateEnter' : position === 5 ? 'a-animateLeave' : null }`}>
				<div className='p-projectNavContainer'>
					<div className='p-projectNav'>
						<div className='p-navigation'>
							{
								file.map((value, index) => {
									return (
										<div className={`p-navButton ${ page === index ? 'p-active' : '' }`} onMouseMove={ () => this.handleButton(index) }></div>
									)
								})
							}
							
						</div>
					</div>
				</div>
				{ this.project(file, page) }
			</div>
	  )
	}
}
