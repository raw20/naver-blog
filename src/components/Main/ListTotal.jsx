import React, { useEffect, useState } from "react";
import "./css/list.css";
import Pagination from "./Pagination";
function ListTotal() {
  const [list, setList] = useState([]);
  const LIST_PER_PAGE = 10;
  const [page, setPage] = useState(1);
  const startNum = (page - 1) * LIST_PER_PAGE;
  const endNum = startNum + LIST_PER_PAGE;

  useEffect(() => {
    fetch("./db/blogData.json")
      .then((res) => res.json())
      .then((res) => setList(res));
  }, []);
  return (
    <div className="list">
      <h1>이웃새글</h1>
      <ul className="list-tab">
        {[...list]
          .reverse()
          .slice(startNum, endNum)
          .map(({ img, id, title, body }) => (
            <li key={id}>
              <div className="list-header">
                <img src={img} alt={title} />
                <span className="idName">{id}</span>
              </div>
              <div className="list-main">
                <span className="listTitle">{title}</span>
                <span className="listBody">{body}</span>
              </div>
            </li>
          ))}
      </ul>
      <Pagination
        total={list.length}
        page={page}
        setPage={setPage}
        listPerPage={LIST_PER_PAGE}
      />
    </div>
  );
}

export default ListTotal;
