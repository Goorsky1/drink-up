import React from 'react';

function Results() {
  return (
    <>
      <h1>Top choices for you!</h1>
      <div className="results">
        <div>
          <img
            src="https://cdn.myshoptet.com/usr/www.kulina.pl/user/shop/big/14471-7_zestaw-4-szklanek-do-piwa-lager-beer-classics-spiegelau.jpg?60c326c7"
            alt="lager"
          ></img>
          <h3>Lager</h3>
        </div>
        <div>
          <img
            src="https://twojbrowar.pl/2843-thickbox_default/baltic-porter-deer-bear-21blg.jpg"
            alt="porter"
          ></img>
          <h3>Baltic Porter</h3>
        </div>
        <div>
          <img
            src="https://twojbrowar.pl/2840-thickbox_default/grapefruit-sour-ale-13blg.jpg"
            alt="sour"
          ></img>
          <h3>Sour</h3>
        </div>
      </div>
    </>
  );
}

export default Results;
