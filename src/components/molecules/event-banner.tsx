import * as React from "react";

interface IEventBannerProps {}

const EventBanner: React.FunctionComponent<IEventBannerProps> = (props) => {
  return (
    <div className="home__banner">
      <img
        className="home__banner--img"
        src="/images/event-banner.png"
        alt="event banner"
      />
      <h1 className="home__banner--text">
        Mummy Lilian’s 50th Birthday Celebration
      </h1>
    </div>
  );
};

export default EventBanner;
