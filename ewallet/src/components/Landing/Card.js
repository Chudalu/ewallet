import React from 'react';

const Card = ({name, email, balance}) => {
	return (
		<div style={{width:'85%'}} className= 'bg-light-red dib br3 pa3 ma2 grow bw2 shadow-3'>
			<div style={{display:'flex'}}>
				<img className='pa3' alt='profile' src={`https://robohash.org/${name}`} width='70px' height='70px'/>
				<h2 className='pa3'>{name}</h2>
				<p  className='pa3'>Email: {email}</p>
                <p  className='pa3'>Balance: {balance}</p>
			</div>
		</div>
		);
}


export default Card;