import React from "react";

function MemberComponent(props) {
  var chooseMemberID = props.choose;
  var textColor = "text-black",
    backgroundColor = "bg-white";
  if (chooseMemberID === true) {
    textColor = "text-white";
    backgroundColor = "bg-cyan";
  } else {
    textColor = "text-black";
    backgroundColor = "bg-white";
  }
  return (
    <div className={`memberItem ${textColor} ${backgroundColor}`} id={props.id}>
      <p>{props.value}</p>
    </div>
  );
}

export default MemberComponent;
