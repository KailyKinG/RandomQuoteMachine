import React from "react";
import ContainerMessage from "./components/ContainerMessage.jsx";
import {connect} from "react-redux";
import "./App.css";

class App extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="App" style={{backgroundColor: this.props.newColor}}>
        <ContainerMessage />
        <p className="byAuthor">by KailyKinG</p>
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    newColor: state.color,
  }
};

export default connect(mapStateToProps, null)(App);
