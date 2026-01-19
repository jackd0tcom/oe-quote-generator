import { useRef, useEffect } from "react";

export default function DetailsView({
  data,
  setShowDetails,
  showDetails,
}): JSX.Element {
  const detailsRef = useRef(null);

  // // Handles blur
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (detailsRef.current && !detailsRef.current.contains(event.target)) {
        setShowDetails(false);
      }
    };

    if (showDetails) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showDetails]);

  return (
    <div className="calculator-details-overlay">
      <div className="calculator-details-wrapper" ref={detailsRef}>
        <div className="calculator-details-head">
          <h3>{data.itemName}</h3>
          <p>${data.price}</p>
        </div>
        <div
          className="calculator-details"
          dangerouslySetInnerHTML={{ __html: data.details }}
        ></div>
      </div>
      ;
    </div>
  );
}
