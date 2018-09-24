import React, { Component } from 'react'; // value = '' : sẽ viết chuỗi , value = {} :số
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
        username : '',
        password : '',
        description : '',
        selectGender : 1,
        radioLanguage : 'en',
        checkboxStatus : true
    };
  }

  HandleChange = (event) => {   // bắt sự kiện p6 input = event
    var target = event.target  // biến target tới từng ô input
    var name   = target.name   // mỗi ô input phân biệt = name, name = username and password
    var value  = target.value
    this.setState ({
        [name] : value  // save multi input
    });
  }

  HandleSubmit = (event) => {
    event.preventDefault();       // chặn ko cho hiện id or pass lên thanh nhập address
    console.log(this.state);
  }

  render() {
    return (
        <div className="container mt-30">
            <div className="row">
                <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
                    <div className="panel panel-primary">
                      <div className="panel-heading">
                        <h3 className="panel-title" >FORM</h3>
                      </div>
                      <div className="panel-body">
                         

                          <form onSubmit = {this.HandleSubmit}>

                           <div className="form-group">
                              <label>Username</label>
                              <input type="text" 
                                     className="form-control"
                                     name ="username"
                                     value = {this.setState.username}       // lưu lại giá trị username nhập lúc đầu  
                                     onChange = {this.HandleChange}         
                                      /> 
                            </div>

                            <div className="form-group">
                              <label>Password</label>
                              <input type="password" 
                                     className="form-control"
                                     name ="password"
                                     value = {this.setState.pasword}    // lưu lại giá trị pass lúc đầu nhập
                                     onChange = {this.HandleChange}        
                                      /> 
                            </div>

                            <div className="form-group">
                              <label>Description :</label>
                             <textarea 
                              className="form-control" 
                              rows="3" 
                              name ="description"
                              onChange = {this.HandleChange} >
                              </textarea>
                            </div>

                            <label>Gender :</label>
                            <select name="selectGender" 
                                    className="form-control"
                                    value = {this.setState.selectGender}          // lưu lại 
                                    onChange = {this.HandleChange}       //text ban đầu
                                    > 
                              <option value={0}>Female</option>  
                              <option value={1}>Male</option>
                            </select>
                              <br/>

                              <label>Language</label>
                              <div className="radio">
                                <label>
                                  <input type="radio" 
                                         name="radioLanguage"  
                                         value="en" 
                                         onChange = {this.HandleChange}
                                         checked = {this.state.radioLanguage === "en"}
                                         />
                                  English
                                </label>
                                <br/>
                                <label>
                                  <input type="radio" 
                                         name="radioLanguage"  
                                         value="fi"
                                         onChange = {this.HandleChange} 
                                         checked = {this.state.radioLanguage === "fi"}
                                         />
                                  Finnish
                                </label>
                              </div>

                                <div className="checkbox">
                                  <label>
                                    <input type="checkbox" 
                                           value={true} 
                                           name = "checkboxStatus"
                                           onChange = {this.HandleChange} 
                                           />
                                    I agree !!!
                                  </label>
                                </div>

                              <br/>
                            <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                            <button type="reset" className="btn btn-default">Delete</button>
                          </form>
                      </div>
                    </div>
                </div>
            </div>
        </div>
     );
  }
}

export default App;
