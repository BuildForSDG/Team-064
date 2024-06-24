// eslint-disable-next-line no-unused-vars
import React, { Component } from 'react';

class NavItem extends Component {
  function handleClick (){
    const { path, onItemClick } = this.props;
    onItemClick(path);
  };

  render() {
    const { active } = this.props;
    return (
      <div className="list-group" active={active}>
        <button type="button" className="list-group-item list-group-item-action">
          <Link to={this.props.path} onClick={handleClick}></Link>
        </button>
      </div>
    );
  }
}

export default NavItem;
