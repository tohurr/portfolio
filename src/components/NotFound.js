import { Link } from 'react-router-dom'

const NotFound = () => {

    return(
        <div>
            <h1>Error 404! 😑</h1>
            <Link to='/'> <button>Back to Home!</button>
            </Link>

        </div>

    )
}
export default NotFound