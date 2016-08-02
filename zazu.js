module.exports = {
  name: 'Calculator',
  version: '0.0.1',
  description: 'Calculate stuff.',
  icon: 'icon.png',
  blocks: {
    input: [
      {
        id: 'Mega',
        type: 'RootScript',
        script: 'mega.js',
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
