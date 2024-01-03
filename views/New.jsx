const React = require('react');

function New(props) {
  return (
    <div>
      <h1>New Log Page</h1>
      <a href='/logs'>Go back to Logs Page</a>
      <form action="/logs" method="POST">
        Title: <input type="text" name="title" /><br/>
        Entry: <textarea name="entry"></textarea><br/>
        Ship Is Broken: <input type="checkbox" name="shipIsBroken" /><br/>
        <input type="submit" value="Log"/>
      </form>
    </div>
  );
}

module.exports = New;