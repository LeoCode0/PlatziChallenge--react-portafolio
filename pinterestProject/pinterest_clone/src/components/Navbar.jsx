import Logo from '../assets/logo.svg'
import Arrow from '../assets/arrow.svg'
import Message from '../assets/message.svg'
import Notification from '../assets/notification.svg'
import Search from '../assets/search.svg'
import React from 'react'

export default function Navbar() {
  return (
		<nav className='w-screen p-4 fixed z-10 flex items-center shadow-sm justify-around bg-white'>
			<img className='w-6 h-6' src={Logo} alt="logo" />
			<button className='flex items-center'>
				Home
				<img src={Arrow} alt="" />
			</button>
			<input className='w-10/12 h-10 rounded-full bg-gray-100 ' type="text">
				{/* <img className='w-6 h-6' src={Search} alt="" /> */}
			</input>
			<div className='flex space-x-4 fill-gray-200 text-gray-200'>
				<button>
					<img className='w-6 h-6' src={Message} alt="" />
				</button>
				<button>
					<img className='w-6 h-6' src={Notification} alt="" />
				</button>
				<img src={Notification} alt="profile-pic" />
			</div>
		</nav>

  )
}
