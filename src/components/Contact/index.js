import React, { useState } from 'react'
import { validateEmail } from '../../utils/helpers'

function ContactForm(){
    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const { name, email, message } = formState;

    function handleChange(event) {
        if(event.target.name === 'email'){
            const isValid = validateEmail(event.target.value);
            // console.log(isValid);
            // if it isn't valid, set the state of the error message to the following
            if (!isValid) {
                setErrorMessage('Your email is invalid');
            } else {
                // otherwise, keep error message blank
                setErrorMessage('');
            }
        } else {
            // for message and name, so that they cannot be blank
            if (!event.target.value.length){
                setErrorMessage(`${event.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }
        // use spread operator to retain the other key-value pairs in the object
        if (!errorMessage){
            setFormState({ ...formState, [event.target.name]: event.target.value });}

        // console.log('errorMessage', errorMessage);
    }

    // lets us see that the formState was updated properly
    // console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
      }
      
    return (
        <section>
            <h1>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSubmit}>
              <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' onBlur={handleChange} name='name' defaultValue={name}/>
              </div>
              <div>
                <label htmlFor='email'>Email address:</label>
                <input type='email' onBlur={handleChange} name='email' defaultValue={email} />
              </div>
              <div>
                <label htmlFor='message'>Message:</label>
                <textarea name='message' onBlur={handleChange} defaultValue={message} rows='5'/>
              </div>

              {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
              )}

              <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;