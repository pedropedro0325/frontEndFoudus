import React from 'react';
const Contacts=({contacts}) =>{
    return(
        <div>
        <center><h1>Contact List</h1></center>
        {contacts.map((contact)=>(

            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contact.content}</h5>
                  <h6 class="card-subtitle mb-2 text-muted">{contact.createdAt}</h6>
          <p  class="card-text">{contact.updatedAt}</p>
                  </div>
                  </div>
          ))}
        </div>
    )
}

export default class Affichage extends React.Component {
    state={
        contacts:[]
      }
      componentDidMount(){
        fetch('http://localhost:3500/notes')
        .then(res =>res.json())
        .then((data)=>{
          this.setState({contacts:data})
        })
        .catch(console.log)
      }
    render(){

        return (
            <div>
            <Contacts contacts={this.state.contacts}/>
            </div>
          );
    }

}
