import React from "react";

function Main() {
  return (
    <div className="main">
      <div className="component">
        <div className="image">
          <img src="/images/drawers.jpg" alt="Green dresser"></img>
        </div>
        <div className="content-box">
          <div className="content">
            <h3>
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </h3>
            <p>
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </p>
          </div>
          <div className="content-info">
            <div className="user-info">
              <img className="user-avi" />
              <p>Michelle Appleton 28 June 2020</p>
            </div>
            <div className="user-contact"></div>
            <div className="share">
              <button className="share-button"></button>
              <div className="share-module">
                <p>SHARE</p>
                <div className="facebook"></div>
                <div className="twitter"></div>
                <div className="pinterest"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
