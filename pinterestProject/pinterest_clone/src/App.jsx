import './App.css'
import Card from './components/Card'

function App() {

  return (
    <div className=" w-screen h-screen space-x-6">
		<nav className=' flex items-center bg-gray-200'>
			<img src="" alt="logo" />
			<button>Home</button>
			<input type="text"/>
			<div>
				<button>Notificaciones</button>
				<button>Mensajes</button>
				<img src="" alt="profile-pic" />
			</div>
		</nav>
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
	 </div>
  )
}

export default App
