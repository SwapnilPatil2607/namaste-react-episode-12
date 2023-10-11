import React from "react";
import { UserContext } from "../utils/UserContext";

// extends is used because we are inheriting few thing from React
class User extends React.Component {
  // class based component is basically
  //   normal js class that return jsx element

  //   ----------
  // constructor is called first only for before first render
  constructor(props) {
    super(props);
    // we use super to access props inside constructor
    //   ----------
    console.log(props);
    console.log("Contructor called");
    // state is reserved word
    this.state = {
      userInfo: {
        brand: "swap",
      },
      count: 0,
    };

    // behind the scenes
    // even -> const [count,setcount] = useState(0) gets converted to this.state={count:0}

    // here we have to define state
  }

  //   didMount is called third, after render and DOM manipulation
  async componentDidMount() {
    // this.setState can't be called inside contructor
    // this.setState function is provided by react
    this.setState({
      count: 2,
    });
    console.log("DidMount called");

    // more than one state can be updated like this

    const apiCall = await fetch("https://dummyjson.com/products/1");
    const data = await apiCall.json();
    this.setState({
      userInfo: data,
    });
    console.log(data);
    // we can call api here but we have to use
    // async before componentDidMount

    this.timer = setInterval(() => {
      console.log("hello");
    }, 2000);
  }

  //   didUpdate is called after re-render and after DOM update
  componentDidUpdate(prevProps, prevState) {
    console.log("update is called after re-render", prevState);
    if (prevState.count === 3) {
      this.setState({
        count: 4,
      });
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
  //   render is called second
  render() {
    const { userInfo } = this.state;
    const { contact } = this.props;
    console.log("Render called");
    return (
      <>
        {/* this is how we access the context in class based component */}
        <UserContext.Consumer>
          {(context) => {
            return <h2> admin {context.user}</h2>;
          }}
        </UserContext.Consumer>
        <img src={userInfo?.thumbnail} />
        <h1>Name: {userInfo?.brand}</h1>
        <h2>Location: {userInfo?.location}</h2>
        <h2>Contact: {contact}</h2>
        <h2>{this.state.count}</h2>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          increase count
        </button>
      </>
    );
  }
}

export default User;
