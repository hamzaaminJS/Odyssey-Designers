import React, {useState, useEffect, Link} from 'react';
import MailchimpSubscribe from "react-mailchimp-subscribe"
import BookCover from '../images/book-cover.jpg'


const CustomForm = ({ status, message, onValidated }) => {

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

    const toggleDisplay = () => {
        const popup = document.querySelector('.popup-container')
          popup.style.opacity = '0'
          setTimeout(() => {
          popup.style.display = 'none'
          }, 300);
    }

    useEffect(() => {
        if(status === "success") clearFields();
    }, [status])

    const clearFields = () => {
        const popupContainer = document.querySelector('.popup-container')
        popupContainer.style.display = 'none'
    }


    return (
        <div className="popup-container">
        <div className="popup dark">
            <p className="heading-five close" onClick={toggleDisplay}>X</p>
            <form
            className="mc__form"
            onSubmit={(e) => handleSubmit(e)}
        >
            <h3 className="heading-three">
                {status === "success" ? "Success!" :
                    "Don't You Want To Get More Bookings? Join For Even More Free Stuff!"}
            </h3>
            <div className="bullet-points">
            <p className="paragraph-two">What You'll Get:</p>
                <p className="paragraph-two bullet-point">From Lookers To Bookers The E-Book <span><a  className='link' style={{textDecoration: 'underline', marginLeft: '1rem', color: '#34A56F', fontSize: '1.4rem', cursor: 'pointer', fontStyle: 'none'}} href="/e-book" target="_blank">Learn More</a></span></p>
                <p className="paragraph-two bullet-point">Tips And Industy Updates</p>
                <p className="paragraph-two bullet-point">Early Access To Free Products!</p>
                <p className="paragraph-two bullet-point">No Spamming Whatsoever</p>
            </div>

            {/* {status === "sending" && (
                <div
                    className="mc__alert mc__alert--sending"
                >sending...</div>
            )} */}
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

            {status !== "success" ? (
                <div className="form-container">
                    <label className='paragraph-two'>
                    First Name
                    <input
                        type="text"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder="Jane"
                        required
                    />
                    </label>
                    <label className='paragraph-two'>
                    Email
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="jane@domain.com"
                        required
                    />
                    </label>

                </div>
            ) : null}

            {/*Close button appears if form was successfully sent*/}
            {
                <button className="main-button" 
                type="submit"
                formValues={[email, firstName]}>Get Free Access</button>

            }
        </form>
        <div className="form-img">
            <img src={BookCover} alt="" />
        </div>
        </div>
        </div>
    );
};


const SubscribeForm = props => {
    const url = `https://gmail.us10.list-manage.com/subscribe/post?u=7be2b3bda3624cc817452eac5&id=d4214c5b36`;

    return (

        <div className="mc__form-container">
            <MailchimpSubscribe
                url={url}
                render={({ subscribe, status, message }) => (
                    <CustomForm
                        status={status}
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>

    )
}

export default SubscribeForm