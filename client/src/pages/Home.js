import React from 'react'
import InputGroup from '../components/InputGroup'

export default function Home() {
  return (
    <div className="row p-4">
        <div className="alert alert-success d-flex align-items-center" role="alert">
            <svg className="bi flex-shrink-0 me-2" width="24" height="24" role="img" aria-label="Success:">
                </svg>
            <div>
              An example success alert with an icon
            </div>
          </div>
     <div className="mt-4">
        <h2>Crud Users</h2>
     </div>
     <div className="col-12 col-lg-4">
         <form>
            <InputGroup label="Email"/>
            <InputGroup label="Nom"/>
            <InputGroup label ="Prénom"/>
            <InputGroup label="adress"/>
            <button className="btn btn-primary">Add user</button>
         </form>
     </div>
     <div className="col-12 col-lg-7">
        <table className="table">
            <thead>
              <tr>
                <th scope='col'>Email</th>
                <th scope='col'>Lastname</th>
                <th scope='col'>Firstname</th>
                <th scope='col'>Age</th>
                <th scope='col'>Actions</th>
              </tr>
            </thead>
            <tbody>
                <tr>
                    <th>test@live.fr</th>
                    <td>mtest</td>
                    <td>test</td>
                    <td>29</td>
                    <td className="gap__actions">
                     
                     <span className="badge bg-info"><a href="/id" className="text-white"><i className="fas fa-edit"></i></a></span>
                     
                      <span className="badge bg-danger" onClick=""><i
                        className="fas fa-trash-alt"
                      ></i></span>
                    </td>
                  </tr>
            </tbody>
        </table>    
     </div>
    </div>
  )
}
