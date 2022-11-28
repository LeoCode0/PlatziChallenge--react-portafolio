import React from 'react'

export default function Card() {
	const image = 'https://i.pinimg.com/564x/77/7f/9d/777f9d1a315807be78c9c04abdd6d002.jpg'
  return (
	 <div className='w-72 h-72 rounded-lg overflow-hidden '>
		<div className=''>
			<div className='rounded-lg'>
				<img className='rounded-lg' src={image} alt="" />
			</div>
			<div className='p-2 space-y-2'>
				<h4 className='text-xl'>Gradient 1</h4>	
				<h6 className='text-sm'>@coding_byanna</h6>	
			</div>
		</div>	
	 </div>
  )
}
