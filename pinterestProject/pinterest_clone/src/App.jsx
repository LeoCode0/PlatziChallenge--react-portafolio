import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import {useState, useEffect} from 'react'


function App() {
	const [photoData, setPhotoData] = useState([])

	useEffect(() => {
		const url = "https://picsum.photos/v2/list"	
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
					setPhotoData(data)
					console.log(photoData)
				}
			)
	}, []);

	if(photoData.length === 0){
		return(<p className=' flex justify-center items-center z-50 text-lg bg-red-200' >Loading photos....</p>)
	}
  return (
    <div className=" w-screen h-screen space-x-6">
		<Navbar />
		<Card />
		<Card />
		<Card />
		<Card />
		<Card />
	 </div>
  )
}

export default App
