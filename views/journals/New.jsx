const React = require('react');
const DefaultLayout = require('../Default.jsx');

class New extends React.Component {
    render() {
        return (
                <form action="/journals" method="post">
                    <fieldset>
                        <legend>Create a New Journal Entry</legend>
                        <label>
                            DATE:<input type="text" name="date" placeholder="enter date in this format month/day/year" /><br />
                        </label>
                        <label>
                            TITLE:<input type="text" name="title" placeholder="enter a title for your journal entry" /><br />
                        </label>
                        <label>
                            I AM GRATEFUL FOR:<input type="textarea" textarea name="grateful" placeholder="write what you are grateful for here" /><br />
                        </label>
                      











                        {/* <label> READY TO EAT:<input type="checkbox" name="readyToEat" /> </label> */}
                    </fieldset>
                    <input type="submit" value="create New fruit" />
                </form>
        )
    }
}

module.exports = New