import Billboard from "@/components/billboard/Billboard";
import service from '@/data/services/services.json';
import Link from "next/link";

const index = () => {
  return<main id="servicesPage">
  <Billboard page="servicePage" title={service.billboard.title} text={service.billboard.text} image={service.billboard.image}/>

  <section className="services">
    <div className="container__services">
        <div className="cards">
            {service.services.map((service,index) => (
                <div className="card" key={index}>
                    <Link href={service.url} ><h4 className="card__title">{service.title}</h4></Link>
                    <p className="card__text">{service.text}</p>
                    <Link href={service.url} >Read More..</Link>
                </div>
            ))}
        </div>
    </div>
  </section>
  </main> 
};

export default index;
