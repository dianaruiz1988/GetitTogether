const React = require('react');


class Index extends React.Component {
    render() {
        const { journals } = this.props;
        return (
            <html lang="en">
                 <head>
                <title>Journal Home Page</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
                        integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>
                         <link rel="stylesheet" href="/css/show.css" />
                         <link href='https://fonts.googleapis.com/css?family=Londrina+Shadow' rel='stylesheet' type='text/css'></link>
            </head>
            <nav>
                    <ul class="nav nav-tabs">
                        <li class="nav-item"><a class="nav-link" href="/">HOME</a></li>
                        <li class="nav-item"><a class="nav-link" href="/goals">GOALS HOME PAGE</a></li>
                    </ul>
                </nav>
         
                <div id="main">
                    <div>
                        <header class="header style">
                            <div class="Header Logo wrap">
                            </div>
                            <div class="Header Menu">
                                <div class="Container">
                                    <div class="Header Wrap">
                                        <a href="/journals/new"><button>Create A New Journal Entry</button></a>
                                        <nav class="navigation">
                                            <ul class="Header Nav List"></ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </header>

                        <main class=" Main style">
                        {
                        journals.map((journal) => (
                            <article>
                                <a href={`/journals/${journal._id}`}>
                                    <h2>
                                        {journal.date} - {journal.title}
                                    </h2>
                                </a>
                            </article>
                        ))
                    }
                        </main>
                    </div>
                </div>
                </html>
        )
    }
}

module.exports = Index