const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        const { journals } = this.props;
        return (
            <html lang="en">
                <head>
                    <meta charSet='UTF-8' />
                    <meta httpEqiv="X-UA-Compatbile" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Get it Together Website</title>
                    <link
                        rel='stylesheet'
                        href="https://fonts.googleapis.com/css?family=Roboto:300,300italic,700,700italic"
                    />


                    <script
                        src="https://code.jquery.com/jquery-3.6.0.min.js"
                        integrity="sha256-/xUj+3OJU5yExlq6GSYGSHk7tPXikynS7ogEvDej/m4="
                        crossOrigin="anonymous"
                    ></script>
                </head>
                <body>
                    <div id="main">
                        <div>
                            <header class="header style">
                                <div class="Header Logo wrap">
                                    <a class="Header Logo" href="">Get it Together</a>
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
                        </div>
                    </div>
                </body>

            </html>
        )
    }
}


module.exports = DefaultLayout