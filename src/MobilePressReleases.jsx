import "./styles.css";
import { imageLinks, linkText } from "./assets/imageLinks"
import { useState } from "react";

function MobilePressReleases() {
  const [displayNumber, setDisplayNumber] = useState(3);

  function handleIncrease(e) {
    if(e.target.className === "load-more" || e.target.className === "load-icon") {
      setDisplayNumber(displayNumber + 3);
    }

    if(e.target.className === "hide" || e.target.className === "hide-icon") {
      setDisplayNumber(3);
    }
  }
  
  return (
    <div className="main-press-releases">
      <div className="main-press-releases__header">
        <a
          href="#dummy"
          className="main-press-releases__category main-press-releases__category__link"
        >
          Press Releases
        </a>
      </div>
      <div className="main-press-releases__wrp">
        <ul className={`main-press-releases__list`}>
          <li className="main-press-releases__item">
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[0][0]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[0][0]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item">
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[0][1]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
              {linkText[0][1]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item">
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[0][2]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[0][2]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item" style={{display: displayNumber > 3 ? "block" : "none" }}>
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[1][0]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[1][0]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item" style={{display: displayNumber > 3 ? "block" : "none" }}>
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[1][1]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[1][1]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item" style={{display: displayNumber > 3 ? "block" : "none" }}>
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[1][2]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[1][2]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item" style={{display: displayNumber > 6 ? "block" : "none" }}>
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[2][0]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[2][0]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item" style={{display: displayNumber > 6 ? "block" : "none" }}>
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[2][1]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[2][1]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item" style={{display: displayNumber > 6 ? "block" : "none" }}>
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[2][2]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[2][2]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item" style={{display: displayNumber > 9 ? "block" : "none" }}>
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[3][0]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[3][0]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item" style={{display: displayNumber > 9 ? "block" : "none" }}>
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[3][1]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[3][1]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item" style={{display: displayNumber > 9 ? "block" : "none" }}>
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[3][2]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[3][2]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item" style={{display: displayNumber > 12 ? "block" : "none" }}>
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[4][0]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[4][0]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item" style={{display: displayNumber > 12 ? "block" : "none" }}>
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[4][1]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[4][1]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item" style={{display: displayNumber > 12 ? "block" : "none" }}>
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[4][2]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[4][2]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item" style={{display: displayNumber > 15 ? "block" : "none" }}>
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[5][0]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[5][0]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item" style={{display: displayNumber > 15 ? "block" : "none" }}>
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[5][1]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[5][1]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item" style={{display: displayNumber > 15 ? "block" : "none" }}>
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[5][2]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[5][2]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item" style={{display: displayNumber > 18 ? "block" : "none" }}>
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[6][0]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[6][0]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item" style={{display: displayNumber > 18 ? "block" : "none" }}>
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[6][1]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[6][1]}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item" style={{display: displayNumber > 18 ? "block" : "none" }}>
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={imageLinks[6][2]}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {linkText[6][2]}
              </span>
            </a>
          </li>
        </ul>
      </div>

      <div className="load-hide">
        <button style={{display: displayNumber === 21 ? "none" : "inline-block" }} onClick={handleIncrease} className="load-more">Load more <span className="load-icon"> &#8635;</span></button>
        <button style={{display: displayNumber === 3 ? "none" : "inline-block" }} onClick={handleIncrease} className="hide">Hide <span className="hide-icon"> &#8593;</span></button>
      </div>
    </div>
  );
}

export default MobilePressReleases;