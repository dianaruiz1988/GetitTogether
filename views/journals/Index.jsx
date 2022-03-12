const React = require('react');

class Index extends React.Component {
    render() {
        const { journals } = this.props;
        return (
          
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

        )
    }
}

module.exports = Index