import React from 'react';
import './FaceReadingPath.css'


const FaceReadingPath = ({OnDetect, OnTextEnter})=>{

return(
	<div className='w-50 center height'>
		{/*<p className='tc new111'>User your current rank is ... <span className='f2 grow'> #5</span></p>*/}
		<div className='new1'>
			<input className='mar w-70 f4 br4 tc shadow-5' type='text' placeholder='Enter the path' onChange={OnTextEnter} />
			<button className='f4 w-20 br4 tc ph pv grow shadow-5' onClick={OnDetect}>Detect</button>
		</div>
	</div>
	)
}

export default FaceReadingPath;