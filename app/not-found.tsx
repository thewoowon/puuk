import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "calc(var(--vh, 1vh) * 100)",
      }}
    >
      <div
        style={{
          width: "224px",
          height: "143px",
          position: "relative",
        }}
      >
        <Image
          src={"/assets/images/error/network-error.png"}
          alt=""
          priority
          fill
        />
      </div>
      <div
        style={{
          fontSize: "24px",
          fontWeight: "semibold",
          marginTop: "16px",
          textAlign: "center",
          color: "white",
        }}
      >
        존재하지 않는 경로에요 🤣
      </div>
      <Link
        href="/"
        style={{
          marginTop: "16px",
          color: "#920000",
          textDecoration: "none",
        }}
      >
        홈으로 가기
      </Link>
    </div>
  );
}
