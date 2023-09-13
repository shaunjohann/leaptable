// @ts-nocheck
import React, { useState, useCallback } from "react";
import axios from "axios";
import { MobileView, DesktopView } from "@/components/Common/DeviceView";
import LinkTree from "@/components/Common/LinkTree";

export default (props) => {
  const [showSideMenu, setShowSideMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const { titles, homepage } = props;

  function updateMenu() {
    setLoading(true);
    axios.put("/api/menu", {}).then((data) => {
      setLoading(false);
    });
  }

  return (
    <>
      <DesktopView>
        <div className="main-menu">
          <div className="menu-refresh-content">
            {loading ? (
              <p>Loading...</p>
            ) : (
              <button onClick={updateMenu}>
                {" "}
                <img src="icon/refresh.png" width={"20px"} />{" "}
              </button>
            )}
          </div>
          <div className={"menu-items"}>
            <LinkTree menu={props?.menu} />
          </div>
        </div>
      </DesktopView>
    </>
  );
};
