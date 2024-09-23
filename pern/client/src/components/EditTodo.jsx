import React, { useState }from 'react'

const EditTodo = ({todo}) => {
    const [description, setDescription] = useState(todo.description);

    const updateDescription = async (e) => {
        // e.preventDefault();
        try{
            const body = { description };
            const response = await fetch(`http://localhost:8000/todos/${todo.todo_id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json"},
                body: JSON.stringify(body)
            })
            console.log(response)
        }catch(err){
            console.error(err);
        }
        window.location = "/";
    }


    return (
        <div>
            {/* Button trigger modal */}
            <button 
                type="button" 
                className="btn btn-warning" 
                data-bs-toggle="modal" 
                data-bs-target={`#id${todo.todo_id}`}
            >
            Edit
            </button>
        {/* 
            <!-- Modal --> */}
            <div className="modal fade" id={`id${todo.todo_id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
                <div className="modal-content">
                <div className="modal-header">
                    <h1 className="modal-title fs-5" id="exampleModalLabel">Edit Todo</h1>
                    <button 
                        type="button" 
                        className="btn-close" 
                        data-bs-dismiss="modal" 
                        aria-label="Close">
                    </button>
                </div>
                <div className="modal-body">
                    <input 
                        type="text" 
                        className="form-control" 
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <div className="modal-footer">
                    <button 
                        type="button" 
                        className="btn btn-warning"
                        onClick={e => updateDescription(e.target.value)}
                    >
                        Edit
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-secondary" 
                        data-bs-dismiss="modal">
                    Close
                    </button>
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default EditTodo
