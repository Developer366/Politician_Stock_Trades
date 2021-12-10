import React from 'react'

import classes from './Banner.module.css';

export default function Banner() {
    return (
        <div>
            <img className={classes.banner} src="https://cdn.theatlantic.com/media/mt/science/03843_Beautiful%20Whale_Sperm_21%20-%20Sperm%20Whale%20Composite%20Two.jpg"/>
        </div>
    )
}

