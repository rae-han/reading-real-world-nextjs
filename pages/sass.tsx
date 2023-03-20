import React from 'react';
import {NextPage} from "next";
import styles from '../styles/Sass.module.scss'

const Sass: NextPage = () => {
  return (
    <div className={styles.sass}>
      <h1>Sass Test Page</h1>
      <button>button</button>
    </div>
  )
}

export default Sass;