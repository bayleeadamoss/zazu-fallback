module.exports = {
  name: 'Calculator',
  version: '0.0.1',
  description: 'Calculate stuff.',
  icon: 'icon.png',
  blocks: {
    input: [
      {
        id: 'Prefix',
        type: 'RootScript',
        script: 'prefix.js',
        connections: ['Open'],
      },
    ],
    output: [
      {
        id: 'Open',
        type: 'OpenInBrowser',
        url: '{value}',
      },
    ],
  },
}
