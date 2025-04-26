"use client";

import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import Image from "next/image";

const Splash = () => {
  const [boarding, setBoarding] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setBoarding(false);
    }, 5000);
  }, []);

  if (!boarding) {
    return null;
  }

  return (
    <Container>
      <Image
        src={"/assets/images/puuk_copy.png"}
        height={111}
        width={250}
        alt="puuk_copy"
        priority
      />
    </Container>
  );
};

export default Splash;

const Container = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #000000;
  z-index: 200;
  animation: fadeOut 3s ease-in-out 2s forwards;

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
