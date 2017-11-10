import React from 'react'

import {
  connect
} from 'refunk'

import {
  Route
} from 'react-router-dom'

import {
  H1,
  H2,
  Div,
  Form,
  Button,
  Input,
  Label,
  LinkBox
} from './library'

import Layout from './Layout'

import sites from './data/sites.json'
import frameworks from './data/frameworks.json'

const Index = props =>
  <Layout>
    <H1
      children='Parse Css'
    />

    <Form py={3}>
      <Label
        children='URI'
      />
      <Input
        mt={2}
        placeholder='Url, domain, or direct css link'
        onChange={e => props.update({ urlInput: e.target.value })}
      />
      <Route
        render={({ history }) =>
          <Button
            mt={2}
            children='Go'
            onClick={e => {
              e.preventDefault()

              const url = props.urlInput

              console.log(props)

              props.update({
                urlInput: null,
                url
              })
              history.push(`/stats?url=${url}`)
            }}
          />
        }
      />
    </Form>

    <Div mt={3}>
      <H2
        children='View Stats for Popular Sites'
      />
      <LinkBox
        links={sites.map(link => {
          const fallbackUrl = `https://${link.name.replace(' ','').toLowerCase()}.com`
          link.url = `/stats?url=${link.url || fallbackUrl}`
          return link
        })}
      />
    </Div>

    <Div mt={4}>
      <H2
        children='View Stats for Popular Frameworks'
      />
      <LinkBox
        links={frameworks}
      />
    </Div>
  </Layout>

export default connect()(Index)
