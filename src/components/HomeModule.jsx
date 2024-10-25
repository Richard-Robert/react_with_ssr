import React, { useState } from 'react';
import List from './List';
import { useEffect } from 'react';
import { addList } from '../reducers/listReducer';
import { connect, useDispatch } from 'react-redux';

// const testList = [
//   {
//     fact:
//       'Endal was the first dog to ride on the London Eye (the characteristic ferris wheel in London, England), and was also the first known dog to successfully use a ATM machine.',
//   },
//   {
//     fact:
//       'At the age of 4 weeks, most dogs have developed the majority of their vocalizations.',
//   },
// ];

function mapStateToProps(state) {
  const { list } = state;
  return { list: list.value };
}

const HomeModule = (props) => {
  const [listData, setListData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://dattebayo-api.onrender.com/clans')
      .then((response) => response.json())
      .then((data) => {
        console.log(data.clans);
        setListData(data.clans);
        dispatch(addList(data.clans));
      });
  }, []);
  useEffect();
  return (
    <div className="wrapper-div">
      <header>
        <h1>
          This is a static template, there is no bundler or bundling involved!
        </h1>
      </header>
      <main className="main">
        <div className="intro-div">
          <picture>
            <source
              srcSet="https://html.com/wp-content/uploads/flamingo4x.jpg"
              media="(min-width: 4000px)"
            />
            <source
              srcSet="https://html.com/wp-content/uploads/flamingo3x.jpg"
              media="(min-width: 3000px)"
            />
            <source
              srcSet="https://html.com/wp-content/uploads/flamingo2x.jpg"
              media="(min-width: 2000px)"
            />
            <source
              srcSet="https://html.com/wp-content/uploads/flamingo1x.jpg"
              media="(min-width: 1000px)"
            />
            <img
              src="https://seeklogo.com/images/M/mdn-logo-6DB9B0093F-seeklogo.com.png"
              alt="Image not found"
            />
          </picture>
          <section className="picture-section">
            <p>Sorry I look ugly</p>
          </section>
        </div>
        <div className="content-div">
          <List list={props.list} />
        </div>
      </main>
    </div>
  );
};

export default connect(mapStateToProps)(HomeModule);
