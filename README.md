# Quiz App
A quiz app with admin privileges working on node js and mongodb

<p>Created a quiz app/platform for User where they can organise quizes  </p>
<p>At any point of time admin can enable or disable the quiz itself.</p>
<p>At any point of time admin can enable or disable any question.</p>
<p>At any point of time admin can add, remove or edit the question for an existing quiz.</p>
<p>Apart from the admin rest of the users can only see the quiz and questions.</p>

<h3><u>Implementation</u></h3><br>
<p>1. I have used  as database for the app. and database schema for storing the quiz is called quizes. </P>
<p>2. There are four different REST api's for performing various operations</p>
<ul>
<li> <b>localhost:3000/quizes</b>   --> for getting list of all quizes, creating a quiz, Removing all quizes(contains defferent methods like, GET, POST, PUT, DELETE) </li>
<li> <b>localhost:3000/quizes/:quizId </b> --> for getting details of a quiz, updating content of a quiz, deleting a quiz </li>
<li> <b>localhost:3000/quizes/:quizId/questions </b> --> for getting questions of a quiz, adding a question, deleting all questions from quiz </li>
<li> <b>localhost:3000/quizes/:quizId/questions/:questionId</b> --> getting a question, updating a question, deleting a question </li>
</ul>
<p>4. All the Post, Put, Delete operations needs to be authorized by providing username and password (username: admin, Password: password). 
This means only admin can create, update or delete a quiz/question </p>


<h3><u>Deployment steps</u></h3><br>
<ul>
<li> Clone the entire repository to a new folder on desktop.</li>
<li> Run npm install or npm i to install all the necessary dependencies/modules. </li>
<li> Run npm run start to start the server. </li>
<li>  Test cases are also written for the different API's to run the test cases run command npm run test . </li>
