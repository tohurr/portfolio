import { Link } from 'react-router-dom'

const Home = () => {
   return(
        <div>
            <h1>
            Welcome, this is my website 😎
            </h1>
            <h3>Cool image right</h3>

            <img src="https://media.giphy.com/media/3o7TKzyIPAiMR1pErK/giphy.gif" 
            alt="outer space"/>
            
            <div>
            <Link to="person"> <button>Try clicking here</button>
            </Link>
            </div>

        </div>
    )
}

export default Home