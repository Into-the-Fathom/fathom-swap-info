import React from 'react'
import styled from 'styled-components'
import { RowBetween } from 'components/Row'
import { useMedia } from 'react-use'
import { useGlobalData, useEthPrice } from 'contexts/GlobalData'
import { formattedNum, localNumber } from 'utils'
import { Box } from 'rebass/styled-components'

import { getTokenLogoURL } from 'utils/getTokenLogo'

import transferSrc from 'assets/transfer.svg';

const Header = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
`

const GridStats = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  column-gap: 6px;
  align-items: start;
  justify-content: space-between;
`

const GridStatsItem = styled.div`
  background-color: #131f35;
  height: 36px;
  display: flex;
  align-items: center;
  border-radius: 6px;
  padding: 16px;
  gap: 20px;
`

const TextWrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const ImgWrapper = styled(Box)`
  background: #061023;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  padding: 4px;
`

const Title = styled.div`
  font-size: 10px;
  color: #6379a1;
  font-weight: 600;
  text-transform: uppercase;
`

const Value = styled.div`
  font-size: 16px;
  color: #fff;
  font-weight: 600;
`

export default function GlobalStats() {
  const below1295 = useMedia('(max-width: 1295px)')
  const below1180 = useMedia('(max-width: 1180px)')
  const below1024 = useMedia('(max-width: 1024px)')
  const below400 = useMedia('(max-width: 400px)')

  const { oneDayVolumeUSD, oneDayTxns, pairCount } = useGlobalData()
  const [ethPrice] = useEthPrice()
  const formattedEthPrice = ethPrice ? formattedNum(ethPrice, true) : '-'
  const oneDayFees = oneDayVolumeUSD ? formattedNum(oneDayVolumeUSD * 0.003, true) : ''

  return (
    <Header>
      <RowBetween style={{ marginTop: '1rem', marginBottom: '2rem' }}>
        <GridStats>
          {!below400 && (
            <GridStatsItem>
              <ImgWrapper>
                <img src={getTokenLogoURL('WXDC')} alt="xdc" width={24} />
              </ImgWrapper>
              <TextWrapper>
                <Title>XDC Price</Title>
                <Value>{formattedEthPrice}</Value>
              </TextWrapper>
            </GridStatsItem>
          )}

          {!below1180 && (
            <GridStatsItem>
              <ImgWrapper>
                <img src={transferSrc} alt="transfer" width={24} />
              </ImgWrapper>
              <TextWrapper>
                <Title>Transactions (24H)</Title>
                <Value>{localNumber(oneDayTxns)}</Value>
              </TextWrapper>
            </GridStatsItem>
          )}
          {!below1024 && (
            <GridStatsItem>
              <ImgWrapper>
                <img src={transferSrc} alt="transfer" width={24} />
              </ImgWrapper>
              <TextWrapper>
                <Title>Pairs</Title>
                <Value>{localNumber(pairCount)}</Value>
              </TextWrapper>
            </GridStatsItem>
          )}
          {!below1295 && (
            <GridStatsItem>
              <ImgWrapper>
                <img src={transferSrc} alt="transfer" width={24} />
              </ImgWrapper>
              <TextWrapper>
                <Title>Fees (24H)</Title>
                <Value>{oneDayFees}</Value>
              </TextWrapper>
            </GridStatsItem>
          )}

          {!below1295 && (
            <GridStatsItem>
              <ImgWrapper>
                <img src={transferSrc} alt="transfer" width={24} />
              </ImgWrapper>
              <TextWrapper>
                <Title>Fees (24H)</Title>
                <Value>{oneDayFees}</Value>
              </TextWrapper>
            </GridStatsItem>
          )}
        </GridStats>
      </RowBetween>
    </Header>
  )
}
