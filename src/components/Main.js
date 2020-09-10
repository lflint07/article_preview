import React from "react";

function Main() {
  return (
    <div className="main">
      <div className="component">
        <div class="image">
          <img src="images/drawers.jpg" alt="Green dresser" />
        </div>
        <div class="content-box">
          <div class="content">
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
          <div class="content-info">
            <div class="user-info">
              <img class="user-avi" />
              <p>Michelle Appleton 28 June 2020</p>
            </div>
            <div class="user-contact"></div>
            <div class="share">
              <button class="share-button"></button>
              <div class="share-module">
                <p>SHARE</p>
                <div class="facebook"></div>
                <div class="twitter"></div>
                <div class="pinterest"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
