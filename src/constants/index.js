export const FACTORY_ADDRESS = '0xe350508951929D3e19222824F41790621fb18A15'

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
  'https://raw.githubusercontent.com/Into-the-Fathom/fathom-swap-default-token-list/dev/src/tokenlists/apothem.json',
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
  '0x322742814990bf0b075fc2b33186ca63122ffb08',
  '0xbde88af3e99f29acb9dba853416024a44bfc7f8b',
  '0x2db58e5850f4f9ba63ff4306cf1f6426c7a6b9b7',

  // rebass tokens
  '0x9ea3b5b4ec044b70375236a281986106457b20ef',
  '0x05934eba98486693aaec2d00b0e9ce918e37dc3f',
  '0x3d7e683fc9c86b4d653c9e47ca12517440fad14e',
  '0xfae9c647ad7d89e738aba720acf09af93dc535f7',
  '0x7296368fe9bcb25d3ecc19af13655b907818cc09',
  '0x9624167f18d3989304f793f40266ae0b005e663f',
]

// pair blacklist
export const PAIR_BLACKLIST = [
  '0x3be9992b136e8750736305f6bf281e08dcf48f42',
  '0x1ddccfcc3b55f7397ad839815b5ded451fd445c2',
  '0x7f14490bf1fd40972962017b3102e7018d878221',
  '0x55b0f13daffdea62d9889db558bd6fce8d30669e',
  '0x887a9f4e7ddfb8a37619a9ad382408e66a74f370',
  '0xbf9bd4ad831ef5d41d25f6826ac5bc8d5dcf76db',
  '0x2cc177599cbbae5300107e77a12320afc3d5d64f',
  '0x887ef5ee4c4432f52d45eef7885654b9b2590e62',
  '0x48d82ab1a0709914b9f1cf919df8cb6686af3042',
  '0xd6ac7b39a169fd767726f87a62a1c11aa6e8a512',
  '0x8017c21e5f6ff1de52fb492e9f20080e3fb5cc7d',
  '0x1980476bb14ded1123dc0b8d2d64e048480b1666',
  '0xf7666aa1b3a566fc60d5162064ebc241ad05a8ab',
  '0x49b5ae345ed49a3b4f3c8934c3eca99007b2c27b',
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
