import React, { useState } from "react";
import styles from "../styles/StudentPage.module.css";

const Student = () => {
  let [counter, setCounter] = useState(0);
  let [name, setName] = useState('');
  let [fatherName, setfatherName] = useState('');
  let [gmail, setgmail] = useState('');

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h1 className={styles.title}>Student Page</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam
              aut rem, laudantium quia veritatis minima esse iure eos at officia
              odit corporis ab sint repellendus sit eius quibusdam officiis
              possimus!
            </p>
            <div
              className="btn btn-success"
              onClick={() => {
                setCounter(counter + 1);
              }}
            >
              Add +1
            </div>
            <h2>
                <form action="">
            <input onChange={(e) => {setName(e.target.value)}} type="text" placeholder="name"/>
            <input onChange={(e) => {setfatherName(e.target.value)}} type="gmail" placeholder="Email"/>
            <input onChange={(e) => {setgmail(e.target.value)}} type="gmail" placeholder="Email"/>
            </form>
            </h2>
            <h2>
                {name.length ? name[0] + '.' : ''}
            </h2>
            <h2>
                {fatherName}
            </h2>
            <h2>
                {gmail}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Student;