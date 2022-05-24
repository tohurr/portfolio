import { Link } from 'react-router-dom'

const About = () => {

    return(
        <div>
            <h1>Info about me</h1>
            <p>
                The best website in the world {''} <a href="https://reactrouter.com"> React Router</a>
            </p>
            <div>
            <Link to='/'> <button>Back to Home!</button>
            </Link>
            </div>
        </div>
    ) 
}

export default About