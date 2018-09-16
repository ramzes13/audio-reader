import Peaks from 'peaks.js';

Peaks.prototype.getLastSegment = function () {
  let lastSegment = null;
  this.segments._segments.forEach(segment => {
    if (!lastSegment || lastSegment.endTime < segment.endTime) {
      lastSegment = segment;
    }
  });

  return lastSegment;
};

Peaks.prototype.mergeSegments = function (segments) {
  const newSegments = [];
  const that = this;
  segments.forEach((segment) => {
    if (!that.segments.getSegment(segment.id)) {
      newSegments.push(segment);
    }
  });

  console.log({ newSegments });
  if (newSegments.length) {
    that.segments.add(newSegments);
  }

};

export default Peaks;