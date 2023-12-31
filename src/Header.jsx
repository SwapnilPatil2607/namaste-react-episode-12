import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useOnlineStatus } from "../utils/useOnlineStatus";
import { UserContext } from "../utils/UserContext";
import { useDispatch, useSelector } from "react-redux";
import { decreaseCount, increaseCount } from "../utils/slices";

const Header = () => {
  const [buttonName, setButtonName] = useState("Login");
  const status = useOnlineStatus();
  const context = useContext(UserContext);

  const dispatch = useDispatch();

  // selector syntx => state => reducer passed in configure store => value
  const count = useSelector((state) => state.countReducerInsideStore.count);
  // using function return state so only specific state is catched instead of whole store
  console.log(count);
  return (
    <div className="header">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqgqV9sezgYxiiPqaJ3NXXvwDbkzgXpCeBWQ&usqp=CAU" />

      <div>
        <h3> Count: {count}</h3>
        <button onClick={() => dispatch(increaseCount())}>+</button>
        <button onClick={() => dispatch(decreaseCount())}>-</button>
      </div>
      <div>
        {status ? "you are online" : "you are offline"}
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/small-bundle">Small bundle page</Link>
          </li>
          <li>
            <h3>{context.user}</h3>
            <button
              className="btn-class"
              onClick={() => {
                // toggle feature
                buttonName === "Login"
                  ? setButtonName("Logout")
                  : setButtonName("Login");

                // ---------
                // btnName = "Logout";
                // console.log(
                //   "btnName will be updated but UI wont update because reconcilliation is not triggered",
                //   btnName
                // );
              }}
            >
              {buttonName}
              {/* {btnName} */}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

//   default export (used for one export per file)
export default Header;
