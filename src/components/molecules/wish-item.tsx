import * as React from "react";

interface IWishItemProps {}

const WishItem: React.FunctionComponent<IWishItemProps> = (props) => {
  return (
    <div className="wish__item">
      <div className="wish__content">
        <div className="wish__profile">
          <img src="/images/user-avatar.png" alt="Akayinode Moyinoluwa" />
          <p>Akayinode Moyinoluwa</p>
        </div>
        <p className="wish__comment">
          Thank you mummy for all you’ve done and you still do for the fold in
          Nigeria and beyond
        </p>
        <div className="wish__meta">
          <svg
            className="wish__like-icon"
            width="21"
            height="20"
            viewBox="0 0 21 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_455_1116)">
              <path
                d="M10.5 16.875C10.5 16.875 2.6875 12.5 2.6875 7.18751C2.6875 6.24836 3.01289 5.33821 3.6083 4.61193C4.20371 3.88564 5.03236 3.38808 5.95328 3.2039C6.87419 3.01971 7.83047 3.16029 8.65943 3.6017C9.48838 4.04311 10.1388 4.7581 10.5 5.62501C10.8612 4.7581 11.5116 4.04311 12.3406 3.6017C13.1695 3.16029 14.1258 3.01971 15.0467 3.2039C15.9676 3.38808 16.7963 3.88564 17.3917 4.61193C17.9871 5.33821 18.3125 6.24836 18.3125 7.18751C18.3125 12.5 10.5 16.875 10.5 16.875Z"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_455_1116">
                <rect
                  width="20"
                  height="20"
                  fill="white"
                  transform="translate(0.5)"
                />
              </clipPath>
            </defs>
          </svg>
          <p className="wish__like-number">0</p>
          <p className="wish__time">2 mins ago</p>
        </div>
      </div>
      <img className="wish__dp" src="/images/wish-item.png" alt="wish item" />
    </div>
  );
};

export default WishItem;
