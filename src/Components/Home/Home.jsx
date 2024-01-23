

import "./Home.css";
import { Link } from "react-router-dom";
import ServiceBox from './ServiceBox.jsx';
import Section2 from "./Section/Section2.jsx";
import Main3 from "./Main3/Main3";
import Main4 from "./Main4/Main4";
import Learner from "./LearnerOutcomes/Learner";
import Experts from "./communityExperts/Experts";
import Last from "./LastPart/Last";
import H1 from "./H1";

function App() {
  return (
    <div className="container-main">
      <div className="main" >
        <h1 data-aos="fade-right">Online learning platform</h1>

        <p data-aos="fade-right">Build skills with courses, certificates, and degrees online from world-class universities and companies</p>
        <div className="btn" data-aos="fade-right">
          <Link to="/">Join For Free</Link>
        </div>
      </div>
      <ServiceBox />
      <H1 />
      <Section2/>
      <Main3 />
      <Main4 />
      <Learner />
      <Experts />
      <Last />
    </div>
  );
}

export default App;
