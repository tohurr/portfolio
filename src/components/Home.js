import { Link } from 'react-router-dom'

const Home = () => {
   return(
        <div>
            <h1>Welcome to my website. My name is Tohur Rahman</h1>
            <p>
            <Link to="person"> <button>Click?</button>
            </Link>
            </p>
            <p>Cool image right</p>

            <img src="https://media.giphy.com/media/3o7TKzyIPAiMR1pErK/giphy.gif" 
            alt="outer space"/>

        </div>
    )
}

export default Home