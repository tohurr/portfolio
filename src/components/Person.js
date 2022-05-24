import { Link } from 'react-router-dom'
import FavoriteFood from './FavoriteFood'
import FavoriteColor from './FavoriteColor'

const Person = () => {

    return(
        <div>
            <h1>Hey, how are you? Hope you are having a great day.</h1>

            <div>
                <FavoriteFood />
                <FavoriteColor />
            </div>
            <p>That's awesome.</p>
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