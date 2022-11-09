import React, { useEffect } from 'react'
import 'feather-icons'

import TopTokenList from 'components/TokenList'
import { TYPE } from 'Theme'
import { useAllTokenData } from 'contexts/TokenData'
import { PageWrapper, FullWrapper } from 'components'
import { RowBetween } from 'components/Row'
import Search from 'components/Search'
import { useMedia } from 'react-use'

function AllTokensPage() {
  const allTokens = useAllTokenData()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const below600 = useMedia('(max-width: 800px)')

  // const [useTracked, setUseTracked] = useState(true)

  return (
    <PageWrapper>
      <FullWrapper>
        <RowBetween>
          <TYPE.largeHeader>Top Tokens</TYPE.largeHeader>
          {!below600 && <Search small={true} />}
        </RowBetween>
        <TopTokenList tokens={allTokens} itemMax={50} />
      </FullWrapper>
    </PageWrapper>
  )
}

export default AllTokensPage
