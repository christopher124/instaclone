import React from "react";
import useAuth from "../../hooks/useAuth";

export default function Home() {
  const auth = useAuth;
  return (
    <div>
      <h1>estamos en la home</h1>
    </div>
  );
}
