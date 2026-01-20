import QuoteGenerator from "./components/QuoteGenerator";
import "./styles/quoteGenerator.css";

function App() {
  return (
    <div className="page-wrapper">
      <div className="header-wrapper">
        <div className="header">
          <img
            id="logo"
            src="https://outdoorempire.com/wp-content/uploads/2023/07/cropped-cropped-cropped-OutdoorEmpire_LogoDesign_ClearBack-Color-22.png"
            alt=""
          />
          <h1>Quote Calculator</h1>
        </div>
      </div>
      <QuoteGenerator
        youtubeItems={[
          {
            itemName: "Feature-Length Video",
            duration: "10-30 minutes",
            price: 25000,
            details: "",
          },
          {
            itemName: "Featured Video Integration",
            duration: "60-90 seconds",
            price: 5000,
            details: "Youtube Video",
          },
        ]}
        youtubeAddOns={[
          {
            itemName: "Short Form Video",
            duration: "60-90 seconds",
            price: 2500,
            details: "Youtube Video",
          },
          {
            itemName: "Youtube Community Post",
            duration: "",
            price: 500,
            details: "Youtube Video",
          },
          // {
          //   itemName: "Instagram / Facebook Reel",
          //   duration: "60-90 seconds",
          //   price: 1250,
          //   details: "Youtube Video",
          // },
          // {
          //   itemName: "TikTok Post",
          //   duration: "60-90 seconds",
          //   price: 1250,
          //   details: "Youtube Video",
          // },
        ]}
        honeyHoleItems={[
          {
            itemName: "Full Feature",
            duration: "7 days",
            price: 2500,
            details: "Honey Hole",
          },
          {
            itemName: "Featured Tile",
            duration: "1 month",
            price: 1250,
            details: "Honey Hole",
          },
          {
            itemName: "Banner Ad",
            duration: "30 days",
            price: 1650,
            details: "Honey Hole",
          },
        ]}
        emailItems={[
          {
            itemName: "Editorial Feature",
            duration: "1 week",
            price: 1500,
            details: "Honey Hole",
          },
          {
            itemName: "Exclusive Deal",
            duration: "1 week",
            price: 750,
            details: "Honey Hole",
          },
          {
            itemName: "Banner Ad",
            duration: "1 week",
            price: 500,
            details: "Honey Hole",
          },
        ]}
      />
    </div>
  );
}

export default App;
