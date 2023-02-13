import * as React from "react"
import { IntroSection } from "../sections/IntroSection"
import { ReasonsSection } from "../sections/ReasonsSection"

const IndexPage = () => {
  return (
    <main>
      <IntroSection />
      <ReasonsSection />
    </main>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
