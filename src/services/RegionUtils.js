export { isActiveRegion };

function isActiveRegion(region, time) {
  const { endTime, startTime } = region.audioMeta;

  return endTime >= time && startTime <= time;
}