import { Fragment } from "react";

import FontStyles from "../../../global/FontStyles";

import MainNavigation from "../MainNavigation/MainNavigation";
import { StyledContainer } from "./styled";


const Layout = (props: { children: any }) => {
  return (
    <Fragment>
      <FontStyles />
      <MainNavigation />
      <StyledContainer>{props.children}</StyledContainer>
    </Fragment>
  );
};

export default Layout;
