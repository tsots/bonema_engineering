import Billboard from "@/components/billboard/Billboard";
import about from "@/data/pages/about.json";

const About = () => {
  return (
    <>
      <Billboard
        page="about"
        title={about.billboard.title}
        text={about.billboard.text}
        image={about.billboard.img}
      />
      <main id="aboutPage">
        <section className="intro mobile">
          <div className="content">
            <h2 className="content__title">{about.intro.title}</h2>
            <p className="content__text">{about.intro.text}</p>
            <img src={about.intro.img} alt="" />
          </div>
          <div className="leadership">
            {about.intro.leaders.user.map((leader, index) => (
              <h4 className="leaders__title" key={index}>
                {leader.name} &nbsp;<span>{leader.designation}</span>
              </h4>
            ))}
          </div>
        </section>

        <section className="intro desktop">
          <div className="content">
            <div className="intro">
              <h2 className="content__title">{about.intro.title}</h2>
              <p className="content__text">{about.intro.text}</p>
            </div>
            <div className="leadership">
              {about.intro.leaders.user.map((leader, index) => (
                <h4 className="leaders__title" key={index}>
                  {leader.name} &nbsp;<span>{leader.designation}</span>
                </h4>
              ))}
            </div>
          </div>

          <div className="image">
            <img src={about.intro.img} alt="" />
          </div>
        </section>

        <section className="benefits mobile">
          {about.benefits.map((benefit, index) => (
            <div className="content">
              <h4 className="benefit__title">{benefit.title}</h4>
              <img src={benefit.img} alt="" />
              <p className="benefit__text">{benefit.text}</p>
            </div>
          ))}
        </section>

        <section className="benefits desktop">
          {about.benefits.map((benefit, index) => (
            <div className="benefit">
              <div className="content">
                <h4 className="benefit__title">{benefit.title}</h4>

                <p className="benefit__text">{benefit.text}</p>
              </div>
              <div className="image">
                <img src={benefit.img} alt="" />
              </div>
            </div>
          ))}
        </section>
      </main>
    </>
  );
};

export default About;
