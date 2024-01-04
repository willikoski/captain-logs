const React = require('react')

function Index (props) {
    return (
        <div>
            <h1>Logs Page</h1>
            <a href="/logs/new">Create A New Log Here!</a>
            <ul>
            {
              props.logs.map((log) => {
                return (
                    <li key={log.id}>
                       <a href={`/logs/${log._id}`}>{log.title}</a> is {log.entry}
                       </li>
              )
          }) 
         }
         </ul>
    </div>
    )
}

module.exports = Index