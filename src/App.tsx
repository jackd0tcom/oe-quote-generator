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
      <div className="bg-color"></div>
      <div className="bg-wrapper"></div>
      <QuoteGenerator
        youtubeItems={[
          {
            itemName: "Feature-Length Video",
            duration: "10-30 minutes",
            price: 25000,
            details: `
              <p>
                      Our flagship product. We’ll ideate, write, shoot and edit
                      a 15-20 minute video that features your product in action.
                      Chase will highlight your product's features and benefits
                      and offer a unique perspective that will bring your
                      product to life. <br /> <br />
                      After the video is finished we’ll publish it on our
                      popular channel and watch it get views.
                      You’ll then get full access to the files for your own
                      usage for advertising and promotional purposes.
              </p>
              <a target=_blank href="https://www.youtube.com/watch?v=igxsIGNkwuk">
                Example
              </a>
              <br/>
              <br/>
              <a target=_blank href="https://www.youtube.com/watch?v=AKS_k30IXCk">
                Example
              </a>
              <br/>
              <br/>
              <a target=_blank href="https://www.youtube.com/watch?v=erMTLJn0sL8">
                Example
              </a>
            `,
          },
          {
            itemName: "Featured Video Integration",
            duration: "60-90 seconds",
            price: 5000,
            details: `
              <p>
                     A YouTube integration is a 60-90 second video that highlights your product and gives it life that you couldn’t get any other way.

                    It will then be nested within an appropriate video appearing in our editorial schedule.

              </p>
              <a target=_blank href="https://youtu.be/5YyKsh7YHL0?si=bonE1j6qzIs_4Onb&t=166">
                Example
              </a>
              <br/>
              <br/>
              <a target=_blank href="https://youtu.be/0OXDi7Abfc0?si=8lWObbnoWJ5y9hO6&t=801">
                Example
              </a>
              <br/>
              <br/>
              <a target=_blank href="https://youtu.be/jKk1q_wYYqo?si=VRHcbdu8kvAd-fJb&t=290">
                Example
              </a>
            `,
          },
        ]}
        youtubeAddOns={[
          {
            itemName: "Short Form Video",
            duration: "60-90 seconds",
            price: 2500,
            details: `<p>Our masterful video editors will make a vertical format video 20-30 seconds in      duration that will be both eye catching and compelling.

            That video will then be posted to our Outdoor Empire YouTube, Instagram and Tiktok accounts.

            You’ll be able to post it anywhere you’d like after that. It’s your video.
            </p>
              <a target=_blank href="https://www.youtube.com/watch?v=a1_VLujfKfc">
                Example
              </a>
              <br/>
              <br/>
              <a target=_blank href="https://www.youtube.com/shorts/6u-bikRxuDs">
                Example
              </a>
              <br/>
              <br/>
              <a target=_blank href="https://www.youtube.com/shorts/-US9HZRRtG0">
                Example
              </a>
            `,
          },
          {
            itemName: "Youtube Community Post",
            duration: "",
            price: 500,
            details:
              "A YouTube community post is an engaging tool for boosting audience engagement and strengthening the community, often acting like a mini-social media feed tied directly to the YouTube channel.",
          },
          {
            itemName: "Video Intro Featured Logo",
            duration: "60-90 seconds",
            price: 500,
            details: ``,
          },
          {
            itemName: "Full Licensing of Content",
            duration: "60-90 seconds",
            price: 1000,
            details: ``,
          },
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
