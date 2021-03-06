const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        const { journals } = this.props;
        return (
            <html lang="en">
                <head>
                    <meta charSet='UTF-8' />
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css"
                    integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous"></link>
                    <meta httpEqiv="X-UA-Compatbile" content="IE=edge" />
                    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                    <title>Get it Together</title>
                </head>
                <body>
                    <div id="main"></div>
                </body>
            </html>
        )
    }
}


module.exports = DefaultLayout