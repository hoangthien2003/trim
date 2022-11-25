import React, { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { ColorLoadingSelector } from "../../../redux/selector";

function SkeletonHorizon() {
  var colorLoading = useSelector(ColorLoadingSelector);

  return (
    <SkeletonTheme
      inline={true}
      width="100%"
      baseColor={colorLoading[0]}
      highlightColor={colorLoading[2]}
    >
      <Skeleton circle={true} height={24} width={24} className="mr-[10px]" />
      <Skeleton height={24} width="80%" />
    </SkeletonTheme>
  );
}

export default SkeletonHorizon;
