import Navbar from "../components/Navbar"
import BookCover from '../images/book-cover.jpg'
import SubscribeForm from "../components/SubscribeForm"

function EBook() {
  const toggleDisplay = () => {
    const popup = document.querySelector('.popup-container')
      popup.style.display = 'flex'
      setTimeout(() => {
        popup.style.opacity = '1'
      }, 1);
}
  return (
    <div className="book-landing-page dark">
        <SubscribeForm/>
        <Navbar/>
        <div className="book-landing-page-container">
          <div className="book-info-cotnainer">
            <h1 className="heading-one">
              From Lookers<br />To Bookers:
            </h1>
            <p className="paragraph-one">
            7 Proven Steps to Get More Bookings.
            </p>
            <p className="paragraph-two">
            A comprehensive eBook of only 30 pages of pure information on how to increase sales for your travel business by optimizing your online presence.
            </p>
            <div className="bullet-points">
                <p className="paragraph-two bullet-point">Understanding Your Target Audience: The Key to Effective Content Creation</p>
                <p className="paragraph-two bullet-point">Designing a High-Converting Travel Website</p>
                <p className="paragraph-two bullet-point">Turning Prospects into Customers</p>
                <p className="paragraph-two bullet-point">And More!</p>
            </div>
            <button className="secondary-button" onClick={toggleDisplay}>Get Free Access</button>
          </div>
          <div className="book-img-container">
            <img src={BookCover} alt="From Lookers To Bookers" className="book-cover" />
          </div>
        </div>
    </div>
  )
}

export default EBook