import React, { Component } from 'react'

export default class Social extends Component {
    render() {
        let { img, href } = this.props
        console.log(this.props, 'props');
        return (
            <li>
                <a href={href} target="_blank">
                    <img src={img} />
                </a>
            </li>
        )
    }
}
