import "./styles.css";
import { imageLinks, linkText } from "./assets/imageLinks"
import { useState, useEffect } from "react";

function PressReleases() {
  const [animation, setAnimation] = useState("");
  const [count, setCount] = useState(0);
  const [imgLinks, setImageLinks] = useState({
    firstImg: "",
    secondImg: "",
    thirdImg: ""
  });

  const [linkTextArr, setLinkText] = useState({
    firstLinkText: "",
    secondLinkText: "",
    thirdLinkText: ""
  });

  const { firstImg, secondImg, thirdImg } = imgLinks;
  const { firstLinkText, secondLinkText, thirdLinkText} = linkTextArr;

  useEffect(() => {
    const interval = setInterval(() => {
      if(count === 6) {
        setCount(-1);
      }

      setAnimation("slideInRight");
      setImageLinks({
        firstImg: imageLinks[count][0],
        secondImg: imageLinks[count][1],
        thirdImg: imageLinks[count][2]
      });
      setLinkText({
        firstLinkText: linkText[count][0],
        secondLinkText: linkText[count][1],
        thirdLinkText: linkText[count][2]
      });
      
      if(count < 7) {
        setCount(prev => {
          if(count >= 0 && count !== 7) {
            return prev + 1
          }
        })
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [count]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimation("");
    }, 4001);
    return () => clearInterval(interval);
  }, []);

  function handleClick(e) {
    if(e.target.className.includes("main-press-releases__arrow-btn_right")) {
      if(count === 6) {
        e.target.disabled = true;
        setCount(0);

        setTimeout(() => {
          e.target.disabled = false;
        }, 3000);
      } 

      setAnimation("slideInRight");
      setImageLinks({
        firstImg: imageLinks[count][0],
        secondImg: imageLinks[count][1],
        thirdImg: imageLinks[count][2]
      });
      setLinkText({
        firstLinkText: linkText[count][0],
        secondLinkText: linkText[count][1],
        thirdLinkText: linkText[count][2]
      });
      
      if(count < 7) {
        setCount(prev => {
          if(count >= 0 && count !== 7) {
            return prev + 1
          }
        })
      }

      setTimeout(() => {
        setAnimation("");
      }, 100);
    }

    if(e.target.className.includes("main-press-releases__arrow-btn_left")) {
      if(count === 0) {
        e.target.disabled = true;
        setCount(1);

        setTimeout(() => {
          e.target.disabled = false;
        }, 3000);
        console.log("disabled!");
      } 

      setAnimation("slideInRight");
      setImageLinks({
        firstImg: imageLinks[count][0],
        secondImg: imageLinks[count][1],
        thirdImg: imageLinks[count][2]
      });
      setLinkText({
        firstLinkText: linkText[count][0],
        secondLinkText: linkText[count][1],
        thirdLinkText: linkText[count][2]
      });
      
      if(count > 0) {
        setCount(prev => {
          if(count <= 6 && count !== 0) {
            return prev - 1
          }
        })
      }

      setTimeout(() => {
        setAnimation("");
      }, 100);
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
        <ul className={`main-press-releases__list ${animation}`}>
          <li className="main-press-releases__item">
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={firstImg  || "https://images.cointelegraph.com/images/240_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy9lMTA2YzkyNDJmM2NiNDBmMzM2MDlmZGVhNzMzYTA4ZS5qcGc=.jpg"}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {firstLinkText || "Sekuritance unique approach addresses blockchain compliance challenges"}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item">
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={secondImg || "https://images.cointelegraph.com/images/240_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy83OGI0ZGJiMjg0NzFlY2I3OGEwYzczMGU3MWRkZmIwNy5qcGc=.jpg"}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {secondLinkText || "Changelly integrates FIO Protocol"}
              </span>
            </a>
          </li>

          <li className="main-press-releases__item">
            <a className="main-press-releases__link" href="#dummy" title="#">
              <figure className="main-press-releases__figure">
                <div className="lazy-image main-press-releases__cover lazy-image__load">
                  <img
                    className="lazy-image__img"
                    src={thirdImg || "https://images.cointelegraph.com/images/240_aHR0cHM6Ly9zMy5jb2ludGVsZWdyYXBoLmNvbS9zdG9yYWdlL3VwbG9hZHMvdmlldy81NzkwMWY2ZmY5NjUzYzMyYWYyMzZmMTUxYjJlNGQ0Yy5qcGc=.jpg"}
                    alt="loading..."
                  />
                </div>
              </figure>
              <span className="main-press-releases__title">
                {thirdLinkText || "Oasis Network hosting inaugural mentorship event with female blockchain leaders"}
              </span>
            </a>
          </li>
        </ul>
      </div>
      <button
          className="btn main-press-releases__arrow-btn main-press-releases__arrow-btn_left"
          type="button"
          onClick={ handleClick }
          disabled={count === 6 ? true : null}
        >
          <span className="btn__wrp">
            <span className="btn__icon main-press-releases__prev-icon"></span>
          </span>
        </button>

        <button
          className="btn main-press-releases__arrow-btn main-press-releases__arrow-btn_right"
          type="button"
          onClick={ handleClick }
          disabled={count === 0 ? true : null}
        >
          <span className="btn__wrp">
            <span className="btn__icon main-press-releases__next-icon"></span>
          </span>
        </button>
    </div>
  );
}

export default PressReleases;