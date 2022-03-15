const React = require('react');

class Edit extends React.Component {
    render() {
        const { goal } = this.props;
        return (
                  <form action={`/goals/${goal._id}?_method=PUT`} method="post">
                    <fieldset>
                        <legend>Edit this Goal</legend>
                        
                        DATE: <input name="date"  type="text"  placeholder="enter date like this month/day/year" defaultValue={goal.date} /><br />
                        GOAL: <input name="title"  type="text"  placeholder="enter a title for your goal entry" defaultValue={goal.title} /><br />
                        DEADLINE: <br /><textarea name="grateful" type="textarea" defaultValue={goal.grateful} /><br />
                

                        ACHIEVED: {this.props.goal.achieved? <input name="achieved" type="checkbox" defaultChecked /> : <><input type="checkbox" name="achieved" /><br /></>}
        
                    </fieldset>
                    <input type="submit" value={`Edit ${goal.date}`} />
                </form>
        )
    }
}

module.exports = Edit