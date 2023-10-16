import Billboard from "@/components/billboard/Billboard";
import wind from "@/data/services/windEnergy.json";

const Wind = () => {
  return (
    <main id="windPage">
      <Billboard
        title={wind.billboard.title}
        text={wind.billboard.text}
        image={wind.billboard.img}
      />
      <section className="sectionOne">
        <div className="sectionOne__container">
          <div className="header">
            <h2 className="title">{wind.sectionOne.title}</h2>
            <p className="text">{wind.sectionOne.text}</p>
          </div>
        </div>
        <div className="sectionOne__features">
          {wind.sectionOne.features.map((feature, index) => (
            <div className="feature">
              <h4 className="title">{feature.title}</h4>
              <p className="text">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sectionTwo">
        <div className="sectionTwo__container">
          <div className="header">
            <h2 className="title">{wind.sectionTwo.title}</h2>
            <p className="text">{wind.sectionTwo.text}</p>
          </div>
        </div>
        <div className="sectionTwo__features">
          {wind.sectionTwo.features.map((feature, index) => (
            <div className="feature">
              <h4 className="title">{feature.title}</h4>
              <p className="text">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Wind;
