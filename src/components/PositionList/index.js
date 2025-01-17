import React, { useState, useEffect, useMemo } from 'react'
import { useMedia } from 'react-use'
import dayjs from 'dayjs'
import LocalLoader from 'components/LocalLoader'
import utc from 'dayjs/plugin/utc'
import { Box, Flex, Text } from 'rebass'
import styled from 'styled-components'
import Link, { CustomLink } from 'components/Link'
import { Divider } from 'components'
import DoubleTokenLogo from 'components/DoubleLogo'
import { withRouter } from 'react-router-dom'
import { formattedNum, getPoolLink } from 'utils'
import { AutoColumn } from 'components/Column'
import { useEthPrice } from 'contexts/GlobalData'
import { RowFixed } from 'components/Row'
import { ButtonLight } from 'components/ButtonStyled'
import { TYPE } from 'Theme'
import FormattedName from 'components/FormattedName'
import { TableHeaderBox } from 'components/Row'

dayjs.extend(utc)

const PageButtons = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 0.5em;
`

const Arrow = styled.div`
  color: ${({ theme }) => theme.white};
  opacity: ${(props) => (props.faded ? 0.3 : 1)};
  padding: 0 20px;
  user-select: none;
  :hover {
    cursor: pointer;
  }
`

const List = styled(Box)`
  -webkit-overflow-scrolling: touch;
`

const DashGrid = styled.div`
  display: grid;
  grid-gap: 1em;
  grid-template-columns: 5px 0.5fr 1fr 1fr;
  grid-template-areas: 'number name fathomswap return';
  align-items: flex-start;
  padding: 20px 0;

  > * {
    justify-content: flex-end;
    width: 100%;

    :first-child {
      justify-content: flex-start;
      text-align: left;
      width: 20px;
    }
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: 35px 2.5fr 1fr 1fr;
    grid-template-areas: 'number name fathomswap return';
  }

  @media screen and (max-width: 740px) {
    grid-template-columns: 2.5fr 1fr 1fr;
    grid-template-areas: 'name fathomswap return';
  }

  @media screen and (max-width: 500px) {
    grid-template-columns: 2.5fr 1fr;
    grid-template-areas: 'name fathomswap';
  }
`

const HeaderWrapper = styled(DashGrid)`
  background: ${({ theme }) => theme.headerBackground};
  border-radius: 8px;
  padding-top: 7px !important;
  padding-bottom: 7px !important;
`

const ListWrapper = styled.div``

const ClickableText = styled(Text)`
  color: ${({ theme }) => theme.text1};
  &:hover {
    cursor: pointer;
    opacity: 0.6;
  }

  text-align: end;
  user-select: none;
`

const DataText = styled(Flex)`
  align-items: center;
  justify-content: flex-start;
  text-align: center;
  color: ${({ theme }) => theme.text1};
  & > * {
    font-size: 1em;
  }

  @media screen and (max-width: 600px) {
    font-size: 13px;
  }
