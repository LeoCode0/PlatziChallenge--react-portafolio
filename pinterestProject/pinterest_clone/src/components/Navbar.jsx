import Logo from '../assets/logo.svg'
import Arrow from '../assets/arrow.svg'
import Message from '../assets/message.svg'
import Notification from '../assets/notification.svg'
import Search from '../assets/search.svg'
import ProfilePic from '../assets/profile.jpg'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Navbar() {
  return (
		<nav className='lg:w-screen lg:p-4 lg:fixed lg:z-10 lg:flex lg:items-center lg:shadow-sm lg:justify-around lg:bg-white hidden'>
			<img className='w-6 h-6' src={Logo} alt="logo" />
			<button className='flex items-center text-white bg-black w-auto px-4 py-2 rounded-full'>
				Home
			</button>
			<button className='flex items-center'>
				Create
				<img src={Arrow} alt="" />
			</button>
			{/* <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" /> */}
			<input className='w-9/12 h-10 rounded-full bg-gray-100 p-4' placeholder='Search' type="text">
			</input>
			<div className='flex space-x-4 fill-gray-200 text-gray-200'>
				<button>
					<img className='w-6 h-6' src={Message} alt="" />
				</button>
				<button>
					<img className='w-6 h-6' src={Notification} alt="" />
				</button>
				<img className='w-6 h-6 rounded-full object-cover' src={ProfilePic} alt="profile-pic" />
			</div>
		</nav>

  )
}
