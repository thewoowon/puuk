"use client";
import { useEffect, useState } from "react";
import styles from "./SlidingDoor.module.css";

const SlidingDoor = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setOpen(true), 1000); // 1초 뒤 문 열림
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={styles.doorContainer}>
      <div className={`${styles.door} ${styles.leftDoor} ${open ? styles.leftDoorOpen : ""}`} />
      <div className={`${styles.door} ${styles.rightDoor} ${open ? styles.rightDoorOpen : ""}`} />
    </div>
  );
};

export default SlidingDoor;
