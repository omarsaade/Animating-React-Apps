import React, { Component } from 'react';
import TransitionGroup from 'react-transition-group/cjs/TransitionGroup';
import CSSTransition from 'react-transition-group/CSSTransition';
import './List.css';

class List extends Component {

    state = {
        items: [1, 2, 3]
    }

    //concat bta3mul concat la 2 arrays only
    addItemHandler = () => {
        this.setState((prevState) => {
            return {
                items: prevState.items.concat(prevState.items.length + 1)
            };
        });
    }


    removeItemHandler = (selIndex) => {
        this.setState((prevState) => {
            return {
                items: prevState.items.filter((item, index) => index !== selIndex)
            };
        });
    }

    render() {
        const listItems = this.state.items.map((item, index) => (
            <CSSTransition key={index} classNames="fade" timeout={900}>
                <li
                    className="ListItem"
                    onClick={() => this.removeItemHandler(index)}>{item}</li>
            </CSSTransition>
        ));


        // the special thing about transition group and essentially the only thing it does is it's able to handle
        // multiple items,
        // it determines whenever one element in the list changes if it's removed or added and it will then manually
        // set the in property on the wrapped transition
        // or CSSTransition component so that you don't have to control the in property because you of course can't
        // do that,  you're handling a dynamic list in the end.

        return (
            <div>
                <button className="Button" onClick={this.addItemHandler}>Add Item</button>
                <p>Click Item to Remove.</p>
                {/* <ul className="List"> */}
                {/* we can use TransitionGroup where we have a dynamic output */}
                {/* by default this would render a div */}
                {/* this can work with transition or CSSTransition */}
                {/* hye bethet el in manually */}
                <TransitionGroup component="ul" className="List">
                    {listItems}
                </TransitionGroup>
                {/* </ul> */}
            </div>
        );
    }
}

export default List;















//   normal

// import React, { Component } from 'react';
// 
// import './List.css';
// 
// class List extends Component {
// 
// state = {
// items: [1, 2, 3]
// }
// 
// concat bta3mul concat la 2 arrays only
// addItemHandler = () => {
// this.setState((prevState) => {
// return {
// items: prevState.items.concat(prevState.items.length + 1)
// };
// });
// }
// 
// 
// removeItemHandler = (selIndex) => {
// this.setState((prevState) => {
// return {
// items: prevState.items.filter((item, index) => index !== selIndex)
// };
// });
// }
// 
// render() {
// const listItems = this.state.items.map((item, index) => (
// <li
// key={index}
// className="ListItem"
// onClick={() => this.removeItemHandler(index)}>{item}</li>
// ));
// 
// return (
// <div>
{/* <button className="Button" onClick={this.addItemHandler}>Add Item</button> */ }
{/* <p>Click Item to Remove.</p> */ }
{/* <ul className="List"> */ }
{/* {listItems} */ }
{/* </ul> */ }
{/* </div> */ }
        // );
    // }
// }
// 
// export default List;
// 
// 
// 
// 
// 







