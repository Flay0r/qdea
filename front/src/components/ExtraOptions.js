import React from "react";
import '../styles/extraoptions.css';
import '../styles/optionbuttons.css';

class ExtraOptions extends React.Component{
    hiddenArea;
    isOpen;    

    constructor(props){
        super(props);
        this.isOpen = false;
        this.hiddenArea = React.createRef();
    }

    handleStar1 = (e) => {
        this.props.handleStar1(e);
    }

    handleStar2 = (e) => {
        this.props.handleStar2(e);
    }

    toggleExtras(){
        if(this.isOpen === false){
            this.isOpen = true;
            this.hiddenArea.current.style.display = 'Flex'
        }
        else {
            this.isOpen = false;
            this.hiddenArea.current.style.display = 'none'
        }        
    }

    render(){
        return (
        <>
            <section className="hidden" ref={this.hiddenArea}>
            <link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" />
                <section className="hiddenStars">
                    <h4 className="Impact">Impact</h4>
                    <div className="stars1">
                        <form action="">
                            <input className="star star-5" id="star-5" type="radio" name="star" onClick={() => this.handleStar1(5)}/>
                            <label className="star star-5" htmlFor="star-5"></label>
                            <input className="star star-4" id="star-4" type="radio" name="star" onClick={() => this.handleStar1(4)}/>
                            <label className="star star-4" htmlFor="star-4"></label>
                            <input className="star star-3" id="star-3" type="radio" name="star" onClick={() => this.handleStar1(3)}/>
                            <label className="star star-3" htmlFor="star-3"></label>
                            <input className="star star-2" id="star-2" type="radio" name="star" onClick={() => this.handleStar1(2)}/>
                            <label className="star star-2" htmlFor="star-2"></label>
                            <input className="star star-1" id="star-1" type="radio" name="star" onClick={() => this.handleStar1(1)}/>
                            <label className="star star-1" htmlFor="star-1"></label>
                        </form>
                    </div>
                    <h4 className="Effort">Effort</h4>
                    <div className="stars2">
                        <form action="">
                            <input className="star star-5" id="star-10" type="radio" name="star" onClick={() => this.handleStar2(5)}/>
                            <label className="star star-5" htmlFor="star-10"></label>
                            <input className="star star-4" id="star-9" type="radio" name="star" onClick={() => this.handleStar2(4)}/>
                            <label className="star star-4" htmlFor="star-9"></label>
                            <input className="star star-3" id="star-8" type="radio" name="star" onClick={() => this.handleStar2(3)}/>
                            <label className="star star-3" htmlFor="star-8"></label>
                            <input className="star star-2" id="star-7" type="radio" name="star" onClick={() => this.handleStar2(2)}/>
                            <label className="star star-2" htmlFor="star-7"></label>
                            <input className="star star-1" id="star-6" type="radio" name="star" onClick={() => this.handleStar2(1)}/>
                            <label className="star star-1" htmlFor="star-6"></label>
                        </form>
                    </div>
                </section>
                <input className="AddUser" type="text" name="" id="" placeholder="Add more people to this idea" />    
                <input className="Tags" type="text" name="" id="" placeholder="Tags" />
            </section>
            <section className="buttons">
                <button>placeholder</button>
                <button>placeholder</button>
                <button>placeholder</button>
                <button className="advancedSettings" onClick={() => this.toggleExtras()}>Extra Options</button>
                <button>Ideas Overview</button>                
            </section>
            
        </>
        );
    }
  }
  export default ExtraOptions