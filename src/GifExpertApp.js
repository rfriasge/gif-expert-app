import React,{ useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

	const [ categories, setCategories ] = useState(['One Punch']);
	const handleAdd = ()=>{
		//setCategories( [...categories,'Rafael Frias']);
		setCategories( cats => [...cats,'Rafael Frias']);
	}

	

	return (
		<>
			<h2>GifExpertApp xx</h2>
			<AddCategory setCategories = { setCategories } />
			<hr />
			
			<ol>
				{
					categories.map( category =>{
						 <GifGrid category = { category } />
					})
				}
			</ol>
		</>
	)
}


