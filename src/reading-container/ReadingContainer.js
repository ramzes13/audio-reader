import React, { Component } from 'react';

import ePub from 'epubjs';

class ReadingContainer extends Component {
  componentDidMount() {
    var book = ePub("/lof.epub");
    var rendition = book.renderTo("epub-reading-container",
      {
        width: "100%",
        height: 600,
        spread: "always"
      });

    var displayed = rendition.display();
  }

  render() {

    return (
      <div>
        <div id="epub-reading-container">reading container</div>
        <a id="prev" href="#prev" class="arrow">‹</a>
        <a id="next" href="#next" class="arrow">›</a>
      </div>

    )
  }
}

export default ReadingContainer;