import React, { ReactElement } from 'react'
import Link from 'next/link'
import Button from '@material-ui/core/Button'

type ButtonLinkParams = {
  className?: any;
  href?:any;
  hrefAs?:any;
  label?:any;
};


const ButtonLink:any = ({ className, href, hrefAs,label}:(ButtonLinkParams)) => (
  <Link href={href} as={hrefAs}>
    <a className={className}>
      {label}
    </a>
  </Link>
)
// https://material-ui.com/demos/buttons/#third-party-routing-library
//const RenderButton = () => <Button component={ButtonLink} href={'/foo'}>bar</Button>

export default ButtonLink;