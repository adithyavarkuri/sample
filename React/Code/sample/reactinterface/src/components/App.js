import logo from '../logo.svg';
import React,{Component} from 'react';
import '../css/App.css';
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';
import {without} from 'lodash';

class App extends Component{

  constructor(){
    super();
    this.state = {
      myName : 'Adithya',
      myAppointments:[],
      formDisplay : true,
      lastIndex:0,
      orderBy:'petName',
      orderDir:'asc'

    };
    this.deleteAppointment =this.deleteAppointment.bind(this);
    this.toggleForm = this.toggleForm.bind(this);
    this.addAppointment = this.addAppointment.bind(this);
  }

componentDidMount(){
  fetch('./data.json')
  .then(response => response.json())
  .then(result => {
    const apts = result.map(item => {
      item.aptId= this.state.lastIndex;
      this.setState({lastIndex:this.state.lastIndex +1 })
      return item;
    })
    this.setState({
      myAppointments:apts
    })
  });
  
}

deleteAppointment(apt){
let tmpApt = this.state.myAppointments;
tmpApt = without(tmpApt,apt);
this.setState({
  myAppointments:tmpApt
});
}

addAppointment(apt){
let tempApt =this.state.myAppointments;
this.aptId =  this.state.lastIndex;
tempApt.unshift(apt);
this.setState({
  myAppointments:tempApt,
  lastIndex:this.state.lastIndex+1
});
}
toggleForm(){
  this.setState({
    formDisplay : !this.state.formDisplay
  })
}

  render(){
    // const listItems =  this.state.myAppointments.map(item => {
    //   return(
    //   <div>
    //     <div>{item.petName}</div>
    //     <div>{item.ownerName}</div>
    //   </div>
    //   )
    // })

    let order;
    let filteredApt = this.state.myAppointments;
    if(this.state.orderDir==='asc'){
      order =1;
    }else{
      order =-1;
    }
    filteredApt.sort((a,b)=>{
      if(a[this.state.orderBy].toLowerCase() <  b[this.state.orderBy].toLowerCase()){
        return -1* order;
      }else{
        return 1* order;
      }
    });

    return (
      <main className="page bg-white" id="petratings">
          <div className="container">
            <div className="row">
              <div className="col-md-12 bg-white">
                <div className="container">
                  {this.state.myName}
                  {/* {listItems} */}
               <AddAppointments
                formDisplay = {this.state.formDisplay}
                toggleForm = {this.toggleForm} 
                addAppointment={this.addAppointment}></AddAppointments>
               <SearchAppointments 
               orderBy ={this.state.orderBy}
               orderDir ={this.state.orderDir}></SearchAppointments>
               <ListAppointments appointments = {filteredApt}
               deleteAppointment={this.deleteAppointment}
               ></ListAppointments>
                </div>
              </div>
            </div>
          </div>
        </main>
    );
  }

}
export default App;
