import React, { useState, useEffect } from "react";
import DataLoader from './DataLoader';
export default function Loot() {
    const [buttonText, setButtonText] = useState("Click me, please");
  
    return (
      <DataLoader />
    );
  }