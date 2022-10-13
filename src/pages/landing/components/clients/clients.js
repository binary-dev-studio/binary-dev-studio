import React, { useState } from "react";
import { Row, Col, Typography, Avatar, Carousel } from "antd";
import { TitleBoarder } from "../../../../components/common/titleboarder.component";
import { useTheme } from "styled-components";

export default function Clients() {
  const theme = useTheme();
  const [testimonials] = useState([
    {
      name: "Prabin Karki",
      designation: "Sr. Software Developer",
      message: ` Lorem Ipsum is simply dummy text of the printing and
      typesetting industry. Lorem Ipsum has been the industry's
      standard dummy text ever since the.`,
      imgUrl: "http://www.webcoderskull.com/img/team2.png",
    },
    {
      name: "Jarina Karki",
      designation: "Web Developer",
      message: `Nisi Lorem fugiat ullamco occaecat elit Lorem labore ipsum. Quis culpa irure laborum amet. Voluptate ipsum officia Lorem velit aliquip. Reprehenderit et laborum consectetur occaecat quis.
                Mollit velit aliqua officia excepteur dolore nisi minim exercitation culpa aliquip in ad in duis. Dolor ea dolore
                nostrud laboris proident velit aute velit. Occaecat sunt eu enim dolor sint qui nulla culpa adipisicing sint.`,
      imgUrl: "http://www.webcoderskull.com/img/team3.png",
    },
    {
      name: "Milan Shrestha",
      designation: "Sr. Software Developer",
      message: `Cupidatat nostrud in quis ad consectetur deserunt aliquip pariatur laborum laborum. Commodo cupidatat pariatur ea in officia cillum. Laborum aliquip labore esse labore consequat eiusmod ullamco voluptate dolore nisi commodo nisi. Ut ea duis in qui do proident incididunt. Amet proident commodo nulla duis incididunt excepteur aliquip. Magna qui aliqua ipsum magna fugiat consectetur qui sint excepteur. Dolor sit et irure velit nulla non ex aute et voluptate elit.
                Consectetur excepteur sit eu nulla ipsum labore exercitation laborum veniam. Non voluptate laboris ipsum cupidatat occaecat. Ad aliqua dolore ullamco id id nostrud.
                Adipisicing proident ad excepteur ea eiusmod aute minim dolore qui pariatur elit. Consectetur
                commodo dolore dolore adipisicing consequat ullamco aliqua eu eiusmod nostrud fugiat commodo.`,
      imgUrl: "http://www.webcoderskull.com/img/team4.png",
    },
    {
      name: "Ramesh Nagal",
      designation: "Sr. Software Developer",
      message: `Ad mollit aliqua eiusmod id ea. Laborum sunt ex fugiat incididunt dolor commodo. Id sint commodo irure tempor Lorem culpa velit duis quis occaecat eiusmod fugiat.
                Ad esse elit officia qui ea eiusmod. Sunt culpa cillum deserunt aliqua commodo laboris non sunt id deserunt occaecat nisi anim. Ullamco est magna et consectetur incididunt
                in aute sunt eu culpa incididunt nostrud id. Enim ea sunt nostrud quis ex consequat ad ut ipsum irure duis veniam minim.
                Dolor consectetur incididunt exercitation culpa nulla.`,
      imgUrl: "http://www.webcoderskull.com/img/team2.png",
    },
  ]);
  return (
    <React.Fragment>
      <div
        id="clients"
        style={{
          backgroundImage: `url("images/bg-clients.a77abe0c636f28fc7d59.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          minHeight: "100vh",
          paddingTop: 64,
          paddingBottom: 70,
          backgroundColor: "rgba(50, 70, 80, 0.9)",
          backgroundBlendMode: "soft-light",
        }}
      >
        <div className="container">
          <Row style={{ marginBottom: 40 }}>
            <Col>
              <Typography.Title
                level={2}
                style={{
                  marginBottom: 0,
                  textTransform: "uppercase",
                  fontWeight: 300,
                  color: "white",
                }}
              >
                Our Clients
              </Typography.Title>
              <TitleBoarder />
            </Col>
          </Row>
          <Carousel autoplay draggable >
            {testimonials.map((testimonial, key) => (
              <div class="testimonial-bg d-flex justify-content-center align-items-center" key={key}>
                <div className="testimonial">
                  <p className="message">{testimonial.message}</p>
                  <div></div>
                  <div className="image">
                    <Avatar size={100} className="mt-2" style={{}} src={testimonial.imgUrl} />
                  </div>
                  <Typography.Text className="name">
                    -- {testimonial.name} --
                  </Typography.Text>
                  <Typography.Paragraph className="designation">
                    {testimonial.designation}
                  </Typography.Paragraph>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
      <style jsx="true">{`
        .ant-carousel .slick-slide {
          padding: 50px 0px 50px 0px;
        }
        .testimonial-bg {
          background-color: rgba(255, 255, 255, 0.1);
          color: white;
          min-height: 500px !important;
          border: 3px solid ${theme.palette.primary.main};
          font-family: "Raleway", sans-serif;
          padding: 35px 70px;
          text-align: center;
          position: relative;
        }
        .testimonial-bg:before {
          content: "";
          font-family: "fontawesome";
          width: 60px;
          height: 60px;
          border: 3px solid ${theme.palette.primary.main};
          line-height: 60px;
          background: ${theme.palette.primary.main};
          text-align: center;
          font-size: 40px;
          color: ${theme.palette.primary.constractText};
          position: absolute;
          top: -40px;
          left: 2%;
        }
        .testimonial {
          padding: 0 15px;
        }
        .testimonial .message {
          font-size: 20px;
          font-weight: 400;
          font-style: italic;
          color: white;
          line-height: 30px;
          padding-bottom: 25px;
          margin-bottom: 15px;
          position: relative;
        }
        .testimonial .message:before {
          content: "";
          width: 75%;
          border-top: 1px solid ${theme.palette.primary.main};
          margin: 0 auto;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
        }
        .testimonial .message:after {
          content: "";
          width: 20px;
          height: 20px;
          background: ${theme.palette.primary.main};
          position: absolute;
          bottom: -10px;
          left: 50%;
          border-bottom: 1px solid ${theme.palette.primary.main};
          border-right: 1px solid ${theme.palette.primary.main};
          transform: translateX(-50%) rotate(45deg);
        }
        .testimonial .name {
          font-family: "Raleway", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: white;
          text-transform: capitalize;
          margin: 0;
        }
        .testimonial .designation {
          font-family: "Raleway", sans-serif;
          font-size: 18px;
          color: white;
        }
      `}</style>
    </React.Fragment>
  );
}