`

const SORT_FIELD = {
  VALUE: 'VALUE',
  FATHOMSWAP_RETURN: 'FATHOMSWAP_RETURN',
}

function PositionList({ positions }) {
  const below500 = useMedia('(max-width: 500px)')
  const below740 = useMedia('(max-width: 740px)')

  // pagination
  const [page, setPage] = useState(1)
  const [maxPage, setMaxPage] = useState(1)
  const ITEMS_PER_PAGE = 10

  // sorting
  const [sortDirection, setSortDirection] = useState(true)
  const [sortedColumn, setSortedColumn] = useState(SORT_FIELD.VALUE)

  useEffect(() => {
    setMaxPage(1) // edit this to do modular
    setPage(1)
  }, [positions])

  useEffect(() => {
    if (positions) {
      let extraPages = 1
      if (positions.length % ITEMS_PER_PAGE === 0) {
        extraPages = 0
      }
      setMaxPage(Math.floor(positions.length / ITEMS_PER_PAGE) + extraPages || 1)
    }
  }, [positions])

  const [ethPrice] = useEthPrice()

  const ListItem = ({ position, index }) => {
    const poolOwnership = position.liquidityTokenBalance / position.pair.totalSupply
    const valueUSD = poolOwnership * position.pair.reserveUSD

    return (
      <DashGrid style={{ opacity: poolOwnership > 0 ? 1 : 0.6, padding: '0.75rem 1.125rem' }} focus={true}>
        {!below740 && <DataText area="number">{index}</DataText>}
        <DataText area="name" justifyContent="flex-start" alignItems="center">
          <AutoColumn gap="8px" justify="flex-start" align="center">
            <DoubleTokenLogo size={16} a0={position.pair.token0.id} a1={position.pair.token1.id} margin={!below740} />
          </AutoColumn>
          <AutoColumn gap="8px" justify="flex-start" style={{ marginLeft: '20px' }}>
            <CustomLink to={'/pair/' + position.pair.id}>
              <TYPE.main style={{ whiteSpace: 'nowrap' }} to={'/pair/'}>
                <FormattedName
                  text={position.pair.token0.symbol + '-' + position.pair.token1.symbol}
                  maxCharacters={below740 ? 10 : 18}
                />
              </TYPE.main>
            </CustomLink>

            <RowFixed gap="8px" justify="flex-start">
              <Link
                external
                href={getPoolLink(position.pair.token0.id, position.pair.token1.id)}
                style={{ marginRight: '.5rem' }}
              >
                <ButtonLight style={{ padding: '4px 6px', borderRadius: '4px' }}>Add</ButtonLight>
              </Link>
              {poolOwnership > 0 && (
                <Link external href={getPoolLink(position.pair.token0.id, position.pair.token1.id, true)}>
                  <ButtonLight style={{ padding: '4px 6px', borderRadius: '4px' }}>Remove</ButtonLight>
                </Link>
              )}
            </RowFixed>
          </AutoColumn>
        </DataText>
        <DataText area="fathomswap">
          <AutoColumn gap="12px" justify="flex-start">
            <TYPE.main>{formattedNum(valueUSD, true, true)}</TYPE.main>
            <AutoColumn gap="4px" justify="flex-start">
              <RowFixed>
                <TYPE.small fontWeight={400}>
                  {formattedNum(poolOwnership * parseFloat(position.pair.reserve0))}{' '}
                </TYPE.small>
                <FormattedName
                  text={position.pair.token0.symbol}
                  maxCharacters={below740 ? 10 : 18}
                  margin={true}
                  fontSize={'11px'}
                />
              </RowFixed>
              <RowFixed>
                <TYPE.small fontWeight={400}>
                  {formattedNum(poolOwnership * parseFloat(position.pair.reserve1))}{' '}
                </TYPE.small>
                <FormattedName
                  text={position.pair.token1.symbol}
                  maxCharacters={below740 ? 10 : 18}
                  margin={true}
                  fontSize={'11px'}
                />
              </RowFixed>
            </AutoColumn>
          </AutoColumn>
        </DataText>
        {!below500 && (
          <DataText area="return">
            <AutoColumn gap="12px" justify="flex-start">
              <TYPE.main color={'text5'}>
                <RowFixed>{formattedNum(position?.fees.sum, true, true)}</RowFixed>
              </TYPE.main>
              <AutoColumn gap="4px" justify="flex-start">
                <RowFixed>
                  <TYPE.small fontWeight={400}>
                    {parseFloat(position.pair.token0.derivedETH)
                      ? formattedNum(
                          position?.fees.sum / (parseFloat(position.pair.token0.derivedETH) * ethPrice) / 2,
                          false,
                          true
                        )
                      : 0}{' '}
                  </TYPE.small>
                  <FormattedName
                    text={position.pair.token0.symbol}
                    maxCharacters={below740 ? 10 : 18}
                    margin={true}
                    fontSize={'11px'}
                  />
                </RowFixed>
                <RowFixed>
                  <TYPE.small fontWeight={400}>
                    {parseFloat(position.pair.token1.derivedETH)
                      ? formattedNum(
                          position?.fees.sum / (parseFloat(position.pair.token1.derivedETH) * ethPrice) / 2,
                          false,
                          true
                        )
                      : 0}{' '}
                  </TYPE.small>
                  <FormattedName
                    text={position.pair.token1.symbol}
                    maxCharacters={below740 ? 10 : 18}
                    margin={true}
                    fontSize={'11px'}
                  />
                </RowFixed>
              </AutoColumn>
            </AutoColumn>
          </DataText>
        )}
      </DashGrid>
    )
  }

  const positionsSorted = useMemo(
    () =>
      positions &&
      positions
        .sort((p0, p1) => {
          if (sortedColumn === SORT_FIELD.FATHOMSWAP_RETURN) {
            return p0?.uniswap?.return > p1?.uniswap?.return ? (sortDirection ? -1 : 1) : sortDirection ? 1 : -1
          }
          if (sortedColumn === SORT_FIELD.VALUE) {
            const bal0 = (p0.liquidityTokenBalance / p0.pair.totalSupply) * p0.pair.reserveUSD
            const bal1 = (p1.liquidityTokenBalance / p1.pair.totalSupply) * p1.pair.reserveUSD
            return bal0 > bal1 ? (sortDirection ? -1 : 1) : sortDirection ? 1 : -1
          }
          return 1
        })
        .slice(ITEMS_PER_PAGE * (page - 1), page * ITEMS_PER_PAGE)
        .map((position, index) => {
          return (
            <div key={index}>
              <ListItem key={index} index={(page - 1) * 10 + index + 1} position={position} />
              <Divider />
            </div>
          )
        }),
    [positions, page, sortDirection, sortedColumn]
  )

  return (
    <ListWrapper>
      <HeaderWrapper center={true} style={{ padding: '0 1.125rem 1rem' }}>
        {!below740 && (
          <Flex alignItems="center" justifyContent="flex-start">
            <TableHeaderBox>#</TableHeaderBox>
          </Flex>
        )}
        <Flex alignItems="center" justifyContent="flex-start">
          <TableHeaderBox area="number">Name</TableHeaderBox>
        </Flex>
        <Flex alignItems="center" justifyContent="flex-start">
          <ClickableText
            area="fathomswap"
            onClick={(e) => {
              setSortedColumn(SORT_FIELD.VALUE)
              setSortDirection(sortedColumn !== SORT_FIELD.VALUE ? true : !sortDirection)
            }}
          >
            <TableHeaderBox>
              {below740 ? 'Value' : 'Liquidity'} {sortedColumn === SORT_FIELD.VALUE ? (!sortDirection ? '↑' : '↓') : ''}
            </TableHeaderBox>
          </ClickableText>
        </Flex>
        {!below500 && (
          <Flex alignItems="center" justifyContent="flex-start">
            <ClickableText
              area="return"
              onClick={() => {
                setSortedColumn(SORT_FIELD.FATHOMSWAP_RETURN)
                setSortDirection(sortedColumn !== SORT_FIELD.FATHOMSWAP_RETURN ? true : !sortDirection)
              }}
            >
              <TableHeaderBox>
                {below740 ? 'Fees' : 'Total Fees Earned'}{' '}
                {sortedColumn === SORT_FIELD.FATHOMSWAP_RETURN ? (!sortDirection ? '↑' : '↓') : ''}
              </TableHeaderBox>
            </ClickableText>
          </Flex>
        )}
      </HeaderWrapper>
      <List p={0}>{!positionsSorted ? <LocalLoader /> : positionsSorted}</List>
      <PageButtons>
        <div onClick={() => setPage(page === 1 ? page : page - 1)}>
          <Arrow faded={page === 1 ? true : false}>←</Arrow>
        </div>
        <TYPE.body>{'Page ' + page + ' of ' + maxPage}</TYPE.body>
        <div onClick={() => setPage(page === maxPage ? page : page + 1)}>
          <Arrow faded={page === maxPage ? true : false}>→</Arrow>
        </div>
      </PageButtons>
    </ListWrapper>
  )
}

export default withRouter(PositionList)
