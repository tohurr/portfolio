import { Link } from 'react-router-dom'

const Person = () => {

    return(
        <div>
            <h1>Hey, how are you?</h1>
            <h3> Testing</h3>
            <p>
            Hope you are having a great day.    
            </p>
            <p>
            Check out my Github account -- {''} <a href="https://github.com/tohurr"> "Tohur Rahman"</a>
            </p>
            <div>
            <Link to='/'> <button>Back to Home!</button>
            </Link>
            </div>
        </div>
    ) 
}

export default Person