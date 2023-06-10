import React from "react";
import MyParagraph from "./MyParagraph";

const DemoOutput = props => {

  console.log('DemoOutput RUNNING!');

  return <MyParagraph>{props.showParagraph ? 'This is new!' : ''}</MyParagraph>;
};

export default React.memo(DemoOutput);