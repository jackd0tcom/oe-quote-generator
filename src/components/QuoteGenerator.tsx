import { useState } from "react";
import DetailsView from "./DetailsView";
import QuoteView from "./QuoteView";

interface Item {
  itemName: string;
  duration: string;
  price: number;
  details: string;
}

interface ServiceItem extends Item {
  quantity: number;
}

interface PropsTypes {
  youtubeItems: Item[];
  youtubeAddOns: Item[];
  honeyHoleItems: Item[];
  emailItems: Item[];
}

export default function QuoteGenerator({
  youtubeItems,
  youtubeAddOns,
  honeyHoleItems,
  emailItems,
}: PropsTypes): React.JSX.Element {
  const [showYTAddons, setShowYTAddons] = useState(false);
  const [monthlyTerm, setMonthlyTerm] = useState(3);
  const [showYoutube, setShowYoutube] = useState(false);
  const [showHoneyHole, setShowHoneyHole] = useState(false);
  const [showEmail, setShowEmail] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [details, setDetails] = useState({
    itemName: "Linkable Content",
    price: 700,
    details: "linkable content",
  });
  const [youtubeRows, setYoutubeRows] = useState<ServiceItem[]>(() => {
    if (!youtubeItems) return [];
    return youtubeItems.map((item) => ({
      ...item,
      quantity: 0,
    }));
  });
  const [youtubeAddOnRows, setYoutubeAddOnRows] = useState<ServiceItem[]>(
    () => {
      if (!youtubeAddOns) return [];
      return youtubeAddOns.map((item) => ({
        ...item,
        quantity: 0,
      }));
    },
  );
  const [honeyHoleRows, setHoneyHoleRows] = useState<ServiceItem[]>(() => {
    if (!honeyHoleItems) return [];
    return honeyHoleItems.map((item) => ({
      ...item,
      quantity: 0,
    }));
  });
  const [emailRows, setEmailRows] = useState<ServiceItem[]>(() => {
    if (!emailItems) return [];
    return emailItems.map((item) => ({
      ...item,
      quantity: 0,
    }));
  });

  const allRows = [
    ...youtubeRows,
    ...youtubeAddOnRows,
    ...honeyHoleRows,
    ...emailRows,
  ];

  let cart = [];
  cart = allRows.filter((row) => row.quantity > 0);

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
    if (type === "addOns") {
      setYoutubeAddOnRows((prevRows) => {
        const newRows = [...prevRows];
        newRows[index].quantity = value;
        return newRows;
      });
    }
    if (type === "youtube") {
      setYoutubeRows((prevRows) => {
        const newRows = [...prevRows];
        newRows[index].quantity = value;
        return newRows;
      });
    }
    if (type === "honeyHole") {
      setHoneyHoleRows((prevRows) => {
        const newRows = [...prevRows];
        newRows[index].quantity = value;
        return newRows;
      });
    }
    if (type === "email") {
      setEmailRows((prevRows) => {
        const newRows = [...prevRows];
        newRows[index].quantity = value;
        return newRows;
      });
    }
  };

  // Handles updating the math for rows except for ultra premium rows
  const updatePrice = (type: string, index: number, value: number) => {
    if (type === "links") {
      setYoutubeRows((prevRows) => {
        const newRows = [...prevRows];
        newRows[index].price = Number(value);
        return newRows;
      });
    }
    if (type === "addOns") {
      setYoutubeAddOnRows((prevRows) => {
        const newRows = [...prevRows];
        newRows[index].price = Number(value);
        return newRows;
      });
    }
    if (type === "honeyHole") {
      setHoneyHoleRows((prevRows) => {
        const newRows = [...prevRows];
        newRows[index].price = value;
        return newRows;
      });
    }
    if (type === "email") {
      setEmailRows((prevRows) => {
        const newRows = [...prevRows];
        newRows[index].price = value;
        return newRows;
      });
    }
  };

  const youtubeTotal: number = youtubeRows.reduce(
    (acc, row) => acc + row.price * row.quantity,
    0,
  );
  const youtubeAddOnsTotal: number = youtubeAddOnRows.reduce(
    (acc, row) => acc + row.price * row.quantity,
    0,
  );
  const honeyHoleTotal = honeyHoleRows.reduce(
    (acc, row) => acc + row.price * row.quantity,
    0,
  );
  const emailTotal = emailRows.reduce(
    (acc, row) => acc + row.price * row.quantity,
    0,
  );

  const grandTotal: number =
    youtubeTotal + youtubeAddOnsTotal + honeyHoleTotal + emailTotal;

  const linkBuildingServicesTotal: number = youtubeRows.reduce(
    (acc, row) => acc + row.price * row.quantity,
    0,
  );

  const estimatedLinks: number = linkBuildingServicesTotal;

  // Reusable icon for collapse state next to table heading
  const carat = (state: boolean) => {
    return (
      <p className={state ? "carat toggled" : "carat"}>{state ? "-" : "+"}</p>
    );
  };

  // Handles the collapsing / uncollapsing of tables
  const handleVisibilityToggle = (
    state: boolean,
    setState: (state: boolean) => void,
  ) => {
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
            onClick={() => handleVisibilityToggle(showYoutube, setShowYoutube)}
          >
            <h3 className="rows-container-heading link-building-services">
              Youtube
            </h3>
            {carat(showYoutube)}
          </div>
          <>
            <div
              className={
                showYoutube
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
              {youtubeRows.map((row, index) => {
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
                      onChange={(e) => {
                        updateQuantity(
                          "youtube",
                          index,
                          Number(e.target.value),
                        );
                        if (Number(e.target.value) > 0) {
                          setShowYTAddons(true);
                        } else setShowYTAddons(false);
                      }}
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
              {youtubeAddOnRows.map((row, index) => {
                return (
                  <div
                    className={
                      showYTAddons ? "service-row" : "service-row greyed-add-on"
                    }
                  >
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
                      disabled={!showYTAddons}
                      className="calculator-input"
                      type="number"
                      value={row.quantity >= 1 ? row.quantity : ""}
                      onChange={(e) =>
                        updateQuantity("addOns", index, Number(e.target.value))
                      }
                    />
                    <div className="calculator-price-wrapper">
                      <p className="dollar-sign">$</p>
                      <input
                        className="price-input"
                        type="number"
                        value={Number(row.price).toString()}
                        onChange={(e) => {
                          updatePrice("addOns", index, Number(e.target.value));
                        }}
                      />
                    </div>
                    <p>{formatDollar.format(row.price * row.quantity)}</p>
                  </div>
                );
              })}
            </div>
          </>
        </div>
        <div className="quote-generator-section">
          <div
            className="heading-toggle"
            onClick={() =>
              handleVisibilityToggle(showHoneyHole, setShowHoneyHole)
            }
          >
            <h3 className="rows-container-heading">Honey Hole</h3>
            {carat(showHoneyHole)}
          </div>
          <div
            className={
              showHoneyHole
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
            {honeyHoleRows.map((row, index) => {
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
                      updateQuantity("honeyHole", index, Number(e.target.value))
                    }
                  />
                  <div className="calculator-price-wrapper">
                    <p className="dollar-sign">$</p>
                    <input
                      className="price-input"
                      type="number"
                      value={Number(row.price).toString()}
                      onChange={(e) => {
                        updatePrice("honeyHole", index, Number(e.target.value));
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
            onClick={() => handleVisibilityToggle(showEmail, setShowEmail)}
          >
            <h3 className="rows-container-heading">Email Newsletter</h3>
            {carat(showEmail)}
          </div>
          <div
            className={
              showEmail
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
            {emailRows.map((row, index) => {
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
                      updateQuantity("email", index, Number(e.target.value))
                    }
                  />
                  <div className="calculator-price-wrapper">
                    <p className="dollar-sign">$</p>
                    <input
                      className="price-input"
                      type="number"
                      value={Number(row.price).toString()}
                      onChange={(e) => {
                        updatePrice("email", index, Number(e.target.value));
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
          <div className="cart-row">
            <p>Item</p>
            <p>Qty</p>
            <p>Total</p>
          </div>
          {cart && cart.length < 1 ? (
            <p id="no-items">No items added</p>
          ) : (
            cart.map((item) => (
              <div className="cart-row small-font">
                <p>{item.itemName}</p>
                <p>{item.quantity}</p>
                <p>${item.quantity * item.price}</p>
              </div>
            ))
          )}
        </div>
        <div className="quote-generator-foot">
          <div className="foot-row">
            <p>Total</p>
            <p>{formatDollar.format(grandTotal)}</p>
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
        {
          <button
            onClick={() => setShowQuote(true)}
            className="quote-generator-submit"
          >
            View Quote
          </button>
        }
      </div>
    </div>
  );
}
