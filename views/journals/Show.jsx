const React = require('react');

class Show extends React.Component {
    render() {
        const { journal } = this.props
        return (
            <html lang="en">
                <head>
                    <title>Journal Entry</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
                        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>
                         <link rel="stylesheet" href="/css/show.css" />
                         <link href='https://fonts.googleapis.com/css?family=Londrina+Shadow' rel='stylesheet' type='text/css'></link>
                </head>
                <body>
                <nav>
                    <ul class="nav nav-tabs">
                        <li class="nav-item"><a class="nav-link" href="/">HOME</a></li>
                        <li class="nav-item"><a class="nav-link" href="/journals">JOURNALS HOME PAGE</a></li>
                        <li class="nav-item"><a class="nav-link" href="/goals">GOALS HOME PAGE</a></li>
                    </ul>
                </nav>
                    <h1> Journal Entry</h1>

                    <div id="main">

                        <h2 class="name">
                                    {journal.date} -
                                    {journal.title}
                                </h2>
                       

                        <div class="grateful">
                            <p>I am Grateful for  <span class="click">  -  Click on Image to View</span><br />
                                <small>{journal.grateful}</small></p>
                        </div>

                        <div class="affirmations">
                            <p>Affirmations  <span class="click">  -   Click on Image to View Entry</span><br />
                                <small>{journal.affirmations}</small></p>
                        </div>

                        <div class="today">
                            <p>Journal Entry for Today  <span class="click">  -  Click on Image to View</span><br />
                                <small>{journal.today}</small></p>
                        </div>

                        <div class="tomorrow">
                            <p>Wishes for Tomorrow  <span class="click">  -  Click on Image to View Entry</span><br />
                                <small>{journal.tomorrow}</small></p>
                        </div>

                        <div class="checklist">
                                {journal.brushTeeth ? '✔️ Brushed teeth' : ' ✖️ Did not brush teeth'}<br />
                                {journal.washFace ? '✔️ Washed face' : '✖️ Did not wash face'}<br />
                                {journal.eatMeal ? '✔️ Ate' : '✖️ Did not eat - tengo hambre'}<br />
                                {journal.getFreshAir ? '✔️ Got some Fresh Air!' : '✖️ Did not get Fresh Air'}<br />
                                {journal.drinkWater ? '✔️ Drank Water' : ' ✖️ Need to Drink some Water'}<br />
                        </div>
                        <nav class="footer">
                            <li><a href={`/journals/${journal._id}/Edit`}><button>Edit</button></a></li>
                            <form action={`/journals/${journal._id}?_method=DELETE`} method="POST">
                                <li><input type="submit" value="Delete" /></li>
                            </form>
                            <li><a href="/journals/"><button>Back to Main</button></a></li>
                        </nav>
                    </div>
                </body>
            </html>
        )
    }
}

module.exports = Show