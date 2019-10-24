import React, { PureComponent } from 'react'
import ReactDom from "react-dom"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { Button } from "antd"

const App = () => {
    return (
        <Router>
            <div>Hello World</div>
            <Button>Test</Button>
        </Router>
    )
} 


ReactDom.render(<App></App>, document.getElementById("root"))