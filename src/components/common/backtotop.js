import React from "react";
import { BackTop } from "antd";
import { FaHandPointUp } from "react-icons/fa";
import { useTheme } from "styled-components";
export default function BackToTop() {
    const theme = useTheme()
  return (
    <BackTop>
      <div
        style={{
          height: 40,
          width: 40,
          lineHeight: "40px",
          borderRadius: 4,
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
          textAlign: "center",
          fontSize: 12,
        }}
      >
        <FaHandPointUp size={20} className="fab" />
      </div>
    </BackTop>
  );
}
