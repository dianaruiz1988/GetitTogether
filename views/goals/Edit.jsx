const React = require('react');

class Edit extends React.Component {
    render() {
        const { goal } = this.props;
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
                  <form action={`/goals/${goal._id}?_method=PUT`} method="post">
                    <fieldset>
                        <legend>Edit this Goal</legend>
                        
                        DATE SET: <input name="date"  type="text"  placeholder="enter date like this month/day/year" defaultValue={goal.date} /><br />
                        DEADLINE: <input name="deadline"  type="text"  placeholder="enter your deadline here" defaultValue={goal.deadline} /><br />
                        GOAL: <br /><textarea name="goal" type="textarea" defaultValue={goal.goal} /><br />
                

                        ACHIEVED: {this.props.goal.achieved? <input name="achieved" type="checkbox" defaultChecked /> : <><input type="checkbox" name="achieved" /><br /></>}
        
                    </fieldset>
                    <input type="submit" value={`Edit ${goal.date}`} />
                </form>
                </html>
        )
    }
}

module.exports = Edit