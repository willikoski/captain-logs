// const React = require('react')

// function Show(props){
//     return(
//         <div>
//             <h1>{props.log.name}</h1>
//             <a href='/logs'>Go back to Index Page</a>
//             <p>
//                 The{props.log.title} is {props.log.entry} and 
//                 {props.log.shipIsBroken? 'Ship Is Broken ' : 'Ship Is not Broken'}
//             </p>
//         </div>
//     )
// }

// module.exports = Show

const React = require('react')

function Show(props){
    return(
        <div>
            <h1>{props.log.name}</h1>
            <a href="/logs">Go back to Index Page</a>
            <p>
                {props.log.title} {props.log.entry} {props.log.shipIsBroken? 'is broken': 'is not broken'}
            </p>
        </div>
    )
}

module.exports = Show