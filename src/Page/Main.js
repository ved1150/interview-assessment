import React, { Fragment, useEffect, useState } from "react";
import profileImg from "../assets/profile.png";
export default function Main() {
  const [items, setItems] = useState([]);
  console.log(items);
  useEffect(() => {
    fetch(
      `https://interview-task-c6468-default-rtdb.firebaseio.com/profile.json`
    ).then((res) => {
      if (res.ok) {
        res.json().then((data) => {
          let arr = [];
          {
            for (let keys in data) {
              let obj = {
                ...data[keys],
                id: keys,
              };
              arr.push(obj);
            }
            setItems([...arr]);
          }
        });
      } else {
        res.json().then((data) => console.log(data));
      }
    });
  }, []);

  return (
    <Fragment>
      {items.map((data) => (
        <div className="container" key={data.name}>
          <div className="left-side">
            <div className="profileText">
              <div className="imgBx">
                <img src={profileImg} alt="David pic" />
              </div>
              <h2>
                {data.name} <br />
                <span> {data.profession}</span>
              </h2>
            </div>

            <div className="about-me">
              <h1>ABOUT ME</h1>
              <p>{data.about}</p>
            </div>
            <div className="skill">
              <h1 className="design">{data.skill[0]}</h1>
              <div className="bar-container">
                <div className="design-bar"></div>
              </div>
              <h1 className="modeling">{data.skill[1]}</h1>
              <div className="bar-container">
                <div className="modeling-bar"></div>
              </div>
              <h1 className="photography">{data.skill[2]}</h1>
              <div className="bar-container">
                <div className="photography-bar"></div>
              </div>
            </div>
            <div className="contacts">
              <h1>CONTACTS</h1>
              <p>{data.contact.email}</p>
              <p>{data.contact.number}</p>
            </div>
          </div>
          <div className="right-side">
            <div className="education">
              <h3>EDUCATION</h3>
              <ul>
                <li>
                  <div className="degree">
                    <h5 className="bachelor">{data.education.bachelor.name}</h5>
                    <h5>{data.education.bachelor.year}</h5>
                  </div>
                  <h6 className="degree-discription">
                    {data.education.bachelor.discription}
                  </h6>
                </li>
                <li>
                  <div className="degree">
                    <h5 className="master">{data.education.master.name}</h5>
                    <h5>{data.education.master.year}</h5>
                  </div>
                  <h6 className="degree-discription">
                    {data.education.master.discription}
                  </h6>
                </li>
              </ul>
            </div>
            <div className="languages">
              <h1>LANGUAGES</h1>
              <p>Lorem ipsum dolor sit amet consectetur adipiscing</p>
              <div className="circle ">
                <div className="percent">
                  <svg>
                    <circle cx="40" cy="40" r="40" className="c-one"></circle>
                    <circle cx="40" cy="40" r="40" className="c-two"></circle>
                  </svg>
                  <div className="number">
                    <h2>{data.languages[0]}</h2>
                  </div>
                </div>
                <div className="percent">
                  <svg>
                    <circle cx="40" cy="40" r="40" className="c-one"></circle>
                    <circle cx="40" cy="40" r="40" className="c-two-b"></circle>
                  </svg>
                  <div className="number">
                    <h2>{data.languages[1]}</h2>
                  </div>
                </div>
                <div className="percent">
                  <svg>
                    <circle cx="40" cy="40" r="40" className="c-one"></circle>
                    <circle cx="40" cy="40" r="40" className="c-two-c"></circle>
                  </svg>
                  <div className="number">
                    <h2>{data.languages[2]}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="education">
              <h3>EXPERIENCE</h3>
              <ul>
                {data.experience.map((item) => (
                  <li>
                    <div className="degree">
                      <h5 className="bachelor">{item.jobTitle}</h5>
                      <h5 className="experience-year">{item.year}</h5>
                    </div>
                    {item.role.map((role) => (
                      <h6 className="degree-discription">
                        {role}
                        <br />
                      </h6>
                    ))}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      ))}
    </Fragment>
  );
}
