import { FaExclamationTriangle } from "react-icons/fa";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center mt-5">
        <FaExclamationTriangle className="text-danger" size='5em' />
        <h1>404</h1>
        <p className="lead">Page does not exist</p>
        <Link className="btn btn-primary" to='/'>Homepage</Link>
    </div>
  )
}

export default NotFound
