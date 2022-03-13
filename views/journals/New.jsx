const React = require('react');

class New extends React.Component {
    render() {
        return (
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
        )
    }
}

module.exports = New