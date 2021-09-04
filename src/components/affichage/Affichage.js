
import React from 'react';
export default class Affichage extends React.Component {
  constructor(){
    super()
    this.state={
      contacts:[]
    }
  }  
  
  
      componentDidMount(){
       this.getData()
      }
      getData(){
        fetch('http://localhost:3500/notes')
        .then(res =>{res.json()
        .then((data)=>{
          this.setState({contacts:data})
        })
      })
      }
      
       delData(noteId){
        fetch('http://localhost:3500/notes/'+noteId,
        {method:'DELETE',
     
      }).then((result)=>{
        result.json()
          .then((resp)=>{
            alert("Retaurant has heen DELETE")
            this.getData()
          })
        })
      }
      
    render(){

        return (
          <div>
          <center><h1>Contact List</h1></center>
          {this.state.contacts.map((contact)=>(
      
            <div class="card">
              <div class="card-body">
              <h5 class="card-title">{contact._id}</h5>
                <h5 class="card-title">{contact.content}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{contact.createdAt}</h6>
                     <p  class="card-text">{contact.updatedAt}</p>
                     <button  class="" onClick={()=>this.delData(contact._id)}>DELETE</button>
                  </div>
                  </div>
          ))}
          </div>
          );
    }

}
