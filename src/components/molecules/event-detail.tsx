import * as React from "react";

interface IEventDetailProps {}

const EventDetail: React.FunctionComponent<IEventDetailProps> = (props) => {
  return (
    <div className="site-container">
      <div className="event__detail">
        <div className="event__about">
          <p className="event__about--title">About Event</p>
          <p className="event__about--text">
            Join us as we celebrate our mummy Lilian Egwuchukwu’s 50th birthday,
            the mummy over the New & Living Way Church Lagos. You can drop your
            wishes, prayers or testimonies below!
          </p>
        </div>
        <div className="event__date">
          <div className="event__date--wrapper">
            <div>
              <p className="event__about--title">Event Created By:</p>
              <p className="event__about--text">NLWC Church Publicity</p>
            </div>
            <button className="event__likes" onClick={() => {
              
            }}>
              <svg
                width="18"
                height="16"
                viewBox="0 0 18 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 14.875C9 14.875 1.1875 10.5 1.1875 5.18751C1.1875 4.24836 1.51289 3.33821 2.1083 2.61193C2.70371 1.88564 3.53236 1.38808 4.45328 1.2039C5.37419 1.01971 6.33047 1.16029 7.15943 1.6017C7.98838 2.04311 8.63879 2.7581 9 3.62501C9.36121 2.7581 10.0116 2.04311 10.8406 1.6017C11.6695 1.16029 12.6258 1.01971 13.5467 1.2039C14.4676 1.38808 15.2963 1.88564 15.8917 2.61193C16.4871 3.33821 16.8125 4.24836 16.8125 5.18751C16.8125 10.5 9 14.875 9 14.875Z"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              0
            </button>
          </div>
          <div className="event__date--wrapper">
            <div>
              <p className="event__about--title">Event Created By:</p>
              <p className="event__about--text">NLWC Church Publicity</p>
            </div>
            <button className="event__share">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_295_1091)">
                  <path
                    d="M6.25 10H13.75"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8.125 13.75H5C4.00544 13.75 3.05161 13.3549 2.34835 12.6517C1.64509 11.9484 1.25 10.9946 1.25 10C1.25 9.00544 1.64509 8.05161 2.34835 7.34835C3.05161 6.64509 4.00544 6.25 5 6.25H8.125"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M11.875 13.75H15C15.9946 13.75 16.9484 13.3549 17.6517 12.6517C18.3549 11.9484 18.75 10.9946 18.75 10C18.75 9.00544 18.3549 8.05161 17.6517 7.34835C16.9484 6.64509 15.9946 6.25 15 6.25H11.875"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_295_1091">
                    <rect width="20" height="20" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Share event link
            </button>
          </div>
        </div>
      </div>
      <button className="event__wish-btn">Send your well wishes.</button>
    </div>
  );
};

export default EventDetail;
