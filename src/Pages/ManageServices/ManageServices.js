import React, { useEffect, useState } from 'react';

const ManageServices = () => {
    const [services,setService] =useState([]);
    useEffect(()=>{
        fetch('https://peaceful-sierra-14791.herokuapp.com/services')
        .then(res =>res.json())
        .then(data=>setService(data))
    },[]);

    const handleDelete=id=>{
        console.log('handleDelete is ok')
        const url=`https://peaceful-sierra-14791.herokuapp.com/services/${id}`;
        
        fetch(url,{
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount ){
                const remaining=services.filter(service=>service._id !==id)
                setService(remaining)
                alert("succesfully Deleted")
            }
            
        })

    }
    return (
        <div>
            <h1>this is manage services page</h1>
            {
                services.map(service =><div key={service._id}>
                    <h1>{service.name}</h1>
                <button onClick={()=>handleDelete(service._id)}>Delete</button></div>)
            }
        </div>
    );
};

export default ManageServices;