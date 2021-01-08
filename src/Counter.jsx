import React, { useState } from "react";

const Counter = (props) => {
  const [compteur, setCompteur] = useState(1);

  const handleChange = () => {
    setCompteur(compteur + 1);
  };

  return (
    <div>
      {compteur}
      <button onClick={handleChange}>Incrément</button>
    </div>
  );
};

export default Counter;
