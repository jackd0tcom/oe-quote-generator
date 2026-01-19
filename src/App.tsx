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
          <h1>Quote Generator</h1>
        </div>
      </div>
      <QuoteGenerator
        showQuoteButton={true}
        initialServices={[
          {
            itemName: "Editorial Links",
            price: 450,
            estimate: 1,
            details: "Editorial Links",
          },
          {
            itemName: "Expert Links",
            price: 5000,
            estimate: 6,
            details: "Expert Links",
          },
          {
            itemName: "News Links",
            price: 750,
            estimate: 1,
            details: " News Links",
          },
        ]}
        initialUltraPremiums={[
          {
            itemName: "bloomberg.com",
            dr: 92,
            da: 94,
            traffic: "7.2M",
            price: 36000,
            estimate: 1,
            details: "bloomberg",
          },
          {
            itemName: "rollingstone.com",
            dr: 90,
            da: 92,
            traffic: "3.6M",
            price: 30000,
            estimate: 1,
            details: "rolling stone",
          },
          {
            itemName: "coindesk",
            dr: 90,
            da: 91,
            traffic: "2.3M",
            price: 26000,
            estimate: 1,
            details: "coin desk",
          },
        ]}
        initialContentServices={[
          {
            itemName: "Linkable Content",
            price: 700,
            details: "linkable content",
          },
          {
            itemName: "Keyword Content",
            price: 700,
            details: "keyword content",
          },
          {
            itemName: "Content Road Map",
            price: 1500,
            details: "content road map",
          },
        ]}
        initialTechnicalServices={[
          {
            itemName: "Advanced Content",
            price: 1200,
            details: "advanced content",
          },
          { itemName: "Website Audit", price: 2000, details: "website audit" },
          {
            itemName: "Schema Optimization",
            price: 300,
            details: "schema optimization",
          },
        ]}
      />
    </div>
  );
}

export default App;
