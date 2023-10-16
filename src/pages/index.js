import home from "@/data/pages/home.json";
import services from "@/data/services/services.json";
const index = () => {
  console.log(services);

  return (
    <>
      <section className="hero mobile">
        <div className="container container__hero">
          <h1>{home.hero.title}</h1>
          <img src={home.hero.img} alt="" />
          <div className="teaser">
          <p>{home.hero.text}</p>
          </div>
        </div>
      </section>

      <section className="hero desktop">
        <div className="container container__hero">
          <div className="content">
            <h1>{home.hero.title}</h1>
            <p>{home.hero.text}</p>
          </div>
          <img src={home.hero.img} alt="" />
        </div>
      </section>
      <Services />
      <Intro />
      <Features />
      <Benefits />
      <div className="container">
        <p>{home.accreditation.text}</p>
      </div>
    </>
  );
};

const Services = () => {
  return (
    <section className="services">
      <div className="intro">
        <h2 className="intro__title">{services.billboard.title}</h2>
        <p className="intro__text">{services.billboard.text}</p>
      </div>
      <div className="cards">
        {services.services.map((service, index) => (
          <div className="card">
            <h4 className="service__title">{service.title}</h4>
            <p>{service.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Intro = () => {
  return (
    <section className="Intro">
      <div className="mobile">
        <div className="who">
          <h4 className="who__title">{home.sectionOne.who.title}</h4>
          <p className="who__text">{home.sectionOne.who.text}</p>
        </div>
        <img src="/small-engieering-drawing.jpg" alt="" />
        <div className="mission">
          <h4 className="mission__title">{home.sectionOne.mission.title}</h4>
          <p className="mission__text">{home.sectionOne.mission.text}</p>
        </div>

      </div>
      <div className="desktop">
        <div className="left-content">
          <div className="who">
            <h4 className="who__title">{home.sectionOne.who.title}</h4>
            <p className="who__text">{home.sectionOne.who.text}</p>
          </div>
          <div className="mission">
            <h4 className="mission__title">{home.sectionOne.mission.title}</h4>
            <p className="mission__text">{home.sectionOne.mission.text}</p>
          </div>
        </div>
        <div className="right-content">
          <img src="/small-engieering-drawing.jpg" alt="" />
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section className="Features">
      <div className="cards">
        {home.features.features.map((feature, index) => (
          <div className="card feature" key={index}>
            <h4 className="feature__title">{feature.title}</h4>
            <p className="feature__text">{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

const Benefits = () => {
  return (
    <section className="Benefits">
      <div className="intro">
        <h2 className="intro__title">{home.benefits.title}</h2>
        <p className="intro__text"></p>
      </div>
      <div className="cards">
        {home.benefits.benefits.map((benefit, index) => (
          <div className="card benefit" key={index}>
            <h4 className="benefit__title">{benefit.title}</h4>
            <p className="benefit__text">{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default index;
