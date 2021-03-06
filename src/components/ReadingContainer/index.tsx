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
  nextPage() {
    this.book.package.metadata.direction === "rtl" ? this.rendition.prev() : this.rendition.next();
    // console.log('nextPage')
  }

  prevPage() {
    this.book.package.metadata.direction === "rtl" ? this.rendition.next() : this.rendition.prev();
    // console.log('prevPage')
  }

  prepareMeta(cfiRange: any) {
    this.book.getRange(cfiRange).then((range: any) => {
      if (range) {
        const fullText = range.toString().trim();
        let label = fullText;
        const selectedTxt = label.split(' ');
        if (selectedTxt.length > 6) {
          label = `${selectedTxt.slice(0, 3).join(' ')} ... ${selectedTxt.slice(-3).join(' ')}`;
        }

        this.props.onSelect({ cfiRange, label, fullText });
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
      // console.log('layout', { layout });
    });

    this.rendition.on("relocated", function (location: any) {
      // console.log('relocated', { location });
    });

    this.rendition.themes.default({
      '::selection': {
        'background': 'rgb(196, 196, 196)'
      },
      '.epubjs-hl': {
        'fill': 'yellow', 'fill-opacity': '0.3', 'mix-blend-mode': 'multiply'
      }
    });
    this.rendition.on("selected", (cfiRange: any, contents: any) => {

      this.prepareMeta(cfiRange);
    });

  }

  clearAnnotations() {
    const _this = this;
    if (!_this.rendition) {
      return;
    }

    Object.keys(_this.rendition.annotations._annotations).forEach(key => {
      const annotation = _this.rendition.annotations._annotations[key];
      _this.rendition.annotations.remove(annotation.cfiRange, _this.props.annotationType);
    })
  }
  handleSelectedRegion() {
    this.clearAnnotations();
    if (this.props.selectedRegion) {
      console.log(this.props.selectedRegion)
      const { cfiRange } = this.props.selectedRegion;

      this.rendition.display(cfiRange); //scroll to selection
      this.rendition.annotations.add(this.props.annotationType, cfiRange, {}, (e: any) => {
        console.log("this.rendition.annotations", this.rendition.annotations);
        console.log({ cfiRange });
      });
    }
  }

  render() {
    this.handleSelectedRegion();

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
