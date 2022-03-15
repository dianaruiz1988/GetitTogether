const React = require('react');

class Edit extends React.Component {
    render() {
        const { journal } = this.props;
        return (
            <html lang="en">
                <head>
                    <title>Journal Entry</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
                        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>
                         <link rel="stylesheet" href="/css/show.css" />
                         <link href='https://fonts.googleapis.com/css?family=Londrina+Shadow' rel='stylesheet' type='text/css'></link>
                </head>
                <nav>
                    <ul class="nav nav-tabs">
                        <li class="nav-item"><a class="nav-link" href="/">HOME</a></li>
                        <li class="nav-item"><a class="nav-link" href="/journals">JOURNALS HOME PAGE</a></li>
                        <li class="nav-item"><a class="nav-link" href="/goals">GOALS HOME PAGE</a></li>
                    </ul>
                </nav>
                  <form action={`/journals/${journal._id}?_method=PUT`} method="post">
                    <fieldset>
                        <legend>Edit this Journal Entry</legend>
                        
                        DATE: <input name="date"  type="text"  placeholder="enter date like this month/day/year" defaultValue={journal.date} /><br />
                        TITLE: <input name="title"  type="text"  placeholder="enter a title for your journal entry" defaultValue={journal.title} /><br />
                        I AM GRATEFUL FOR: <br /><textarea name="grateful" type="textarea" defaultValue={journal.grateful} /><br />
                        AFFIRMATION: <br /><textarea name="affirmations" type="textarea" defaultValue={journal.affirmations} /><br />
                        TODAY: <br /><textarea name="today" type="textarea" defaultValue={journal.today} /><br />
                        TOMORROW: <br /><textarea name="tomorrow" type="textarea"  defaultValue={journal.tomorrow} /><br />

                        BRUSH TEETH: {this.props.journal.brushTeeth? <input name="brushTeeth" type="checkbox" defaultChecked /> : <><input type="checkbox" name="brushTeeth" /><br /></>}
                        WASH FACE: {this.props.journal.washFace? <input name="washFace" type="checkbox" defaultChecked /> : <><input type="checkbox" name="washFace" /><br /></>}
                        EAT MEAL: {this.props.journal.eatMeal? <input name="eatMeal" type="checkbox" defaultChecked /> : <><input type="checkbox" name="eatMeal" /><br /></>}
                        GET FRESH AIR: {this.props.journal.getFreshAir? <input name="getFreshAir" type="checkbox" defaultChecked /> : <><input type="checkbox" name="getFreshAir" /><br /></>}
                        DRINK WATER: {this.props.journal.drinkWater? <input name="drinkWater" type="checkbox" defaultChecked /> : <><input type="checkbox" name="eatMeal" /><br /></>}
                    </fieldset>
                    <input type="submit" value={`Edit ${journal.date}`} />
                </form>
                
                </html>
        )
    }
}

module.exports = Edit