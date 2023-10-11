import { useRouteError } from "react-router-dom";

export const ErrorElement = () => {
  const error = useRouteError();
  // using the hooks provided by router library

  console.log(error);
  return (
    <div>
      <h1>Oops Something went wrong</h1>
      <h2>{error.status + " " + error.statusText}</h2>
    </div>
  );
};
