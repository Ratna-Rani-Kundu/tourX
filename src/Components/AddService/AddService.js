import React from 'react';
import "./AddService.css";
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddService = () => {
    const { register, handleSubmit,reset, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data)
    axios.post("http://localhost:5000/services",data)
    .then(res=>{

      if(res.data.insertedId){
        alert('successfully added');
        reset();
      }
   })
  }
    return (
        <div className="add-service">
            <form onSubmit={handleSubmit(onSubmit)}>
      
                  <input  {...register("name")} required placeholder='Name'/>
                  <input {...register("img")} placeholder='Img url'/>
                  <input type="number" {...register("price" )} placeholder='Price' />
                  <textarea {...register("description" )} placeholder='Description'/>
                  
                  {errors.exampleRequired && <span>This field is required</span>}
                  <input type="submit" />  
                  
            </form>
        </div>
    );
};

export default AddService;