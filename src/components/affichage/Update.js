import React from 'react'

export default class Update extends React.Component {
    constructor(props){
        super(props)
        this.state={
            contacts:[]
        }
    }
componentDidMount(){
    fetch('http://localhost:3500/notes/'+this.state.id).then((res)=>{
        res.json().then((result)=>{
            console.warn(result)
            this.setState({title:result.title,
                content:result.content
            })
        })
    })
}
updateData(noteId){
    fetch('http://localhost:3500/notes/'+noteId,{
        method:"PUT",
        headers:{
            'Content-Type':'application/json'
        },  
        body:JSON.stringify(this.state)

    }).then((result)=>{
        result.json().then((res)=>{
            alert("Restaurant has heen update");
        })
    })
}
    render(){
  
        return (
            <div className="form-container">
             <form onSubmit={this.updateData}>
            <div className="form-group" >
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="title" className="form-control" name="title" onChange={(e)=>{this.setState({title:e.target.value})}} value={this.state.title}/>
         </div>
         <div className="form-group">
            <label htmlFor="content">Content</label>
            <textarea type="text" className="form-control" name="content" onChange={(e)=>{this.setState({content:e.target.value})}}  value={this.state.content} />
         </div><br/><br/>
         <button  class="" onClick={()=>this.updateData(this.state.noteId)}>UPDATE</button><br/><br/>
         </form>
            </div>
        )
    }
  
}
