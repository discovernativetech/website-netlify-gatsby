import React from 'react';
import { Link } from "gatsby";
import styles from './Button.module.css';

const Button = ({text, link, outlineColor = '#49CCDD', textColor}) => {
    const customStyle = {
        color: textColor,
        border: `2px solid ${outlineColor}`
    }
    return (
        <ButtonWrapper link={link}>
            <button
                className={styles.button}
                style={customStyle}
            >
                {text}
            </button>
        </ButtonWrapper>
    )
}

const ButtonWrapper = ({ link, children }) => {
    if (link && link.charAt(0) === '/') {
        return (
            <Link to={link}>
                {children}
            </Link>
        )
    }
    return (
        <a href={link} target={'_blank'}>
            {children}
        </a>
    )
}

export default Button
