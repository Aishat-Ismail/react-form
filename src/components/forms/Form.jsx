import { useState } from "react"
import Res from "./Result";
import './Form.css'

const Form = () => {

    const [userInput, setUserInput] = useState({

        username: '',
        email: '',
        password: ''

    });

    const Username = () => {
        if (userInput.username === '') {
            return <p>Username is required*</p>

        }
    };

    const Email = () => {
        if (userInput.email === '') {
            return <p>Email is required*</p>

        }
    };

    const Password = () => {
        if (userInput.password === '') {
            return <p>Password is required*</p>

        }
    };

    const Pass = ()=>{
        if (userInput.password.length < 8) {
            return <p>Password must be up to 8 characters*</p>

        }
    


    };
    const handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setUserInput(
            (prevInput) => ({
                ...prevInput,
                [name]: value
            })
        )



    };

    const Submit = (e) => {
        e.preventDefault()
        console.log(userInput.username, userInput.email, userInput.password);


    }



    return (

        <>
            <div onSubmit={Submit} id='parent'>

                <form id='forms'>

                    <input type="text" name="username" id="username" placeholder="Username" value={userInput.name} onChange={handleChange} />
                    <Username></Username>

                    <input type="email" name="email" id="mail" placeholder="E-mail" value={userInput.email} onChange={handleChange} />
                    <Email></Email>

                    <input type="password" name="password" id="password" placeholder="Password" value={userInput.password} onChange={handleChange} />
                    <Password></Password>
                    <Pass></Pass>


                    <div id="checker">
                        <input type="checkbox" name="check" id="check" />
                        <p id="me">Remember Me</p>
                    </div>

                </form>

                <button type="submit">LOGIN</button>

            </div>
            
        </>
    )
}
export default Form