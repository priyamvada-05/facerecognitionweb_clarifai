import React from 'react';
import './Navigation.css';
import Logo from '../Logo/Logo'

const Navigation = ()=>{

	return(
			<div className='wrap'>
		    <Logo />
		    <p className='f2 dark-blue'>Welcome for Face Recognition</p>
		    <div>
			<button className='f4 pointer pa2 ma4 bg-light-blue br3 shadow-5'>Sign Out</button>
			</div>
			</div>

		)
}

export default Navigation;