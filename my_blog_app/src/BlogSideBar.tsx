import * as React from "react";
import "./BlogSideBar.css";

interface BlogSideBarProps {}

interface BlogSideBarState {}

export class BlogSideBar extends React.Component<
  BlogSideBarProps,
  BlogSideBarState
> {
  constructor(props: Readonly<{}>) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="wrapper">
        <nav id="sidebar">
          <div>
            <h3>SidebarHeader</h3>
          </div>
          <ul className="list-unstyled">
            <li>hahaha</li>
          </ul>
        </nav>
        <div>
          <nav className="navbar">
            <button type="button" id="sidebarCollapse" className="btn btn-info">
              <span>Toggle Sidebar</span>
            </button>
          </nav>
        </div>
      </div>
    );
    /*
    return (
      <div className="wrapper">
        <nav id="sidebar">
          <div>
            <h3>SideBarHeader</h3>
          </div>
          <ul className="list-unstyled components">
            <p>Dummy heading? But Paragraph</p>
            <li className="hidden">
              <a
                href="#homeSubmenu"
                data-toggle="collapse"
                className="dropdown-toggle"
              >
                Home
              </a>
              <ul id="homeSubmenu" className="collapse list-unstyled">
                <li>
                  <a href="#">Home 1</a>
                </li>
                <li>
                  <a href="#">Home 2</a>
                </li>
                <li>
                  <a href="#">Home 3</a>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
        <div id="content">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <button
                type="button"
                id="sidebarCollapse"
                className="btn btn-info"
              >
                <i className="fas fa-align-left"></i>
                <span>Toggle Sidebar</span>
              </button>
            </div>
          </nav>
        </div>
      </div>
    )*/
  }
}
