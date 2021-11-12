
import React, { useState } from 'react';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
  

    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('http://localhost:5000/users/admin', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div className="row ps-5">
            <h2 className="text-warning fw-bold fs-2 my-4">Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <input
                    className=" bg-black text-white ps-2 pe-3 py-2 rounded"
                    label="Email"
                    placeholder="Email"
                
                    type="email"
                    onBlur={handleOnBlur}
                     /><br/>
                <button type="submit  "className="btn bg-warning mt-4 text-secondary fw-bold fs-6" >Submit</button>
            </form>
            {success && <p className="text-success my-5  pt-5 mx-auto fw-bold fs-6">Made Admin successfully!</p>}
        </div>
    );
};

export default MakeAdmin;