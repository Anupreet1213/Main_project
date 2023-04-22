import React from "react";

const Service = () => {
  return (
    <section>
      <div class="row">
        <h1>Powering the Top Leading Blockchain Firms</h1>
      </div>
      <div class="row">
        {/* <!-- Column One --> */}
        <div class="column">
          <div class="card">
            <div class="featuresIcon">
              <i class="fa-solid fa-shield-halved"></i>
            </div>
            <h3>Secured By</h3>
            <p>
              Our Cloud and infrastructure security are Powerfully secured by
              the Digital Ocean. it maintains a watch 24*7 Detects vulnerability
              in time to prevent Harm to our Security Key.
            </p>
          </div>
        </div>
        {/* <!-- Column Two --> */}
        <div class="column">
          <div class="card">
            <div class="featuresIcon">
              <i class="fa-brands fa-aws"></i>
            </div>
            <h3>Secured By AWS</h3>
            <p>
              We use the most reliable and secure infrastructure by aws. All of
              the first Data Exchange happened Through SSL using TLS 1.0 and
              sensitive Data is Secured and stored with AES-256 Encryption.
            </p>
          </div>
        </div>
        {/* <!-- Column Three --> */}
        <div class="column">
          <div class="card">
            <div class="featuresIcon">
              <i class="fa-solid fa-cloud"></i>
            </div>
            <h3>DDOS Prevention by Cloudflare</h3>
            <p>
              Our experts will keep you online 24/7/365 no matter the size,
              type, or duration of the attack. Keep your site running fast and
              revenue growth with our easy-to-use tools.
            </p>
          </div>
        </div>
      </div>
    </section>
    
  );
};

export default Service;
