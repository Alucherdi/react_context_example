import React from 'react'
import { BrowserRouter, Route } from "react-router-dom"
import { Switch } from "react-router"

import Component from "./components/Component/Component.jsx"

class Router extends React.Component {

	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Component} />
				</Switch>
			</BrowserRouter>
		)
	}
}

export default Router