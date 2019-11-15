import React from 'react';
import './Content.css';
import BoundingBox from '../BoundingBox/BoundingBox'

const Content = ( {img_path, coordinate, wide, heigh} )=>{


	return(
			<div className='new'>
			<div className='absolute mt2 '>
			<img
			 id='image'
			 src= {img_path} 
			 alt='' 
			 width='480px' 
			 height='auto'/>
			 <div className='bounding-box-set'>
			 <BoundingBox regions={coordinate} wide={wide} heigh={heigh}/>
			</div>
			</div>
			</div>

		)
}

export default Content;