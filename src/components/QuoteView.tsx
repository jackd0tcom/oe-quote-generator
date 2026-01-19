import { useRef, useEffect, useState } from "react";

// Helper defined outside component to avoid recreation on every render
const getHubSpotCookie = () => {
  const name = "hubspotutk";
  // Regex searches for "hubspotutk=" preceded by start of string or a space
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
};

export default function QuoteView({
  data,
  setShowQuote,
  showQuote,
  formatDollar,
  cart,
}): JSX.Element {
  const detailsRef = useRef(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState("");

  // // Handles blur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        setShowQuote(false);
      }
    };

    if (showQuote) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showQuote]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setStatus("submitting");
    const hutk = getHubSpotCookie();

    const payload = {
      fields: [
        {
          name: "firstName",
          value: firstName,
        },
        {
          name: "lastName",
          value: lastName,
        },
        {
          name: "jobTitle",
          value: jobTitle,
        },
        {
          name: "email",
          value: email,
        },
        {
          name: "website",
          value: website,
        },
      ],
      context: {
        hutk: hutk,
        pageUri: window.location.href,
        pageName: document.title,
      },
    };
    try {
      const response = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        },
      );

      if (response.ok) {
        setStatus("success");
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.log(error);
    }
  };

  return (
    <div className="calculator-details-overlay">
      <div className="calculator-quote-wrapper" ref={detailsRef}>
        <div className="quote-content">
          <div className="quote-content-heading">
            <h2>Submit Your Quote</h2>
            <p>Fill out the form and we will be in touch as soon as we can.</p>
          </div>
          <div className="quote-cart-wrapper">
            <div className="quote-cart-item">
              <p>Item</p>
              <p>Qty</p>
              <p>Total</p>
            </div>
            {cart.length > 0 ? (
              cart.map((item) => {
                return (
                  <div className="quote-cart-item">
                    <p>{item.itemName}</p>
                    <p>x {item.quantity}</p>
                    <p>{formatDollar.format(item.quantity * item.price)}</p>
                  </div>
                );
              })
            ) : (
              <div className="quote-cart-item">
                <p>No items added</p>
              </div>
            )}
          </div>
          <div className="quote-totals-wrapper">
            <div className="quote-row">
              <p>Total</p>
              <p>{formatDollar.format(data.total)}</p>
            </div>
            <div className="quote-row">
              <p>Estimated Links</p>
              <p>{data.estimatedLinks}</p>
            </div>
            <div className="quote-row">
              <p>Cost Per Link</p>
              <p>{data.costPerLink}</p>
            </div>
            <div className="quote-row">
              <p className="monthly-term">Monthly Term</p>
              <p>{data.monthlyTerm}</p>
            </div>
            <div className="quote-row">
              <p className="monthly">Monthly Cost</p>
              <p className="monthly">{data.monthlyCost}</p>
            </div>
          </div>
        </div>
        <div className="quote-form-wrapper">
          <form onSubmit={handleSubmit} className="submit-quote-form" action="">
            <input
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              placeholder="FIRST NAME*"
              required
            />
            <input
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              placeholder="LAST NAME*"
              required
            />
            <input
              type="text"
              onChange={(e) => setJobTitle(e.target.value)}
              value={jobTitle}
              placeholder="JOB TITLE"
            />
            <input
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="EMAIL*"
              required
            />
            <input
              type="text"
              onChange={(e) => setWebsite(e.target.value)}
              value={website}
              placeholder="WEBSITE URL*"
              required
            />
            <button className="quote-form-button">SUBMIT</button>
          </form>
        </div>
      </div>
    </div>
  );
}
