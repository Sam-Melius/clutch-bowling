"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function AOSLoader() {
  useEffect(() => {
    Aos.init();
  }, []);

  return;
}
