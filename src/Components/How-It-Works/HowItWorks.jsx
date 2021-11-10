import './_How-It-Works.scss'

const HowItWorks = () => {
  return (
    <div className="intro_container">
      <div className="intro_header">
        <h2>How it works</h2>
      </div>
      <div className="intro_paragraph">
        <p>
          The Nest Tool helps you understand your new home. When you select your
          preferences in each category and click “See Results”, we provide you
          with cities that match most or all of your criteria. You can then
          click into each city to learn more about the area.
        </p>
      </div>
      <div className="intro_list">
        <div className="intro_step">
        <span>1</span>
          <p>Select your preferences for each category</p>
        </div>
        <div className="intro_step">
        <span>2</span>
          <p>Click "See Results"</p>
        </div>
        <div className="intro_step">
        <span>3</span>
          <p>Learn about an area</p>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
