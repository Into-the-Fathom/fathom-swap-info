export const FACTORY_ADDRESS = '0x6FfcE1bb8fB4841B42C8ee5e91398068723ba80D'

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
  '0x0000000000000000000000000000000000000000':
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

export const FXD_US_PLUS_PAIR_ID = '0x524748fad5efea7d2299005b9667b44059770eec'
export const FTHM_FXD_PAIR_ID = '0xa1a53afa6a3c861d56f170425dcf062178d73eb9'
export const US_PLUS_WXDC_PAIR_ID = '0xbbd97e188a81e9e85c4fb34c4d44bd108ac22748'
export const FXD_WXDC_PAIR_ID = '0xd6f55386238c3c320690b743a1c1a9c65357d20b'
