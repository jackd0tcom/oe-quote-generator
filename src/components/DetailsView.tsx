import { useRef, useEffect } from "react";

interface DetailsViewProps {
  data: {
    itemName: string;
    price: number;
    details: string;
  };
  setShowDetails: (showDetails: boolean) => void;
  showDetails: boolean;
}

export default function DetailsView({
  data,
  setShowDetails,
  showDetails,
}: DetailsViewProps): React.JSX.Element {
  const detailsRef = useRef(null);

  // // Handles blur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (detailsRef.current && !(detailsRef.current as HTMLElement).contains(event.target as Node)) {
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
