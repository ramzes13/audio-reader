export default {
  configs: {
    region: {
      readMeta: {
        cfiRange: 'epubcfi(/6/24[chap-1]!/4/2,/10/1:0,/12/1:0)',
        label: 'Bilbo was very ... (reputedly) inexhaustible wealth.'
      }
    }
  },
  reading: {
    active: true,
    selectedRegion: null,
    annotationType: 'highlight'
  },
  global: {
    activeNewRegion: true
  },
  regions: {
    active: true,
    selectedRegionId: '1',
    regions: [
      {
        id: '1',
        readMeta: {
          cfiRange: 'epubcfi(/6/24[chap-1]!/4/2,/8/1:0,/10/1:0)',
          label: 'When Mr. Bilbo ... excitement in Hobbiton.'
        }
      },
      {
        id: '2',
        readMeta: {
          cfiRange: 'epubcfi(/6/24[chap-1]!/4/2,/10/1:0,/12/1:0)',
          label: 'Bilbo was very ... (reputedly) inexhaustible wealth.'
        }
      }
    ]
  }
}