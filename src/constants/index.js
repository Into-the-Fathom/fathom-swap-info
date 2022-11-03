export const FACTORY_ADDRESS = '0x69310bcBcC35b3d5C2b62C72E75dA68d58FDafC9'

export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  HALF_YEAR: '6 months',
  ALL_TIME: 'All time',
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://ipfs.io/ipfs/QmaHUk2XSp342MXHFuC67edUwHx8VapRXioXotLeHsarmd',
]

// hide from overview list
export const TOKEN_BLACKLIST = [
  '0x7f423a0b9d189081a09cede3ec27fab247f458a8',
  '0x9e50e77b499b3ded6ff9155dbdfd3ae0b4c93f62',
  '0x95bfc555ef6c66cf2ecb142afbef15da9cf016b1',
  '0x5789da6760aa46e9b8d63876b14ddbec55c0d40c',
  '0x6e7acf1d6a89130fe8894e818ff57858d9c1a405',
  '0x8789fe3afe51865494a727cb8bc73439492a04b2',
  '0xd9f047aed43c77fbcc618bcaa9f166d4f9307066',
  '0xc039850f937c623024da66d6df370022e6f16e30',
  '0xfc2cf100a301f1b8fdc0fa00272537e88900a9e2',
  '0x8789fe3afe51865494a727cb8bc73439492a04b2',
  '0xaf23e77566298ee5442cdf10a66f32efc00fb44b',

  // rebass tokens
  '0x9ea3b5b4ec044b70375236a281986106457b20ef',
  '0x05934eba98486693aaec2d00b0e9ce918e37dc3f',
  '0x3d7e683fc9c86b4d653c9e47ca12517440fad14e',
  '0xfae9c647ad7d89e738aba720acf09af93dc535f7',
  '0x7296368fe9bcb25d3ecc19af13655b907818cc09',
]

// pair blacklist
export const PAIR_BLACKLIST = [
  '0xf85484f334929a258baeb6121f073b1470c430bd',
  '0xd741f14eb076feab2124b81ce56655b5d6c93ad9',
  '0xea66333ede83daf4f90ed0863817fea7d60db796',
  '0xd1d426a420eaf98ae4a4f98906d7faf559631b20',
  '0xc1ed773864931ab2f19e41ad45b39756d3c3c4cb',
  '0xbdc865ae3dc930c1c8220291887aead6931addfd',
  '0xa7857bb47d46db4b7ad449e0b3fe4fa40d93d884',
  '0x9ab0343cba68440518e408aef71c58de8a60a895',
  '0x8e0ba61db9eeaf57fcf50475444eec93249d1533',
  '0x884955287bebdaf41d0264e39b40cfdb064a18d2',
  '0x71b0a7bd532f2615bf4733ac3ccd133861d8da4d',
  '0xaf23e77566298ee5442cdf10a66f32efc00fb44b',
  '0x67d0975398624bca4a0ec8e3e9d895bccf92fb4b',
  '0x537fe68212e7a8b2b73ac4cb784ac25838774bec',
  '0x05388431d51fea5b9eea9cf34fc64895610f5445',
]

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {
  '0xf4eda77f0b455a12f3eb44f8653835f377e36b76':
    'TikTok Inc. has asserted this token is violating its trademarks and therefore is not available.',
}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid stablecoin or ETH pairings.'

// pairs that should be tracked but arent due to lag in subgraph
export const TRACKED_OVERRIDES_PAIRS = [
  '0x9928e4046d7c6513326ccea028cd3e7a91c7590a',
  '0x87da823b6fc8eb8575a235a824690fda94674c88',
  '0xcd7989894bc033581532d2cd88da5db0a4b12859',
  '0xe1573b9d29e2183b1af0e743dc2754979a40d237',
  '0x45804880de22913dafe09f4980848ece6ecbaf78',
  '0x709f7b10f22eb62b05913b59b92ddd372d4e2152',
]

// tokens that should be tracked but arent due to lag in subgraph
// all pairs that include token will be tracked
export const TRACKED_OVERRIDES_TOKENS = ['0x956f47f50a910163d8bf957cf5846d573e7f87ca']
