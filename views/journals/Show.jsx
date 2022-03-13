const React = require('react');

class Show extends React.Component {
    render() {
        const { journal } = this.props
        return (
            <html lang="en">
                <head>
                    <title>Journal Entry</title>
                    <link rel="stylesheet" href="/css/show.css" />
                    <script src="/assets/jquery.js"></script>
                    <link href='https://fonts.googleapis.com/css?family=Londrina+Shadow' rel='stylesheet' type='text/css'></link>
                </head>
                <body>
                    <h1> Journal Entry</h1>

                    <div id="main">

                        <div class="name">
                            <article>
                                <h2>
                                    {journal.date} -
                                    {journal.title}
                                </h2>
                            </article>
                        </div>

                        <div class="grateful">
                            <p>I am Grateful for <span class="gratitude">Click on Image to View</span><br />
                                <small>{journal.grateful}</small></p>
                        </div>

                        <div class="affirmations">
                            <p>Affirm it into Existence <span class="affirmed"> Click on Image to View Entry</span><br />
                                <small>{journal.affirmations}</small></p>
                        </div>

                        <div class="today">
                            <p>{journal.title} <span class="hoy">{journal.date} - Click on Image to View</span><br />
                                <small>{journal.today}</small></p>
                        </div>

                        <div class="tomorrow">
                            <p>Wishes<span class="mañana">Click on Image to View Entry</span><br />
                                <small>{journal.tomorrow}</small></p>
                        </div>

                        <div class="checklist">
                            <p>
                                {journal.brushTeeth ? 'Brushed teeth' : 'Did not brush teeth 🐷 '}<br />
                                {journal.washFace ? 'Washed face 🙈' : 'Did not wash face'}<br />
                                {journal.eatMeal ? 'I got that yummy yummy 🍱' : 'Did not eat - tengo hambre'}<br />
                                {journal.getFreshAir ? 'Got some Fresh Air!' : 'Did not get Fresh Air 🧛‍♀️'}<br />
                                {journal.drinkWater ? 'Drank Water' : ' OH OH Time to Drink some Water 😨'}<br />
                            </p>
                        </div>
                            <ul>
                            <li><a href={`/journals/${journal._id}/Edit`}><button>Edit</button></a></li>
                            <form action={`/journals/${journal._id}?_method=DELETE`} method="POST">
                                <li><input type="submit" value="Delete" /></li>
                            </form>
                            <li><a href="/journals/"><button>Back to Main</button></a></li>
                        </ul>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Show