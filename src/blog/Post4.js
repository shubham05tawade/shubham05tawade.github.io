import React, {useState, useEffect} from 'react';
import post4Img from '../assets/todo-react.PNG';
import './Post.css';
import {Link} from 'react-router-dom';


function Post4() {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, []);
    return (
        <div className="post container-fluid">
            <div class="container post-container" id="post">
            <h1 class="h1">TODO App in React JS</h1>
            <p class="lead text-muted">DATE: 20th NOVEMBER 2020 | Framework: HTML/CSS/JS/React Js | LEVEL: BEGINNER</p>
            <hr/>
            <p>React is a javascript library created by facebook group for building modern user interfaces. React makes it easy to create interactive UI's. In React, we can design simple views for each state of our application, and React will instantly update and render the component when data changes. React is component based and since the component logic is written in javascript instead of templates, we can easily pass rich data through our app. React can also render on the server using Node and native mobile apps using React Native.</p>
            <p>In this project, we will be creating a todo application where user can add the task in input field and and newly added tasks will be displayed simultaneously below the input field. The user can also delete his/her task from the view below the input field.</p>
            <p>To check live demo of our project, please <Link to={{ pathname: "https://react-ahfuqn.stackblitz.io" }} target="_parent"><a>click here</a></Link></p>
            <figure class="figure text-center">
                <center><img src={post4Img} alt="" class="figure-img"/></center>
                <figcaption class="figure-caption">Fig.1 - TODO app in React Js</figcaption>
            </figure>
            <p>To start with our project, there are few resoucres which we will need for developing our application. Make sure you have them installed on your system.</p>
            <p>
                <ul>
                <li>Visual Studio Code / Notepad</li>
                <li>Google Chrome</li>
                <li>Node Js</li>
                </ul>
            </p>
            <p>In this project, our main focus will be on learning features of React and hence we would be focusing less on design part of our application. After installing Node JS, open command prompt or terminal and execute the following command <span class="highlight">npx create-react-app todo-app</span>. This will create folder structure on your system with various configuration files. After completion of creating react app command then execute <span class="highlight">npm start</span> command. This will basically run your app on a localhost so you can view your app on browser. We can see our app running on localhost:3000. Now we need to clear few things before from your app so that we can start building it. </p>
            <p>
                <ul>
                    <li>Delete logo.svg, setupTests.js and App.test.js file from src folder. Clear everything inside App.css and save the file</li>
                    <li>Remove "import logo .." line and clear everything inside div with className of App from App.js and then save the file.</li>
                </ul>
            </p>
            <p>Now we are ready to start. The first thing we will be requiring is an input field and hence we will add input tag and below input a button to submit input value inside div with className of App. </p>
            <p>To proceed further, we need to understand <span class="highlight">useState</span> which is one of the hooks in React. The useState let's you add react state to fuctional component. It declares state variable and accepts initial state as an argument. It returns a pair of values i.e. current state and a function that updates it. For example, const [count, setCount] = useState(0), This will initialzed the state variable count equal to zero and with the help of setCount we can update the value of count. We wiil be using same useState for assigning value of input to state variable.</p>
            <p>We will need an array to store the inputs from user, so we declare another state variable by passing an empty array as an argument. This will initialy create an empty array and whenever the button will be clicked, this array would be getting updated.</p>
            <p>We need to display the content of array inside div and hence we would be using map method to to call the provided function once for each element in an array.</p>
            <p>To delete the task from an array we will create one function. This function will create a duplicate array and splice the content from it. This newly created array will then be assigend to older array. </p>
            <p>Please find below complete source of code for our application</p>
                <div class="card" id="editor">
                    <div class="card-header">
                        <h5 class="card-title">TODO App</h5>
                    </div>
                    <iframe src="https://stackblitz.com/edit/react-ahfuqn?embed=1&file=src/App.js" className="iframe"></iframe>
                    <div class="card-footer text-right">
                        <a class="btn btn-success" href="https://github.com/shubham05tawade/filtercodes/tree/master/todo">VIEW ON GITHUB</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post4;
