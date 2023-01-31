import * as React from "react";

interface IWishFormProps {
  closeForm: () => void;
}

const WishForm: React.FunctionComponent<IWishFormProps> = ({ closeForm }) => {
  return (
    <div className="wish__modal">
      <form className="wish__form" action="">
        <button
          className="wish__form--close"
          onClick={(e) => {
            e.preventDefault();
            closeForm();
          }}
        >
          <svg
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_449_264)">
              <path
                d="M10.8824 10.5001L16.0699 5.32041C16.1696 5.19898 16.2205 5.04481 16.2128 4.8879C16.2051 4.731 16.1393 4.58256 16.0282 4.47148C15.9171 4.3604 15.7687 4.2946 15.6118 4.2869C15.4549 4.27919 15.3007 4.33012 15.1793 4.42979L9.99961 9.61729L4.81992 4.42979C4.69849 4.33012 4.54432 4.27919 4.38741 4.2869C4.23051 4.2946 4.08208 4.3604 3.97099 4.47148C3.85991 4.58256 3.79411 4.731 3.78641 4.8879C3.7787 5.04481 3.82963 5.19898 3.9293 5.32041L9.1168 10.5001L3.9293 15.6798C3.81193 15.7983 3.74609 15.9583 3.74609 16.1251C3.74609 16.2919 3.81193 16.4519 3.9293 16.5704C4.04876 16.6859 4.20843 16.7505 4.37461 16.7505C4.54079 16.7505 4.70046 16.6859 4.81992 16.5704L9.99961 11.3829L15.1793 16.5704C15.2988 16.6859 15.4584 16.7505 15.6246 16.7505C15.7908 16.7505 15.9505 16.6859 16.0699 16.5704C16.1873 16.4519 16.2531 16.2919 16.2531 16.1251C16.2531 15.9583 16.1873 15.7983 16.0699 15.6798L10.8824 10.5001Z"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_449_264">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </button>
        <img
          className="wish__form--img"
          src="/images/form-banner.png"
          alt="form banner"
        />
        <p className="wish__form--heading">Send Your Wishes</p>
        <p className="wish__form--text">
          Welcome! You can send your well wishes here. Your wish is public to
          the event creator & other well wishers
        </p>
        <div>
          <label className="wish__form--label" htmlFor="">
            Full name / Nickname
          </label>
          <input
            className="wish__form--input"
            type="text"
            name="name"
            placeholder="Type your name or a nickname here"
          />
        </div>
        <div>
          <label className="wish__form--label" htmlFor="">
            Wish / Personal Greetings
          </label>
          <textarea
            className="wish__form--textarea"
            name="wish"
            id=""
            placeholder="This is where you bare your heart out."
            cols={30}
            rows={10}
          ></textarea>
        </div>
        <button
          className="wish__form--send "
          type="submit"
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Send Wish & Download Frame
        </button>
      </form>
    </div>
  );
};

export default WishForm;
