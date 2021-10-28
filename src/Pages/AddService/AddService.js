import React from 'react';
import './AddService.css';
import { useForm } from "react-hook-form";
import axios from 'axios';

const AddService = () => {
    const { register, handleSubmit,reset } = useForm();
    

  const onSubmit = data => {
      axios.post('https://peaceful-sierra-14791.herokuapp.com/services',data)
      .then(res=>{
        
          if (res.data.insertedId) {
              alert('added successfully')
              
          }
         
         
      })
    //   .catch(err => console.dir)
    //   console.log(data);
    //   data="";

  /*   console.log(data)
    axios.post('http://localhost:8080/loves',data)
    .then(res=>{
        if (res.data.insertedId) {
            alert("added successfully");
            reset();
        }
    }) */
    console.log(data)
    reset();
    }

    return (
        <div className="addservice">
            <h1>Add a Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name", { required: true, maxLength: 20 })} placeholder="Enter Your Name"/>
            <input {...register("time")} placeholder="Enter Your Time" />
            <input {...register("img")}  placeholder="Enter Your Image url"/>
            <input {...register("Description")}  placeholder="Enter Your Description"/>
            <input type="number" {...register("Price")} placeholder="Enter Your Service price"/>
            <input type="submit" />
    </form>
        </div>
    );
};

export default AddService;