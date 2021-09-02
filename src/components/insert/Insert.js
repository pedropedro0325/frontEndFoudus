import axios from 'axios';
import React from 'react';

export default class Insert extends React.Component {
    
    constructor(props){
         super(props)
         this.state= {
             title:'',
             content:''
         }
         this.handleChange=this.handleChange.bind(this)
     }
     handleChange(e){
          this.setState({
              title:e.target.value,
              content:e.target.value
          })
     }
      sauvegarder(){
       axios.post("http://localhost:3500/notes",{
           title:this.state,
           content:this.state
           })
           .then((response)=>{
            console.log(response);
           });
     }
    render(){
       
  return (
   <div className="form-container">
    <center> <h1> Insert List</h1></center>
    <div className="form-group" >
       <label htmlFor="title">Title</label>
       <input type="text" placeholder="title" className="form-control" name="title" onChange={this.handleChange} value={this.state.title}/>
    </div>
    <div className="form-group">
       <label htmlFor="content">Content</label>
       <textarea type="text" className="form-control" name="content" onChange={this.handleChange }  value={this.state.content}/>

    </div>
    <br />
    <div className="text-right">
    <button className="btn btn-primary" onClick={this.sauvegarder}>Insert</button>
    </div>
   </div>
  );
}
};
