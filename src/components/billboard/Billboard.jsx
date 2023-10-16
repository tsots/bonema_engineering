const Billboard = ({ title, text, image, page }) => {
  return (
    <div className={page}>
      <section className="billboard mobile">
        <h1 className="billboard__title">{title}</h1>
        <p className="billboard__text">{text}</p>
        <img className="billboard__image" src={image} alt="" />
      </section>
    </div>
  );
};

export default Billboard;
