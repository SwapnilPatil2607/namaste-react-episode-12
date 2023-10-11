import { useEffect } from "react";
import User from "./UserClass";

export const About = () => {
  useEffect(() => {
    return () => {
      // this return function is
      // kind of similar to componentWillUnmount
      // we have to clear interval inside this if it was defined in this component
    };
  }, []);
  return (
    <div>
      <h1>About Page</h1>
      <h2>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        nemo incidunt fugiat tempore, officiis exercitationem praesentium
        numquam mollitia aliquid reprehenderit nihil dolorem pariatur culpa.
        Quibusdam omnis recusandae architecto ad dicta.
      </h2>
      <User contact="999999999" />
      <User contact="999999999" />
      {/* lifecycle will be in batches */}
    </div>
  );
};

{
  /* <div> 1st loaded
  <h1>About Page</h1> 2nd loaded
  <h2>eqwwq</h2> 3rd loaded
  <User contact="999999999" /> 4th loaded this whole component
</div>; 5th loaded
*/
}
