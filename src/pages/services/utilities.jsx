import utilities from "@/data/services/utilities.json";

const Utilities = () => {
  return (
    <main id="utilitiesPage">
      <section className="billboard mobile">
        <div className="billboard__container">
          <h1 className="billboard__title">{utilities.billboard.title}</h1>
          <img src={utilities.billboard.img} alt="" />
          <p className="billboard__text">{utilities.billboard.text}</p>
        </div>
      </section>

      <section className="teaser">
        <div className="teaser__container">
          <div className="header">
            <h4 className="teaser__title">{utilities.teaser.teaserTitle}</h4>
            <p className="teaser__body">{utilities.teaser.teaserBody}</p>
          </div>
          <div className="teaser__features">
            {utilities.teaser.features.map((feature, index) => (
              <div className="teaser__feature">
                <h4 className="title">{feature.title}</h4>
                <p className="text">{feature.feature}</p>
              </div>
            ))}
          </div>
          <div className="teaser__summary">
            <p className="text">{utilities.teaser.teaserSummary}</p>
            <p className="text">{utilities.teaser.teaserOutro}</p>
          </div>
        </div>
      </section>

      <section className="features">
        <div className="features__container">
          <div className="header">
            <h4 className="title">{utilities.features.title}</h4>
            <p className="text">{utilities.features.text}</p>
          </div>

          <div className="features__features">
            {utilities.features.features.map((feature, index) => (
              <div className="feature">
                <h4 className="title">{feature.title}</h4>
                <p className="text">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits">
        <div className="benefits__container">
          <div className="header">
            <h4 className="title">{utilities.benefits.title}</h4>
            <p className="text">{utilities.benefits.text}</p>
          </div>

          <div className="benefits__benefits">
            {utilities.benefits.benefits.map((benefit, index) => (
              <div className="benefit" key={index}>
                <h4 className="title">{benefit.title}</h4>
                <p className="text">{benefit.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="summary">
        <div className="summary__container">
          <p className="text">{utilities.summary}</p>
        </div>
      </section>
    </main>
  );
};

export default Utilities;
