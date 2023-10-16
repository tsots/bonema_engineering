import Billboard from "@/components/billboard/Billboard"
import wire from '@/data/services/wireMesh.json';


const Wire = () => {
  return (
    <main id="wirePage">
        <Billboard title={wire.billboard.title} text={wire.billboard.text} image={wire.billboard.img}/>
        <section className="features">
            <div className="features__container">
                {wire.features.features.map((feature, index)=>(
                    <div className="feature"><h4 className="title">{feature.title}</h4><p className="text">{feature.text}</p></div>
                ))}
            </div>
        </section>


        <section className="benefits">
            <div className="benefits__container">
                {wire.features.features.map((benefit, index)=>(
                    <div className="feature"><h4 className="title">{benefit.title}</h4><p className="text">{benefit.text}</p></div>
                ))}
            </div>
        </section>

        <section className="summary">
            <div className="summary__container">
                <p className="text">{wire.summary}</p>
            </div>
        </section>
    </main>
  )
}

export default Wire