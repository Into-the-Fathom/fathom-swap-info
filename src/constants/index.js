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
  'https://raw.githubusercontent.com/Into-the-Fathom/fathom-swap-default-token-list/qa/src/tokenlists/apothem.json',
]

// hide from overview list
export const TOKEN_BLACKLIST = ['0x0000000000000000000000000000000000000000']

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
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']

export const UNTRACKED_COPY = 'Derived USD values may be inaccurate without liquid stablecoin or XDC pairings.'

// pairs that should be tracked but arent due to lag in subgraph
export const TRACKED_OVERRIDES_PAIRS = ['0x0000000000000000000000000000000000000000']

// tokens that should be tracked but arent due to lag in subgraph
// all pairs that include token will be tracked
export const TRACKED_OVERRIDES_TOKENS = ['0x0000000000000000000000000000000000000000']

export const FXD_US_PLUS_PAIR_ID = '0x64268d5F92Ab3304af4F467f2ad273353192849a'
export const FTHM_US_PLUS_PAIR_ID = '0xe0e48752540e6c276126f13cb883b061d954b799'
