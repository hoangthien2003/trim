import React, { useState } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { useSelector } from "react-redux";
import { ColorLoadingSelector } from "../../../redux/selector";

function SkeletonCard(props) {
  var colorLoading = useSelector(ColorLoadingSelector);
  return (
    <SkeletonTheme
      baseColor={colorLoading.baseColor}
      highlightColor={colorLoading.highlightColor}
    >
      <div className="px-[14px] py-[8px]">
        <Skeleton circle={true} width={40} height={40} />
        <Skeleton height={18} className="mt-[10px]" width="70%" />
        <Skeleton
          height={12}
          width="40%"
          baseColor={colorLoading.detailColor}
        />
        <div className="mt-[10px]">
          <Skeleton
            height={15}
            width="80%"
            count={2}
            baseColor={colorLoading.detailColor}
          />
        </div>
        <SkeletonTheme
          baseColor={colorLoading.baseColor}
          highlightColor={colorLoading.highlightColor}
          inline={true}
        >
          <Skeleton circle={true} count={3} height={25} width={25} />
        </SkeletonTheme>
      </div>
    </SkeletonTheme>
  );
}

export default SkeletonCard;
