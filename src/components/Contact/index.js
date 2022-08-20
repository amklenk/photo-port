import React, { useState } from 'react'

function ContactForm(){
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const { name, email, message } = formState;

    function handleChange(event) {
        // use spread operator to retain the other key-value pairs in the object
        setFormState({ ...formState, [event.target.name]: event.target.value })
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
                <input type='text' onChange={handleChange} name='name' defaultValue={name}/>
              </div>
              <div>
                <label htmlFor='email'>Email address:</label>
                <input type='email' onChange={handleChange} name='email' defaultValue={email} />
              </div>
              <div>
                <label htmlFor='message'>Message:</label>
                <textarea name='message' onChange={handleChange} defaultValue={message} rows='5'/>
              </div>
              <button type='submit'>Submit</button>
            </form>
        </section>
    )
}

export default ContactForm;