import * as React from "react";
import Navbar from "../molecules/nav-bar";

interface IHomePageProps {}

const HomePage: React.FunctionComponent<IHomePageProps> = (props) => {
  return (
    <div className="home">
      <Navbar />
    </div>
  );
};

export default HomePage;
