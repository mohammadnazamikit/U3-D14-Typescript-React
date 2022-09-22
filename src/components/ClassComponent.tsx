import { Component } from "react";

interface ClassComponentProps {
  title: string;
  subtitle?: string;
}

interface ClassComponentState {
  counter: number;
}

// the problem we were getting with the title prop to ClassComponent
// comes from the fact that ClassComponent, by default, is NOT expecting to receive any prop!

class ClassComponent extends Component<ClassComponentProps, ClassComponentState> {
  state = {
    counter: 0,
    miles: false,
  };

  render() {
    return (
      <div>
        <h2>{this.props.title}</h2>
        <p>{this.props.subtitle || "Default Subtitle"}</p>
        <hr />
        <button
          onClick={() =>
            this.setState({
              counter: this.state.counter - 1,
            })
          }
        >
          -
        </button>
        <div>
          <p>The counter value is {this.state.counter}</p>
        </div>
        <button
          onClick={() =>
            this.setState({
              counter: this.state.counter + 1,
            })
          }
        >
          +
        </button>
      </div>
    );
  }
}

export default ClassComponent;
