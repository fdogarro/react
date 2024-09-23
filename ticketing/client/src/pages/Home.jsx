import { Link } from "react-router-dom";
import { useSelector} from 'react-redux';


const Home = () => {
  return (
    <>
      <section className="heading">
        <h1>What do you need help with?</h1>
        <p>Please choose from an option below</p>
      </section>
      <div>
        <Link to='/new-ticket'>Create A New Topic</Link>
      </div>
      <div>
        <Link to='/tickets'>View Topics</Link>
      </div>
      <div>
        <Link to='/ask-chat-gpt'>Ask Chat GPT</Link>
      </div>
    </>
  )
}

export default Home
