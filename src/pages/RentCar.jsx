import React from "react";
import AutoComlete from "../components/AutoComlete";
import { suggestions, ToList } from "../data";

export default function RentCar() {
  return (
    <div>
      <AutoComlete placeholder={"From..."} arrayList={suggestions} />

    </div>
  );
}
