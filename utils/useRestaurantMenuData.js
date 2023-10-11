import { useEffect, useState } from "react";

const useRestaurantMenuData = (id) => {
  const [data, setData] = useState(null);
  useEffect(async () => {
    const data = await fetch(
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.159014&lng=72.9985686&restaurantId=${id}&catalog_qa=undefined&submitAction=ENTER`
    );
    const json = await data.json();
    setData(json);
  }, []);

  return data;
};

export default useRestaurantMenuData;
