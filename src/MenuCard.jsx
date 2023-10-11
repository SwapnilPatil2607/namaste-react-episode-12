export const MenuCard = ({ menu, added, changeAddedStatus }) => {
  //   now this component is controlled comp since its state is managed by the parent the component
  return (
    <>
      <button
        onClick={() => {
          changeAddedStatus(!added);
        }}
      >
        Add All Items
      </button>
      {added && <h2> Added all items</h2>}

      {menu?.map((item) => {
        return (
          <p key={item.card.info.name}>
            {item.card.info.name}:{item.card.info.price / 100}Rs{" "}
          </p>
        );
      })}
    </>
  );
};
