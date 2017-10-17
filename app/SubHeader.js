import React from 'react'
import Flex from './Flex'
import Div from './Div'
import Link from './Link'
import Hr from './Hr'
import Text from './Text'
import H2 from './H2'

const SubHeader = props => (
  <Div>
    <Flex py={3} alignItems="center" justify="space-between">
      <H2 my={0} children={props.title} />

      <Text uppercase fontWeight="bold" children={props.text} />
    </Flex>
    <Hr />
  </Div>
)

export default SubHeader
