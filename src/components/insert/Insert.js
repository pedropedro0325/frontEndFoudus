import axios from 'axios';
import React from 'react';
import { Button } from 'react-bootstrap';

import { Link } from 'react-router-dom';
export default class Insert extends React.Component {
    
    constructor(){
         super()
         this.state= {
             title:'',
             content:''
         }
         this.handleTitle=this.handleTitle.bind(this)
         this.handleContent=this.handleContent.bind(this)
         this.sauvegarder=this.sauvegarder.bind(this)
     }
     handleTitle= e=>{
          this.setState({
              title:e.target.value
              
          })
     }
     handleContent= e=>{
        this.setState({
            content:e.target.value
            
        })
   }
   sauvegarder=(e)=>{
       e.preventDefault()
       const insertion={
        title:this.state.title,
        content:this.state.content
       }
    axios.post("http://localhost:3500/notes",insertion)
        .then((response)=>{
         console.log(response);
         alert("Restaurant has heen added");
        });
      }
     
    render(){
       
  return (
   <div className="form-container">
    <center> <h1> Insert List</h1></center>
    <form onSubmit={this.sauvegarder}>
    <div className="form-group" >
       <label htmlFor="title">Title</label>
       <input type="text" placeholder="title" className="form-control" name="title" onChange={this.handleTitle} value={this.state.title}/>
    </div>
    <div className="form-group">
       <label htmlFor="content">Content</label>
       <textarea type="text" className="form-control" name="content" onChange={this.handleContent }  value={this.state.content} />
    </div>
    <br />
    <div className="text-right">
    <button className="btn btn-primary" onClick={this.sauvegarder}>Insert</button>{'     '}
    <Link to="/">
    <Button type="button" className="btn">Menu</Button>
    </Link>
    </div>
    </form>
   </div>
  );
}
};
