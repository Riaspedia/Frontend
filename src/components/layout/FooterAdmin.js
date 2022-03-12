import { Footer } from "antd/lib/layout/layout";
import React from "react";

export default function FooterAdmin() {
  return (
    <Footer style={{ textAlign: "center", position: "sticky" }}>
      {[<small>Copyright © RIASPEDIA 2022</small>]}
    </Footer>
  );
}
