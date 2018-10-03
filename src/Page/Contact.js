import React from 'react';

const Contact = (props) => {
		return (
			<div className={`c-container ${ props.position[3] === 6 ? '' : null }`}>
				<div className='c-wrapper'>
					<div className='g-f c-contactContainer'>
						<div className='c-contact'>
							<div><p className='g-f c-fontColor c-contactHeader'>Let's Connect!</p></div>
							<div><p className='g-f c-fontColor c-contactFont'>so I could join your team or just want to hire me for freelancing or... just want to talk about cool tech stuff or anything you want to talk about.</p></div>
							<div className='c-contactButtonContainer'>
								<a className='g-f c-contactButton'target="_blank" rel="noopener noreferrer" href='https://www.linkedin.com/in/roland-canuto-43437941/'>linkedIn</a>
								<a className='g-f c-contactButton' href="mailto:rolandfcanuto@gmail.com">mail</a>
								<a className='g-f c-contactButton' target="_blank" rel="noopener noreferrer" href='https://github.com/rolandc5'>github</a>						
							</div>
						</div>
					</div>
				</div>
			</div>
		)
}

export default Contact;