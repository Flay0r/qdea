import React from 'react';
import '../styles/loginform.css';

class LoginForm extends React.Component {
    AdminBg;
    BgClose;
    WhiteBox;

    constructor(props){
        super(props);
        this.AdminBg = React.createRef();
        this.BgClose = React.createRef();
        this.WhiteBox = React.createRef();
    }

    closeAdmin(){
        this.AdminBg.current.style.display = 'none'
        this.BgClose.current.style.display = 'none'
    }
    
    openAdmin(){
        this.AdminBg.current.style.display = 'flex'
        this.BgClose.current.style.display = 'flex'
    }

    render(){
    return(
        <>
            <section className="Login"><button className="OpenAdminLog" id="OpenAdminLog" onClick={() => this.openAdmin()}>Manager Login</button></section>
            <section className="AdminBg" id="AdminBg" ref={this.AdminBg}>
                <section className="whiteBox">
                    <section className="X" onClick={() => this.closeAdmin()}>+</section>
                    <section className="values">
                        <p>Username</p>
                        <input type="text" name="" id="username" />
                        <p>Password</p>
                        <input type="text" name="" id="Password" />
                        <button className="submitLog">Login</button>
                    </section>
                </section>
            </section>
            <section className="BgClose" id="BgClose" ref={this.BgClose} onClick={() => this.closeAdmin()}></section>
        </>
    )
    };
}
export default LoginForm