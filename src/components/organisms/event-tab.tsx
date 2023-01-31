import { useState } from "react";
import WishList from "./wish-list";

interface IEventTabProps {}

const EventTab: React.FunctionComponent<IEventTabProps> = (props) => {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className="event__tab">
      <div className="event__tab--btn">
        <button
          className={activeTab === 0 ? "active-btn" : ""}
          onClick={() => {
            setActiveTab(0);
          }}
        >
          WISHES
        </button>
        <button
          className={activeTab === 1 ? "active-btn" : ""}
          onClick={() => {
            setActiveTab(1);
          }}
        >
          GALLERY
        </button>
      </div>
      <div>
        <div
          className={`event__tab--item ${activeTab === 0 ? "active-tab" : ""}`}
        >
          <WishList />
        </div>
        <div
          className={`event__tab--item ${activeTab === 1 ? "active-tab" : ""}`}
        >
          <div className="gallery-tab">
            <img src="/images/gallery-1.png" alt="Mummy Lilian" />
            <img src="/images/gallery-2.png" alt="Mummy Lilian" />
            <img src="/images/gallery-3.png" alt="Mummy Lilian" />
            <img src="/images/gallery-4.png" alt="Mummy Lilian" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventTab;
