export function getLabelKeyword(keyword: string) {
  switch (keyword) {
    case 'anchor-basic':
      return 'Anchor Basic'
    case 'anchor-counter':
      return 'Anchor Counter'
    case 'expo':
      return 'Expo'
    case 'express':
      return 'Express'
    case 'gill':
      return 'Gill'
    case 'nextjs':
      return 'Next.js'
    case 'node':
      return 'Node'
    case 'react':
      return 'React'
    case 'react-native':
      return 'React Native'
    case 'react-native-paper':
      return 'React Native Paper'
    case 'solana-kit':
      return '@solana/kit'
    case 'solana-web3js':
      return '@solana/web3.js'
    case 'tailwind':
      return 'Tailwind'
    case 'typescript':
      return 'TypeScript'
    case 'vite':
      return 'Vite'
    case 'wallet-adapter':
      return 'Wallet Adapter'
    case 'wallet-ui':
      return 'Wallet UI'
    default:
      return keyword
  }
}

const filters = [
  {
    id: 'frameworks',
    name: 'Frameworks',
    keywords: [
      { id: 'nextjs', name: 'Next.js' },
      { id: 'expo', name: 'Expo' },
      { id: 'vite', name: 'Vite' },
      { id: 'react', name: 'React' },
      { id: 'react-native', name: 'React Native' },
      { id: 'express', name: 'Express' },
      { id: 'node', name: 'Node' },
    ],
  },
  {
    id: 'Styling',
    name: 'Styling',
    keywords: [
      { id: 'tailwind', name: 'Tailwind' },
      { id: 'react-native-paper', name: 'React Native Paper' },
    ],
  },
  {
    id: 'solana-sdks',
    name: 'Solana SDKs',
    keywords: [
      { id: 'solana-kit', name: '@solana/kit' },
      { id: 'solana-web3js', name: '@solana/web3.js' },
      { id: 'gill', name: 'Gill' },
    ],
  },
  {
    id: 'solana-programs',
    name: 'Solana Programs',
    keywords: [
      { id: 'anchor-basic', name: 'Anchor Basic' },
      { id: 'anchor-counter', name: 'Anchor Counter' },
    ],
  },
  {
    id: 'wallet-adapters',
    name: 'Wallet Adapters',
    keywords: [
      { id: 'wallet-ui', name: 'Wallet UI' },
      { id: 'mobile-wallet-adapter', name: 'Mobile Wallet Adapter' },
      { id: 'wallet-adapter', name: 'Wallet Adapter' },
    ],
  },
]
