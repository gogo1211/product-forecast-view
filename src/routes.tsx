import { FC } from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import { Home } from 'pages/Home'

const Routes: FC<{}> = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Redirect from="/" to="/" />
  </Switch>
)

export { Routes }
