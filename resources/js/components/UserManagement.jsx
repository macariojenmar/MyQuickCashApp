import axios from 'axios';
import React from 'react';
import {useState} from 'react';

const UserManagement = () => {

    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('');

    const handleSubmit = () => {
        axios.post('http://myquickcashapp.test/usermanagement', fName, lName, email, role); 
    }   

     /*


       const handleSubmit = () => {
        console.log(fName, lName, email, role);
        //axios.post('api/add-user', fName, lName, email, role)
    }

    const handleSubmit = await axios.post('http://myquickcashapp.test/usermanagement/api/add-user', fName, lName, email, role);

    if (handleSubmit.data.status == 200) {
        console.log(handleSubmit.data.message);

    }
 */
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>User Management</h1>
                    <input 
                        type="text"
                        name="fName"
                        placeholder="First name"
                        onChange={(e) => setFName(e.target.value)}
                        value={fName}
                    />
                <br/><br/>
                    <input 
                        type="text" 
                        name="lName"
                        placeholder="Last name"
                        onChange={(e) => setLName(e.target.value)}
                        value={lName}
                    />
                <br/><br/>
                    <input 
                        type="email" 
                        name="email"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                    />
                <br/><br/>
                {/*  <select>
                    <option>Role 1</option>
                    <option>Role 2</option>
                </select>*/}
                <input 
                        type="text"
                        name="role" 
                        placeholder="Role"
                        onChange={(e) => setRole(e.target.value)}
                        value={role}
                    />
              
                <br/><br/>
                    <button type="submit">Save User</button>
            </form>
        </div>
    )
}

export default UserManagement;