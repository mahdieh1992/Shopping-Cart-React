import React from 'react'

export default function Social (props){
 
        let { img, href } = props
        console.log(props, 'props');
        return (
            <li>
                <a href={href} target="_blank">
                    <img src={img} />
                </a>
            </li>
        )

}
