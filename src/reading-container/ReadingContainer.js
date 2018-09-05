import React, { Component } from 'react';

import ePub from 'epubjs';
import './ReadingContainer.css';

class ReadingContainer extends Component {
  constructor(props) {
    super(props);
    this.book;
    this.rendition;

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.listAnnotations = this.listAnnotations.bind(this);
  }

  nextPage() {
    this.book.package.metadata.direction === "rtl" ? this.rendition.prev() : this.rendition.next();
    console.log('nextPage')
  }

  prevPage() {
    console.log('prevPage')
  }

  componentDidMount() {
    this.book = ePub("/lof.epub");
    this.rendition = this.book.renderTo("epub-reading-container",
      {
        width: "100%",
        height: 600,
        spread: "always",
        ignoreClass: 'annotator-hl',
        manager: "continuous"
      });

    var displayed = this.rendition.display(11);

    this.rendition.on("layout", function (layout) {
      console.log({ layout })
    });

    this.rendition.on("relocated", function (location) {
      console.log({ location });
    });

    this.rendition.on("selected", (cfiRange, contents) => {
      this.book.getRange(cfiRange).then((range) => {
        console.log({ range })
      });
      console.log(this.rendition.annotations)
      this.rendition.annotations.add(this.props.annotationType, cfiRange, {}, (e) => {
        console.log("this.rendition.annotations", this.rendition.annotations);
        console.log({ cfiRange });
      });

      // this.rendition.annotations.mark(cfiRange, {}, (e) => {
      //   console.log("this.rendition.annotations", this.rendition.annotations);
      //   console.log({ cfiRange });
      // });
      // contents.window.getSelection().removeAllRanges();

    });

    // this.rendition.themes.default({
    //   '::selection': {
    //     'background': 'rgba(255,255,0, 0.3)'
    //   },
    //   '.epubjs-hl': {
    //     'fill': 'yellow', 'fill-opacity': '0.3', 'mix-blend-mode': 'multiply'
    //   }
    // });

  }

  listAnnotations() {
    console.log('listAnnotations');
    this.rendition.annotations.each();
    // this.rendition.annotations.each((data) => {
    //   console.log({ data });
    // })
  }

  render() {

    return (
      <div>
        <div id="epub-reading-container" className="spreads"></div>
        <a onClick={this.prevPage} id="reading-container-prev" href="#prev" className="arrow">‹</a>
        <a onClick={this.nextPage} id="reading-container-next" href="#next" className="arrow">›</a>
        <button onClick={this.listAnnotations} className="btn ">List annotations</button>
      </div>

    )
  }
}

ReadingContainer.defaultProps = {
  annotationType: 'highlight', //Type of annotation to add: "highlight", "underline", "mark"
}
export default ReadingContainer;