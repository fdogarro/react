import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from "react-router-dom";
import { getTickets, reset } from '../features/tickets/ticketSlice';
import BackButton from '../components/BackButton';
import TicketItem from '../components/TicketItem';

const Tickets = () => {
    const { tickets, isLoading, isSuccess } = useSelector((state) => 
    state.ticket)

    const dispatch = useDispatch()

    useEffect(() => {
        return () => {
            if(isSuccess){
                // dispatch(reset())
            }
        }

    }, [isSuccess, dispatch])

    useEffect(() => {
        

        dispatch(getTickets())
        
    }, [dispatch])

    return (
        <>
            <div>
                <Link to='/new-ticket'>Create A New Topic</Link>
            </div>
            <BackButton url='/' />
            <h2>Topics</h2>
            <hr />
            <table class="table table-striped">
                <thead>
                    <tr>
                    <th scope="col">Date</th>
                    <th scope="col">Topic</th>
                    <th scope="col">Description</th>
                    <th scope="col">Status</th>
                    <th scope="col">Details</th>
                    </tr>
                </thead>
                <tbody>
                    { tickets.map((ticket) => (
                        <TicketItem key={ticket._id} ticket={ticket} />
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Tickets
