import React, { useState } from "react";

const Counter = (props) => {
  const tableau = useState(1);

  const compteur = tableau[0];
  const setCompteur = tableau[1];

  return (
    <div>
      {compteur}
      <button onClick={() => setCompteur(compteur + 1)}>Incrément</button>
    </div>
  );
};

export default Counter;
