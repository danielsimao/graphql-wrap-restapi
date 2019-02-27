import React, { useState } from "react";
import { Menu, Icon } from "antd";
import className from "classnames";

function Header() {
  const [current, setSelected] = useState("character");

  return (
    <div className="flex items-end">
      <img className="h3" id="logo" src={require("../assert/images.png")} />
      <Menu
        onClick={e => setSelected(e.key)}
        selectedKeys={[current]}
        mode="horizontal"
        theme="dark"
        className="flex-auto"
      >
        <Menu.Item key="character">Characters</Menu.Item>
        <Menu.Item key="comics">Comics</Menu.Item>
        <Menu.Item key="series">Series</Menu.Item>
      </Menu>
    </div>
  );
}

export default Header;
