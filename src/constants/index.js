export const FACTORY_ADDRESS = '0xa7bf3E5eDbC8d37584218778cd6A1EDe91Bf201D'

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
  'https://raw.githubusercontent.com/Into-the-Fathom/fathom-swap-default-token-list/demo/src/tokenlists/apothem.json',
]

// hide from overview list
export const TOKEN_BLACKLIST = [
  // rebass tokens
  '0x0000000000000000000000000000000000000000',
]

// pair blacklist
export const PAIR_BLACKLIST = ['0x0000000000000000000000000000000000000000']

// warnings to display if page contains info about blocked token
export const BLOCKED_WARNINGS = {
  '0xf4eda77f0b455a12f3eb44f8653835f377e36b76':
    'TikTok Inc. has asserted this token is violating its trademarks and therefore is not available.',
}

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0x0000000000000000000000000000000000000000']

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid stablecoin or XDC pairings.'

// pairs that should be tracked but arent due to lag in subgraph
export const TRACKED_OVERRIDES_PAIRS = ['0x0000000000000000000000000000000000000000']

// tokens that should be tracked but arent due to lag in subgraph
// all pairs that include token will be tracked
export const TRACKED_OVERRIDES_TOKENS = ['0x0000000000000000000000000000000000000000']

export const FXD_US_PLUS_PAIR_ID = '0x63da6b37ac3893390c0dc4d227d7d42e98e4205b'
export const FTHM_US_PLUS_PAIR_ID = '0xa73a803562c80727a76514fb0a51427cc9917cd7'
