import React from 'react';
import { connect } from 'react-redux'

import ePub from 'epubjs';

import { toggleActive, onSelect } from '../../actions/readingActions';
import { ReducersReadingStore } from '../../reducers/index.t';
import { RegionReadMeta } from '../../index.t';

import UiGenericContainer from '../../ui/GenericComponent';
import './styles.css';

interface DispatchProps {
  toggleActive: () => void;
  onSelect: (data: RegionReadMeta) => void;
}

type Props = ReducersReadingStore & DispatchProps;

class ReadingContainer extends React.Component<Props, any> {
  book: any;
  rendition: any;

  // static propTypes = {
  //   selectedRegion: PropTypes.object.isRequired,
  //   annotationType: PropTypes.string.isRequired
  // }

  // constructor(props: any) {
  //   super(props);
  //   this.state = {
  //     selectedRegion: null,
  //   };

  //   this.nextPage = this.nextPage.bind(this);
  //   this.prevPage = this.prevPage.bind(this);
  //   this.prepareMeta = this.prepareMeta.bind(this);
  // }

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

        this.props.onSelect({ cfiRange, label });
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
      console.log('layout', { layout });
    });

    this.rendition.on("relocated", function (location: any) {
      console.log('relocated', { location });
    });

    this.rendition.themes.default({
      '::selection': {
        'background': 'rgba(255,255,0, 0.3)'
      },
      '.epubjs-hl': {
        'fill': 'yellow', 'fill-opacity': '0.3', 'mix-blend-mode': 'multiply'
      }
    });
    this.rendition.on("selected", (cfiRange: any, contents: any) => {

      this.prepareMeta(cfiRange);
      // this.book.getRange(cfiRange).then((range) => {
      //   if (range) {
      //     this.props.onChangeMeta({ cfiRange, range });
      //   }
      // });
      // console.log(this.rendition.annotations)

      // this.rendition.annotations.add(this.props.annotationType, cfiRange, {}, (e: any) => {
      //   console.log("this.rendition.annotations", this.rendition.annotations);
      //   console.log({ cfiRange });
      // });

      // this.rendition.annotations.mark(cfiRange, {}, (e: any) => {
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

  clearAnnotations() {
    const _this = this;

    Object.keys(_this.rendition.annotations._annotations).forEach(key => {
      const annotation = _this.rendition.annotations._annotations[key];
      _this.rendition.annotations.remove(annotation.cfiRange, _this.props.annotationType);
    })
  }
  handleSelectedRegion() {
    if (this.props.selectedRegion) {
      console.log(this.props.selectedRegion)
      const { cfiRange } = this.props.selectedRegion;

      this.clearAnnotations();
      this.rendition.annotations.add(this.props.annotationType, cfiRange, {}, (e: any) => {
        console.log("this.rendition.annotations", this.rendition.annotations);
        console.log({ cfiRange });
      });
    }
  }

  render() {
    this.handleSelectedRegion();

    console.log(this.props.selectedRegion);
    return (
      <UiGenericContainer active={this.props.active} toggleActive={this.props.toggleActive}>
        <div id="epub-reading-container" className=""></div>
        <a onClick={this.prevPage} id="reading-container-prev" href="#prev" className="arrow">‹</a>
        <a onClick={this.nextPage} id="reading-container-next" href="#next" className="arrow">›</a>
      </UiGenericContainer>
    )
  }
}


const mapStateToProps = (state: any): ReducersReadingStore => ({ ...state.reading })

const mapDispatchToProps = {
  toggleActive,
  onSelect,
};

export default connect<ReducersReadingStore, DispatchProps>(
  mapStateToProps,
  mapDispatchToProps
)(ReadingContainer)
