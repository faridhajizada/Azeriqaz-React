import React from "react";
import { Content } from "./../../../../_metronic/layout/components/content/Content";
import CallListHeader from "./../Call/CallListHeader/CallListHeader";
import CallList from "./CallList/CallList";
import CallListFooter from "./CallListFooter/CallListFooter";

function Call() {
  return (
    <Content>
      <div className={`card mb-5 mb-xl-8`}>
        <CallListHeader />
        <CallList />
        <CallListFooter />
      </div>
    </Content>
  );
}

export default Call;
