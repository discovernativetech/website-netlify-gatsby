import React from 'react';

import styles from './Timeline.module.css';

// use TimelineContent to form the contents
const Timeline = ({ children, className = {} }) => {
    return (
        <div className={`${styles.timeline} ${className}`}>
            {children}
        </div>
    )
}

export default Timeline;
