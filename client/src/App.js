import React from 'react';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';

class App extends React.Component{
  constructor(props){
   super(props);
    this.state={
     data:[]
   }
  }
  componentDidMount(){
    axios({
      method:'POST',
      url:'/login',
      body:{
        email:"EatonSmith@gmail.com",
        password:"123"
      },
    }).then(response=>{this.setState({data:[...response.data]}); console.log(response)})
    .catch(err=>console.log('err', err))
  }
  render(){
    return(
      <div>
           {
             this.state.data.map(item=>(
               <div>{item.name}</div>
             ))
           }
      </div>
    )
  }
}

export default App;
