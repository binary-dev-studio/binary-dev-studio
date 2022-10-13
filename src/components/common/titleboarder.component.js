import styled from "styled-components";

export const TitleBoarder = styled.div`
  position: relative;
  &:after,
  &:before {
    border-radius: 50px;
    content: "";
    left: 0;
    position: absolute;
    right: 0;
  }

  &:after {
    background-color: ${(props) =>
      props.firstColor ? props.firstColor : props.theme.palette.primary.main};
    height: 6px;
    top: 13px;
    width: 30px;
  }

  &:before {
    background-color: ${(props) =>
      props.secondColor ? props.secondColor : "#005bdd"};
    height: 2px;
    top: 15px;
    width: 120px;
  }
`;

// Use:
// <div>
//   <div>About Us</div>
//   <TitleBoarder/>
// </div>
