import React, { useState } from 'react'
import Header from './Header'

const Addevent = () => {
    var [name,setName]=useState("")
    var [date,setDate]=useState("")
    var [venue,setVenue]=useState("")
    var [organiser,setOrganiser]=useState("")
    var [contactno,setContactno]=useState("")
    
    const subData=()=>{
        const data={"Name":name,"Date":date,"Venue":venue,"Organiser":organiser,"Contactno":contactno}
        console.log(data)



    }
  return (
    <div>
        <Header/>

<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} placeholder="Enter Nmae" type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Date</label>
                    <input onChange={(e)=>{setDate(e.target.value)}} type="date" name="" id="" className="form-control"/>
                    

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Venue</label>
                    <input onChange={(e)=>{setVenue(e.target.value)}} placeholder="Enter Venue" type="text" className="form-control"/>

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Organiser</label>
                    <input onChange={(e)=>{setOrganiser(e.target.value)}} placeholder="Enter Organiser" type="text" className="form-control"/>

                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Contact Number</label>
                    <input onChange={(e)=>{setContactno(e.target.value)}} placeholder="Enter Organiser" type="text" className="form-control"/>

                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-info">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>




    </div>
  )
}

export default Addevent