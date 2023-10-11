import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useRestaurantMenuData from "../../namaste-react-episode-11/utils/useRestaurantMenuData";
import { MenuCard } from "./MenuCard";

export const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState();
  const [menu, setMenu] = useState([]);
  const { id } = useParams();

  // this component is managing the state of child component
  // its a uncontrolled component
  // also we have the lifted state up
  // lifting the state up means moving the state one or more level above
  const [addAllButton, setAddAllMenu] = useState(false);

  // our custom hook
  const data = useRestaurantMenuData(id);

  useEffect(() => {
    if (data) {
      // we dont have to write api calls in this component since it is handled by custom hook
      setResInfo(data.data.cards[0].card.card.info);
      setMenu(
        data.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
          .itemCards
      );
    }
  }, [data]);
  return (
    <div>
      <div className="res-info-page">
        <h1>{resInfo?.name}</h1>
        <h2>Rating: {resInfo?.avgRatingString} </h2>
        <h2>Location: {resInfo?.city}</h2>
      </div>

      <h1>Menu</h1>
      <div className="res-info-page">
        <MenuCard
          changeAddedStatus={setAddAllMenu}
          added={addAllButton}
          menu={menu}
        />
      </div>
    </div>
  );
};
