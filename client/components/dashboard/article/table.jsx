import React from 'react';
import style from '../../../styles/components/dashboard/article/table.css';

function Table({ articles }) {
  return (
    <table className={style.table}>
      <thead className={style['table-head']}>
        <tr className={style.row}>
          <td className={style.column}>No</td>
          <td className={style.column}>Title</td>
          <td className={style.column}>Thumbnail</td>
          <td className={style.column}>Tags</td>
          <td className={style.column}>Created At</td>
        </tr>
      </thead>
      <tbody className={style['table-body']}>
        {
          articles.map((item, index) => (
            <tr className={style.row} key={item._id}>
              <td className={style.column}>{index + 1}</td>
              <td className={style.column}>{item.title}</td>
              <td className={style.column}>
                {
                  item.thumbnail.url ? <a href={item.thumbnail.url}>{`${item.thumbnail.publicId}.${item.thumbnail.format}`}</a> : 'null'
                }
              </td>
              <td className={style.column}>
                <p className={style.text}>javascript</p>
                <p className={style.text}>mern</p>
                <p className={style.text}>javascript</p>
              </td>
              <td className={style.column}>{item.createdAt}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  );
}

export default Table;
