import React from "react"
import styles from "./Container.module.scss"

export default function Container(props) {
    return (
        <div className={styles.container} style={props.style}>
            {props.children}
        </div>
    )
}
