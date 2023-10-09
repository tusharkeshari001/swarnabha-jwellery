import React, { useEffect } from "react";
import {
  EntityBuilderModel,
  EntityBuilderModelProps,
} from "../model/EntityBuilderModel";
import { createEntityModelFor, getAllEntities } from "../service/EntityBuilderService";
// import { arrayToObject } from "../../../../../../../../Global/services/GlobalServices";
// import { StateManager } from "../../../../../../../../Global/State/GlobalState";
// import { SystemConstant } from "../../../../../../../../constant/SystemConstant";
import "../style/EntityBuilderStyle.css";
import { TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  setSearchDataLoaded,
  setSidebarLoaded,
  setEntitySelected,
} from "../../../../../../../../redux/entityBuilder/entityBuilderSlice";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";
import { buildEntityUi } from "../builder/entity/controller/EntityController";
import ruler from "../../../../../../../../assets/entity-builder-icons/edit-item.png";
import { EntityModel } from "../builder/entity/model/EntityModel";
import { uniqueId } from "lodash";

export const buildEntityBuilderController = (
  entityBuilderModel: EntityBuilderModel
) => {
  return <EntityBuilder key={uniqueId()} entityBuilderModel={entityBuilderModel} />;
};

const EntityBuilder = (props: EntityBuilderModelProps) => {
  const entityBuilderModel = props.entityBuilderModel;
  // const entityBuilderState = arrayToObject(useState(false));
  const isSidebarLoaded: any = useSelector(
    (state: any) => state.entityBuilder.isSidebarLoaded
  );

  const isEntitySelected: any = useSelector(
    (state: any) => state.entityBuilder.isEntitySelected
  );

  entityBuilderModel.dispatch = useDispatch();

  useEffect(() => {
    getAllEntities(entityBuilderModel);
  }, []);

  if (!isSidebarLoaded) {
    return <div className="loader">Loading...</div>;
  } else {
    return (
      <div className="entity-builder-main">
        <div className="side-entity-bar">
          <SearchEntity entityBuilderModel={entityBuilderModel} />
          <SideEntityBar entityBuilderModel={entityBuilderModel} />
        </div>
        <div className="entity-body">
          {/* {buildEntityUi(entityBuilderModel.entityModel)} */}
          {!isEntitySelected ? (
            <div className="entity-main">
              <div>
                <img
                  src={ruler}
                  alt="ruler icon"
                  height="150px"
                  width="150px"
                />
                <div className="icon-name">PLEASE SELECT AN ENTITY</div>
              </div>
            </div>
          ) : (
            entityBuilderModel.content
          )}
        </div>
      </div>
    );
  }
};

const SearchEntity = (props: EntityBuilderModelProps) => {
  const entityBuilderModel = props.entityBuilderModel;
  const handleSearch = (event: any) => {
    console.log(event.target.value);
    event.preventDefault()
    entityBuilderModel.currentEntities = entityBuilderModel.allEntities.filter(
      (entity: any) => {
        return (
          entity["entityName"]
            .toLowerCase()
            .search(event.target.value.toLowerCase()) > -1
        );
      }
    );
    entityBuilderModel.dispatch(setSearchDataLoaded(true));
    entityBuilderModel.dispatch(setSidebarLoaded(true));
  };
  return (
    <div className="search-field" >
      <TextField
        onChange={handleSearch}
        placeholder="Search Entity..."
        size="small"
        className="SearchEntity"
        type="search"
      />
    </div>
  );
};

const SideEntityBar = (props: EntityBuilderModelProps) => {
  const entityBuilderModel = props.entityBuilderModel;
  const isSearchDataLoaded = useSelector(
    (state: any) => state.entityBuilder.isSearchDataLoaded
  );

  const handleEntityClickedEvent = (event: any, currentity: any) => {
    // console.log(entity);
    const entityModel: EntityModel = createEntityModelFor(currentity);
    entityBuilderModel.content = buildEntityUi(entityModel);
    entityBuilderModel.dispatch(setEntitySelected(true));
  };

  if (!isSearchDataLoaded) {
    return <div className="loader">Loading...</div>;
  } else {
    return (
      <div className="entity-list">
        
        <ul>
          {entityBuilderModel.currentEntities?.map((entity: any, index:number) => {
            return (
              <div
                key={entity["entityId"]?? index}
                className="each-entity"
                onContextMenu={(event: any) => {
                  event.preventDefault();
                  console.log("right click");
                }}
                onClick={(event: any) => {
                  console.log("event.target.value",event.target);
                  handleEntityClickedEvent(event, entity);
                }}
              >
                <InsertDriveFileIcon fontSize="small" />
                <li className="entity">
                  {entity["entityName"]}
                </li>
              </div>
            );
          })}
        </ul>
      </div>
    );
  }
};

// inset 1px 0px 5px 0px #888
