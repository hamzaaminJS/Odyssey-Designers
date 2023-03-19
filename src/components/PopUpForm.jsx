import React, {useState, Link} from 'react';


function PopUpForm({ status, message, onValidated }) {
    const [email, setEmail] = useState('');
    const [firstName, setFirstName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        email &&
        firstName &&
        email.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email,
            MERGE1: firstName,
        });
    }

    return (
        <form 
        className="mc__form"
        onSubmit={(e) => handleSubmit(e)}>
          <h3 className="heading-two">Join our email list and get the free eBook Now!</h3>
          <p className="paragraph-two">Join our email list and get the free eBook Now!</p>
          <Link to="e-book" className='link'>Learn More</Link>
          {status === "sending" && (
            <div className="mc__alert mc__alert--sending">
                sending...
            </div>
            )}
            {status === "error" && (
            <div 
                className="mc__alert mc__alert--error"
                dangerouslySetInnerHTML={{ __html: message }}
            />
            )}
            {status === "success" && (
            <div
                className="mc__alert mc__alert--success"
                dangerouslySetInnerHTML={{ __html: message }}
            />
            )}
          <div className="mc__field-container">
            <input
              label="First Name"
              onChangeHandler={setFirstName}
              type="text"
              value={firstName}
              placeholder="Jane"
              isRequired
            />
  
            <input
              label="Email"
              onChangeHandler={setEmail}
              type="email"
              value={email}
              placeholder="your@email.com"
              isRequired
            />
  
          </div>
  
          <input
            label="Get Free Access"
            type="submit"
            formValues={[email, firstName]}
          />
        </form>
      );
}

export default PopUpForm