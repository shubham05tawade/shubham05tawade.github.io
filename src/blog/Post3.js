import React, {useState, useEffect} from 'react';
import post3Img from '../assets/responsive-web-form.png';
import './Post.css';
import {Link} from 'react-router-dom';


function Post3() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    var html= `<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="./css/style.css">
    <title>Form Designs</title>
  </head>
  <body>
    <div class="container">
        <div class="row container-row justify-content-around">
            <div class="col-md-10">
                <div class="row btn-switch">
                    <div class="col-md-12">
                        <div class="row justify-content-center" onclick="toggleForm()">
                            <div class="col-3 signup-switch mr-2" id="signup-block"></div>
                            <div class="col-3 login-switch" id="login-block"></div>
                        </div>
                    </div>
                </div>
                <div class="row justify-content-around">
                    <div class="col-md-7 signup-container" id="signup-box">
                        <h5 class="h5">FOR NEW USER</h5>
                        <hr>
                        <form>
                            <div class="form-row">
                                <div class="col-md-6">
                                    <label for="fname">First Name</label>
                                    <input type="text" class="form-control rounded-0" id="fname">
                                </div>
                                <div class="col-md-6">
                                    <label for="lname">Last Name</label>
                                    <input type="text" class="form-control rounded-0" id="lname">
                                </div>
                            </div>
                            <div class="form-group mt-3">
                                <label for="email">Your email</label>
                                <input type="email" class="form-control rounded-0" id="email">
                            </div>
                            <div class="form-group">
                                <label for="password">Your password</label>
                                <input type="password" class="form-control rounded-0" id="password">
                            </div>
                            <div class="form-group">
                                <label for="phone">Your phone</label>
                                <input type="text" class="form-control rounded-0" id="phone">
                            </div>
                            <div class="form-group">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                    <label class="form-check-label" for="inlineCheckbox1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eos ducimus reiciendis, molestias nobis dicta quisquam quas soluta, cupiditate repudiandae corporis labore? Quod dolore similique.</label>
                                  </div>
                            </div>
                            <button class="btn btn-form rounded-0">Sign Up</button>
                        </form>
                    </div>
                    <div class="col-md-4 login-container" id="login-box">
                        <h5 class="h5">FOR MEMBERS</h5>
                        <hr>
                        <form>
                            <div class="form-group">
                                <label for="email">Your email</label>
                                <input type="text" class="form-control rounded-0" id="email">
                            </div>
                            <div class="form-group">
                                <label for="password">Your password</label>
                                <input type="password" class="form-control rounded-0" id="password">
                            </div>
                            <div class="form-group">
                                <div class="form-check form-check-inline">
                                    <input class="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1">
                                    <label class="form-check-label label-remember" for="inlineCheckbox1">Remember me</label>
                                </div>
                                <div class="form-check form-check-inline">
                                    <a href="#">Forgot Password?</a>
                                </div>
                            </div>
                            <buton class="btn btn-form rounded-0">Log In</buton>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
  </ body>
</ html>`;
      var css = `*{
    box-sizing: border-box;
}
html, body{
    width: 100%;
    height: 100vh;
    background-color: #d3f2bf;
}
.container .col-md-10{
    margin-top: 3rem;
}
.signup-container{
    background-color: #fff;
    padding-top: 1.3rem;
    padding-bottom: 1.3rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
}
.login-container{
    background-color: #fff;
    padding-top: 1.3rem;
    padding-bottom: 1.3rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;
    max-height: 360px;
}
.container-row h4{
    font-size: 2rem;
}
.container-row .lead{
    font-size: 0.7rem;
    font-weight: 500;
}
.container-row hr{
    margin-bottom: 1.7rem;
    background-color: #a18f92;
    height: 1.3px;
}
.container-row form{
    font-size: small;
}
.form-check-label{
    margin-top: -0.2rem;
    margin-left: 0.3rem;
    font-size: 0.6rem;
    font-weight: 500;
    font-stretch: extra-condensed;
}
.container form a{
    font-size: 0.8rem;
    text-decoration: underline;
}
.container form input{
    background-color: #FBE9E9;
    border: none;   
}
.container form input:focus{
    box-shadow: none;
    background-color: #fff;
    border: 2px solid #F2B7B7;
}
.btn-form{
    background-color: 	#5f6174;
    color: 	#fff3d5;
}
.btn-form:hover{
    box-shadow: 0px 3px 8px #a7a7a7;
    color: #fff3d5;
}
.label-remember{
    font-size: 0.8rem;
}
.btn-switch{
    display: none;
    margin-bottom: 1.3rem;
}
.btn-switch .col-md-12 .row{
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
    padding: 0.4rem 0.6rem;
    border: 1px solid #5f6174;
    border-radius: 2rem;
    background-color: #5f6174;
    cursor: pointer;
}
.signup-switch{
    width: 100%;
    height: 2rem;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0px 3px 3px #424351;
}
.login-switch{
    width: 100%;
    height: 2rem;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 0px 3px 3px #424351;
}

@media (max-width: 575.98px) { 
    .container{
        width: 90%;
    }
    .container form .form-row .col-md-6:nth-child(1){
        margin-bottom: 1rem;
    }
    .btn-form{
        width: 100%;
        text-align: center;
    }
    .btn-switch{
        display: block;
    }
    .signup-container{
        margin-bottom: 2rem;
    }
    .login-container{
        margin-bottom: 2rem;
        display: none;
    }
    .container .col-md-10{
        margin-top: 1.7rem;
    }
 }

@media (min-width: 576px) and (max-width: 767.98px) { 
    .btn-switch{
        display: block;
    }
 }

@media (min-width: 768px) and (max-width: 991.98px) {  }

@media (min-width: 992px) and (max-width: 1199.98px) {  }

@media (min-width: 1200px) {  }`;

      var js = `document.getElementById('login-block').style.visibility="hidden";
        var loginShow = false;
        function toggleForm(){
            loginShow = !loginShow;
            if(loginShow){
                document.getElementById('signup-box').style.display="none";
                document.getElementById('signup-block').style.visibility="hidden";
                document.getElementById('login-box').style.display="block";
                document.getElementById('login-block').style.visibility="visible";
            }
            else{
                document.getElementById('signup-box').style.display="block";
                document.getElementById('signup-block').style.visibility="visible";
                document.getElementById('login-box').style.display="none";
                document.getElementById('login-block').style.visibility="hidden";
            }`;

    const [code, setCode] = useState(html);
    const showHtml = () => {
        setCode(html)
    }

    const showJs = () => {
        setCode(js)
    }

    const showCss = () => {
        setCode(css)
    }

    return (
        <div className="post container-fluid">
            <div class="container post-container" id="post">
            <h1 class="h1">Responsive Web Forms</h1>
            <p class="lead text-muted">Post Date: 2nd August 2020 | Framework/Language: Html, Css, Javascript | Level: beginner</p>
            <hr/>
            <p>In today's world, people access website from various devices like desktops, smartphones, tablets, or in some cases even on big screen. They all have different dimensions and hence we need to code for those different devices separately. Responsive web design is the process where you write code separately for different standard devices to enrich user experience. Responsive web design is a vast topic and hence to cover it in this post is kind of impossible but we will be learning a part of it which can help you to understand it more.</p>
            <p>In this project, we will be creating a page where users can either sign up i.e create an account or sign in i.e. login into the account. For large size devices like laptops, desktops, or projectors, we will display both form next to each other and for small and medium size devices like smartphones or tablets, we will display one form at an instance and switch form with help of toggler.</p>
            <p>To check live demo of our project, please <Link to={{ pathname: "https://blog-assets.web.app/form-design/" }} target="_parent"><a>click here</a></Link></p>
            <figure class="figure text-center">
                <center><img src={post3Img} alt="" class="figure-img"/></center>
                <figcaption class="figure-caption">Fig.1 - Responsive Web Forms</figcaption>
            </figure>
            <p>To start with our project, there are few resoucres which we will need for developing our application. Make sure you have them installed on your system.</p>
            <p>
                <ul>
                <li>Visual Studio Code / Notepad</li>
                <li>Google Chrome</li>
                </ul>
            </p>
            <p>In this project, our main focus is on the design of the page. To ease our job, we are going to use bootstrap in our project for styling purposes. In HTML, we will create two columns inside a container for sign up and sign in the block. The signup block will have five input fields for accepting first name, last name, email id, password, and contact. Below the fifth input field, we will have a checkbox for accepting terms and conditions. In the end, we will have a button to create an account. The login block will have just two input fields for accepting email id and password and a button to login into the account.</p>
            <p>The last part which we will include in our HTML is toggler for small and medium-size devices. The toggler will be on the top of both the columns. To create a toggler, we just need to create two-column of fixed size so that one can click on them. Consider them as two buttons which will be displayed one at a time and after clicking on it sign up or sign in block will appear on the screen.</p>
            <p>For large devices, we need to hide the toggler so we will set the display property of toggler to none. We need to set this property for large devices in the styling sheet and for this, we will be using media queries. Media queries are blocks that are used to write styles for different dimensions.</p>
            <ul>
                <li>@media (min-width: 576px) </li>
                <li>@media (min-width: 768px) </li>
                <li>@media (min-width: 992px) </li>
                <li>@media (min-width: 1200px)</li>
            </ul>
            <p>We will be using this syntax in our code. The min-width property states that the style written inside the block will be applied to the devices whose dimensions is greater than or equal to "min-width". To know more about media queries, you can follow the link mentioned below</p>
            <p><a href="https://www.w3schools.com/cssref/css3_pr_mediaquery.asp">CSS media queries</a></p>
            <p>In the end, we will be using a script to toggle our forms on low size devices. The toggler has two blocks, we need to add onclick event on them to fire a function. Suppose we clicked on the first block then signin container should be displayed and if we clicked on the second block then signup container should be displayed. Finally, it should work like a switch.</p>
            <p>Please find below complete source of code for our application</p>
                <div class="card" id="editor">
                    <div class="card-header">
                        <h5 class="card-title">Password Strength Checker</h5>
                        <span class="card-top-btn">
                            <button class="btn btn-danger" onClick={showHtml}>HTML</button>
                            <button class="btn btn-info" onClick={showCss}>CSS</button>
                            <button class="btn btn-warning" onClick={showJs}>JS</button>
                        </span>
                    </div>
                    <textarea class="card-text card-body form-control" id="codearea" value={code} rows="20"></textarea>
                    <div class="card-footer text-right">
                        <a class="btn btn-success" href="https://github.com/shubham05tawade/filtercodes/tree/master/form-design">VIEW ON GITHUB</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post3;
