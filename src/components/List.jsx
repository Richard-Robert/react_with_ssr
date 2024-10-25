import React from 'react';

const List = (props) => {
  const list = props.list;
  return list.map((item) => <li key={item.id}>{item.name}</li>);
};

export default List;
