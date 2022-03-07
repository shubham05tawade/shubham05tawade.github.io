import React, {useRef, useEffect, useState} from 'react';
import './Home.css';
import bannerImg from './assets/2747386.jpg';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap,TweenMax, Bounce, Power1, Power4} from "gsap/all";
import angularImg from './assets/angular.png'
import html5Img from './assets/html5.png';
import css3Img from './assets/css3.png';
import aboutMeImg from './assets/about-me.jpg'
import contactUsImg from './assets/contact-us.jpg';
import CSSPlugin from 'gsap/CSSPlugin';
import emailjs, { init } from 'emailjs-com';
import { useStateValue } from './StateProvider';
import validator from 'validator';
init("user_liZVgRjXPrEhlRjGJbOtw");


function Home() {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [hidebtn, setHidebtn] = useState(false);
    gsap.registerPlugin(CSSPlugin, ScrollTrigger, TweenMax, Bounce, Power4, Power1);

    const myTitle = useRef(null);
    const myPara = useRef(null);
    const myButton = useRef(null);
    const myDiv = useRef(null);
    const myImg = useRef(null);
    const myAngularImg = useRef(null);
    const myHtmlImg = useRef(null);
    const myCssImg = useRef(null);
    const myAboutUs = useRef(null);
    const myContactUs = useRef(null);

    useEffect(() => {
        TweenMax.set(myDiv.current, {autoAlpha: 1})
        TweenMax.fromTo(myTitle.current, 1, {autoAlpha:0, x: -500 }, {autoAlpha:1, x: 0 });
        TweenMax.fromTo(myPara.current, 1, {autoAlpha:0, x: -700 }, {autoAlpha:1, x: 0 });
        TweenMax.fromTo(myButton.current, 2, {autoAlpha:0, x: -500 }, {autoAlpha:1, x: 0 ,ease: Bounce.easeOut});
        TweenMax.fromTo(myImg.current, 1, {autoAlpha:0, y: -1000 }, {autoAlpha:1, y: 0 });

        gsap.fromTo(myAngularImg.current, {
            autoAlpha:0,
            x: 1500,
        },{
            duration: 0.5,
            autoAlpha: 1,
            x:0,
            ease: Power1.easeInOut,
            scrollTrigger: {
              trigger: myAngularImg.current,
              start: 'top center',
              toggleActions: 'play none none none'
            }
        });

        gsap.fromTo(myHtmlImg.current, {
            autoAlpha:0,
            x: -500,
        },{
            duration: 0.5,
            autoAlpha: 1,
            x:0,
            ease: Power1.easeInOut,
            scrollTrigger: {
              trigger: myHtmlImg.current,
              start: 'top center',
              toggleActions: 'play none none none'
            }
        });

        gsap.fromTo(myCssImg.current, {
            autoAlpha:0,
            x: 1500,
        },{
            duration: 0.5,
            autoAlpha: 1,
            x:0,
            ease: Power1.easeInOut,
            scrollTrigger: {
              trigger: myCssImg.current,
              start: 'top center',
              toggleActions: 'play none none none'
            }
        });

        gsap.fromTo(myAboutUs.current, {
            autoAlpha:0,
            y: -100,
        },{
            duration: 1,
            autoAlpha: 1,
            y:0,
            ease: Power4.easeInOut,
            scrollTrigger: {
              trigger: myAboutUs.current,
              start: 'top center',
              toggleActions: 'play none none none'
            }
        });

        gsap.fromTo(myContactUs.current, {
            autoAlpha:0,
            x: 1500,
        },{
            duration: 1,
            autoAlpha: 1,
            x:0,
            ease: Power4.easeInOut,
            scrollTrigger: {
              trigger: myContactUs.current,
              start: 'top center',
              toggleActions: 'play none none none'
            }
        });

    },[]);

    const sendMessage = (event) => {
        event.preventDefault();
        setHidebtn(!hidebtn);
        if(name=='' || email=='' || message==''){
            alert('Please complete all the fields!');
            setHidebtn(hidebtn);
            return;
        }
        if(validator.isEmail(email)){
            alert('Please enter valid email!');
            setEmail('');
            setHidebtn(hidebtn);
            return;
        }
        emailjs.send('service_bzlmzkm', 'template_vsz1nqb', {name, email, message},'user_liZVgRjXPrEhlRjGJbOtw')
        .then((res) => {
            alert('Message sent successfully!😊');
            setHidebtn(hidebtn);
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((err) => {
            alert('Something went wrong!');
            setHidebtn(hidebtn);
            setName('');
            setEmail('');
            setMessage('');
        })
    }
    return (
        <div className="home">
            <div class="container-fluid" id="banner">
                <div class="left-pane" ref={myDiv}>
                    <h1 ref={myTitle}>CODING ARENA</h1>
                    <p ref={myPara}>Filtercodes is an online learning platform for young developers who wants to explore the world of coding. If you are a beginner who wants to dive in programming skills carrying zero knowledge then please feel free to access our content. We believe sharing is a way of learning.</p> 
                    <button ref={myButton} class="btn px-3 py-2">Filtercodes</button>
                </div>
                <div class="right-pane">
                    <img src={bannerImg} ref={myImg}/>
                </div>
            </div>
            <div class="container-fluid" id="tutorials">
                <div class="tutorial">
                    <div class="left-panel">
                        <h2>Angular</h2>
                        <h5>Developer(s): Google</h5>
                        <p>Angular is a very popular javascript framework used for frontend development. If you want to be a full stack developer then you need to have a knowledge about this framework. In this course, we are going to cover key features of angular framework like string interpolation, property-binding, two-way binding, structural and attribute directives, service injection, angular routes etc. Before diving into this course, you must have a basic knowledge about html and css. In the end, we are going to create our own application for selling or purchasing plots.</p>
                        <button class="btn">Start Tutorial</button>
                    </div>
                    <div class="right-panel">
                        <img src={angularImg} ref={myAngularImg}/>
                    </div> 
                </div>

                <div class="tutorial">
                    <div class="left-panel">
                        <h2>HTML 5</h2>
                        <h5>Developer(s): Google</h5>
                        <p>HTML stands for hyper text markup language used for creating web templates. Html is a basic for any front end framework and used for structuring the web page. In this course, we are going to learn various HTML tags like header, navigation, article, lists, images, links, tables etc and their attributes. In the end, we are going to create HTML template for online property dealer by adding menu for routing through different sections, banner for displaying brand name, card-section for displaying best selling property around the location and a footer.</p>
                        <button class="btn">Start Tutorial</button>
                    </div>
                    <div class="right-panel">
                        <img src={html5Img} ref={myHtmlImg}/>
                    </div>        
                </div>     

                <div class="tutorial">
                    <div class="left-panel">
                        <h2>CSS 3</h2>
                        <h5>Developer(s): Google</h5>
                        <p>CSS(Cascading style sheet) is used for adding styles to our HTML template. CSS is used to make your template look rich and enhances your user experience. CSS styles can be embedded to any html tags. There are various styles like margin, padding, border, background color, font color, text size which can be embedded on different HTML tags. In the end, we are going to style our HTML template from our HTML tutorial.</p>
                        <button class="btn">Start Tutorial</button>
                    </div>
                    <div class="right-panel">
                        <img src={css3Img} ref={myCssImg}/>
                    </div>        
                </div>        
            </div>

            <div class="container-fluid" id="about-me">
                <div class="left-panel">
                    <img src={aboutMeImg} ref={myAboutUs}/>
                </div>
                <div class="right-panel">
                    <h4>ABOUT ME</h4>
                    <p>Hello 🙋‍♂️. I'm Shubham, <i>a chai</i> ☕ lover, 23 years old front-end 👨‍💻 web developer with a educational background in electronics and telecommunications. I'm currently working in a MNC for almost 2 years and have an experince of working with big clients. I have been in coding and web development since last 6-7 years. I'm very much passionate about it and never killed the hunger for learning new things from it. I'm a Javascript enthusiast and extremely ardent about coding. I have worked upon javascript frameworks like Angular, React JS and Vue JS. I love to learn new things every day and keep up with the new technologies. In many ways, websites are <i>my first love</i> ❤️. Last but not least, one of my favorite activities is to educate and mentor others in the field to fulfill their potential and deepen my knowledge. Please check out my netflix, discord and amazon clone developed in angular and react. If you want to contribute or know more about me then check out my LinkedIn account!</p>
                    <button class="btn">FOLLOW ON LINKEDIN</button>
                </div>
            </div>

            <div class="container-fluid" id="contact-us">
                <div class="left-panel">
                    <h4>CONTACT US</h4>
                    <form onSubmit={sendMessage}>
                        <label>Your name</label>
                        <input type="text" value={name} onChange={(e) => (setName(e.target.value))} class="form-control" />
                        <label>Your email</label>
                        <input type="email" value={email} onChange={(e) => (setEmail(e.target.value))} class="form-control" />
                        <label>Your message</label>
                        <textarea class="form-control" rows="5" value={message} onChange={(e) => (setMessage(e.target.value))}></textarea>
                        <button class="btn" type="submit" disabled={hidebtn}>SEND MESSAGE</button>
                    </form>
                </div>
                <div class="right-panel">
                    <img src={contactUsImg} ref={myContactUs}/>
                </div>
            </div>
        </div>
    )
}

export default Home;
