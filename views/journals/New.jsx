const React = require('react');
const DefaultLayout = require('../Default.jsx');

class New extends React.Component {
    render() {
        return (
                <form action="/journals" method="post">
                    <fieldset>
                        <legend>Create a New Journal Entry</legend>
                        <label>
                            NAME:<input type="text" name="name" placeholder="enter fruit name" />
                        </label>
                        <label>
                            COLOR:<input type="text" name="color" placeholder="enter fruit color" />
                        </label>
                        <label> READY TO EAT:<input type="checkbox" name="readyToEat" /> </label>
                    </fieldset>
                    <input type="submit" value="create New fruit" />
                </form>
        )
    }
}

module.exports = New