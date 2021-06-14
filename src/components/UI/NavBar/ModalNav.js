import classes from "*.module.css";
import React, { useState } from "react";

export default function ModalNav(props) {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };
  return (
    <div onClick={handleShowModal}>
      <a href="#" className={props.className1}>
        Regional Cluster
        <img src={props.src} alt="down arrow" className={props.className2} />
      </a>
      {showModal ? <div></div> : ""}
    </div>
  );
}
