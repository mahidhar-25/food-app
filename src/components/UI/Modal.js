import React , {Fragment} from 'react'
import ReactDom from 'react-dom'
import classes from "./Modal.module.css"

  const Backdrop = (props) => {
    return <div className={classes.backdrop}/>
  }

  const ModelOverlay = (props) => {
    return <div className={classes.modal}>
        <div className={classes.content}>{props.children}</div>
    </div>
  }

  const portalElement = document.getElementById("overlays");
function Modal(props) {

  
  return (
    <Fragment>
      {ReactDom.createPortal(<Backdrop /> , portalElement)}
      {ReactDom.createPortal(<ModelOverlay>{props.children}</ModelOverlay> , portalElement)}
    </Fragment>
  )
}

export default Modal
