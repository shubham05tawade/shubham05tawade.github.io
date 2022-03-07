import React, {useState, useEffect} from 'react';
import post2Img from '../assets/password-stength-checker.png';
import './Post.css';
import {Link} from 'react-router-dom';


function Post2() {
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
    <title>Password Strength Check</title>
  </head>
  <body>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-md-5">
                <h4 class="h4">Password Strength Checker</h3>
                <hr>
                <form>
                    <div class="form-group">
                        <label for="username">Your email</label>
                        <input type="email" class="form-control" id="email">
                    </div>
                    <div class="form-group">
                        <label for="username">Your password</label>
                        <input type="password" class="form-control" id="password" oninput="checkPasswordStrength()">
                    </div>
                    <div class="form-group" id="progressGroup" style="display: none;">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" id="progressbarvalue" style="width: 0%;" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                    </div>
                    <button class="btn btn-submit">Sign Up</button>
                </form>
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
body{
    width: 100%;
    height: 100vh;
    background-color: #B9D9EB;
}
.container .col-md-5{
    margin-top: 7rem;
    width: 100%;
    background-color: #fff;
    padding-left: 2rem;
    padding-right: 2rem;
    padding-top: 1rem;
    padding-bottom: 1rem;
}
.container .col-md-5 h4{
    text-align: center;
    margin-top: 1rem;
    font-family: Arial, Helvetica, sans-serif;
}
.container .col-md-5 hr{
    height: 1.3px;
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    background-color: #FF004D;
}
.container .col-md-5 form{
    margin-top: 2rem;
}
.container .col-md-5 .btn-submit{
    background-color: #FF004D;
    color: #fff;
    margin-bottom: 1.3rem;
    text-transform: uppercase;
}
.container .col-md-5 .progress{
    margin-bottom: 1rem;
    width: 60%;
}
.container .col-md-5 .progress-bar{
    transition: all 0.3s ease-in-out;
}


/** Small devices **/
@media ( max-width: 320px) { 
    .container{
        width: 87%;
    }
    .container .col-md-5 h4{
        font-size: 1rem;
    }
    .container .col-md-5 hr{
        width: 90%;
    } 
    .container .col-md-5{
        margin-top: 4rem;
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
        padding-left: 1.3rem;
        padding-right: 1.3rem;
    }
    .container .col-md-5 form{
        margin-top: 2.3rem;
    }

}

/* Extra small devices (portrait phones, less than 576px) */
@media ( min-width: 321px) and (max-width: 575.98px) { 
    .container{
        width: 92%;
    }
    .container .col-md-5 h4{
        font-size: 1.2rem;
    }
    .container .col-md-5 hr{
        width: 90%;
    } 
    .container .col-md-5{
        padding-top: 1.5rem;
        padding-bottom: 1.5rem;
    }
    .container .col-md-5 form{
        margin-top: 2.3rem;
    }

}
`;

      var js = `let small_alpha = 0;
        let big_alpha = 0;
        let special_char = 0;
        let num_char = 0;
        let pass_size = 0;
        let small_alpha_pattern = new RegExp("[a-z]");
        let big_alpha_pattern = new RegExp("[A-Z]")
        let special_char_pattern = new RegExp("[!@#$%^&*]");
        let num_char_pattern = new RegExp("[0-9]");
        function checkPasswordStrength(){
            let password = document.getElementById('password').value;
            if(password==""){
                small_alpha = 0;
                big_alpha = 0;
                special_char = 0;
                num_char = 0;
                pass_size = 0;
                document.getElementById("progressGroup").style.display="none";
            }
            else{
                document.getElementById("progressGroup").style.display="flex";
            }
            if((small_alpha_pattern).test(password)){
                small_alpha = 1;
            }
            if((big_alpha_pattern).test(password)){
                big_alpha = 1;
            }
            if((special_char_pattern).test(password)){
                special_char = 1;
            }
            if((num_char_pattern).test(password)){
                num_char = 1;
            }
            if(password.length > 8 && password.trim()!=""){
                pass_size = 1;
            }

            let percentage = ((small_alpha + big_alpha + special_char + num_char + pass_size) / 5) * 100;
            if(password!=""){
                document.getElementById("progressbarvalue").style.width = percentage + "%";
            }
            else{
                document.getElementById("progressbarvalue").style.width = "0%";
            }
            if(percentage<=30){
                document.getElementById("progressbarvalue").style.backgroundColor = "#f00";
            }
            else if(percentage>30 && percentage<=70){
                document.getElementById("progressbarvalue").style.backgroundColor = "#ff0";
            }
            else{
                document.getElementById("progressbarvalue").style.backgroundColor = "#0f0";
            }
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
            <h1 class="h1">Password Strength Checker</h1>
            <p class="lead text-muted">Post Date: 1st August 2020 | Framework/Language: Html, Css, Javascript | Level: beginner</p>
            <hr/>
            <p>In a recent study conducted by Google, <i>"59% of Americans have included a name or date of birth in their passwords for online accounts"</i>. This information can be incorporated from your social media account and hence you can be the easy victim for a scoial engineer's to uncover your password. Most of the people still uses easy-to-crack passwords like "qwerty" and "123456". It would hardly take a minute for an hacker to crack such passwords by using brute-force attack. It is not only the responsibility of an user but also a developer to help user to create strong passwords.</p>
            <p>Your password must fulfil the following criterion to get acknowledged as strong password:</p>
            <ul>
            <li>Number of characters must be greater than or equal to 8.</li>
            <li>Combination of small and big alphabets.</li>
            <li>Contains atleast one number from 0 to 9.</li>
            <li>Contains atleast one special characters like @(#*.</li>
            </ul>
            <p>To check live demo of our project, please <Link to={{ pathname: "https://blog-assets.web.app/password-strength/" }} target="_parent"><a>click here</a></Link></p>
            <figure class="figure text-center">
            <center><img src={post2Img} alt="" class="figure-img"/></center>
            <figcaption class="figure-caption">Fig.1 - Password Strength Checker</figcaption>
            </figure>
            <p>To start with our project, there are few resoucres which we will need for developing our application. Make sure you have them installed on your system.</p>
            <p>
            <ul>
                <li>Visual Studio Code / Notepad</li>
                <li>Google Chrome</li>
            </ul>
            </p>
            <p>In this project, our focus is on JavaScript and not on the design of an app. To ease our job, we are going to use bootstrap in our project for styling purposes. In HTML, we will be creating a container and place our form inside it. The form will have two input fields, one for email id and another for a password. A button will be placed at the end of the form to accept the data. For measuring the strength of the password we will be using the <span class="highlight">progress element</span> of html. Initially, we will hide this element and once the user enters a password we will display it below the input field. The progress value will be changed through the script.</p>
            <p>To write any script in HTML we have to mention script tags and write our code in between them. Please refer to my <a href="../blog/post1.html">first post</a> to know the basics about javascript. In our script, we will declare five boolean variables for checking whether a string contains small alphabets, big alphabets, special characters, numbers, and also the length of a string. Initially, we will set them to false. We will be creating one function to check those conditions and if the condition satisfies, we will mark set those booleans to true. The function will trigger when the user presses any key in password field and for this, we will be using <span class="highlight">oninput</span> event in javascript.</p>
            <p>We will calculate percentage of progress bar width by taking an average of the conditions which satisfies the strong password condition. We will assign different background colour to the progress bar element depending upon the percentage. For example, if percentage that satisfies the strong password condition is below 30% then we will assign red background and if it falls between 30% to 70% then we will assign yellow background and if it is greater than 70% then we will assigngreen background.</p>
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
                        <a class="btn btn-success" href="https://github.com/shubham05tawade/filtercodes/tree/master/password-strength">VIEW ON GITHUB</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post2
