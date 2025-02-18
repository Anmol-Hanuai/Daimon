import { PopupWidget } from "react-calendly";

const Calendly = () => {
    return(
        <div>
        <PopupWidget
          url="https://calendly.com/kalrapratul/30min"
          rootElement={document.getElementById("root")}
          text="Schedule a Meeting"
          textColor="#ffffff"
          color="#00aaff"
        />
        </div>
    )
};

export default Calendly;