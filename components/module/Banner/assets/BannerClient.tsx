import styled from "@emotion/styled";

type BannerClientProps = {
  imageName: string;
};

const Banner1 = ({ imageName }: BannerClientProps) => {
  return <Container imageName={imageName} />;
};

export default Banner1;

const Container = styled.div<{
  imageName: string;
}>`
  width: 100%;
  height: 255px;
  overflow: hidden;
  background: #f9f9f9;
  position: relative;
  border-radius: 12px;
  box-shadow: 0px 3px 20px 0 rgba(0, 0, 0, 0.04);
  background-image: url("/assets/images/${({ imageName }) => imageName}.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;
