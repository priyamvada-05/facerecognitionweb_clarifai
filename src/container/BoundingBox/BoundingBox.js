import React from 'react';
import './BoundingBox.css'

const BoundingBox = ({regions, wide, heigh})=>{

	console.log('regions ',regions);
	console.log('width ',wide);
	console.log('height ',heigh);


	let cord=regions.map(obj=>{

	const bounding_box=obj.region_info.bounding_box;
	console.log('bounding_box',bounding_box)
    const top_row= heigh*bounding_box.top_row;
    const bottom_row=heigh-(heigh*bounding_box.bottom_row);
    const right_col=wide-(wide*bounding_box.right_col);
    const left_col=wide*bounding_box.left_col;
    
    return(<div className="bounding-box" 
    			key={obj.id}
				 style={{top: top_row, right:right_col, bottom:bottom_row, left:left_col}}>
		   </div>)

	})

	console.log('cord',cord)

return(
		 <div>{cord}</div>
			
	)

}

export default BoundingBox