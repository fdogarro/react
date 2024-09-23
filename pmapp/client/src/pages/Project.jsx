import { Link, useParams } from 'react-router-dom';
import Spinner from '../components/Spinner';
import ClientInfo from '../components/ClientInfo';
import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_PROJECT } from '../queries/projectQueries';

const Project = () => {
    const { id } = useParams();
    const { loading, error, data } = useQuery(GET_PROJECT, {
        variables: { id }
        // ,
        // onCompleted: (queryData) => {
        //     console.log(queryData);
        // }
    });

    
    
    if(loading) return <Spinner />;
    console.log(error, id, data)
    if(error) return <p>Something Went Wrong</p>;

    


    return (
        <>
            {!loading && !error && (
                <div className="mx-auto w-75 card p-5">
                    <Link to="/" className="btn btn-light btn-sm w-25 d-inline ms-auto">Back</Link>
                </div>
                
            )}
            <div>
                Project
            </div>
            <ClientInfo />
        </>
    )
}

export default Project
