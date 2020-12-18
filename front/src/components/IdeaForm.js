import React from 'react';
import '../styles/ideaform.css';



class IdeaForm extends React.Component {
    constructor(props) {
        super(props);        
    }

    save = () => {
        this.props.sendMethod()
    }

    render(){
        return(
        <>
            <section className="center">
                <input className="Id" type="text" name="" id="" placeholder="Name / Id" ref="idinput" onChange={(e) => this.props.idInput(e.currentTarget.value)}/>
                <input className="Title" type="text" name="" id="" placeholder="Title" onChange={(e) => this.props.titleInput(e.currentTarget.value)}/>
                <input className="Describtion" type="text" name="" id="" placeholder="Idea short description" onChange={(e) => this.props.descriptionInput(e.currentTarget.value)}/>
                <textarea className="Idea" placeholder="Talk about your idea"onChange={(e) => this.props.ideaInput(e.currentTarget.value)}></textarea>
                <button className="Btn" onClick={this.save}>Send</button>                
            </section>
        </>
        );
    }
}
export default IdeaForm;