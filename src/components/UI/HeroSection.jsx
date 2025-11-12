import { useNavigate } from "react-router-dom";
export const HeroSection = () => {

  const navigate = useNavigate();
  const handleExplore = () => {
    return navigate("/country");
  }
  return (
    <main className="hero-section main">
      <div className="container grid grid-two-cols">
        <div className="hero">
          <h1 className="hero-head">Explore the World, One country at a time!</h1>
          <p className="hero-para">Discover the history,culture and beauty of every nation. Sort,search and filter through countries to find the details you need.</p>
          <button className="hero-button" onClick={handleExplore}>Start Exploring &#8594;</button>
        </div>
        <div>
          <img src="images/worldimage.png" alt="world atlas" className="hero-image"></img>
        </div>
      </div>
    </main>
  );
};