import React, { Component } from 'react'

export class AuthPage extends Component {
    render() {
        return (
            <div>



            <div class="loader">
      <div class="loading-animation"></div>
    </div>

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
                <input type="email" name="login-email" placeholder="Email Address" class="form-control"/>
              </div>
              <div class="form-group">
                <input type="password" name="login-password" placeholder="Password" class="form-control"/>
                <small><a href="#">Forgot your password?</a>
                </small>
              </div>
              <div class="form-group">
                <button class="btn-block btn btn-primary" type="submit">Sign in</button>
              </div>
              <div class="custom-control custom-checkbox">
                <input type="checkbox" class="custom-control-input" id="login-remember"/>
                <label class="custom-control-label text-small text-muted" for="login-remember">Keep me signed in</label>
              </div>
              <hr/>
              <div class="text-center text-small text-muted">
                <span>Don't have an account yet? <a href="#">Create one</a>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
 



            </div>
        )
    }
}

export default AuthPage
