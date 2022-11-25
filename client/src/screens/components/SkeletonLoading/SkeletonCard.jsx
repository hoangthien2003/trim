import React from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

function SkeletonCard() {
  return (
    <SkeletonTheme baseColor="#a09fa1" highlightColor="#c6c5c7">
      <div className="px-[14px] py-[8px]">
        <Skeleton circle={true} width={40} height={40} />
        <Skeleton
          height={18}
          baseColor="#a09fa1"
          highlightColor="#c6c5c7"
          className="mt-[10px]"
          width="70%"
        />
        <Skeleton height={12} width="40%" baseColor="#66666b" />
        <div className="mt-[10px]">
          <Skeleton height={15} width="80%" count={2} baseColor="#66666b" />
        </div>
        <SkeletonTheme
          baseColor="#a09fa1"
          highlightColor="#c6c5c7"
          inline={true}
        >
          <Skeleton circle={true} count={3} height={25} width={25} />
        </SkeletonTheme>
      </div>
      <div className="px-[14px] py-[8px]">
        <Skeleton circle={true} width={40} height={40} />
        <Skeleton
          height={18}
          baseColor="#a09fa1"
          highlightColor="#c6c5c7"
          className="mt-[10px]"
          width="70%"
        />
        <Skeleton height={12} width="40%" baseColor="#66666b" />
        <div className="mt-[10px]">
          <Skeleton height={15} width="80%" count={2} baseColor="#66666b" />
        </div>
        <SkeletonTheme
          baseColor="#a09fa1"
          highlightColor="#c6c5c7"
          inline={true}
        >
          <Skeleton circle={true} count={3} height={25} width={25} />
        </SkeletonTheme>
      </div>
      <div className="px-[14px] py-[8px]">
        <Skeleton circle={true} width={40} height={40} />
        <Skeleton
          height={18}
          baseColor="#a09fa1"
          highlightColor="#c6c5c7"
          className="mt-[10px]"
          width="70%"
        />
        <Skeleton height={12} width="40%" baseColor="#66666b" />
        <div className="mt-[10px]">
          <Skeleton height={15} width="80%" count={2} baseColor="#66666b" />
        </div>
        <SkeletonTheme
          baseColor="#a09fa1"
          highlightColor="#c6c5c7"
          inline={true}
        >
          <Skeleton circle={true} count={3} height={25} width={25} />
        </SkeletonTheme>
      </div>
    </SkeletonTheme>
  );
}

export default SkeletonCard;
