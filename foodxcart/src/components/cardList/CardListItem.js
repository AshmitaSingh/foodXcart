import React from "react";
import { IMG_CDN_URL } from "../../constants";
import { rating } from "../../constants";

function CardListItem({
  name,
  cloudinaryImageId,
  avgRating,
  slaString,
  cuisines,
  area,
}) {
  return (
    <div className="w-72 h-[420px] cursor-pointer">
      <img
        className="w-72 h-60 rounded-3xl"
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="menu-img"
      />
      <div className="px-4 py-2 flex flex-col gap-1">
        <div className="font-bold">{name}</div>
        <div className="flex gap-2 font-bold">
          <div className="flex gap-1 items-center">
            <span>{rating}</span>
            <span>{avgRating}</span>
          </div>
          <span>•</span>
          <div>{slaString.toLowerCase()}</div>
        </div>
        <div className="font-light text-sm">{cuisines.join(", ")}</div>
        <div className="font-thin text-sm">{area}</div>
      </div>
    </div>
  );
}

export default CardListItem;
