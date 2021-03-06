import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class ToolTip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placement: props.placement,
            label: props.label
        }
        T && T.on('tooltip', data => {
            if (data && data.hide == true) {
                data.target = data.style = null
                delete data.hide;
            }
            this.setState(data)
        })
    }
    render() {
        let {state} = this,
            {target, label} = state;
        if (!label || !target) {
            return null;
        }
        let placement = state.placement || 'left',
            className = classNames('tooltip', 'fade', placement, 'in'),
            rect = target.getBoundingClientRect(),
            styl = {};

        switch (placement) {
            case "top":
                styl.left = rect.left
                styl.top = rect.top
                break
            case "bottom":
                styl.left = rect.left
                styl.top = rect.top + rect.height
                break
            case "right":
                styl.left = rect.left + width
                styl.top = rect.top
                break
            case "left":
                styl.right = document.body.clientWidth - rect.left
                styl.top = rect.top
                break;
        }
        Object.assign(styl, state.style)
        return (
            <div className={className} style={styl} role="tooltip">
                <div className="tooltip-arrow"></div>
                <div className="tooltip-inner">{label}</div>
            </div>
        );
    }
}