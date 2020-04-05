import React, { useState, useEffect } from "react";
import "./fumble.css";
import FumbleTable from "./FumbleTable";
import CriticalTable from "../CriticalComponents/CriticalTable";

export default function FumbleMain() {
  return (
    <React.Fragment>
      <CriticalTable criticalWoundType="Simple" />
      <CriticalTable criticalWoundType="Complex" />
      <CriticalTable criticalWoundType="Difficult" />
      <CriticalTable criticalWoundType="Deadly" />
      <FumbleTable fumbleType="MeleeAttack" />
      <FumbleTable fumbleType="ArmedDefense" />
      <FumbleTable fumbleType="RangedAttack" />
      <FumbleTable fumbleType="UnarmedAttackOrDefense" />
    </React.Fragment>
  );
}
