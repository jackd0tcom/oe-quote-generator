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
              Our flagship product. We’ll ideate, write, shoot and edit a long-form YouTube video that features your product in action.
              </p>
              <p>
              Chase will highlight your product's features and benefits and offer a unique perspective that will bring your product to life.
              </p>
              <p>
              After the video is finished we’ll publish it on our popular channel and watch it get views.
              </p>
              <p>
              You’ll then get full access to the files for your own advertising and promotional purposes as it includes a usage license. 
              </p>
              <p>
              Not only does this raise brand awareness through organic views from our audience, but it gives you a treasure trove of authentic video assets you can re-cut and re-purpose for advertising campaigns that convert to sales.
              </p>
              <br>

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
            <p><strong>Most popular! </strong></p>  
            <p>A YouTube integration is a 60-90 second mid-roll video promotion within a long-form YouTube video on our channel.</p>
            <p>It highlights your product authentically, gives it life that you couldn’t get any other way,  and includes a clear call to action. </p>
            <p>We work with you on the timeline and target audience to integrate this into a video from our editorial schedule that best fits your product.</p>

              <iframe width="100%" height="600" src="https://www.youtube.com/embed/5YyKsh7YHL0?si=II9hcP2CUXdrLVbA&amp;start=166" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>  
              <br/>
              <br/>
              <iframe width="100%" height="600" src="https://www.youtube.com/embed/HSSul2a9lrA" title="Camp Kitchen Gear You NEED vs What&#39;s Nice To Have" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <br/>
              <br/>
              <iframe width="100%" height="600" src="https://www.youtube.com/embed/jKk1q_wYYqo?si=m7D2WyAclL-upjp-&amp;start=290" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            `,
          },
        ]}
        youtubeAddOns={[
          {
            itemName: "Short Form Video",
            duration: "Up to 60 seconds",
            price: 2500,
            details: `
            <p>Our masterful video editors will make a vertical format video (usually 15-30 seconds in duration for best performance) that will be both eye-catching and compelling.</p>
            <p>This video will then be posted to our Outdoor Empire YouTube, Instagram, Facebook, and Tiktok accounts.</p>
            <p> Note: Short form video content is only available as an add-on to a Featured Video Integration or Feature-Length YouTube video.</p>
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
            itemName: "Full Licensing of Content",
            duration: "Per Integration or Short",
            price: 1000,
            details: `
            <p>You’ll receive a usage license and the video files from your featured YouTube video integration or your short form video so you can use it for your own advertising and promotional purposes.</p>
            <p>Not only does this raise brand awareness through organic views from our audience, but it gives you an opportunity to boost conversion and sales.</p>
            <p>We hand over the valuable, authentic, and difficult-to-reproduce video assets we created so you can re-cut and re-purpose the footage for your own organic and paid advertising campaigns.</p>
            `,
          },
          {
            itemName: "Youtube Community Post",
            duration: "",
            price: 500,
            details: `
            <p>A YouTube community post is an engaging tool for boosting audience engagement and building a community.</p>
            <p>It’s like a mini targeted social media feed tied directly to a YouTube channel.</p>
            <p>For the best engagement with our audience, we’ll post either a poll or quiz that relates to your product. It will include your link in the post as well as the pinned comment.</p>
            <a href="https://www.youtube.com/@theoutdoorempire/posts" target=_blank>Outdoor Empire YouTube Community</a>
            <img class="community-image" src="/packfire community post.png"/>
            `,
          },
          {
            itemName: "Video Intro Featured Logo",
            duration: "1 Month",
            price: 1000,
            details: `
            <p>This placement is reserved exclusively for Full Send Title Sponsors.</p>
            <p>Your logo will appear in the introduction of every new eligible long-form YouTube video published by Outdoor Empire during the duration of your sponsorship.</p>
            <p>You may also provide a link to include in every video description.</p>
            `,
          },
          {
            itemName: "Sitewide Sidebar Ad",
            duration: "1 Month",
            price: 500,
            details: `
            <p>This placement is reserved exclusively for Full Send Title Sponsors.</p>
            <p>You provide the creative and we’ll display an ad with a link in the sidebar of our website on all pages where a sidebar appears for the duration of your sponsorship.</p>
            <img class="community-image" src="/banner ad placement.png"/>
            `,
          },
        ]}
        honeyHoleItems={[
          // {
          //   itemName: "Full Feature",
          //   duration: "7 days",
          //   price: 2500,
          //   details: `Get the full treatment! Get a featured tile in our stack, a banner ad and a special section dedicated to your product. Pairs well with a short video.
          //   <br/>
          //   <br/>
          //   <a target=_blank href="https://outdoorempire.com/thehoneyhole/">
          //       Example
          //     </a>
          //   `,
          // },
          {
            itemName: "Featured Tile",
            duration: "30 days",
            price: 1250,
            details: `
            <p>Display one product on <a target=_blank href="https://outdoorempire.com/thehoneyhole">The Honey Hole</a> in a stylized version of our standard product tile for 30 days.</p>
            <p>Products that organically appear on The Honey Hole are heavily discounted, so you may consider offering a compelling promotion on a single product.</p>
            <img class="community-image" src="/featured tile.png"/>
            `,
          },
          {
            itemName: "Banner Ad",
            duration: "30 days",
            price: 1650,
            details: `
            <p>You provide the creative and we’ll display a leaderboard banner ad (728 x 90 px) on <a href="https://outdoorempire.com/thehoneyhole" target=_blank>The Honey Hole</a> web page for 30 days.</p>
            <p>Placement will be based on a first come, first serve basis with the first ad appearing below the first row of tiles.</p>
            <p>For example:</p>
            <img class="community-image" src="/banner ad example 1.png"/>
            <img class="community-image" src="/banner ad example 2.png"/>
            <br>
            <img class="community-image" src="/banner ad placement.png"/>
            `,
          },
        ]}
        emailItems={[
          {
            itemName: "Editorial Feature",
            duration: "1 Email",
            price: 1500,
            details: `
            <p><strong>Most popular!</strong></p>  
            <p>Raise brand awareness with a highly engaged audience of outdoor enthusiasts with an editorial feature in one edition of our weekly email newsletter, The Honey Hole.</p>
            <p>This includes your linked logo above the fold and a dedicated segment near the top of our newsletter about your brand or product.</p>
            <p>You provide the creative and copy to tell the story you want to tell, feature the product you want to promote (perhaps as a mini gear review which our audience loves), or whatever floats your boat.</p>
            <p>You get a headline, one featured image, up to 150 words of copy, and one link (may be placed up to three times).</p>
            <a target=_blank href="https://outdoorempire.optin.com/newsletter/awlist6324539/Mjg2OTYxMTQ=/in-defense-of-scrawny-trees.htm">Example</a>
            <br>
            <img src="/email editorial feature.png" class="community-image"/>
            `,
          },
          {
            itemName: "Exclusive Deal",
            duration: "1 Email",
            price: 750,
            details: `
            <p>Promote a discounted product to bargain lovers who click on outdoor gear deals more than anything else.</p>
            <p>The deeper the discount, the better!</p>
            <p>To be placed in one edition of our weekly email newsletter, The Honey Hole, this includes a headline, one image, a product title, a brief product description, a short promotion description, and a CTA button.</p>
            <p>Example Template:</p>
            <br>
            <img src="/email exclusive deal.png" class="community-image"/>
            `,
          },
          {
            itemName: "Banner Ad",
            duration: "1 Email",
            price: 500,
            details: `
            <p>You provide the creative and we’ll display a standard banner ad (468 x 60 px) near the top of one edition of our weekly email newsletter, The Honey Hole.</p>
            <p>For example:</p>
            <br>
            <img class="community-image" src="/banner ad example 1.png"/>
            <img class="community-image" src="/banner ad example 2.png"/>
            `,
          },
        ]}
      />
    </div>
  );
}

export default App;
