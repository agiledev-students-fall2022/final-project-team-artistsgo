import './Upload.css'
import { Link } from 'react-router-dom'
import React from 'react';
import { useState, useEffect } from 'react'
import axios from 'axios'

const Upload = props =>{
	const [newProduct, setNewProduct] = useState(
        {
            name:'',
      		description:'',
      		author_username:'',
      		price:'',
      		tags:[],
      		photo:'',
      		likes:0,
        }
    );

	const handleSubmit=(e)=>{
		e.preventDefault();
		const formData = new FormData();
		formData.append('photo', newProduct.photo);
        formData.append('description', newProduct.birthdate);
		formData.append('author_username', newProduct.birthdate);
        formData.append('name', newProduct.name);
        formData.append('price', newProduct.price);
        formData.append('tags', newProduct.tags);

		axios.post('http://localhost:3001/product/add/', formData)
             .then(res => {
                console.log(res);
             })
             .catch(err => {
                console.log(err);
             });
	}

	const handleChange = (e) => {
        setNewProduct({...newProduct, [e.target.name]: e.target.value});
    }

    const handlePhoto = (e) => {
        setNewProduct({...newProduct, tags: e.target.files[0]});
    }

	const handleTags = (e) => {
        setNewProduct({[e.target.name]:e.target.value.split(',')}
		  );
    }

	return(
		<form onSubmit={handleSubmit} encType='multipart/form-data'>
            <input 
                type="file" 
                accept=".png, .jpg, .jpeg"
                name="photo"
                onChange={handlePhoto}
            />
			<p/>
			<input 
                type="text"
                name="author_username"
                value={newProduct.author_username}
				placeholder="author_username"
                onChange={handleChange}
            />
			<p/>
            <input 
                type="text"
                placeholder="name"
                name="name"
                value={newProduct.name}
                onChange={handleChange}
            />
			<p/>

            <input 
                type="text"
				placeholder="descriptions"
				name="descriptions"
                value={newProduct.description}
                onChange={handleChange}
            />
			<p/>

			<input 
                type="text"
                name="tags[tag][]"
				placeholder="tags"
                value={newProduct.tags}
                onChange={handleTags}
            />
			<p> Price: </p>
			<input
                type="number"
                name="price"
				placeholder='0'
                value={newProduct.price}
                onChange={handleChange}
            />
			<p/>
            <input 
                type="submit"
            />
        </form>
	);
}

  
  // make this component available to be imported into any other file
  export default Upload