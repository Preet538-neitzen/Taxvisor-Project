import React, { Component } from 'react'
import fire from '../Config/fbConfig'
import firebase from 'firebase/app'
import LandingPage from '../LandingPage/LandingPage'
import DetailedStory from './DetailedStory'

export class SignUpPage extends Component {

  constructor(props){
    super(props);
    this.state={
      user: null,
      email: '',
      password: '',
      username:'',
      Occupation:'',
      PhoneNumber:'',
      valueToBePassed:'',
      text:'',
      newVT:'',
      myStory:'',
      allStories:[],
      people:[],
      peopleId:[],
      items:[],
      readFullStory:false,
      storyDescription:'',
      newDataObj:{
        story:'',
        name:'',
        storyDescription:'',
      },
      bool:null
    }
    this.handleChangeEmail = this.handleChangeEmail.bind(this)
    this.handleChangePass = this.handleChangePass.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.login = this.login.bind(this);
    this.signup = this.signup.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this)
    this.readFullStory = this.readFullStory.bind(this);
  
  }
  handleChange(e){
    this.setState({[e.target.name]: e.target.value});
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
      }).then((u)=>{})
      .catch((error) => {
          console.log(error);
        })
    }

    

    componentDidMount(){
      console.log(this.state.newDataObj)
      let self = this
       
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

            if(localStorage.getItem('Username') == "null"){
              if(this.state.username != ""){
              localStorage.setItem("Username",this.state.username)
              }
              if(this.state.username == ""){
                var db = firebase.firestore();
                  var docRef = db.collection("users").doc(this.state.user.uid);

                  docRef.get().then(function(doc) {
                      if (doc.exists) {
                         localStorage.setItem("Username",doc.data())
                         
                      }
                  })
              }
            }
            if(localStorage.getItem('Username') != "null"){
              this.setState({
                valueToBePassed: localStorage.getItem('Username')
              })
            }
        console.log(uid)
      
      



        var db = firebase.firestore();
if(user){
  if(this.state.username != ""){
        db.collection("users").doc(this.state.displayName).set({
        name: localStorage.getItem('Username'),
        }).then(function() {
          console.log("Data Ojbect for new User created");
        });}





if(this.state.username == ""){
  var docRef = db.collection("cities").doc("SF");

docRef.get().then(function(doc) {
    if (doc.exists) {
  db.collection("users").doc(this.state.displayName).set({
    name: doc.data().name,
    }).then(function() {
      console.log("Data Ojbect for new User created");
     
    })
  
    } 
})

}
      }

      var docRef = db.collection("stories").doc(this.state.user.uid);

      docRef.get().then(function(doc) {
          if (doc.exists) {
            
            var hello = doc.data().story;
            console.log(hello)
            self.setState({myStory:hello})
              console.log("Document data:", doc.data().story);
          } else {
              // doc.data() will be undefined in this case
              console.log("No such document!");
          }
      }).catch(function(error) {
          console.log("Error getting document:", error);
      });
   

      db.collection("stories").get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            // console.log(doc.id, " => ", doc.data().story);
            self.setState(prevState => ({
              newDataObj: {                   // object that we want to update
                  ...prevState.newDataObj,    // keep all other key-value pairs
                  name: doc.id,
                  story:doc.data().story,
                  storyDescription:doc.data().storyDescription,
                  bool: doc.data().show       // update the value of specific key
              },
          }))
          self.setState({ allStories: [...self.state.allStories,self.state.newDataObj ] }) //simple value
          // self.setState({newDataObj:doc.id=doc.data()})
          console.log(self.state.allStories)
      
          
            self.setState({ peopleId: [...self.state.peopleId, doc.id ] }) //simple value
            self.setState({storyDescription : doc.data().storyDescription})
                
        }); 
        console.log(self.state.bool)
        // console.log(self.state.allStories)
  // console.log(self.state.peopleId)
  console.log(self.state.storyDescription)
        
    });   



  

  




    var docRef = db.collection("users").doc(this.state.user.uid);

    docRef.get().then(function(doc) {
        if (doc.exists) {
          var hello = doc.data().name;
          self.setState({newVT:hello})
            console.log("Document data:", doc.data());
        } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
        }
    }).catch(function(error) {
        console.log("Error getting document:", error);
    });
    
    
        } else {
          this.setState({ user: null });
          if(localStorage.getItem('Username') != null){
            localStorage.setItem("Username",null)

          }
          this.setState({valueToBePassed:''})
        }
      });

    }

    // componentDidMount() {

    //   fire.auth().onAuthStateChanged((user) => {
    //   if(user){
    //     if(localStorage.getItem('Username') == "null"){
    //       localStorage.setItem("Username",this.state.username)
    //     }
    //   }
    // })
    // }
    submit=(e)=>{
      let self = this
      e.preventDefault();
     console.log('hi')
     this.setState({text:""})
    
    
    
    }


    logout(){
      firebase.auth().signOut();
    }
    
    handleChange(e){
      this.setState({[e.target.name]: e.target.value});
  }

  readFullStory(){
    let self = this
    self.setState({readFullStory:!this.state.readFullStory})
//     var db = firebase.firestore();
//     db.collection("stories").doc(self.state.people).update({
//     show:false
//   }).then(function() {
//     console.log("Document successfully updated!");

// });
  }
    render() {



        return (<>
          {this.state.user?(<><p>Welcome {this.state.user.uid} 
            <LandingPage uid={this.state.newVT}/>
            {/* <form>
            <div class="form-group">
                <input type="text" id="text" value={this.state.text} onChange={this.handleChange} name="text" placeholder="text" class="form-control"/>
              </div>
              <div class="form-group">
                <button class="btn-block btn btn-primary" type="submit" onClick={this.submit}>Sign in</button>
              </div>
            </form> */}


            
          
                        {/* {this.state.peopleId.map((person, index) => (
        <p>Story: {person}!</p>
    ))} */}
      {this.state.allStories.map((person, index) => (<>
        <div class="card-body align-items-start">
                            <div class="mb-3">
                                <img class="icon icon-md" src="assets\img\logos\intercom.svg" alt="Icon"/> 
                            </div>
                            <p>
                            {person.story} {person.name}
                            {person.bool?(<><p><DetailedStory/></p></>):null}
                            </p>
                            <button onClick={this.readFullStory}>Read Story</button>
                           
                        </div>
      </>
    ))}
           <button onClick={this.logout}>Logout</button></p></>):(<>
            <div>
            <div class="loader">
      <div class="loading-animation"></div>
    </div>

    <section class="row no-gutters min-vh-100 p-0">
      <div class="col-lg-4 bg-primary-3 d-flex justify-content-end">
        <img src="assets\img\article-9.jpg" alt="Image" class="bg-image"/>
        <div class="divider divider-vertical d-none d-lg-block">
          <img src="assets\img\dividers\divider-vertical-1.svg" alt="graphical divider" data-inject-svg=""/>
        </div>
        <div class="divider divider-vertical d-none d-lg-block">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" width="100%" height="100%" version="1.1" class="injected-svg" data-src="assets\img\dividers\divider-vertical-1.svg">
     <path d="M0,0 L100,0 L100,100 L0,100 C66.6666667,83.3333333 100,66.6666667 100,50 C100,33.3333333 66.6666667,16.6666667 0,0 Z" fill="#ffffff"></path>
</svg>
        </div>
      </div>
      <div class="col px-5 position-relative d-flex align-items-center">
        <div class="row justify-content-center w-100">
          <div class="col-md-8 col-lg-7 col-xl-6">
            <div class="text-center mb-4">
              <h1 class="mb-1">Create Account</h1>
              <span>No credit card required</span>
            </div>
            <form>
            <div class="form-group">
                <input type="Name" id="username" value={this.state.username} onChange={this.handleChange} name="username" placeholder="username" class="form-control"/>
              </div>
              <div class="form-group">
                <input type="Occupation" value={this.state.Occupation} onChange={this.handleChange} name="Occupation" placeholder="Occupation" class="form-control"/>
              </div>
              <div class="form-group">
                <input type="PhoneNumber" value={this.state.PhoneNumber} onChange={this.handleChange} name="PhoneNumber" placeholder="PhoneNumber" class="form-control"/>
              </div>
              <div class="form-group">
                <input type="Phone Number" value={this.state.email} onChange={this.handleChangeEmail} name="signup-email" placeholder="Email Address" class="form-control"/>
              </div>
              <div class="form-group">
                <input type="password" value={this.state.password} onChange={this.handleChangePass} name="signup-password" placeholder="Password" class="form-control"/>
                <small class="text-muted">Must be at least 8 characters</small>
              </div>
              {/* <div class="form-group">
                <input type="password" value={this.state.confirmedPassword} name="signup-password-confirm" placeholder="Confirm password" class="form-control"/>
              </div> */}
              <div class="form-group">
                <button class="btn-block btn btn-primary" type="submit" onClick={this.signup}>Sign in</button>
              </div>
              <div class="form-group">
                <button class="btn-block btn btn-primary" type="submit" onClick={this.login}>Log in</button>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="signup-agree"/>
                <label class="custom-control-label text-small text-muted" for="signup-agree">I agree to the <a href="#">Terms &amp;
        Conditions</a>
                </label>
              </div>
              <hr/>
              <div class="text-center text-small text-muted">
                <span>Already have an account yet? <a href="/SignIn">Sign In</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
            </div>
            </>)}
           
            </>
        )
    }
}

export default SignUpPage
