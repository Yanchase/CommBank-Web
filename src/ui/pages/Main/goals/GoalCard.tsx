/*
 * @Author: Yanchase 100128202+Yanchase@users.noreply.github.com
 * @Date: 2023-07-21 23:18:46
 * @LastEditors: Yanchase 100128202+Yanchase@users.noreply.github.com
 * @LastEditTime: 2023-07-21 23:31:12
 * @FilePath: /CommBank-Web/src/ui/pages/Main/goals/GoalCard.tsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import styled from 'styled-components'
import { selectGoalsMap } from '../../../../store/goalsSlice'
import { useAppDispatch, useAppSelector } from '../../../../store/hooks'
import {
  setContent as setContentRedux,
  setIsOpen as setIsOpenRedux,
  setType as setTypeRedux,
} from '../../../../store/modalSlice'
import { Card } from '../../../components/Card'

type Props = { id: string }

const Icon = styled.h1`
  font-size: 5.5rem;
`

export default function GoalCard(props: Props) {
  const dispatch = useAppDispatch()

  const goal = useAppSelector(selectGoalsMap)[props.id]

  const onClick = (event: React.MouseEvent) => {
    event.stopPropagation()
    dispatch(setContentRedux(goal))
    dispatch(setTypeRedux('Goal'))
    dispatch(setIsOpenRedux(true))
  }

  const asLocaleDateString = (date: Date) => new Date(date).toLocaleDateString()

  return (
    <Container key={goal.id} onClick={onClick}>
      <TargetAmount>${goal.targetAmount}</TargetAmount>
      <TargetDate>{asLocaleDateString(goal.targetDate)}</TargetDate>
      <Icon>{goal.icon}</Icon>
    </Container>
  )
}

const Container = styled(Card)`
  display: flex;
  flex-direction: column;
  min-height: 140px;
  min-width: 140px;
  width: 33%;
  cursor: pointer;
  margin-left: 2rem;
  margin-right: 2rem;
  border-radius: 2rem;

  align-items: center;
`
const TargetAmount = styled.h2`
  font-size: 2rem;
`

const TargetDate = styled.h4`
  color: rgba(174, 174, 174, 1);
  font-size: 1rem;
`
