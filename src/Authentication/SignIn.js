import React, { Component } from 'react'
import fire from '../Config/fbConfig'
import firebase from 'firebase/app'

export class SignIn extends Component {

    constructor(props){
        super(props);
        this.state={
          user: null,
          email: '',
          password: '',
          name:'Preet',
          displayName:'',
        }
        this.handleChangeEmail = this.handleChangeEmail.bind(this)
        this.handleChangePass = this.handleChangePass.bind(this);
        this.login = this.login.bind(this);
        this.signup = this.signup.bind(this);
      
      }
      
      
   
      
        handleChangeEmail(e){
          this.setState({email:e.target.value})
        }

        handleChangePass(e){
          this.setState({password:e.target.value})
        }


        login(e) {
          e.preventDefault();
          fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
          }).catch((error) => {
              console.log(error);
            });
        }
      
      
      
        signup(e){
          e.preventDefault();
          fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
          }).then((u)=>{console.log(u)})
          .catch((error) => {
              console.log(error);
            })
        }
      
      componentWillMount(){
      
      
       
        fire.auth().onAuthStateChanged((user) => {
       
          if (user) {
            this.setState({ user });
            var user = firebase.auth().currentUser;
            var name, email, photoUrl, uid, emailVerified,data;
            
            data = this.state.displayName
              name = user.displayName;
              email = user.email;
              photoUrl = user.photoURL;
              emailVerified = user.emailVerified;
              uid = user.uid;  
              this.setState({displayName:uid})
              this.setState({email:email})
          console.log(uid)
        
      
      
       
    
          } else {
            this.setState({ user: null });
          }
        });
      }

      logout(){
        firebase.auth().signOut();
      }

      // componentWillMount() {
      //   if(this.state.user){
      //     var db = firebase.firestore();
      //     db.collection("users").doc(this.state.user.uid).update({
      //       name:this.state.name,
      //     }).then(function() {
      //       console.log("Frank food updated");
      //     });
      //   }
      // }
      

    render() {
        return (
          <>{this.state.user?(<>Welcome {this.state.user.uid}
          <button onClick={this.logout}>Logout</button>
          
          </>):(<><div>
            <section class="min-vh-100 py-5">
      <div class="container">
        <div class="row justify-content-center mb-md-6">
          <div class="col-auto">
            <a href="index.html">
              <img src="assets\img\logo.svg" alt="Leap"/>
            </a>
          </div>
        </div>
        <div class="row justify-content-center pt-6">
          <div class="col-xl-4 col-lg-5 col-md-6">
            <div class="text-center mb-4">
              <h1 class="mb-1">Welcome back</h1>
              <span>Enter your account details below</span>
            </div>
            <form>
              <div class="form-group">
                <input type="email" name="login-email" value={this.state.email} onChange={this.handleChangeEmail} placeholder="Email Address" class="form-control"/>
              </div>
              <div class="form-group">
                <input type="password" value={this.state.password} onChange={this.handleChangePass} name="login-password" placeholder="Password" class="form-control"/>
                <small><a href="#">Forgot your password?</a>
                </small>
              </div>
              <div class="form-group">
                <button class="btn-block btn btn-primary" onClick={this.login} type="submit">Sign in</button>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="login-remember"/>
                <label class="custom-control-label text-small text-muted" for="login-remember">Keep me signed in</label>
              </div>
              <hr/>
              <div class="text-center text-small text-muted">
                <span>Don't have an account yet? <a href="/">Create one</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
            </div></>)}
           
            </>
        )
    }
}

export default SignIn
