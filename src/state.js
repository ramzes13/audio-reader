export default {
  configs: {
    region: {
      readMeta: {
        cfiRange: 'epubcfi(/6/24[chap-1]!/4/2/16,/1:0,/3:102)',
        label: 'The eldest of ... age at thirty-three.'
      }
    }
  },
  reading: {
    active: true
  },
  global: {
    activeNewRegion: true,
    regions: [
      {
        readMeta: {
          cfiRange: 'epubcfi(/6/24[chap-1]!/4/2,/8/1:0,/10/1:0)',
          label: 'When Mr. Bilbo ... excitement in Hobbiton.'
        }
      },
      {
        readMeta: {
          cfiRange: 'epubcfi(/6/24[chap-1]!/4/2/10,/1:0,/5:246)',
          label: 'Bilbo was very ... (reputedly) inexhaustible wealth.'
        }
      },
      {
        readMeta: {
          cfiRange: 'epubcfi(/6/24[chap-1]!/4/2/12,/1:0,/1:90)',
          label: '‘It will have ... come of it!’'
        }
      },
      {
        readMeta: {
          cfiRange: 'epubcfi(/6/24[chap-1]!/4/2/14,/1:0,/1:443)',
          label: 'But so far ... to grow up.'
        }
      },
      {
        readMeta: {
          cfiRange: 'epubcfi(/6/24[chap-1]!/4/2/16,/1:0,/3:102)',
          label: 'The eldest of ... age at thirty-three.'
        }
      }
    ]
  }
}