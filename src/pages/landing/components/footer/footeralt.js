import React from "react";

export default function FooterAlt() {
  return (
    <React.Fragment>
      <section className="footer-alt bg-dark pt-3 pb-3">
        <div className="">
          <div className="row g-0">
            <div className="col-lg-12 text-center">
              <p className="copyright text-white f-14 font-weight-light mb-0">
                {" "}
                {new Date().getFullYear()} © LandingPage. Design By Prabin Karki
              </p>
            </div>
          </div>
        </div>
      </section>
      <style jsx="true">{`
        .footer-alt {
        }
      `}</style>
    </React.Fragment>
  );
}
