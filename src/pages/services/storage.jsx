import Billboard from "@/components/billboard/Billboard";
import store from "@/data/services/storageSolution.json";

const Storage = () => {
  return (
    <main id="storagePage">
      <Billboard title={store.billboard.title} text={store.billboard.text} image={store.billboard.img} />

      <section className="sectionOne">
        <div className="sectionOne__container">
          <div className="header">
            <h4 className="title">{store.sectionOne.title}</h4>
            <p className="text">{store.sectionOne.text}</p>
          </div>
        </div>

        <div className="sectionOne__features">
          {store.sectionOne.features.map((feature, index) => (
            <div className="feature" key={index}>
              <h4 className="title">{feature.title}</h4>
              <p className="text">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="sectionTwo">
        <div className="sectionTwo__container">
          <div className="header">
            {store.sectionTwo.title && (
              <h4 className="title">{store.sectionTwo.title}</h4>
            )}
            {store.sectionTwo.text && (
              <p className="text">{store.sectionTwo.text}</p>
            )}
          </div>
        </div>

        <div className="sectionTwo__features">
          {store.sectionTwo.features.map((feature, index) => (
            <div className="feature" key={index}>
              <h4 className="title">{feature.title}</h4>
              <p className="text">{feature.text}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Storage;
