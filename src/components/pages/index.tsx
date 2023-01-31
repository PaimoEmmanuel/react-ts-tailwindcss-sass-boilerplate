import * as React from "react";
import EventBanner from "../molecules/event-banner";
import EventDetail from "../molecules/event-detail";
import Navbar from "../molecules/nav-bar";
import EventTab from "../organisms/event-tab";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <div className="home">
      <Navbar />
      <EventBanner />
      <EventDetail />
      <EventTab />
      <footer className="footer">Events page via Gratico App</footer>
    </div>
  );
};

export default HomePage;
