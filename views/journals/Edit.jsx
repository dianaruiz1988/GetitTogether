const React = require('react');

class Edit extends React.Component {
    render() {
        const { journal } = this.props;
        return (
                  <form action={`/journals/${journal._id}?_method=PUT`} method="post">
                    <fieldset>
                        <legend>Edit this Journal Entry</legend>
                        
                        DATE: <input name="date"  type="text"  placeholder="enter date like this month/day/year" defaultValue={journal.date} /><br />
                        TITLE: <input name="title"  type="text"  placeholder="enter a title for your journal entry" defaultValue={journal.title} /><br />
                        I AM GRATEFUL FOR: <br /><textarea name="grateful" type="textarea" defaultValue={journal.grateful} /><br />
                        AFFIRMATION: <br /><textarea name="affirmations" type="textarea" defaultValue={journal.affirmations} /><br />
                        TODAY: <br /><textarea name="today" type="textarea" defaultValue={journal.today} /><br />
                        TOMORROW: <br /><textarea name="tomorrow" type="textarea"  defaultValue={journal.tomorrow} /><br />

                        BRUSH TEETH: {this.props.journal.brushTeeth? <input name="brushTeeth" type="checkbox" defaultChecked /> : <input type="checkbox" name= "brushTeeth" />}
                        WASH FACE: {this.props.journal.washFace? <input name="washFace" type="checkbox" defaultChecked /> : <input type="checkbox" name= "washFace" />}
                        EAT MEAL: {this.props.journal.eatMeal? <input name="eatMeal" type="checkbox" defaultChecked /> : <input type="checkbox" name= "eatMeal" />}
                        GET FRESH AIR: {this.props.journal.getFreshAir? <input name="getFreshAir" type="checkbox" defaultChecked /> : <input type="checkbox" name= "getFreshAir" />}
                        DRINK WATER: {this.props.journal.drinkWater? <input name="drinkWater" type="checkbox" defaultChecked /> : <input type="checkbox" name= "eatMeal" />}
                    
                      

                    
                    </fieldset>
                    <input type="submit" value={`Edit ${journal.date}`} />
                </form>
        )
    }
}

module.exports = Edit