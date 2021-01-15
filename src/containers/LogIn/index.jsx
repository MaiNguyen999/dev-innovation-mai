import React from 'react';
import { Link } from 'react-router-dom';
import FacebookIcon from 'mdi-react/FacebookIcon';
import GooglePlusIcon from 'mdi-react/GooglePlusIcon';
import LogInForm from './components/LogInForm';
import { Button } from 'reactstrap';

function googleLogin(){
  console.log("clicked");
};

const LogIn = () => (
  
  <div className="account">
    <div className="account__wrapper">
      <div className="account__card">
        <div className="account__head">
          <h3 className="account__title">Welcome to
            <span className="account__logo"> Wawanesa
              <span className="account__logo-accent">DEV</span>
            </span>
          </h3>
          <h4 className="account__subhead subhead">Start your business easily</h4>
        </div>
        <LogInForm onSubmit />
        <div className="account__or">
          <p>Or Easily Using</p>
        </div>
        <div className="account__social">
          <Link
            className="account__social-btn account__social-btn--facebook"
            to="/pages/one"
          ><FacebookIcon />
          </Link>
          <Button
            className="account__social-btn account__social-btn--facebook"
            onClick={googleLogin}
          ><FacebookIcon />
          </Button>
          
          <Button
            className="account__social-btn account__social-btn--google"
            onClick={googleLogin}
          ><GooglePlusIcon />
          </Button>
          
        </div>
      </div>
    </div>
  </div>
);

export default LogIn;

// if you want to add select, date-picker and time-picker in your app you need to uncomment the first
// four lines in /scss/components/form.scss to add styles
