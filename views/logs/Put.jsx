const React = require('react');

function PutResult(props) {
    const { title, _id, shipIsBroken, entry } = props.log;

    return (
        <div>
            <h1>{title} Updated</h1>
            <a href='/logs'>Back to Index</a>
            <div>
                <p>Log details:</p>
                <p>Title: {title}</p>
                <p>Entry: {entry}</p>
                <p>Ship Is Broken: {shipIsBroken ? 'Yes' : 'No'}</p>
            </div>
        </div>
    );
}

module.exports = PutResult