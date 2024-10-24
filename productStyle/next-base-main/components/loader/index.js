import React, { useState, useEffect } from 'react'
import styles from './loader.module.css'

export default function Loader(props) {
  return (
    <>
      <div class={styles['lds-default']}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </>
  )
}
