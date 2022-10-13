import { Row, Col, Typography } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import { useTheme } from "styled-components";

function Footer() {
  const theme = useTheme();
  return (
    <div
      id="footer"
      style={{
        backgroundColor: "white",
        backgroundImage: `url("images/footer-bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        paddingTop: 80,
        paddingBottom: 30,
        position: "relative",
        minHeight: 200,
      }}
    >
      <div className="container">
        <Row style={{ color: "grey" }} gutter={[40, 20]}>
          <Col xs={24} lg={16} style={{}}>
            <Typography.Title level={4}>ABOUT US</Typography.Title>
            <Typography.Paragraph style={{textAlign:'justify'}} className=" text-muted">
              Velit dolore aliquip voluptate ex incididunt commodo esse
              consequat aute aute qui. Magna cupidatat cillum voluptate eu nisi
              consectetur et et nulla labore. Et nostrud laborum velit mollit
              irure aliqua. Reprehenderit esse exercitation consequat velit.
              Reprehenderit culpa aliqua do pariatur nulla proident. Esse anim
              aute sit ipsum commodo do labore ullamco Lorem sit ea. Irure amet
              qui sit magna qui. Velit cillum laboris amet consequat velit amet
              dolore ut proident. Ad non ad nostrud dolore. Nisi excepteur dolor
              nostrud et dolore laboris qui nulla sunt enim. Laboris ipsum
              excepteur irure ad culpa labore do consequat fugiat eu enim. Eu
              proident quis in tempor sint. Dolor consequat eiusmod nisi esse
              consectetur consectetur nisi nulla magna aliqua. Occaecat ex minim
              minim dolore proident. Culpa aute ullamco do nostrud esse eu
              excepteur duis tempor dolor enim qui. Culpa eiusmod culpa ad aute
              incididunt consectetur minim ea in sit aliquip velit. Elit
              adipisicing commodo do et aliquip ad.
            </Typography.Paragraph>
          </Col>
          {/* <Col style={{ width: 2, backgroundColor: "grey" }}></Col> */}
          <Col xs={24} lg={4}>
            <Typography.Title level={4}>SUPPORT</Typography.Title>
            <ul className="list-unstyled footer-sub-menu">
              <li className="f-14">
                <Link to="/" className="text-muted">
                  Contact us
                </Link>
              </li>
              <li className="f-14">
                <Link to="/" className="text-muted">
                  About us
                </Link>
              </li>
              <li className="f-14">
                <Link to="/" className="text-muted">
                  Faqs
                </Link>
              </li>
            </ul>
          </Col>

          <Col xs={24} lg={4}>
            <Typography.Title level={4}>QUICK LINKS</Typography.Title>
            <ul className="list-unstyled footer-sub-menu">
              <li className="f-14">
                <Link to="/" className="text-muted">
                  Terms & Conditions
                </Link>
              </li>
              <li className="f-14">
                <Link to="/" className="text-muted">
                  Privacy Policy
                </Link>
              </li>
              <li className="f-14">
                <Link to="/" className="text-muted">
                  Services
                </Link>
              </li>
              <li className="f-14">
                <Link to="/" className="text-muted">
                  Pricing
                </Link>
              </li>
            </ul>
          </Col>
        </Row>
      </div>
      <style jsx="true">{`
        .footer-sub-menu li {
          margin: 14px 0 !important;
        }

        .footer-sub-menu li a {
          position: relative;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }

        .footer-sub-menu li a:after {
          content: "";
          background-color: ${theme.palette.primary.main};
          height: 1px;
          width: 0%;
          position: absolute;
          left: 0;
          bottom: -5px;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }

        .footer-sub-menu li a:hover {
          color: ${theme.palette.primary.main} !important;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }

        .footer-sub-menu li a:hover:after {
          width: 100%;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }
      `}</style>
    </div>
  );
}

export default Footer;
