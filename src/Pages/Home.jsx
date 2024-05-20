import "./home.css";

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-logo-container">
        <div className="logo-container">
            <h1 className="home-tittle1">Open-source portfolio:</h1>
              <h1 className="home-tittle2">Beyond the ordinary.</h1>
            
        </div>
            <a href="/about"><div className="logo-allbars-container">
        <h3>Get started</h3>
        <div className="logo-allbars">
            <div className="logo-bar1"></div>
            <div className="logo-bar2"></div>
            <div className="logo-bar3"></div>
            </div>
            </div></a>
      </div>
    </div>
  );
}
