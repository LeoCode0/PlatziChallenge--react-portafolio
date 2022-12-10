import './App.css'
import Card from './components/Card'
import Navbar from './components/Navbar'
import {useState, useEffect} from 'react'


function App() {
	const [photoData, setPhotoData] = useState([])

	useEffect(() => {
		const url = "https://picsum.photos/v2/list?page=2&limit=70"	
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
					setPhotoData(data)
				}
			)
	}, []);

	if(photoData.length === 0){
		return(<p className='flex justify-center items-center z-50 text-lg bg-red-200' >Loading photos....</p>)
	}
  return (
    <div className=" w-screen h-screen space-x-6 overflow-x-hidden">
		<Navbar/>
		<div className='w-screen h-screen flex gap-4 flex-wrap justify-items items-center'>
			{photoData.map(item =>{
				return (
					<Card key={item.id} author={item.author} image={item.download_url} />
				)
			})}
		</div>
	 </div>
  )
}

export default App
