import styled from "@emotion/styled";

const Banner1 = () => {
  return <Container></Container>;
};

export default Banner1;

const Container = styled.div`
  width: 100%;
  height: 255px;
  overflow: hidden;
  background: #f9f9f9;
  position: relative;
  border-radius: 12px;
  box-shadow: 0px 3px 20px 0 rgba(0, 0, 0, 0.04);
  background-image: url("/assets/images/purification.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    transform: scale(1.02);
  }
  &:active {
    transform: scale(0.98);
  }
`;
