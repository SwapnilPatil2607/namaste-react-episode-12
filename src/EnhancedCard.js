// letter case of higher order should be camel
export const enhancedCard = (Component) => {
  // return inside return
  // props will be passed in the returned function
  return (props) => {
    return (
      <div>
        <p>Famous Restaurants (Enhanced card)</p>
        <Component {...props} />
      </div>
    );
  };
};
