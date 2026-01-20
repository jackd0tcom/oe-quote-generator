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
              <iframe width="100%" height="600px" src="https://www.youtube.com/embed/igxsIGNkwuk?si=Xtiapzt3fRM2Ro-R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
              <br/>
              <br/>
              <iframe width="100%" height="600" src="https://www.youtube.com/embed/AKS_k30IXCk?si=d-P3tkZi-J4sgsjI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <br/>
              <br/>
              <iframe width="100%" height="600" src="https://www.youtube.com/embed/erMTLJn0sL8?si=equnbSbMqgsEwcRU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
              <iframe width="100%" height="600" src="https://www.youtube.com/embed/5YyKsh7YHL0?si=II9hcP2CUXdrLVbA&amp;start=166" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
              <br/>
              <br/>
              <iframe width="100%" height="600" src="https://www.youtube.com/embed/0OXDi7Abfc0?si=y61BIbDFxHh5NHQX&amp;start=801" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <br/>
              <br/>
              <iframe width="100%" height="600" src="https://www.youtube.com/embed/jKk1q_wYYqo?si=m7D2WyAclL-upjp-&amp;start=290" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
              <iframe width="100%" height="600" src="https://www.youtube.com/embed/a1_VLujfKfc?si=fv00BUMOdgzwWuDJ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
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
              <br/>
              <br/>
              <div className="socials-wrapper">
                <a target=_blank href="https://www.instagram.com/outdoorempirecom/?hl=en">
                  Instagram
                </a>
              <br/>
              <br/>
                <a target=_blank href="https://www.tiktok.com/@outdoorempirecom">
                  TikTok
                </a>
              <br/>
              <br/>
                <a target=_blank href="https://www.youtube.com/@theoutdoorempire/shorts">
                  Youtube Shorts
                </a>
              </div>
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
            details: `Get the full treatment! Get a featured tile in our stack, a banner ad and a special section dedicated to your product. Pairs well with a short video.
            <br/>
            <br/>
            <a target=_blank href="https://outdoorempire.com/thehoneyhole/">
                Example
              </a>
            `,
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
