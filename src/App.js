import React, { Component } from 'react';
import './App.css';
import Child from './child.js';

class App extends Component {

  constructor(){
    super();
    this.state = {
        test : []
    }
    console.log('constructor');
  }
  componentWillMount(){
   
    console.log('componentWillMount');
  }

   componentDidMount(){
    fetch('http://dummy.restapiexample.com/api/v1/employees')
      .then(response => response.json())
      .then(data =>  this.setState({test : data}));
  }
  
  render() {
     console.log('render');
      return (
      <div className="tableclass">
              <table>
                  <thead>
                    <tr>
                      <th>Id</th>
                      <th>Employee Name</th>
                      <th>Employee Salary</th>
                      <th>Employee Age</th>
                    </tr> 
                  </thead>
                  <tbody>  {
                   this.state.test.map(((test, index) =>
                    <tr>
                      <td>{test.id} </td>
                      <td>{test.employee_name} </td>
                      <td>{test.employee_salary} </td>
                      <td>{test.employee_age} </td>
                    </tr>))}
                  </tbody>
              </table>
                  }
      </div>
    );
  }
}
export default App;
