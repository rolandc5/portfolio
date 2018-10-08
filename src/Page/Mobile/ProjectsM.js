import React, { Component } from 'react';

export default class ProjectM extends Component {
	constructor() {
		super();
		this.state = {
			page: 0,
			file: [
				{ picture: require('../png/website1.png'), name: 'Showabel - WebApp', description: 'Javascript, React.js, Node.js, Express.js, MongoDB', link: 'https://showabel.herokuapp.com/' },
				{ picture: require('../png/website2.png'), name: 'MathUp - WebApp', description: 'Javascript, React.js', link: 'https://mathup.herokuapp.com/' },
				{ picture: require('../png/website5.png'), name: 'Ibenta - WebApp', description: 'Javascript, React.js, Node.js, Express.js, MongoDB' },
            ],
		}
	}

	project = (file, page) => {
		return (
			<div className='m-p-wrapper' style={{ backgroundColor: `${ page % 2 === 0 ? '#042c53' : '#1a3f62' }` }}>
				<div className='m-p-projectContainer'>
					<div className='m-p-projects'>
						<img className='p-image' src={ file.picture } alt='wow'/> : <div className='m-p-imageNot'/>
						<div className='m-p-projectInfo' style={{ backgroundColor: `${ page % 2 === 0 ? '#1a3f62' : '#042c53' }`}}>
							<h2 className='g-f m-p-projectInfoTitleFont'>{file.name}</h2>
							<p className='g-f m-p-projectInfoFont'>{file.description}</p>
							<p className='g-f m-p-projectVisitFont'>Visit Page</p>
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
			<div className={`m-p-container ${ position === 3 ? '' : position === 4 ? 'm-a-animateEnter' : position === 5 ? 'm-a-animateLeave' : null }`}>
				{ this.project(file[0]) }
				{ this.project(file[1]) }
				{ this.project(file[2]) }
			</div>
	  )
	}
}

/*
	{ page === 1 ? <img className='p-image' src={ file[page].picture }/> : <div className='p-imageNot'/> }
							{ page === 2 ? <img className='p-image' src={ file[page].picture }/> : <div className='p-imageNot'/> }
							{ page === 3 ? <img className='p-image' src={ file[page].picture }/> : <div className='p-imageNot'/> }
*/