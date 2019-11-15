import React from 'react';
import Tilt from 'react-tilt';
import Icons from './icons.png';

const Logo = ()=>{

return(
	<div>
		<Tilt className="Tilt pa3" options={{ max : 55 }} style={{ height: 80, width: 200 }} >
			 <div className="Tilt-inner"> 
			 	<img src={Icons} alt='logo' height='180' width='210' />
			 </div>
		</Tilt>
	</div>
	)
}

export default Logo;