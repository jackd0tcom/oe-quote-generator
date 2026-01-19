import { useState } from "react";
import DetailsView from "./DetailsView";
import QuoteView from "./QuoteView";

interface Service {
  itemName: string;
  price: number;
  estimate: number;
  details: string;
}

interface ServiceItem extends Service {
  quantity: number;
}

interface OtherService {
  itemName: string;
  price: number;
  details: string;
}

interface OtherServiceItem extends OtherService {
  quantity: number;
}

interface ultraPremiums {
  itemName: string;
  dr: number;
  da: number;
  traffic: string;
  price: number;
  estimate: number;
  details: string;
}

interface ultraPremiumItems extends ultraPremiums {
  quantity: number;
}

interface IslandProps {
  initialServices: Service[];
  initialUltraPremiums: ultraPremiums[];
  initialContentServices: OtherService[];
  initialTechnicalServices: OtherService[];
}

export default function QuoteGenerator({
  initialServices,
  initialUltraPremiums,
  initialContentServices,
  initialTechnicalServices,
  showQuoteButton,
}: IslandProps): JSX.Element {
  const [showUltraPremium, setShowUltraPremium] = useState(false);
  const [monthlyTerm, setMonthlyTerm] = useState(3);
  const [showLinkBuilding, setShowLinkBuilding] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const [showTechincal, setShowTechnical] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [details, setDetails] = useState({
    itemName: "Linkable Content",
    price: 700,
    details: "linkable content",
  });
  const [rows, setRows] = useState<ServiceItem[]>(() => {
    if (!initialServices) return [];
    return initialServices.map((service) => ({
      ...service,
      quantity: 0,
    }));
  });
  const [ultraPremiumRows, setUltraPremiumRows] = useState<ultraPremiumItems[]>(
    () => {
      if (!initialUltraPremiums) return [];
      return initialUltraPremiums.map((premium) => ({
        ...premium,
        quantity: 0,
      }));
    },
  );
  const [contentServiceRows, setContentServiceRows] = useState<
    OtherServiceItem[]
  >(() => {
    if (!initialContentServices) return [];
    return initialContentServices.map((service) => ({
      ...service,
      quantity: 0,
    }));
  });
  const [technicalServiceRows, setTechnicalServiceRows] = useState<
    OtherServiceItem[]
  >(() => {
    if (!initialTechnicalServices) return [];
    return initialTechnicalServices.map((service) => ({
      ...service,
      quantity: 0,
    }));
  });

  const allRows = [
    ...rows,
    ...contentServiceRows,
    ...ultraPremiumRows,
    ...contentServiceRows,
    ...technicalServiceRows,
  ];

  const cart = allRows.filter((row) => row.quantity > 0);

  // Takes in number, returns it in dollar format without cents
  const formatDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

  // Handles updating the math for rows except for ultra premium rows
  const updateQuantity = (type: string, index: number, value: number) => {
    if (value < 0) {
      return;
    }
    if (type === "month") {
      if (value < 1) {
        return;
      }
      console.log(value);
      setMonthlyTerm(value);
    }
    if (type === "links") {
      setRows((prevRows) => {
        const newRows = [...prevRows];
        newRows[index].quantity = value;
        return newRows;
      });
    } else if (type === "content") {
      setContentServiceRows((prevRows) => {
        const newRows = [...prevRows];
        newRows[index].quantity = value;
        return newRows;
      });
    } else if (type === "technical") {
      setTechnicalServiceRows((prevRows) => {
        const newRows = [...prevRows];
        newRows[index].quantity = value;
        return newRows;
      });
    }
  };

  // Handles updating the math for rows except for ultra premium rows
  const updatePrice = (type: string, index: number, value: number) => {
    if (type === "links") {
      setRows((prevRows) => {
        const newRows = [...prevRows];
        newRows[index].price = Number(value);
        return newRows;
      });
    } else if (type === "content") {
      setContentServiceRows((prevRows) => {
        const newRows = [...prevRows];
        newRows[index].price = value;
        return newRows;
      });
    } else if (type === "technical") {
      setTechnicalServiceRows((prevRows) => {
        const newRows = [...prevRows];
        newRows[index].price = value;
        return newRows;
      });
    }
  };

  const premiumTotal: number = ultraPremiumRows.reduce(
    (acc, row) => acc + row.price * row.quantity,
    0,
  );

  // Handles updating the math for the ultra premium rows
  const updatePremium = (index: number, value: number) => {
    setUltraPremiumRows((prevRows) => {
      const newRows = [...prevRows];
      newRows[index].quantity = value;
      return newRows;
    });
  };

  const linkPriceTotal: number = rows.reduce(
    (acc, row) => acc + row.price * row.quantity,
    0,
  );
  const contentPriceTotal = contentServiceRows.reduce(
    (acc, row) => acc + row.price * row.quantity,
    0,
  );
  const technicalPriceTotal = technicalServiceRows.reduce(
    (acc, row) => acc + row.price * row.quantity,
    0,
  );

  const grandTotal: number =
    linkPriceTotal + contentPriceTotal + premiumTotal + technicalPriceTotal;

  const linkBuildingServicesTotal: number = rows.reduce(
    (acc, row) => acc + row.estimate * row.quantity,
    0,
  );
  const ultraPremiumTotal: number = ultraPremiumRows.reduce(
    (acc, row) => acc + row.estimate * row.quantity,
    0,
  );

  const estimatedLinks: number =
    linkBuildingServicesTotal >= 0
      ? linkBuildingServicesTotal
      : 0 + ultraPremiumTotal >= 0
        ? ultraPremiumTotal
        : 0;

  const costPerLink: number =
    estimatedLinks > 0 ? (linkPriceTotal + premiumTotal) / estimatedLinks : 0;

  // Reusable icon for collapse state next to table heading
  const carat = (state) => {
    return (
      <p className={state ? "carat toggled" : "carat"}>{state ? "-" : "+"}</p>
    );
  };

  // Handles the collapsing / uncollapsing of tables
  const handleVisibilityToggle = (state, setState) => {
    if (!state) {
      setState(true);
    } else setState(false);
  };

  return (
    <div className="quote-generator-wrapper">
      {showQuote && (
        <QuoteView
          data={{
            total: grandTotal,
            estimatedLinks: estimatedLinks,
            costPerLink: !costPerLink ? "$0" : formatDollar.format(costPerLink),
            monthlyTerm: monthlyTerm,
            monthlyCost: formatDollar.format(grandTotal / monthlyTerm),
          }}
          setShowQuote={setShowQuote}
          showQuote={showQuote}
          formatDollar={formatDollar}
          cart={cart}
        />
      )}
      {showDetails && (
        <DetailsView
          data={details}
          setShowDetails={setShowDetails}
          showDetails={showDetails}
        />
      )}
      <div className="quote-generator-table-wrapper">
        <div className="quote-generator-section">
          <div
            className="heading-toggle"
            onClick={() =>
              handleVisibilityToggle(showLinkBuilding, setShowLinkBuilding)
            }
          >
            <h3 className="rows-container-heading link-building-services">
              Link Building Services
            </h3>
            {carat(showLinkBuilding)}
          </div>
          <>
            <div
              className={
                showLinkBuilding
                  ? "rows-container rows-visible"
                  : "rows-container rows-hidden"
              }
            >
              <div className="service-row">
                <p></p>
                <p>Qty</p>
                <p>Price</p>
                <p>Total</p>
              </div>
              {rows.map((row, index) => {
                return (
                  <div className="service-row">
                    <p
                      className="row-title"
                      onClick={() => {
                        setDetails(row);
                        setShowDetails(true);
                      }}
                    >
                      {row.itemName}
                    </p>
                    <input
                      className="calculator-input"
                      type="number"
                      value={row.quantity >= 1 ? row.quantity : ""}
                      onChange={(e) =>
                        updateQuantity("links", index, Number(e.target.value))
                      }
                    />
                    <div className="calculator-price-wrapper">
                      <p className="dollar-sign">$</p>
                      <input
                        className="price-input"
                        type="number"
                        value={Number(row.price).toString()}
                        onChange={(e) => {
                          updatePrice("links", index, Number(e.target.value));
                        }}
                      />
                    </div>
                    <p>{formatDollar.format(row.price * row.quantity)}</p>
                  </div>
                );
              })}
              <div
                className="heading-toggle premium-button"
                onClick={() =>
                  handleVisibilityToggle(showUltraPremium, setShowUltraPremium)
                }
              >
                {carat(showUltraPremium)}
                <h4 id="ultra-premium">Ultra Premium Links </h4>
              </div>
              <div
                className={
                  showUltraPremium
                    ? "ultra-premium-wrapper rows-visible"
                    : "ultra-premium-wrapper rows-hidden"
                }
              >
                <div className="ultra-premium-row ultra-head">
                  <p></p>
                  <p>Qty</p>
                  <p>Price</p>
                  <p>DR</p>
                  <p>DA</p>
                  <p>Traffic</p>
                </div>
                {ultraPremiumRows.map((row, index) => {
                  return (
                    <div className="ultra-premium-row">
                      <p
                        className="row-title"
                        onClick={() => {
                          setDetails(row);
                          setShowDetails(true);
                        }}
                      >
                        {row.itemName}
                      </p>
                      <input
                        className="calculator-input"
                        type="number"
                        value={row.quantity >= 1 ? row.quantity : ""}
                        onChange={(e) =>
                          updatePremium(index, Number(e.target.value))
                        }
                      />
                      <p>{formatDollar.format(row.price)}</p>
                      <p>{row.dr}</p>
                      <p>{row.da}</p>
                      <p>{row.traffic}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </>
        </div>
        <div className="quote-generator-section">
          <div
            className="heading-toggle"
            onClick={() => handleVisibilityToggle(showContent, setShowContent)}
          >
            <h3 className="rows-container-heading">Content Services</h3>
            {carat(showContent)}
          </div>
          <div
            className={
              showContent
                ? "rows-container rows-visible"
                : "rows-container rows-hidden"
            }
          >
            <div className="service-row">
              <p></p>
              <p>Qty</p>
              <p>Price</p>
              <p>Total</p>
            </div>
            {contentServiceRows.map((row, index) => {
              return (
                <div className="service-row">
                  <p
                    className="row-title"
                    onClick={() => {
                      setDetails(row);
                      setShowDetails(true);
                    }}
                  >
                    {row.itemName}
                  </p>
                  <input
                    className="calculator-input"
                    type="number"
                    value={row.quantity >= 1 ? row.quantity : ""}
                    onChange={(e) =>
                      updateQuantity("content", index, Number(e.target.value))
                    }
                  />
                  <div className="calculator-price-wrapper">
                    <p className="dollar-sign">$</p>
                    <input
                      className="price-input"
                      type="number"
                      value={Number(row.price).toString()}
                      onChange={(e) => {
                        updatePrice("content", index, Number(e.target.value));
                      }}
                    />
                  </div>
                  <p>{formatDollar.format(row.price * row.quantity)}</p>
                </div>
              );
            })}
          </div>
        </div>
        <div className="quote-generator-section">
          <div
            className="heading-toggle"
            onClick={() =>
              handleVisibilityToggle(showTechincal, setShowTechnical)
            }
          >
            <h3 className="rows-container-heading">Technical Services</h3>
            {carat(showTechincal)}
          </div>
          <div
            className={
              showTechincal
                ? "rows-container rows-visible"
                : "rows-container rows-hidden"
            }
          >
            <div className="service-row">
              <p></p>
              <p>Qty</p>
              <p>Price</p>
              <p>Total</p>
            </div>
            {technicalServiceRows.map((row, index) => {
              return (
                <div className="service-row">
                  <p
                    className="row-title"
                    onClick={() => {
                      setDetails(row);
                      setShowDetails(true);
                    }}
                  >
                    {row.itemName}
                  </p>
                  <input
                    className="calculator-input"
                    type="number"
                    value={row.quantity >= 1 ? row.quantity : ""}
                    onChange={(e) =>
                      updateQuantity("technical", index, Number(e.target.value))
                    }
                  />
                  <div className="calculator-price-wrapper">
                    <p className="dollar-sign">$</p>
                    <input
                      className="price-input"
                      type="number"
                      value={Number(row.price).toString()}
                      onChange={(e) => {
                        updatePrice("technical", index, Number(e.target.value));
                      }}
                    />
                  </div>
                  <p>{formatDollar.format(row.price * row.quantity)}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="quote-generator-sidebar">
        <div className="quote-generator-foot">
          <div className="foot-row">
            <p>Total</p>
            <p>{formatDollar.format(grandTotal)}</p>
          </div>
          <div className="foot-row">
            <p>Estimated Links</p>
            <p>{estimatedLinks}</p>
          </div>
          <div className="foot-row">
            <p>Cost Per Link</p>
            <p>{!costPerLink ? "$0" : formatDollar.format(costPerLink)}</p>
          </div>
          <div className="foot-row">
            <p className="monthly-term">Monthly Term</p>
            <input
              className="calculator-input monthly-input"
              type="number"
              name="monthly-term"
              value={monthlyTerm}
              onChange={(e) =>
                updateQuantity("month", 0, Number(e.target.value))
              }
            />
          </div>
          <div className="foot-row">
            <p className="monthly">Monthly Cost</p>
            <p className="monthly">
              {formatDollar.format(grandTotal / monthlyTerm)}
            </p>
          </div>
        </div>
        {showQuoteButton && (
          <button
            onClick={() => setShowQuote(true)}
            className="quote-generator-submit"
          >
            Submit My Quote
          </button>
        )}
      </div>
    </div>
  );
}
