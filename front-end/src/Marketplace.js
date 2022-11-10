
import './Marketplace.css'
import { Link } from 'react-router-dom'
import Card from './elements/Card'
import { useState, useEffect } from 'react'
import axios from 'axios'

/**
 * A React component that represents the Arts and Crafts page of the app.
 * @param {*} param0 an object holding any props passed to this component from its parent component
 * @returns The contents of this component, in JSX form.
 */
const Marketplace = props => {
  const [collection, setCollection] = useState(null)

  useEffect(() => {
    axios.get("http://localhost:3001/product")
    .then(apiResponse => {
      // console.log(apiResponse.data[0])
      setCollection(apiResponse.data);
    })
    .catch(err => {
      throw(err)
    })
  }, [])

  return (
  <>
    <div>
      <h1>Marketplace</h1>
      <h2>Popular Listings</h2>
      <div className='cards-container'>
        {
          collection?
            collection.map((item, i) => {
              if(i<10){
                return <Card image={collection? collection[i].image: ""} name={collection? collection[i].name: ""} path="ProductListing" author={collection? collection[i].author_username: ""} description={collection? collection[i].description: ""}/>
              }
            })
          : ""
        }
      </div>
    </div>  
  </>
  )
}

// make this component available to be imported into any other file
export default Marketplace