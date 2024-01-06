const React = require('react')

function Edit (props) {
    const { title, _id, shipIsBroken, entry} = props.log
    return(
        <div>
            <h1>{title} Edit Page</h1>
            <a href='/logs'>Index page</a>
            <form action={`/logs/${_id}?_method=PUT`} method="POST">
                Title: <input type="text" name="title" defaultValue={title} /><br />
                Entry: <textarea name="entry" defaultValue={entry}></textarea><br />
                Ship Is Broken: {shipIsBroken ? <input type="checkbox" name="shipIsBroken" defaultChecked /> : <input type="checkbox" name="shipIsBroken" />} <br />
                <input type="submit" value="Update Log" />
            </form>
        </div>
    )
}

module.exports = Edit