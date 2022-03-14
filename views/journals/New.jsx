const React = require('react');

class New extends React.Component {
    render() {
        return (
            <html lang="en">
               <head>
               <link href='https://fonts.googleapis.com/css?family=Londrina+Shadow' rel='stylesheet' type='text/css'></link>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
                        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>
                    <title>Create Journal Entry</title>
                </head> 
                <nav>
                    <ul class="nav nav-tabs">
                        <li class="nav-item"><a class="nav-link" href="#">HOME</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">JOURNALS HOME PAGE</a></li>
                        <li class="nav-item"><a class="nav-link" href="#">GOALS HOME PAGE</a></li>
                    </ul>
                </nav>
                <div class="text-center">
                    <img class="img-fluid" src="img/asset_holder.jpeg" />
                </div>
                <div class="text-center">
                    <div>
                        <form action="/journals" method="post">
                            <fieldset>
                                <legend>Create a New Journal Entry</legend>
                        
                                DATE: <input name="date"  type="text"  placeholder="enter date like this month/day/year" /><br />
                                TITLE: <input name="title"  type="text"  placeholder="enter a title for your journal entry" /><br />
                                I AM GRATEFUL FOR: <br /><textarea name="grateful" type="textarea" /><br />
                                AFFIRMATION: <br /><textarea name="affirmations" type="textarea" /><br />
                                TODAY: <br /><textarea name="today" type="textarea" /><br />
                                TOMORROW: <br /><textarea name="tomorrow" type="textarea" /><br />


                                BRUSH TEETH:<input name="brushTeeth" type="checkbox" /><br />
                                WASH FACE:<input name="washFace" type="checkbox" /><br />
                                EAT MEAL:<input name="eatMeal" type="checkbox" /><br />
                                GET FRESH AIR:<input name="getFreshAir" type="checkbox" /><br />
                                DRINK WATER:<input name="drinkWater" type="checkbox" /><br />
                            </fieldset>
                            <input type="submit" value="Create New Journal Entry" />
                        </form> 
                    </div>
                </div>
            </html>
        )
     }
}

module.exports = New