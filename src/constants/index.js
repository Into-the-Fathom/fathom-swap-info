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
  'https://raw.githubusercontent.com/Into-the-Fathom/fathom-swap-default-token-list/dev/src/tokenlists/apothem.json',
]

// hide from overview list
export const TOKEN_BLACKLIST = [
  // rebass tokens
  '0x82b4334f5cd8385f55969bae0a863a0c6ea9f63f', // old US+
  '0xcbb5e38427f102fdb08d76bb592e85d454a31d05', // old FXD
  '0xfbf03b959b9836ac1cc13a8b30f228056dba7b9a', // old FTHM
]

// pair blacklist
export const PAIR_BLACKLIST = [
  '0x56ef3ac9b4ba32683def994d640f3753ad1f808d', // old XDC/US+
  '0x73a8af48ec87ffb75b8e0deec5b8bf42fae00bee', // old XDC/FXD
  '0x0ed1488913d90ffd16b4a10a2191fecf621909f0', // old USDTx/FXD
  '0x63da6b37ac3893390c0dc4d227d7d42e98e4205b', // old US+/FXD
  '0xa73a803562c80727a76514fb0a51427cc9917cd7', // old FTHM/FXD
  '0xe52c709606d0ad48f367a066b95c2c95a197e8a9', // old FTHM/FXD
  '0x91fda7c38b2dfda74868b40d1cf478d3649a2743', // old FTHM/WXDC
]

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

export const FXD_US_PLUS_PAIR_ID = '0x119dfbe4dd4ed107a42da4a76897c3f7df816de4'
export const FTHM_US_PLUS_PAIR_ID = '0x119dfbe4dd4ed107a42da4a76897c3f7df816de4' // TODO: update after FTHM/USDT pair is created
