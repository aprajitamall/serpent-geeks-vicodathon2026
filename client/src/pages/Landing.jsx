import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureCard from "../components/FeatureCard";

import {
  FaCode,
  FaGithub,
  FaLinkedin
} from "react-icons/fa";


function Landing() {

  return (
    <>
      <Navbar />

      <main>

        <Hero />


        <section className="features">

          <h2>
            Why Join ABTalks?
          </h2>


          <div className="feature-container">

            <FeatureCard
              icon={<FaCode />}
              title="Build Projects"
              description="Create real-world projects every day and improve your development skills."
            />


            <FeatureCard
              icon={<FaGithub />}
              title="Build GitHub Streak"
              description="Show consistent coding progress through daily commits."
            />


            <FeatureCard
              icon={<FaLinkedin />}
              title="Grow Your Profile"
              description="Share achievements and get noticed by recruiters."
            />

          </div>

        </section>


      </main>

    </>
  );
}


export default Landing;