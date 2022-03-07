import React, {useState, useEffect} from 'react';
import post6Img from '../assets/dark-mode.PNG';
import './Post.css';
import {Link} from 'react-router-dom';

function Post6() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    var html= `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Dark Mode</title>
        <link rel="stylesheet" href="./style.css">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
    </head>
    <body>
        <nav class="navbar navbar-expand-lg">
            <a class="navbar-brand" href="#"><span>COVERING</span> NEWS</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav ml-auto">
                <li class="nav-item">
                  <a class="nav-link" href="#">Home</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Blog</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Support</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Help</a>
                </li>
              </ul>
            </div>
        </nav>
        <div class="container-fluid pt-5" id="box">
            <h1 class="h1">TOP 10 STORIES AROUND THE GLOBE</h1>
            <div class="read-mode">
                <span class="light-mode" onclick="lightMode()">☀️</span>
                <span class="dark-mode" onclick="darkMode()">🌙</span>
            </div>
            <hr/>
            <p>Editor: John Doe | Published Date: 26th November 2020</p>
            <div class="row pt-3">
                <div class="col-md-4">
                    <div class="card">
                        <img src="https://picsum.photos/id/1020/500/500" alt="" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">#article-1</h5>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus ullamcorper mauris, at volutpat arcu tempor ut. Suspendisse potenti. Vestibulum tempor diam et nulla ornare, sed molestie sem mattis. Mauris aliquam pulvinar felis et interdum. Aenean rhoncus cursus sapien sit amet tristique. Etiam magna diam, suscipit ut tempus a, hendrerit et orci. Cras non est at magna facilisis placerat. Sed consequat lectus in tortor vulputate maximus. Nullam molestie quam et nunc mattis vulputate. Suspendisse potenti. Sed pellentesque ex a ullamcorper rhoncus. Sed ornare massa sit amet sapien facilisis aliquet.</p>
                            <button class="btn btn-warning">READ FULL ARTICLE</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img src="https://picsum.photos/id/1000/500/500" alt="" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">#article-2</h5>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus ullamcorper mauris, at volutpat arcu tempor ut. Suspendisse potenti. Vestibulum tempor diam et nulla ornare, sed molestie sem mattis. Mauris aliquam pulvinar felis et interdum. Aenean rhoncus cursus sapien sit amet tristique. Etiam magna diam, suscipit ut tempus a, hendrerit et orci. Cras non est at magna facilisis placerat. Sed consequat lectus in tortor vulputate maximus. Nullam molestie quam et nunc mattis vulputate. Suspendisse potenti. Sed pellentesque ex a ullamcorper rhoncus. Sed ornare massa sit amet sapien facilisis aliquet.</p>
                            <button class="btn btn-warning">READ FULL ARTICLE</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img src="https://picsum.photos/id/1003/500/500" alt="" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">#article-3</h5>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus ullamcorper mauris, at volutpat arcu tempor ut. Suspendisse potenti. Vestibulum tempor diam et nulla ornare, sed molestie sem mattis. Mauris aliquam pulvinar felis et interdum. Aenean rhoncus cursus sapien sit amet tristique. Etiam magna diam, suscipit ut tempus a, hendrerit et orci. Cras non est at magna facilisis placerat. Sed consequat lectus in tortor vulputate maximus. Nullam molestie quam et nunc mattis vulputate. Suspendisse potenti. Sed pellentesque ex a ullamcorper rhoncus. Sed ornare massa sit amet sapien facilisis aliquet.</p>
                            <button class="btn btn-warning">READ FULL ARTICLE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row pt-5">
                <div class="col-md-4">
                    <div class="card">
                        <img src="https://picsum.photos/id/1029/500/500" alt="" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">#article-4</h5>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus ullamcorper mauris, at volutpat arcu tempor ut. Suspendisse potenti. Vestibulum tempor diam et nulla ornare, sed molestie sem mattis. Mauris aliquam pulvinar felis et interdum. Aenean rhoncus cursus sapien sit amet tristique. Etiam magna diam, suscipit ut tempus a, hendrerit et orci. Cras non est at magna facilisis placerat. Sed consequat lectus in tortor vulputate maximus. Nullam molestie quam et nunc mattis vulputate. Suspendisse potenti. Sed pellentesque ex a ullamcorper rhoncus. Sed ornare massa sit amet sapien facilisis aliquet.</p>
                            <button class="btn btn-warning">READ FULL ARTICLE</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img src="https://picsum.photos/id/1033/500/500" alt="" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">#article-5</h5>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus ullamcorper mauris, at volutpat arcu tempor ut. Suspendisse potenti. Vestibulum tempor diam et nulla ornare, sed molestie sem mattis. Mauris aliquam pulvinar felis et interdum. Aenean rhoncus cursus sapien sit amet tristique. Etiam magna diam, suscipit ut tempus a, hendrerit et orci. Cras non est at magna facilisis placerat. Sed consequat lectus in tortor vulputate maximus. Nullam molestie quam et nunc mattis vulputate. Suspendisse potenti. Sed pellentesque ex a ullamcorper rhoncus. Sed ornare massa sit amet sapien facilisis aliquet.</p>
                            <button class="btn btn-warning">READ FULL ARTICLE</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img src="https://picsum.photos/id/1037/500/500" alt="" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">#article-6</h5>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus ullamcorper mauris, at volutpat arcu tempor ut. Suspendisse potenti. Vestibulum tempor diam et nulla ornare, sed molestie sem mattis. Mauris aliquam pulvinar felis et interdum. Aenean rhoncus cursus sapien sit amet tristique. Etiam magna diam, suscipit ut tempus a, hendrerit et orci. Cras non est at magna facilisis placerat. Sed consequat lectus in tortor vulputate maximus. Nullam molestie quam et nunc mattis vulputate. Suspendisse potenti. Sed pellentesque ex a ullamcorper rhoncus. Sed ornare massa sit amet sapien facilisis aliquet.</p>
                            <button class="btn btn-warning">READ FULL ARTICLE</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row pt-5 pb-5">
                <div class="col-md-4">
                    <div class="card">
                        <img src="https://picsum.photos/id/1058/500/500" alt="" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">#article-7</h5>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus ullamcorper mauris, at volutpat arcu tempor ut. Suspendisse potenti. Vestibulum tempor diam et nulla ornare, sed molestie sem mattis. Mauris aliquam pulvinar felis et interdum. Aenean rhoncus cursus sapien sit amet tristique. Etiam magna diam, suscipit ut tempus a, hendrerit et orci. Cras non est at magna facilisis placerat. Sed consequat lectus in tortor vulputate maximus. Nullam molestie quam et nunc mattis vulputate. Suspendisse potenti. Sed pellentesque ex a ullamcorper rhoncus. Sed ornare massa sit amet sapien facilisis aliquet.</p>
                            <button class="btn btn-warning">READ FULL ARTICLE</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img src="https://picsum.photos/id/1060/500/500" alt="" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">#article-8</h5>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus ullamcorper mauris, at volutpat arcu tempor ut. Suspendisse potenti. Vestibulum tempor diam et nulla ornare, sed molestie sem mattis. Mauris aliquam pulvinar felis et interdum. Aenean rhoncus cursus sapien sit amet tristique. Etiam magna diam, suscipit ut tempus a, hendrerit et orci. Cras non est at magna facilisis placerat. Sed consequat lectus in tortor vulputate maximus. Nullam molestie quam et nunc mattis vulputate. Suspendisse potenti. Sed pellentesque ex a ullamcorper rhoncus. Sed ornare massa sit amet sapien facilisis aliquet.</p>
                            <button class="btn btn-warning">READ FULL ARTICLE</button>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <img src="https://picsum.photos/id/1069/500/500" alt="" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">#article-9</h5>
                            <hr/>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus ullamcorper mauris, at volutpat arcu tempor ut. Suspendisse potenti. Vestibulum tempor diam et nulla ornare, sed molestie sem mattis. Mauris aliquam pulvinar felis et interdum. Aenean rhoncus cursus sapien sit amet tristique. Etiam magna diam, suscipit ut tempus a, hendrerit et orci. Cras non est at magna facilisis placerat. Sed consequat lectus in tortor vulputate maximus. Nullam molestie quam et nunc mattis vulputate. Suspendisse potenti. Sed pellentesque ex a ullamcorper rhoncus. Sed ornare massa sit amet sapien facilisis aliquet.</p>
                            <button class="btn btn-warning">READ FULL ARTICLE</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossorigin="anonymous"></script>
        <script src="./index.js"></script>
    </body>
    </html>`;
      var css = `*{
        margin: 0;
        padding: 0;
    }
    nav{
        background-color: #121212;
        color: #fff;
    }
    hr{
        background-color: coral;
    }
    .navbar-brand{
        color: #fff;
    }
    .navbar-brand span{
        color: coral;
    }
    .navbar-nav .nav-item .nav-link{
        color: #fff;
    }
    #box{
        width: 100%;
        padding-left: 8%;
        padding-right: 8%;
        background-color: #fff;
    }
    #box .card{
        background-color: #fbfbfb;
    }
    .read-mode{
        float: right;
        margin-top: -2.7rem;
        font-size: x-large;
    }
    .light-mode{
        cursor: pointer;
    }
    .dark-mode{
        cursor: pointer;
    }
    
    /* Extra small devices (portrait phones, less than 576px) */
    @media (max-width: 575.98px) { 
        .read-mode{
            margin-top: -12rem;
        }
        #box .card{
            margin-bottom: 2rem;
        }
    }
    
    /* Small devices (landscape phones, 576px and up) */
    @media (min-width: 576px) and (max-width: 767.98px) {  }
    
    /* Medium devices (tablets, 768px and up) */
    @media (min-width: 768px) and (max-width: 991.98px) {  }
    
    /* Large devices (desktops, 992px and up) */
    @media (min-width: 992px) and (max-width: 1199.98px) {  }
    
    /* Extra large devices (large desktops, 1200px and up) */
    @media (min-width: 1200px) {  }
`;

      var js = `function lightMode(){
        document.getElementById('box').style.color = "#000";
        document.getElementById('box').style.backgroundColor = "#fff";
        for(var i=0; i<9; i++){
            document.getElementsByClassName('card')[i].style.backgroundColor = "#fbfbfb";
            document.getElementsByClassName('card')[i].style.color = "#000";
        }
    } 
    function darkMode(){
        document.getElementById('box').style.backgroundColor = "#1c1c1c";
        document.getElementById('box').style.color = "#fff";
        for(var i=0; i<9; i++){
            document.getElementsByClassName('card')[i].style.backgroundColor = "#181818";
            document.getElementsByClassName('card')[i].style.color = "#fff";
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
            <h1 class="h1">DARK MODE</h1>
            <p class="lead text-muted">Post Date: 26th NOVEMBER 2020 | Framework/Language: Html, Css, Bootstrap 4, Javascript | Level: beginner</p>
            <hr/>
            <p>For the past couple of years, one of the most requested features smartphone users have clamored for is the "dark mode" or "night mode". The dark mode might not be as legible as light mode but using it will certainly reduce eye strain and eye fatigue. Personally, I find dark mode more stylish and interface created through it are more charismatic. Spotify and Netflix are prime examples of it. They offer you a sense of boldness and luxuriousness through their dark theme. To experiment with this dark mode feature, I designed a web page where user can select any mode he/she desires. #darkmode</p>
            <p>To check live demo of our project, please <Link to={{ pathname: "https://blog-assets.web.app/dark-mode/" }} target="_parent"><a>click here</a></Link></p>
            <figure class="figure text-center">
            <center><img src={post6Img} alt="" class="figure-img"/></center>
            <figcaption class="figure-caption">Fig.1 - Dark Mode</figcaption>
            </figure>
            <p>To start with our project, there are few resoucres which we will need for developing our application. Make sure you have them installed on your system.</p>
            <p>
            <ul>
                <li>Visual Studio Code / Notepad</li>
                <li>Google Chrome</li>
            </ul>
            </p>
            <p>In this project, we will be using bootstrap 4.0 for styling purpose and javascript for switching between light mode and dark mode. To start our project, create a blank html file inside a directory. After that, open the file in visual studio code or notepad and create a basic html template. If you are new to html or want to learn more about html topic then, please check out our course on HTML 5. After creating a basic template, we need to add boostrap cdn(content delivery network). We can also download bootstrap files and then import them into or html file but we are going to use cdn because it first saves your storage and second it has a faster loading time when you deploy the files to server. Most CDN's make sure that once a request is made, it will be served from the server closest to them and hence it has a faster loading time. You can find boostrap cdn in below link mentioned.</p>
            <p><Link to={{ pathname: "https://getbootstrap.com/docs/4.0/getting-started/introduction/" }} target="_parent"><a>Bootstrap 4.0 CDN</a></Link></p>
            <p>Please make sure you add link tag inside head and three script tag at the end of body tag or you can also copy starter template below it and paste in our html file. In this project, we will require three component from html and they are container, nav, cards. Container can be assumed like an empty box. They are responsive i.e. they change their width and height according to device's size. This width and height are already predefined for different device size and orientation. The second component which we are going to use is navbar component i.e. navigation menu. We can directly find the source code for navbar mentioned below. We just need to copy the snippet into our code. The last component which we are going to use from bootstrap is cards. Cards are small containers which can be arranged horizontally or vertcially. We can add header or image at top, body and footer at below.</p>
            <p><Link to={{ pathname: "https://getbootstrap.com/docs/4.0/getting-started/introduction/" }} target="_parent"><a>Navbar bootstrap component</a></Link></p>
            <p>First, we need to create one navigation bar on top. Second, we need to add container and inside container we will add cards which will have random images at top, dummy text in body and a button at end of the card's body. You can add as many cards you want to use. The crucial part of our project is to add to span elements which will have sun and moon logo at top. This span elements will have onclick property. At the end of body tag, we will add one script which will contain two functions i.e. lightMode() and darkMode(). The lightMode function will change the backgroundColor of container and cards to white shade and textColor to black shade. The dark mode function will change the backgroundColor of container and cards to black shade and textColor to white shade. As we have this two fucntions ready inside our script, we will call this function through onClick property of span element. The sun emoji span element will call lightMode and moon emoji will call darkMode. We can toggle between this two modes and can check the visual difference between this two modes.</p>
            <p>Please find below complete source of code for our application</p>
                <div class="card" id="editor">
                    <div class="card-header">
                        <h5 class="card-title">Dark Mode</h5>
                        <span class="card-top-btn">
                            <button class="btn btn-danger" onClick={showHtml}>HTML</button>
                            <button class="btn btn-info" onClick={showCss}>CSS</button>
                            <button class="btn btn-warning" onClick={showJs}>JS</button>
                        </span>
                    </div>
                    <textarea class="card-text card-body form-control" id="codearea" value={code} rows="20"></textarea>
                    <div class="card-footer text-right">
                        <a class="btn btn-success" href="https://github.com/shubham05tawade/filtercodes/tree/master/dark-mode">VIEW ON GITHUB</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post6;
