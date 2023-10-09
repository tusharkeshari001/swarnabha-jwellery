import React from "react";
import { HeaderModel, HeaderModelProps } from "../model/headerModel";
import "../style/headerStyles.css";
import {
  handleAbout,
  handleEntityBuilder,
  handleEntityBuilderMain,
  handleHome,
} from "../controller/headerController";
import LanIcon from "@mui/icons-material/Lan";

export const buildHeaderComponent = (headerModel: HeaderModel) => {
  return <Header headerModel={headerModel} />;
};

const Header = (props: HeaderModelProps) => {
  return (
    <div className="header-tabs">
      <div className="home" onClick={handleHome}>
        Home
      </div>
      <div className="about" onClick={handleEntityBuilderMain}>
        EntityBuilderMain
      </div>
      <div className="about" onClick={handleAbout}>
        About
      </div>
      <div className="kagamiStudio" onClick={handleEntityBuilder}>
        <LanIcon sx={{ height: "0.7em" }} fontSize="small" />
        Entity Builder
      </div>
    </div>
  );
};
