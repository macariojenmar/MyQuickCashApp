import React from 'react';
import {useState} from 'react';

const App = () => {

    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email, pass);
    }

    return (
       
            <div>
                <form onSubmit={handleSubmit}>
                <h1>Login Page</h1>
                <input 
                    type="email"
                    id="email"
                    placeholder='Email'                    
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required>
                </input>

                <br/><br/>
                <input 
                    type="password" 
                    id="password"
                    placeholder='Password'
                    onChange={(e) => setPass(e.target.value)}
                    value={pass}
                    required>
                </input>
                <br/><br/>
                <button type="submit">Login</button>
                </form>
            </div>
   
    )
}

export default App;