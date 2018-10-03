import React from 'react';

const About = (props) => {
	return (
			<div className={`a-container ${ props.position[0] === 0 ? '' : props.position[0] === 1 ? 'a-animateEnter' : props.position[0] === 2 ? 'a-animateLeave':  null }`}>
				<div className="a-wrapper">
				<div className='wasd'>
					<div className='g-f a-aboutContainer'>
						<p className='a-about'>{"Hello, I'm Roland a Software Engineer living in Tracy, California. As a kid, I've always liked to take apart my things to see how they work and sometimes successfully... putting them back together. Today, ever since the first output of 'Hello World', I've had a passion for programming. I love to create simple yet eye catching websites and reliable backend databases. "}</p>
					</div>
				</div>
				</div>
			</div>
  	)
}

export default About;
