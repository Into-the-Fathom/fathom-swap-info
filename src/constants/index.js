export const FACTORY_ADDRESS = '0x9fAb572F75008A42c6aF80b36Ab20C76a38ABc4B'

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
  'https://raw.githubusercontent.com/Into-the-Fathom/fathom-swap-default-token-list/master/src/tokenlists/xdc.json',
]

// hide from overview list
export const TOKEN_BLACKLIST = [
  // rebass tokens
  '0x0000000000000000000000000000000000000000',
]

// pair blacklist
export const PAIR_BLACKLIST = [
  '0x7ce2cacc5ad4fe57453bdf0073e1a1c3e587c7c1', // WXDC-TEST
  '0x17da34c87c20846bd66baad60cccfb438989b744', // TEST-WXDC
]

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

export const FXD_US_PLUS_PAIR_ID = '0x4821cdc4b01bfee77c6ab8abc9348c4351600e26'
export const FTHM_FXD_PAIR_ID = '0x4821cdc4b01bfee77c6ab8abc9348c4351600e26' // TODO: update after FTHM-FXD pair is created
export const US_PLUS_WXDC_PAIR_ID = '0xfcabba53dac7b6b19714c7d741a46f6dad260107'
export const FXD_WXDC_PAIR_ID = '0x183477253b3773d0ca1d798c83e7e7572c68375b'
