import React, {useState, useEffect} from 'react';
import post5Img from '../assets/chat-app-react.PNG';
import './Post.css';
import {Link} from 'react-router-dom';


function Post5() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return (
        <div className="post container-fluid">
            <div class="container post-container" id="post">
            <h1 class="h1">Chat App in React JS</h1>
            <p class="lead text-muted">DATE: 24th NOVEMBER 2020 | Framework: HTML/CSS/JS/React Js | LEVEL: BEGINNER</p>
            <hr/>
            <p>Messaging apps are most widely used smartphone app's. Some examples of widely used messaging apps include Whatsapp, Facebook Messenger, WeChat, Telegram, and Snapchat etc. There were around 1.3 billion monthly users of Whatsapp and Facebook Messenger in year 2018. In today's modern website, we can find chatbots at every places. They makes our life easier by finding particular thing from website or make an analysis about something. It was quite a complicated task to build chat app before 15-20 years ago but now we can create a basic chat app in just 20 minutes. Let's start to build our own chat app!</p>
            <p>In this project, we will be creating a chat with help of React(Facebook library for frontend development) and Google firebase(backend services). We will be more stressing on learning about tools offered by Firebase. We will be using Google authentication for user login and Realtime Database for storing messages. </p>
            <p>To check live demo of our project, please <Link to={{ pathname: "https://chat-app-88ef7.web.app/" }} target="_parent"><a>click here</a></Link></p>
            <figure class="figure text-center">
                <center><img src={post5Img} alt="" class="figure-img"/></center>
                <figcaption class="figure-caption">Fig.1 - Chat app in React Js</figcaption>
            </figure>
            <p>To start with our project, there are few resoucres which we will need for developing our application. Make sure you have them installed on your system mentioned below and also create Firebase account</p>
            <p>
                <ul>
                <li>Visual Studio Code / Notepad</li>
                <li>Google Chrome</li>
                <li>Node Js</li>
                <li><Link to={{ pathname: "https://firebase.google.com" }} target="_parent">Firebase account</Link></li>
                </ul>
            </p>
            <p>Let's start with firebase setup. On firebase webpage, click on "Go to console" link. You will see an option to add a new project. Click on that button and assign a name to your project. It will open a dashboard like page, where you can see the tools available for developer on left. Go to "Authentication" and under sign in method option, please enable google authentication. This will help us to add google sign in fucntionality in our app. Second, we need to start database fucntionality, so go to "Cloud Firestore" and create a database under test mode. We are done with firebase setup. Now let's move towards creating a react app. After installing node js, open command prompt or teminal and execute "npx create-react-app chat-app" command to build a new react app. Once the folder is created with project name then execute "npm start" command. This will run your app on localhost:3000. If you can see react logo on the screen then you have successfully managed to create a react app. Please follow below procedure to clean few things from our new app.</p>
            <p>
                <ul>
                    <li>Delete logo.svg, setupTests.js and App.test.js file from src folder. Clear everything inside App.css and save the file</li>
                    <li>Remove "import logo .." line and clear everything inside div with className of App from App.js and then save the file.</li>
                </ul>
            </p>
            <p>Now we are ready to start. In this app, we will require Chat compoenent to display your chat window and login component so that user can login and see the chat window. Basically, we will have Login component as our default page of first page. It will contain only one button and by clicking on that user can login to our app through their google account. The chat compoenent will have 3 section. The header section will display group name, user's name and a logout button. The body section will display the message from array. the footer section will have one input field to write down the message and a button to send the message to our realtime database. This will give you a rough idea about how we are going to proceed further.</p>
            <p>To create a Login compoenent, create a Login.js and Login.css file inside your src folder. In Login.js, just type rfce and press tab this will create and export functional component. Add "import './Login.css'" for importing styles from an external file for Login component. Similarly, we will also create chat component. Create a file name firebase.js inside src folder and copy the snippet from below mentioned code. This code contains configuration to connect our app to firebase project. Now, we need to connect our firebase project to our react app so that we can use those tools which we discussed earlier. Go to firebase and open your project's dashboard and then move to project setting. Copy config rules under firebase SDK snippet in our firebase.js.</p>
            <p>In Login component, we will create one login button which will create an instance of the Google provider object. This will open a new window where you can choose your google account fo signing in. After this, we need to add observer(onAuthStateChanged) on auth object for fetching current user details. If user property is null that means user isn't logged in and hence we will show login component and if user object is not equal to null, then we will show chat component. We will copy the user object to state variable. We are ready with our login component and now let's roll towards chat component.</p>
            <p>In chat component, we basically need to add and fetch rows from database and for that we need db connection. In firebase.js, we have exported one db variable. This contains all the db configurations of our project and will help us to perform CRUD operations on our collection. We will import this db variable in our chat component. For selecting a particular collection from our project we use the following syntax <span className="highlight">db.collection('collection_name')</span>. Now to add a row inside our collection we will use the follwoing syntax <span className="highlight">db.collection('collection_name').add(object)</span>. In order to display the data, we need to store the content in array, so that we can use it to display content on screen. We will use the following syntax to store rows from db to array. <span className="highlight">db.collection('collection_name').onSnapshot(snapshot) =&gt; &#x007B; setMessages(snapshot.docs.map((doc) =&gt; doc.data())) &#x007D; )</span>. The onSnapshot method can be considered like a camera which takes photo whenever it's trigggered. The photo contains entire information of collection but we need to filter our data in displayable format. The snapshot contains docs which we call row contains data as in object. In our case, object will contain sender_name, sender_message and time. We will store all this content in our state variable sothat we can use it display on or chat component.</p>
            <p>We are ready with everything inside chat component. Now, we need to add logout button in header of chat window. The button will only fire auth.signOut(). This will clear the session and user object. </p>
            <p>Please find below complete source of code for our application</p>
                <div class="card" id="editor">
                    <div class="card-header">
                        <h5 class="card-title">Chat App</h5>
                    </div>
                    <iframe src="https://stackblitz.com/edit/react-qmmc4y?embed=1&file=src/App.js" className="iframe"></iframe>
                    <div class="card-footer text-right">
                        <a class="btn btn-success" href="https://github.com/shubham05tawade/filtercodes/tree/master/chat-app">VIEW ON GITHUB</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post5;
