import React, {useState} from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [formState, setFormState] = useState([{name: '', email: '', message: ''}]);

    const [errorMessage, setErrorMessage] = useState('');

    const {name, email, message} = formState;

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!errorMessage) {
            setFormState({[event.target.name] : event.target.value});
            console.log('form', formState);
        }
    }

    const handleChange = (e) => {
        if (e.target.name === 'email') {
          const isValid = validateEmail(e.target.value);
          if (!isValid) {
            setErrorMessage('Your email is invalid.');
          } else {
            setErrorMessage('');
          }
        } else {
          if (!e.target.value.length) {
            setErrorMessage(`${e.target.name} is required.`);
          } else {
            setErrorMessage('');
          }
        }
      };

    return (
            <form className="form flex-column w-50 mx-auto mt-5" onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input type="text" defaultValue={name} onBlur={handleChange} className="form-control" id="name" placeholder="Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address</label>
                    <input type="email" defaultValue={email} onBlur={handleChange} className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                    <small id="emailHelp" className="form-text text-muted">I'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" className="form-control" rows="5" defaultValue={message} onBlur={handleChange}/>
                </div>
                <button type="submit" className="btn btn-outline-secondary mt-3">Submit</button>
            </form>
    )
}


export default Contact