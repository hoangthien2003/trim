import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function SkeletonHorizon() {
  return (
    <SkeletonTheme
      inline={true}
      width="100%"
      baseColor="#a09fa1"
      highlightColor="#c6c5c7"
    >
      <Skeleton circle={true} height={24} width={24} className="mr-[10px]" />
      <Skeleton height={24} width="80%" />
    </SkeletonTheme>
  );
}

export default SkeletonHorizon;
