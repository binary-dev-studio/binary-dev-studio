import React, { useState } from "react";
import { Row, Col, Typography } from "antd";
import { Collapse } from "antd";
import { TitleBoarder } from "../../../../components/common/titleboarder.component";
import { useTheme } from "styled-components";
const { Panel } = Collapse;
export default function FAQS() {
  const theme = useTheme();
  const [faqs] = useState([
    {
      qs: "This is panel header 1",
      ans: `A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many
      households across the world.`,
    },
    {
      qs: "This is panel header 2",
      ans: `A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many
      households across the world.`,
    },
    {
      qs: "This is panel header 3",
      ans: `A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many
      households across the world.`,
    },
    {
      qs: "This is panel header 4",
      ans: `A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many
      households across the world.`,
    },
    {
      qs: "This is panel header 5",
      ans: `A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many
      households across the world.`,
    },
    {
      qs: "This is panel header 6",
      ans: `A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many
      households across the world.`,
    },
    {
      qs: "This is panel header 7",
      ans: `A dog is a type of domesticated animal. Known for its loyalty and
      faithfulness, it can be found as a welcome guest in many
      households across the world.`,
    },
  ]);
  return (
    <React.Fragment>
      <div
        id="faqs"
        style={{
          // backgroundColor: "#0e6cff",
          // backgroundImage: `url("images/faqs_bg.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
          minHeight: "70vh",
          paddingTop: 64,
          paddingBottom: 70,
        }}
        className="bg-gradient"
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
                }}
              >
                FAQS
              </Typography.Title>
              <TitleBoarder />
            </Col>
          </Row>
          <Collapse
            expandIconPosition="right"
            defaultActiveKey={["1"]}
            className="faqs-collapse"
          >
            {faqs.map((faq, index) => (
              <Panel
                header={<p className="faqs-header">{faq.qs}</p>}
                key={index + 1}
              >
                {faq.ans}
              </Panel>
            ))}
          </Collapse>
        </div>
      </div>
      <style jsx="true">{`
        .faqs-collapse .faqs-header {
          position: relative;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }

        .faqs-collapse .faqs-header:after {
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

        .faqs-collapse .faqs-header:hover {
          color: ${theme.palette.primary.main} !important;
          -webkit-transitiimport { useTheme } from 'styled-components';
on: all 0.5s;
          transition: all 0.5s;
        }

        .faqs-collapse .faqs-header:hover:after {
          width: 100%;
          -webkit-transition: all 0.5s;
          transition: all 0.5s;
        }
      `}</style>
    </React.Fragment>
  );
}
