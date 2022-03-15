const React = require('react');

class Edit extends React.Component {
    render() {
        const { goal } = this.props;
        return (
                  <form action={`/goals/${goal._id}?_method=PUT`} method="post">
                    <fieldset>
                        <legend>Edit this Goal</legend>
                        
                        DATE SET: <input name="date"  type="text"  placeholder="enter date like this month/day/year" defaultValue={goal.date} /><br />
                        DEADLINE: <input name="deadline"  type="text"  placeholder="enter your deadline here" defaultValue={goal.deadline} /><br />
                        GOAL: <br /><textarea name="goal" type="textarea" defaultValue={goal.goall} /><br />
                

                        ACHIEVED: {this.props.goal.achieved? <input name="achieved" type="checkbox" defaultChecked /> : <><input type="checkbox" name="achieved" /><br /></>}
        
                    </fieldset>
                    <input type="submit" value={`Edit ${goal.date}`} />
                </form>
        )
    }
}

module.exports = Edit