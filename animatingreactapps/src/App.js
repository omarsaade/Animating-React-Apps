import React, { Component } from "react";

import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";
import Transition from "react-transition-group/cjs/Transition";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false
  }

  showModal = () => {
    this.setState({ modalIsOpen: true });
  }

  closeModal = () => {
    this.setState({ modalIsOpen: false })
  }

  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={() =>
          this.setState(prevState => ({ showBlock: !prevState.showBlock }))}>
          Toggle
        </button>
        <br />
        <Transition in={this.state.showBlock} timeout={1000}
          mountOnEnter
          unmountOnExit
          onEnter={() => console.log("onEnter")}
          onEntering={() => console.log("onEntering")}
          onEntered={() => console.log("onEntered")}
          onExit={() => console.log("onExit")}
          onExiting={() => console.log("onExiting")}
          onExited={() => console.log("onExited")}
        >
          {state => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: 'opacity 1s ease-out',
                opacity: state === 'exiting' ? 0 : 1
              }} />
          )}
        </Transition>
        {/* bas tef2sa entered e5er shi */}

        <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
        <Backdrop show={this.state.modalIsOpen} />
        <button className="Button" onClick={this.showModal}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;








// import React, { Component } from "react";

// import "./App.css";
// import Modal from "./components/Modal/Modal";
// import Backdrop from "./components/Backdrop/Backdrop";
// import List from "./components/List/List";
// import Transition from "react-transition-group/cjs/Transition";

// class App extends Component {
//   state = {
//     modalIsOpen: false,
//     showBlock: false
//   }

//   showModal = () => {
//     this.setState({ modalIsOpen: true });
//   }

//   closeModal = () => {
//     this.setState({ modalIsOpen: false })
//   }

//   render() {
//     return (
//       <div className="App">
//         <h1>React Animations</h1>
//         <button className="Button" onClick={() =>
//           this.setState(prevState => ({ showBlock: !prevState.showBlock }))}>
//           Toggle
//         </button>
//         <br />
//         {/* we use this transition to wrap what we want to animate */}
//         <Transition
//           in={this.state.showBlock}
//           timeout={1000}
//           mountOnEnter
//           unmountOnExit>
//           {/* {state => (console.log(state))} */}
//           {/* state btkun ya exited ya exiting ya entering ya entered  */}
//           {state => (
//             <div
//               style={{
//                 backgroundColor: "red",
//                 width: 100,
//                 height: 100,
//                 margin: "auto",
//                 transition: 'opacity 1s ease-out',
//                 opacity: state === 'exiting' ? 0 : 1
//               }} />
//           )}
//         </Transition>
//         {/* </div> : null} */}
//         <Modal show={this.state.modalIsOpen} closed={this.closeModal} />
//         <Backdrop show={this.state.modalIsOpen} />
//         <button className="Button" onClick={this.showModal}>Open Modal</button>
//         <h3>Animating Lists</h3>
//         <List />
//       </div>
//     );
//   }
// }

// export default App;
