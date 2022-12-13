import React from 'react'

export default function Card(props) {
	const {author, image} = props
	
  return (
	 <div className='w-72 h-auto rounded-lg overflow-hidden '>
		<div className=''>
			<div className='rounded-lg'>
				<img className='rounded-lg' src={image} alt="" />
			</div>
			<div className='p-2 space-y-2'>
				<h4 className='text-xl'>{author}</h4>	
				<h6 className='text-sm'>@coding_byanna</h6>	
			</div>
		</div>	
	 </div>
  )
}
