import React from 'react';

const ContactM = (props) => {
	return (
		<div className={`m-c-container ${ props.position[3] === 6 ? '' : null }`}>
			<div className='m-c-wrapper'>
				<div className='g-f m-c-contactContainer'>
					<div className='m-c-contact'>
						<div className='g-f m-c-contactInfoContainer'>
							<div><p className='g-f m-c-fontColor m-c-contactHeader'>Let's Connect!</p></div>
							<div><p className='g-f m-c-fontColor m-c-contactFont'>so I could join your team or just want to talk about cool tech stuff or anything you want to talk about.</p></div>
						</div>
						<div className='m-c-contactButtonContainer'>
							<a className='g-f m-c-contactButton'target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/roland-canuto-43437941/'>linkedIn</a>
							<a className='g-f m-c-contactButton' href="mailto:rolandfcanuto@gmail.com">mail</a>
							<a className='g-f m-c-contactButton' target="_blank" rel="noopener noreferrer" href='https://github.com/rolandc5'>github</a>						
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ContactM;