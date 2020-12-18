import React from 'react';
import Logo from '../components/Logo';
import IdeaForm from '../components/IdeaForm';
import ExtraOptions from '../components/ExtraOptions';
import LoginForm from '../components/LoginForm';
import axios from 'axios';



class Start extends React.Component {
  idInput
  titleInput
  descriptionInput
  ideaInput
  tagsInput
  addedusersInput
  star1
  star2
    constructor(props) {
        super(props);
          this.idInput = "";
          this.titleInput = "";
          this.descriptionInput = "";
          this.ideaInput = "";
          this.tagsInput = "";
          this.addedusersInput = "";
          this.star1 = 0;
          this.star2 = 0;

        this.saveIdea = this.saveIdea.bind(this);
        this.handleStar1 = this.handleStar1.bind(this);
        this.handleStar2 = this.handleStar2.bind(this);
        this.handleIdInput = this.handleIdInput.bind(this);
        this.handleTitleInput = this.handleTitleInput.bind(this);
        this.handledescriptionInput = this.handledescriptionInput.bind(this);
        this.handleIdeaInput = this.handleIdeaInput.bind(this);
        this.handleTagsInput = this.handleTagsInput.bind(this);
        this.handleAddeduserInput = this.handleAddeduserInput.bind(this);
    }

    componentDidMount(){
      axios.get('http://localhost:46897/api/users').then(response => (console.log(response)));
    }


    handleIdInput = (e) => { this.idInput = e  }
    handleTitleInput = (e) => { this.titleInput = e }
    handledescriptionInput = (e) => { this.descriptionInput = e }
    handleIdeaInput = (e ) => { this.idInput = e }
    handleTagsInput = (e ) => { this.tagsInput = e }
    handleAddeduserInput = (e) => { this.addedusersInput = e }
    handleStar1 = (e) => { this.star1 = e }
    handleStar2 = (e) => { this.star2 = e }

    saveIdea(){
        console.log(this.idInput, this.titleInput, this.descriptionInput, this.ideaInput);
    }

    render(){
    return (
      <body>
      <Logo />
      <IdeaForm sendMethod={this.saveIdea} idInput={this.handleIdInput} titleInput={this.handleTitleInput} descriptionInput={this.handledescriptionInput} ideaInput={this.handleIdeaInput}/>
      <ExtraOptions tagsInput={this.handleTagsInput} addeduserInput={this.handleAddeduserInput} handleStar1={this.handleStar1} handleStar2={this.handleStar2}/>
      <LoginForm />
      </body>
    );
  };  
}
export default Start;



