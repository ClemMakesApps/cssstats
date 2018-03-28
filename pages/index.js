import React, { Component } from "react"

import {
  H1,
  H2,
  Div,
  Form,
  Button,
  Input,
  Label,
  LinkBox
} from "../components/library"

import Layout from "../components/Layout"

import { sites, frameworks } from "../components/constants"

class Index extends Component {
  state = {
    urlInput: ""
  }

  render() {
    return (
      <Layout>
        <H1 children="Parse Css" />

        <Form py={3}>
          <Label children="URI" />
          <Input
            mt={2}
            placeholder="Url, domain, or direct css link"
            onChange={e => this.setState({ urlInput: e.target.value })}
          />
          <Button
            mt={2}
            children="Go"
            onClick={e => {
              e.preventDefault()

              console.log(this.state.urlInput)
            }}
          />
        </Form>

        <Div mt={3}>
          <H2 children="View Stats for Popular Sites" />

          <LinkBox
            links={sites.map(link => {
              const fallbackUrl = `https://${link.name
                .replace(" ", "")
                .toLowerCase()}.com`
              const url = `/stats?url=${link.url || fallbackUrl}&name=${
                link.name
              }`

              return Object.assign({}, link, { url })
            })}
          />
        </Div>

        <Div mt={4}>
          <H2 children="View Stats for Popular Frameworks" />

          <LinkBox
            links={frameworks.map(link => {
              const url = `/stats?url=${link.url}&name=${link.name}`

              return Object.assign({}, link, { url })
            })}
          />
        </Div>
      </Layout>
    )
  }
}

export default Index
