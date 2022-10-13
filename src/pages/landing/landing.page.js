import React from "react";
import Page from "../../components/common/page.component";
import { observer } from "mobx-react";
import { Layout } from "antd";
import LandingHeader from "./components/header/landingheader";
import Footer from "./components/footer/footer";
import AboutUs from "./components/aboutus/aboutus";
import OurService from "./components/ourservice/ourservice";
import Pricing from "./components/pricing/pricing";
import Clients from "./components/clients/clients";
import Blogs from "./components/blogs/blogs";
import ContactUs from "./components/contactus/contactus";
import FooterAlt from "./components/footer/footeralt";
import BackToTop from "../../components/common/backtotop";
import FAQS from "./components/faqs/faqs";
import OurTeam from "./components/ourteam/ourteam";
import Home2 from "./components/home/home2";

/**
 * https://preview.themeforest.net/item/zooki-reactjs-landing-page-template/full_screen_preview/25955451?_ga=2.111902976.504195213.1657026714-647357231.1648958363&_gac=1.192602584.1657026914.CjwKCAjwwo-WBhAMEiwAV4dybSfThG6mV_lHwJVDTTniW_d6LnO9x3ahk4PFR5XsOFvBQXfvO_9xmBoCtlwQAvD_BwE
 */

function LandingPage() {
  return (
    <Page title="App Name">
      <Layout style={{}}>
        {/* header menu */}
        <LandingHeader />

        <Layout.Content className="site-layout">
          {/* home section */}
          <Home2 />

          {/* about section */}
          <AboutUs />

          {/* service section */}
          <OurService />

          {/* pricing section */}
          <Pricing />

          {/* clients section */}
          <Clients />

          {/* our team section */}
          <OurTeam />

          {/* blogs section */}
          <Blogs />

          {/* faqs section */}
          <FAQS />

          {/* contact us section */}
          <ContactUs />
        </Layout.Content>
        <Layout.Footer
          style={{
            paddingBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
          }}
          className="bg-dark"
        >
          {/* Footer Section */}
          <Footer />
          {/* FooterAlt Section */}
          <FooterAlt />
          {/* <div>Hello</div> */}
        </Layout.Footer>
      </Layout>

      {/* Back to top handler */}
      <BackToTop />
    </Page>
  );
}

export default observer(LandingPage);
