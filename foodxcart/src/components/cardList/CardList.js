import React, { useEffect } from "react";
import { FILTERED_RESTAURANT_DATA as restaurant } from "../dummyData/dummyData";
import CardListItem from "./CardListItem";

function CardList() {
  const fetchData = async () => {
    const data = await fetchData(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    ).then((res) => res.json());

    console.log(data.data);
  };

  return (
    <div className="m-12 flex flex-wrap justify-between">
      {restaurant.map((restaurant) => (
        <CardListItem key={restaurant.data.id} {...restaurant.data} />
      ))}
    </div>
  );
}

export default CardList;
