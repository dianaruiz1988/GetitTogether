const React = require('react');

class Show extends React.Component {
    render() {
        const { goal } = this.props
        return (
            <html lang="en">
                <head>
                    <title>My Goal</title>
                    <link rel="stylesheet" href="/css/show.css" />
                    <link href='https://fonts.googleapis.com/css?family=Londrina+Shadow' rel='stylesheet' type='text/css'></link>
                </head>
                <body>
                    <h1> {goal.date} - My Goal</h1>

                    <div id="main">

                        <div class="goal">
                            <p>{goal.goal}</p>
                        </div>

                        <div class="goal">
                            <p>The deadline I plan to achieve this goal is : {goal.deadline}</p>
                        </div>

                        <div class="checklist">
                                {goal.achieved ? '✔️ Achieved' : ' ✖️ Not achieved yet'}<br />
                        
                        </div>
                        <nav class="footer">
                            <li><a href={`/goals/${goal._id}/Edit`}><button>Edit</button></a></li>
                            <form action={`/goals/${goal._id}?_method=DELETE`} method="POST">
                                <li><input type="submit" value="Delete" /></li>
                            </form>
                            <li><a href="/goals/"><button>Back to Main Goals</button></a></li>
                        </nav>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Show