const DEFAULTCONTENT = [
  "Curated content for the English speaking Muslims.",
  "Benefits from the Imams of the Salaf and the senior scholars of the present.",
  "Prepared by a qualified team of students of knowledge.",
  "Committed to excellence and quality of translation.",
];

function BannerContent() {
  return (
    <div className="banner-content">
      <div>
        <div className="subscript">Maktabah As Sunnah Was Salafiyyah</div>

        <div className="banner-title">
          Presenting pearls of knowledge and collections of wisdom in the
          English language.
        </div>

        <div className="banner-description">
          {DEFAULTCONTENT.map((content, index) => (
            <p key={index}>
              <span class="material-symbols-outlined">check</span>
              {content}
            </p>
          ))}
        </div>
        <div className="banner-buttons">
          <button className="btn btn-primary">share</button>
          <button className="btn btn-outline">About</button>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default BannerContent;
