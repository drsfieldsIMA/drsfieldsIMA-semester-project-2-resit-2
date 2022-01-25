import React from 'react'
import Link from 'next/link'
import Button from '@material-ui/core/Button'

const ButtonLink = ({ className, href, hrefAs, children, prefetch,label }) => (
  <Link href={href} as={hrefAs} prefetch>
    <a className={className}>
      {label}
    </a>
  </Link>
)
// https://material-ui.com/demos/buttons/#third-party-routing-library
//const RenderButton = () => <Button component={ButtonLink} href={'/foo'}>bar</Button>

export default ButtonLink;