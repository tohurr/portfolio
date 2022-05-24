import { Link } from 'react-router-dom'

const Home = () => {
   return(
        <div>
            <h1>
            Welcome! Thank you for landing on my page 😎
            </h1>
            <img src="https://media.giphy.com/media/3o7TKzyIPAiMR1pErK/giphy.gif" 
            alt="outer space"/>
            
            <div>
            <Link to='about'> <button>About this page</button>
            </Link>
            </div>

        </div>
    )
}

export default Home