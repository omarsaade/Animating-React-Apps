//                   CSSTransition


import React from 'react';

import CSSTransition from "react-transition-group/cjs/CSSTransition";



import './Modal.css';



const animationTiming = {

    enter: 400, //adding element

    exit: 1000 //removing element

}



const modal = (props) => {





    return (

        <CSSTransition

            mountOnEnter

            unmountOnExit

            in={props.show}

            timeout={animationTiming}

            /* These are now all the classes I can define and fill with life

            and which will get added to

            the wrapped element to this div

            in our case depending on the state of the transition. */

            classNames={{
                enter: '',
                enterActive: 'ModalOpen',
                exit: '',
                exitActive: 'ModalClosed',
                // appear: '',
                // appearActive: ''
            }}>

            <div className="Modal">

                <h1>A Modal</h1>

                <button className="Button" onClick={props.closed}>Dismiss</button>

            </div>

        </CSSTransition>

    );

};



export default modal;








//                     CSSTransition
// 
// import React from 'react';
// import CSSTransition from "react-transition-group/cjs/CSSTransition";
// 
// import './Modal.css';
// 
// const animationTiming = {
// enter: 400, //adding element
// exit: 1000 //removing element
// }
// 
// const modal = (props) => {
// 
// 
// return (
// <CSSTransition
// mountOnEnter
// unmountOnExit
// in={props.show}
// timeout={animationTiming}
// /* These are now all the classes I can define and fill with life
// and which will get added to
// the wrapped element to this div
// in our case depending on the state of the transition. */
// classNames="fade-slide" >
{/* <div className="Modal"> */ }
{/* <h1>A Modal</h1> */ }
{/* <button className="Button" onClick={props.closed}>Dismiss</button> */ }
{/* </div> */ }
{/* </CSSTransition> */ }
// );
// };
// 
// export default modal;








//                                         1- Transition

// import React from 'react';
// import Transition from "react-transition-group/cjs/Transition";
// 
// import './Modal.css';
// 
// const animationTiming = {
// enter: 400, //adding element
// exit: 1000 //removing element
// }
// 
// const modal = (props) => {
// 
// 
// return (
// <Transition
// mountOnEnter
// unmountOnExit
// in={props.show}
// timeout={animationTiming}>
{/* {state => { */ }
// const cssClasses = ["Modal", state === 'entering' ?
// 'ModalOpen' : state === "exiting" ?
// 'ModalClosed' : null];
// return (
// <div className={cssClasses.join(' ')}>
{/* <h1>A Modal</h1> */ }
{/* <button className="Button" onClick={props.closed}>Dismiss</button> */ }
{/* </div> */ }
// )
// }}
{/*  */ }
{/* </Transition> */ }
    // );
// };
// 
// export default modal;