import Billboard from "@/components/billboard/Billboard"
import hydro from '@/data/services/hydro.json';


const Hydro = () => {
  return (
    <main id="hydroPage">
        <Billboard title={hydro.billboard.title} text={hydro.billboard.text} image={hydro.billboard.img}/>
        <section className="intro">
            <div className="intro__container">
                <div className="header">
                    <h2 className="title">{hydro.intro.title}</h2>
                    {hydro.intro.text && <p className="text">{hydro.intro.title}</p>}
                </div>
            </div>
            <div className="intro__features">
                {hydro.intro.features.map((feature, index) => (
                    <div className="feature">
                        <h4 className="title">{feature.title}</h4>
                        <p className="text">{feature.text}</p>
                    </div>
                ))}
            </div>
        </section>

        <section className="features">
            <div className="features__container">
{hydro.features.map((feature,index) => (
    <div className="feature">
        <h4 className="itle">{feature.title}</h4>
        <p className="text">{feature.text}</p>
    </div>
))}
            </div>
        </section>
    </main>
  )
}

export default Hydro