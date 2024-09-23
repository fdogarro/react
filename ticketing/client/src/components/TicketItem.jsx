import { Link } from 'react-router-dom';

const TicketItem = ({ticket}) => {
  return (
    <tr>
        <td>{new Date(ticket.createdAt).toLocaleString('en-US')}</td>
        <td>{ticket.topic}</td>
        <td className={`status status-${ticket.status}`}>
            {ticket.description}
        </td>
        <td className={`status status-${ticket.status}`}>
            {ticket.status}
        </td>
        
        <td><Link to={`/ticket/${ticket._id}`} className='btn btn-reverse btn-sm'>
            View
        </Link></td>
    </tr>
  )
}

export default TicketItem
