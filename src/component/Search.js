import React, { useState } from 'react'
import Header from './Header'

const Search = () => {
    var [date,setDate]=useState("")
    const subData=()=>{

        const data={"Date":date}
        console.log(data)
    }
  return (
    <div>
        <Header/>

<div className="container">
    <div className="row">
        <div>
            <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Date</label>
                    <input onChange={(e)=>(setDate(e.target.value))} type="date" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={subData} className="btn btn-info">SEARCH</button>

                </div>
            </div>
        </div>
    </div>
</div>



    </div>
    </div>
  )
}

export default Search