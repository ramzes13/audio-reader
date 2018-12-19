import React, { Component } from 'react';
import PropTypes from 'prop-types'
import ePub from 'epubjs';

import './ReadingContainer.css';

class ReadingContainer extends Component {
  book: any;
  rendition: any;

  // static propTypes = {
  //   selectedRegion: PropTypes.object.isRequired,
  //   annotationType: PropTypes.string.isRequired
  // }

  constructor(props: any) {
    super(props);
    this.state = {
      selectedRegion: null,
    };

    this.nextPage = this.nextPage.bind(this);
    this.prevPage = this.prevPage.bind(this);
    this.prepareMeta = this.prepareMeta.bind(this);
  }

  nextPage() {
    this.book.package.metadata.direction === "rtl" ? this.rendition.prev() : this.rendition.next();
    console.log('nextPage')
  }

  prevPage() {
    this.book.package.metadata.direction === "rtl" ? this.rendition.next() : this.rendition.prev();
    console.log('prevPage')
  }

  prepareMeta(cfiRange: any) {
    this.book.getRange(cfiRange).then((range: any) => {
      if (range) {
        let label = range.toString().trim();
        const selectedTxt = label.split(' ');
        if (selectedTxt.length > 6) {
          label = `${selectedTxt.slice(0, 3).join(' ')} ... ${selectedTxt.slice(-3).join(' ')}`;
        }

        // this.props.onChangeMeta({ cfiRange, label });
      }
    });
  }

  componentDidMount() {
    this.book = ePub("/lof.epub");
    this.rendition = this.book.renderTo("epub-reading-container",
      {
        manager: "continuous",
        flow: "scrolled-doc",
        width: "100%",
        height: "100%"
      });

    var displayed = this.rendition.display(11);

    this.rendition.on("layout", function (layout: any) {
      // console.log({ layout })
    });

    this.rendition.on("relocated", function (location: any) {
      // console.log({ location });
    });

    this.rendition.on("selected", (cfiRange: any, contents: any) => {

      this.prepareMeta(cfiRange);
      // this.book.getRange(cfiRange).then((range) => {
      //   if (range) {
      //     this.props.onChangeMeta({ cfiRange, range });
      //   }
      // });
      // console.log(this.rendition.annotations)
      // this.rendition.annotations.add(this.props.annotationType, cfiRange, {}, (e) => {
      //   console.log("this.rendition.annotations", this.rendition.annotations);
      //   console.log({ cfiRange });
      // });

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

  // shouldComponentUpdate(nextProps: any, nextState: any) {
  // if (!this.props.selectedRegion) {
  //   if (this.state.selectedRegion) {
  //     this.rendition.annotations.remove(this.state.selectedRegion.bookMeta.cfiRange);
  //     this.setState(() => {
  //       return { selectedRegion: null }
  //     });
  //   }
  // } else {
  //   if (this.state.selectedRegion) {
  //     if (this.props.selectedRegion.id !== this.state.selectedRegion.id) {
  //       this.rendition.annotations.add(this.props.annotationType, this.props.selectedRegion.bookMeta.cfiRange, {}, (e) => { });
  //       this.rendition.annotations.remove(this.state.selectedRegion.bookMeta.cfiRange, (e) => { });
  //       this.setState(() => {
  //         return { selectedRegion: this.props.selectedRegion }
  //       });
  //     }
  //   } else {
  //     this.rendition.annotations.add(this.props.annotationType, this.props.selectedRegion.bookMeta.cfiRange, {}, (e) => { });
  //     this.setState(() => {
  //       return { selectedRegion: this.props.selectedRegion }
  //     });
  //   }
  // }

  // return false;
  // }

  render() {
    return (
      <div className="row clearfix">
        <div id="epub-reading-container" className="spreads"></div>
        <a onClick={this.prevPage} id="reading-container-prev" href="#prev" className="arrow">‹</a>
        <a onClick={this.nextPage} id="reading-container-next" href="#next" className="arrow">›</a>
      </div>

    )
  }
}


export default ReadingContainer;