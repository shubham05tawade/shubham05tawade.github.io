import React, {useState, useEffect} from 'react';
import Header from '../Header';
import './Post.css';
import post1Img from '../assets/javascript-calculator.png';
import {Link} from 'react-router-dom';

function Post1() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
var html = `<! doctype html>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Add Bootstrap CSS -->
    <link rel="stylesheet" href="css/style.css">
    <title>FilterCodes: Javascript Calculator</title>
  </head>
    <body>
    <div class="container-fluid">
        <div class="row pt-4 justify-content-around">
            <div class="col-md-6" id="calculator">
                <div class="row px-3 py-2" id="calculator-head">JavaScript Calculator</div>
                <div class="row px-5 py-3" id="result-section">
                    <div class="col-md-12" id="result">0</div>
                </div>
                <div class="row px-5 py-4 pb-3 text-center" id="calculator-body">
                    <div class="col-md-3">
                        <button class="btn" onclick="show('1')">1</button>
                    </div>
                    <div class="col-md-3">
                        <button class="btn" onclick="show('2')">2</button>
                    </div>
                    <div class="col-md-3">
                        <button class="btn" onclick="show('3')">3</button>
                    </div>
                    <div class="col-md-3">
                        <button class="btn" onclick="show('+')">+</button>
                    </div>
                    <div class="col-md-3">
                        <button class="btn" onclick="show('4')">4</button>
                    </div>
                    <div class="col-md-3">
                        <button class="btn" onclick="show('5')">5</button>
                    </div>
                    <div class="col-md-3">
                        <button class="btn" onclick="show('6')">6</button>
                    </div>
                    <div class="col-md-3">
                        <button class="btn" onclick="show('-')">-</button>
                    </div>
                    <div class="col-md-3">
                        <button class="btn" onclick="show('7')">7</button>
                    </div>
                    <div class="col-md-3">
                        <button class="btn" onclick="show('8')">8</button>
                    </div>
                    <div class="col-md-3">
                        <button class="btn" onclick="show('9')">9</button>
                    </div>
                    <div class="col-md-3">
                        <button class="btn" onclick="show('*')">*</button>
                    </div>
                    <div class="col-md-3">
                        <button class="btn" onclick="show('0')">0</button>
                    </div>
                    <div class="col-md-3">
                        <button class="btn" onclick="show('.')">.</button>
                    </div>
                    <div class="col-md-3">
                        <button class="btn" onclick="show('/')">/</button>
                    </div>
                    <div class="col-md-3">
                        <button class="btn" onclick="calc()">=</button>
                    </div>
                    <div class="col-md-12">
                        <button class="btn" onclick="show('RES')">RES</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Add CDN Link. jQuery first, then Popper.js, then Bootstrap JS -->
    <script>
    <!--- Add Script Here --->
    </script>
  </body>
</html>`

var css = `*{
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
}
html, body{
    width: 100%;
}
.container-fluid{
    width: 100%;
    height: 100vh;
    background-color: #f7f7f7;
}
#calculator{
    box-shadow: 0px 10px 20px #e7e7e7;
}
#calculator-head{
    background-color: #282828;
    color: #f7f7f7;
}
#result-section{
    font-size: xx-large;
    font-weight: 600;
    background-color: 	#1d2530;
    color: #f7f7f7;
    border: 4px solid #282828;
}
#calculator-body{
    background-color: #1c7ce0;
}
#calculator-body .col-md-3{
    margin-top: 1rem;
}
#calculator-body .col-md-12{
    margin-top: 1.5rem;
}
.btn{
    width: 85%;
    min-height: 60px;
    font-size: 2.3rem;
    background-color: #f7f7f7;
    color: #000;
}
.btn:hover{
    box-shadow: 0px 5px 10px #186cc3;
}`;

var js = `document.getElementById('result').value = 0;
            function show(prop){
            if(prop!='RES'){
                document.getElementById('result').value += prop;
                if(document.getElementById('result').innerText == 0){
                document.getElementById('result').innerText = prop;
                }
                else{
                document.getElementById('result').innerText += prop;
            }
            }
            else{
            document.getElementById('result').innerText = 0;
            }
            }
            function calc(){
            var equatn = document.getElementById('result').value;
            console.log(equatn);
            var res = eval(equatn);
            document.getElementById('result').innerText = res;
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
                <h1 class="h1">Javascript Calculator</h1>
                <p class="lead text-muted">Post Date: 20th July 2020 | Framework/Language: Html, Css, Javascript | Level: beginner</p>
                <hr/>
                <p>Javascript Calculator is a small application built with HTML, CSS, and JS. The project is for beginners who want to dive into the web development world and to those who need an initial exposure to javascript. It is the most powerful language as it can be used in both frontend and backend. All popular frameworks/technologies like Angular, React, Vue Js, and Node JS uses javascript for coding. You must have basic knowledge of HTML and CSS before starting the project. </p>
                <p>To check live demo of our project, please <Link to={{ pathname: "https://blog-assets.web.app/javascript-calculator/" }} target="_parent"><a>click here</a></Link></p>
                <figure class="figure text-center">
                    <center><img src={post1Img} alt="" class="figure-img"/></center>
                    <figcaption class="figure-caption">Fig.1 - Javascript Calculator</figcaption>
                </figure>
                <p>To start with our project, there are few resoucres which we will need for developing our application. Make sure you have them installed on your system.</p>
                <p>
                    <ul>
                    <li>Visual Studio Code / Notepad</li>
                    <li>Google Chrome</li>
                    </ul>
                </p>
                <p>In this project, our main focus is on javascript and not on the design of an app. To ease our job, we are going to use bootstrap in our project for styling purpose. In html, we are going to create total 17 buttons as shown in <i>fig 1</i> for input purpose and div block for displaying the result. The role of html ends here and now finally we will be writting our script. </p>
                <p>To write any script in HTML we have to mention script tags and write our code in between them. Javascript works kind of similar to any programming language which you can think of. To store any integer, string, character or boolean in variable, we use <span class="highlight">var</span> keyword before it. In javascript, we have <span class="highlight">eval()</span> function, which can evaluate or calculate an equation. We will be using this function in our code. The HTML button has "onclick = function_name()" property which triggers the javascript function mentioned in front of it when the user clicks that button. Every button in our HTML will have an onclick property for storing the values in a variable and displaying it on div block. The "=" button will trigger the calculate function which will pass the variable used for storing, in eval() function. The result will be displayed inside the div block. </p>
                <p>Please find below complete source of code for our application</p>
                <div class="card" id="editor">
                    <div class="card-header">
                        <h5 class="card-title">JavaScript Calculator</h5>
                        <span class="card-top-btn">
                            <button class="btn btn-danger" onClick={showHtml}>HTML</button>
                            <button class="btn btn-info" onClick={showCss}>CSS</button>
                            <button class="btn btn-warning" onClick={showJs}>JS</button>
                        </span>
                    </div>
                    <textarea class="card-text card-body form-control" id="codearea" value={code} rows="20"></textarea>
                    <div class="card-footer text-right">
                        <a class="btn btn-success" href="https://github.com/shubham05tawade/filtercodes/tree/master/javascipt-calculator">VIEW ON GITHUB</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post1;
