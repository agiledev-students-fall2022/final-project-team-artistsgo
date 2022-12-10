import "./Upload.css";
import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Upload = (props) => {
  const navigate = useNavigate();
  const [checked, setChecked] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    author_username: "",
    price: 0,
    tags: ["a", "b"],
    image: "",
    likes: 0,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("photo", newProduct.image);
    formData.append("description", newProduct.description);
    formData.append("author_username", newProduct.author_username);
    formData.append("name", newProduct.name);
    formData.append("price", newProduct.price);
    formData.append("likes", 0);
    formData.append("tags", JSON.stringify(newProduct.tags));
    // formData.append('tags', JSON.stringify(newProduct.tags.map((e, i) => {
    //     return(e.toLowerCase().replaceAll(" ", "-"));
    // })))

    axios
      .post("http://localhost:3001/product/add/", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
      });
    navigate("/");
  };

  const handleChange = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };

  const handlePhoto = (e) => {
    setNewProduct({ ...newProduct, image: e.target.files[0] });
  };

  const handleTags = (e) => {
    var updatedList = [...checked];
    if (e.target.checked) {
      updatedList = [...checked, e.target.value];
    } else {
      updatedList.splice(checked.indexOf(e.target.value), 1);
    }
    setChecked(updatedList);
    setNewProduct({ ...newProduct, tags: updatedList });
    console.log(newProduct.tags);
  };

  /* const handleTags2=(e)=>{
        const tagslist=newProduct.tags;
        const another=e.target.value.split(',');
        for (let i=0;i<another.length;i++){
            tagslist.push(another[i]);
        }
        console.log(tagslist)
        setNewProduct({...newProduct, tags: tagslist});
        console.log(newProduct.tags);
    } */

  const handlePrice = (e) => {
    setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
  };
  const checkList = [
    "arts-and-crafts",
    "dance",
    "music",
    "marketplace",
    "services",
  ];

  return (
    <form onSubmit={handleSubmit} enctype="multipart/form-data">
      <div class="form-group">
        <legend className="p1-upload">
          {" "}
          choose a picture of your art:
          <input
            type="file"
            accept=".png, .jpg, .jpeg"
            name="photo"
            onChange={handlePhoto}
          />
        </legend>

        <legend className="p1-upload">
          name of the artwork:
          <input
            type="text"
            placeholder="name"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
          />
        </legend>
        <legend className="p1-upload">
          author username:
          <input
            type="text"
            name="author_username"
            value={newProduct.author_username}
            placeholder="author_username"
            onChange={handleChange}
          />
        </legend>
        <legend className="p1-upload">
          description:
          <input
            type="text"
            placeholder="descriptions"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
          />
        </legend>

        <legend className="p1-upload">
          Check your product's catergories:
          <div className="checkboxall">
            <div className="list-container">
              {checkList.map((item, index) => (
                <div key={index}>
                  <input
                    value={item}
                    name="tags[]"
                    type="checkbox"
                    onChange={handleTags}
                  />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </legend>
        <p>Please check marketplace if you would like to sell!</p>
        {/* <legend className='p1-upload'>addtional tags, split using comma:
			<input 
                type="text"
                name="tags[]"
				placeholder="tags"
                onChange={handleTags2}
            /> 
            </legend> */}
        <legend className="p1-upload">
          Price:
          <input
            type="number"
            name="price"
            placeholder="0"
            value={newProduct.price}
            onChange={handlePrice}
          />
        </legend>
        <p />
        <input type="submit" />
      </div>
    </form>
  );
};

// make this component available to be imported into any other file
export default Upload;
