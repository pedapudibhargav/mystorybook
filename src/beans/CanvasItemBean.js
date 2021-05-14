class CanvasItemBean {

    constructor(svgIn,viewBox) {
        this.svgstr = svgIn;
        this.width = 100;
        this.xpoition = 0;
        this.yposition = 0;
        this.rotationAngle = 0;
        this.flipHorizontally = false;
        this.flipVertically = false;
        this.viewBox = viewBox;
    }

    get svg() {
        return (
            <svg class="canvas-item-dragable" viewBox={this.viewBox} width="300" height="300" style={{top: this.xpoition, left: this.yposition}}>
                {this.svgstr}
            </svg>)
        ;
    }

}

export default CanvasItemBean;