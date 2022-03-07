import React, {useRef} from 'react';
import './Blog.css';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap,TweenMax, Power1} from "gsap/all";
import CSSPlugin from 'gsap/CSSPlugin';
import post1Img from './assets/javascript-calculator.png';
import post2Img from './assets/password-stength-checker.png'
import post3Img from './assets/responsive-web-form.png';
import post4Img from './assets/todo-react.PNG';
import post5Img from './assets/chat-app-react.PNG';
import post6Img from './assets/dark-mode.PNG';
import {Link} from 'react-router-dom'

function Blog() {

    const word1 = useRef(null);
    const word2 = useRef(null);
    const word3 = useRef(null);

    gsap.registerPlugin(CSSPlugin, TweenMax, Power1);
    TweenMax.fromTo(word1.current, 1, {autoAlpha:1, x: -1500 }, {autoAlpha:1, x: 0 }, );
    TweenMax.fromTo(word2.current, 1.2, {autoAlpha:1, x: -1700 }, {autoAlpha:1, x: 0 });
    TweenMax.fromTo(word3.current, 1.5, {autoAlpha:1, x: -1800 }, {autoAlpha:1, x: 0 });

    return (
        <div className="blog">
            <div class="container-fluid blog-banner">
                <h1 ref={word1}>WELCOME</h1>
                <h1 ref={word2}>TO</h1>
                <h1 ref={word3}>FILTERCODE'S BLOG</h1>
            </div> 
            <div class="container blog-section">
                <div class="row">
                    <div class="col-md-6 blog-card">
                        <div class="card clearfix">
                            <img src={post1Img} alt="javascript calculator" class="card-img-top"/>
                            <div class="card-body">
                                <h5 class="card-title">Javascript Calculator from Scratch!</h5>
                                <small class="text-muted">DATE: 26th JULY 2020 | Framework: HTML/CSS/JS | LEVEL: BEGINNER</small>
                                <hr/>
                                <p class="card-text">Javascript Calculator is a small application built with HTML, CSS, and JS. The project is for beginners who want to dive into the web development world and to those who need an initial exposure to javascript. It is the most powerful language as it can be used in both frontend and backend. All popular frameworks/technologies like Angular, React, Vue Js, and Node JS uses javascript for coding...</p>
                                <Link to="/blog/post1"><button class="btn btn-primary">Continue Reading</button></Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 blog-card">
                        <div class="card clearfix">
                            <img src={post2Img} alt="" class="card-img-top"/>
                            <div class="card-body">
                                <h5 class="card-title">Password Strength Checker</h5>
                                <small class="text-muted">DATE: 1st AUGUST 2020 | Framework: HTML/CSS/JS | LEVEL: BEGINNER</small>
                                <hr/>
                                <p class="card-text">In a recent study conducted by Google, <i>"59% of Americans have included a name or date of birth in their passwords for online accounts"</i>. This information can be incorporated from your social media account and hence you can be the easy victim for a scoial engineer's to uncover your password. Most of the people still uses easy-to-crack passwords like "qwerty" and "123456". It would hardly take a minute for an hacker to crack such passwords by using brute-force attack...</p>
                                <Link to="/blog/post2"><button class="btn btn-primary">Continue Reading</button></Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 blog-card">
                        <div class="card clearfix">
                            <img src={post3Img} alt="" class="card-img-top"/>
                            <div class="card-body">
                                <h5 class="card-title">Responsive Web Forms</h5>
                                <small class="text-muted">DATE: 2nd AUGUST 2020 | Framework: HTML/CSS/JS | LEVEL: BEGINNER</small>
                                <hr/>
                                <p class="card-text">In today's world, people access your website from various devices like desktops, smartphones, tablets, or in some cases even on big screen. They all have different dimensions and hence we need to code for those different devices separately. Responsive web design is the process where you write code separately for different standard devices to enrich user experience.</p>
                                <Link to="/blog/post3"><button class="btn btn-primary">Continue Reading</button></Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 blog-card">
                        <div class="card clearfix">
                            <img src={post4Img} alt="" class="card-img-top"/>
                            <div class="card-body">
                                <h5 class="card-title">Todo App in Recat JS</h5>
                                <small class="text-muted">DATE: 20th NOVEMBER 2020 | Framework: HTML/CSS/JS/React Js | LEVEL: BEGINNER</small>
                                <hr/>
                                <p class="card-text">React is a javascript library created by facebook group for building modern user interfaces. React makes it easy to create interactive UI. In React, we can design simple views for each state of our application, and React will instantly update and render the component when data changes. React is component based and since the component logic is written in javascript instead of templates, we can easily pass rich data through our app.</p>
                                <Link to="/blog/post4"><button class="btn btn-primary">Continue Reading</button></Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 blog-card">
                        <div class="card clearfix">
                            <img src={post5Img} alt="" class="card-img-top"/>
                            <div class="card-body">
                                <h5 class="card-title">Chat App in Recat JS</h5>
                                <small class="text-muted">DATE: 24th NOVEMBER 2020 | Framework: HTML/CSS/JS/React Js | LEVEL: BEGINNER</small>
                                <hr/>
                                <p class="card-text">Messaging apps are most widely used smartphone apps. Some examples of widely used messaging apps include Whatsapp, Facebook Messenger, WeChat, Telegram, and Snapchat etc. There were around 1.3 billion monthly users of Whatsapp and Facebook Messenger in year 2018. In today's modern website, we can find chatbots at every places. They makes our life easier by finding particular thing from website or make an analysis about something. It was quite a complicated task to build chat app before 15-20 years ago but now we can create a basic chat app in just 20 minutes. Let's start to build our own chat app!</p>
                                <Link to="/blog/post5"><button class="btn btn-primary">Continue Reading</button></Link>
                            </div>
                        </div>
                    </div>

                    <div class="col-md-6 blog-card">
                        <div class="card clearfix">
                            <img src={post6Img} alt="" class="card-img-top"/>
                            <div class="card-body">
                                <h5 class="card-title">DARK MODE</h5>
                                <small class="text-muted">DATE: 26th NOVEMBER 2020 | Framework: HTML/CSS/JS/Bootstrap 4.0 | LEVEL: BEGINNER</small>
                                <hr/>
                                <p class="card-text">For the past couple of years, one of the most requested features smartphone users have clamored for is the "dark mode" or "night mode". The dark mode might not be as legible as light mode but using it will certainly reduce eye strain and eye fatigue. Personally, I find dark mode more stylish and interface created through it are more charismatic. Spotify and Netflix are prime examples of it. They offer you a sense of boldness and luxuriousness through their dark theme. To experiment with this dark mode feature, I designed a web page where user can select any mode he/she desires. #darkmode</p>
                                <Link to="/blog/post6"><button class="btn btn-primary">Continue Reading</button></Link>
                            </div>
                        </div>
                    </div>

                </div>
            </div>  
        </div>
    )
}

export default Blog
