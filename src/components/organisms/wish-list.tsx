import * as React from "react";
import WishItem from "../molecules/wish-item";

interface IWishListProps {}

const WishList: React.FunctionComponent<IWishListProps> = (props) => {
  return (
    <>
      <div className="event__tab--head">
        <p className="event__tab--filter-text">Recent Wishes</p>
        <p className="event__tab--filter">
          Filter
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_291_1068)">
              <path
                d="M6.5 12.5H18.5"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M2.75 8H22.25"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.25 17H14.75"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_291_1068">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(0.5 0.5)"
                />
              </clipPath>
            </defs>
          </svg>
        </p>
      </div>
      <div className="wish__items">
        <WishItem />
        <WishItem />
        <WishItem />
      </div>
      <button className="wish__load-more">Load more wishes</button>
    </>
  );
};

export default WishList;
