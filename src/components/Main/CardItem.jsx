import React from "react";
import { MdFavorite } from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import About from "./About";

function CardItem({ card }) {
  const favListColor = [{ color: "#ddd" }, { color: "#f20" }];
  const btnColor = [
    { color: "#fff", fontWeight: 700, backgroundColor: "#ada" },
    { color: "#fff", fontWeight: 700, backgroundColor: "rgb(26, 183, 52)" },
  ];
  const [like, setLike] = useState(0);
  const [checkState, setCheckState] = useState("");
  function handlerLikeFnc(event) {
    setLike(like === 0 ? 1 : 0);
    setCheckState(event.target.checked);
  }
  return (
    <li>
      <div
        className="img_set"
        style={{ background: `url(${card.imgUrl}) no-repeat center / cover` }}
      ></div>
      <dl>
        <dt>{card.title}</dt>
        <dd>{card.content}</dd>
      </dl>
      <div className="btns">
        <input
          type="checkbox"
          id={card.checkName}
          name={card.checkName}
          data-checked={checkState}
          onChange={handlerLikeFnc}
          className="blind"
        />
        <label htmlFor={card.checkName} style={btnColor[like]}>
          좋아요
          <MdFavorite style={favListColor[like]} />
        </label>
        <Link
          to={`/about/${card.checkName}`}
          state={{
            title: card.title,
            img: card.imgUrl,
            name: card.imgAlt,
            content: card.content,
            favorite: btnColor[like],
          }}
        >
          상세보기
        </Link>
      </div>
    </li>
  );
}

export default CardItem;
