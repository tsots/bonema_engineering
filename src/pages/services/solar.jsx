import Billboard from "@/components/billboard/Billboard";
import solar from "@/data/services/solarEnergy.json";
const Solar = () => {
  return (
    <main id="solarPage">
      <Billboard
        title={solar.billboard.title}
        text={solar.billboard.text}
        image={solar.billboard.img}
      />
      <section className="sectionOne">
        <div className="sectionOne__container">
          <div className="header">
            <h2 className="title">{solar.sectionOne.title}</h2>
            <p className="text">{solar.sectionOne.text}</p>
          </div>
          <div className="sectionOne__features">
            {solar.sectionOne.features.map((feature, index) => (
              <div className="feature">
                <h4 className="title">{feature.title}</h4>
                <p className="text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionTwo">
        <div className="sectionTwo__container">
          <div className="header">
            <h2 className="title">{solar.sectionTwo.title}</h2>
            <p className="text">{solar.sectionTwo.text}</p>
          </div>
          <div className="sectionTwo__features">
            {solar.sectionTwo.features.map((feature, index) => (
              <div className="feature">
                <h4 className="title">{feature.title}</h4>
                <p className="text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="sectionThree">
        <div className="sectionThree__container">
          <div className="header">
            <h2 className="title">{solar.sectionThree.title}</h2>
            <p className="text">{solar.sectionThree.text}</p>
          </div>
          <div className="sectionThree__features">
            {solar.sectionThree.features.map((feature, index) => (
              <div className="feature">
                <h4 className="title">{feature.title}</h4>
                <p className="text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="sectionFour">
        <div className="sectionFour__container">
          <div className="header">
            <h2 className="title">{solar.sectionFour.title}</h2>
            <p className="text">{solar.sectionFour.text}</p>
          </div>
          <div className="sectionFour__features">
            {solar.sectionFour.features.map((feature, index) => (
              <div className="feature" key={index}>
                <h4 className="title">{feature.title}</h4>
                <p className="text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionFive">
        <div className="sectionFive__container">
          <div className="header">
            <h2 className="title">{solar.sectionFive.title}</h2>
            <p className="text">{solar.sectionFive.text}</p>
          </div>
          <div className="sectionFive__features">
            {solar.sectionFive.features.map((feature, index) => (
              <div className="feature" key={index}>
                <h4 className="title">{feature.title}</h4>
                <p className="text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="sectionSix">
        <div className="sectionSix__container">
          <div className="header">
            <h2 className="title">{solar.sectionSix.title}</h2>
            <p className="text">{solar.sectionSix.text}</p>
          </div>
          <div className="sectionSix__features">
            {solar.sectionSix.features.map((feature, index) => (
              <div className="feature" key={index}>
                <h4 className="title">{feature.title}</h4>
                <p className="text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
};

export default Solar;
