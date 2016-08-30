import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Sidebar.scss'


class Header extends React.Component {
    contextTypes: {
        router: React.PropTypes.func.isRequired
    }
    constructor(props, context){
        super(props, context);
    }
    render () {

        return (
        <div>
            <ul className={classes.sideNav}>
              <li>
                  <Link activeClassName={classes.active}  to="/"><i className="fa fa-fw fa-dashboard"></i>首页</Link>
              </li>
              <li>
                  <Link activeClassName={classes.active}  to="/addProject"><i className="fa fa-fw"></i>新建项目</Link>
              </li>
              <li>
                  <Link activeClassName={classes.active} to="/viewProjectList"><i className="fa fa-fw"></i>查看项目列表</Link>
              </li>
            </ul>
        </div>)
    }
}

export default Header
