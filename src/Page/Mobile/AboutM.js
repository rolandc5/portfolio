import React from 'react';

const AboutM = (props) => {
	return (
			<div className={`m-a-container ${ props.position[0] === 0 ? '' : props.position[0] === 1 ? 'm-a-animateEnter' : props.position[0] === 2 ? 'm-a-animateLeave':  null }`}>
				<div className="m-a-wrapper">
				<div className='m-wasd'>
					<div className='g-f m-a-aboutContainer'>
						<p className='m-a-about'>Hello! I'm Roland Canuto, a Full Stack Engineer living in Tracy, California. As a kid, I've always liked to take apart my things to see how they work and sometimes successfully putting them back together. Today, ever since the first output of 'Hello World', I've had a passion for programming. I love to create simple yet eye catching websites and reliable backend databases.</p>
					</div>
				</div>
				</div>
			</div>
  	)
}

export default AboutM;
