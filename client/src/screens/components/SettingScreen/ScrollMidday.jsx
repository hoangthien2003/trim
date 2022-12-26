import React from "react";

function ScrollMidday(props) {
  const { setMidday, defaultMidday } = props;

  let elAM = document.getElementById(`AM`);
  let elPM = document.getElementById(`PM`);

  function getItemMiddayArray() {
    if (!elAM.getBoundingClientRect() || !elPM.getBoundingClientRect()) return;
    let elAMY = Math.ceil(elAM.getBoundingClientRect().y);
    let elPMY = Math.ceil(elPM.getBoundingClientRect().y);
    if (elAMY >= 355 && elAMY <= 371) {
      setMidday(elAM.innerHTML);
    }
    if (elPMY >= 355 && elPMY <= 371) {
      setMidday(elPM.innerHTML);
    }
  }

  return (
    <div
      className="overflow-auto h-[60px] ml-[5px]"
      onScroll={getItemMiddayArray}
    >
      <div className="h-[20px]">
        <br />
      </div>
      <p className="text-[14px]" id="AM">
        AM
      </p>
      <p className="text-[14px]" id="PM">
        PM
      </p>
      <div className="h-[20px]">
        <br />
      </div>
    </div>
  );
}

export default ScrollMidday;
