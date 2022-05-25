import React from 'react'
import Header from './Header'

const View = () => {
  var viewlist=[
    {
      "name": "Nima",
      "date": "2/5/2022",
      "venue": "Pathanapuram",
      "organiser": "Miriya",
      "contactno": "9988776655"}


  ]
  return (
    <div>
      <Header/>
      <div className="container">
        <div className="row">
          <div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12>
            <div className="row g-3">
              <div col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12>

              <table class="table table-primary table-striped" >
  <thead>
    <tr>
      <th scope="col">name</th>
      <th scope="col">date</th>
      <th scope="col">venue</th>
      <th scope="col">organiser</th>
      <th scope="col">contactno</th>
    </tr>
  </thead>
  <tbody>
    {viewlist.map((value,key)=>{
      return <tr>
      
      <td>{value['name']}</td>
      <td>{value.date}</td>
      <td>{value.venue}</td>
      <td>{value.organiser}</td>
      <td>{value.contactno}</td>
    </tr>



    })}
    
  </tbody>
</table>


              </div>



            </div>


          </div>



        </div>





      </div>


    
    
    
    
    </div>
  )
}

export default View