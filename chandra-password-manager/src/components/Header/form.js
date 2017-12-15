import React, {Component} from 'react'

class Form extends Component{
 render (){
     return (
       <div>
         <h1>Password Form</h1>
          <div className="form-group">
            <label className="col-form-label" for="inputDefault">URL</label>
            <input type="text" className="form-control" placeholder="Default input" />
          </div>
          <div class="form-group">
            <label class="col-form-label" for="inputDefault">Username</label>
            <input type="text" class="form-control" placeholder="Default input" id="inputDefault"/>
          </div>
          <div class="form-group">
            <label class="col-form-label" for="inputDefault">Password</label>
            <input type="text" class="form-control" placeholder="Default input" id="inputDefault"/>
          </div>
       </div>
        
     )
 }
}

export default Form