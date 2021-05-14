/*
container to hold entire page editor container
*/

import React from 'react';

class SvgComp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {currentItem: ''};
    }


    dragItem = document.querySelector(".canvas-item-dragable");
    container = document.querySelector("#main-svg");

    active = false;
    currentX;
    currentY;
    initialX;
    initialY;
    xOffset = 0;
    yOffset = 0;

    componentDidMount() {
        this.setState({
            currentItem: this.props.canvasitem
          });
      }

    dragStart = (e) => {
        console.log("dragging -- START");
        if (e.type === "touchstart") {
            this.initialX = e.touches[0].clientX - this.xOffset;
            this.initialY = e.touches[0].clientY - this.yOffset;
        } else {
            this.initialX = e.clientX - this.xOffset;
            this.initialY = e.clientY - this.yOffset;
        }
        this.active = true;
    }


    dragEnd = (e) => {
        console.log("dragging -- END");
        this.initialX = this.currentX;
        this.initialY = this.currentY;

        this.active = false;
    }

    drag = (e) => {
        if (this.active) {
            if (e.type === "touchmove") {
                this.currentX = e.touches[0].clientX - this.initialX;
                this.currentY = e.touches[0].clientY - this.initialY;
            } else {
                this.currentX = e.clientX - this.initialX;
                this.currentY = e.clientY - this.initialY;
            }

            this.xOffset = this.currentX;
            this.yOffset = this.currentY;

            let tmpCurreItem = this.state.currentItem;
            tmpCurreItem.xOffset = this.currentX;
            tmpCurreItem.yOffset = this.currentY;
            this.setState({
                currentItem: tmpCurreItem
              });
            // this.setTranslate(this.currentX, this.currentY, this.dragItem);
        }
    }

    clickTest = (e) => {
        alert(1);
    }
    // setTranslate = (xPos, yPos, el) => {
    //     el.style.transform = "translate3d(" + xPos + "px, " + yPos + "px, 0)";
    // }

    render() {
        return (
            <foreignObject width='500' height="500">
                Offset x and y = {this.xOffset} - {this.yOffset} <br/>
                Initial x and y = {this.initialX} - {this.initialY}<br/>
                touches = {this.currentX + this.initialX} - {this.currentY + this.initialY}<br/>
                current = {this.currentX} - {this.currentY}<br/>
            <svg
                onMouseDown={this.dragStart}
                onMouseUp={this.dragEnd}
                onMouseMove={(e) => this.drag(e)}
                onClick={(e) => this.clickTest(e)}
                class="canvas-item-dragable" viewBox={this.state.currentItem.viewBox} width="300" height="300" 
                style={{ left: this.xOffset + 'px', top: this.yOffset + 'px'}}
                // top={this.xOffset + 'px'}
                // left={this.yOffset + 'px'}
                >
                {this.state.currentItem.svgstr}
            </svg>
            </foreignObject>
        );
    }
}

export default SvgComp;