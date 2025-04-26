// import Logo from "@/components/svg/Logo";
import styled from "@emotion/styled";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <Container>
      <Link href={"/"}>
        <Image
          width={50}
          height={50}
          src={"/assets/images/puuk_logo.png"}
          alt="puuk_copy"
          priority
        />
      </Link>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  padding: 20px 16px;
  height: 57px;
  background-color: #000000;
  z-index: 100;
`;
