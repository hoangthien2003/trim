import React, { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { ColorLoadingSelector } from "../../../redux/selector";

function SkeletonCard() {
  var colorLoading = useSelector(ColorLoadingSelector);
  return (
    <SkeletonTheme baseColor={colorLoading[0]} highlightColor={colorLoading[2]}>
      <div className="px-[14px] py-[8px]">
        <Skeleton circle={true} width={40} height={40} />
        <Skeleton height={18} className="mt-[10px]" width="70%" />
        <Skeleton height={12} width="40%" baseColor={colorLoading[1]} />
        <div className="mt-[10px]">
          <Skeleton
            height={15}
            width="80%"
            count={2}
            baseColor={colorLoading[1]}
          />
        </div>
        <SkeletonTheme
          baseColor={colorLoading[0]}
          highlightColor={colorLoading[2]}
          inline={true}
        >
          <Skeleton circle={true} count={3} height={25} width={25} />
        </SkeletonTheme>
      </div>
    </SkeletonTheme>
  );
}

export default SkeletonCard;
