const React = require('react');

class New extends React.Component {
    render() {
        return (
            <html lang="en">
               <head>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
                        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>
                         <link rel="stylesheet" href="/css/show.css" />
                         <link href='https://fonts.googleapis.com/css?family=Londrina+Shadow' rel='stylesheet' type='text/css'></link>
                    <title>Create Goal Entry</title>
                </head> 
                <nav>
                    <ul class="nav nav-tabs">
                        <li class="nav-item"><a class="nav-link" href="#">HOME</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">JOURNALS HOME PAGE</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">GOALS HOME PAGE</a></li>
                    </ul>
                </nav>
                <h1> Create a New Goal Entry</h1>
                <div class="text-center">
                    <img class="img-fluid" src="https://i.pinimg.com/originals/90/f5/78/90f5783966ddbfb8d4bc88e097368164.jpg" />
                </div>
                <div class="text-center">
                    <div>
                        <form action="/goals" method="post">
                            <fieldset>
                        
                                DATE SET: <input name="date"  type="text"  placeholder="enter date like this month/day/year" /><br />
                                DEADLINE: <br /><textarea name="grateful" type="textarea" /><br />
                                GOAL: <textarea name="goal"  type="textarea"  placeholder="enter a title for your journal entry" /><br />
                               

                                ACHIEVED?:<input name="achievd" type="checkbox" /><br />
                            </fieldset>
                            <input type="submit" value="Create New Goal" />
                        </form> 
                    </div>
                </div>
            </html>
        )
     }
}

module.exports = New