import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'

export default class ButtonGroup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            dataProvider: props.dataProvider
        }
    }

    createLabel(data) {
        if (typeof (data) === "object") {
            return data.label;
        } else {
            return data;
        }
    }

    createI(data) {
        if (data.i) {
            return <i className={data.i} />
        }
    }

    render() {
        let {props,state} = this,
            {dataProvider} = state;
        
        return (
            <div className="btn-group" style={{ marginRight: 10 }} >
                <a className="btn btn-primary" role="button">
                    <i className="fa fa-mouse-pointer" ></i>
                </a>
                <a className="btn btn-default" role="button">
                    <i className="fa fa-hand-paper-o" ></i>
                </a>
                <a className="btn btn-default" role="button">
                    <i className="fa fa-pencil" ></i>
                </a>
                <a className="btn btn-default" role="button">
                    <i className="fa fa-paint-brush" ></i>
                </a>
                <a className="btn btn-default" role="button">
                    <i className="fa fa-square-o" ></i>
                </a>
                <a className="btn btn-default" role="button">
                    <i className="fa fa-circle-o" ></i>
                </a>
                <a className="btn btn-default" role="button">
                    <i className="fa fa-connectdevelop" ></i>
                </a>
            </div>
        )
    }
}