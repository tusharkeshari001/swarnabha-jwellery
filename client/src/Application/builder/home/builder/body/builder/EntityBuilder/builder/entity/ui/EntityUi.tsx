import React, { ChangeEvent } from "react";
import { EntityModel, EntityModelProps } from "../model/EntityModel";
// import { useSelector } from "react-redux";
import "../style/EntityUiStyle.css";
import {
  Autocomplete,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Paper,
  Radio,
  RadioGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";
import { buildDialogModal } from "../../../../../../dialogModal/controller/DialogModalController";
// import { useDispatch } from "react-redux";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { setModalOpen } from "../../../../../../../../../../redux/modal/modalSlice";
import { buildCreateAttribute } from "../../CreateAttribute/controller/CreateAttributeController";
import { CreateAttributeModel } from "../../CreateAttribute/model/CreateAttributeModel";
import _ from "lodash";
import {
  isAttributeNamePrimaryKey,
  isAttributeNameUnique,
} from "../../../service/EntityBuilderService";

export const buildEntityUiComponent = (entityModel: EntityModel) => {
  return <EntityUi key={entityModel.entityId} entityModel={entityModel} />;
};

const EntityUi = (props: EntityModelProps) => {
  const entityModel = props.entityModel;

  const [checkboxes, setCheckboxes] = React.useState({
    audited: entityModel.audited,
    translate: entityModel.translate,
    resyncByProcess: entityModel.resyncByProcess,
  });

  const [compositeKey, setCompositeKey] = React.useState<any[]>(
    entityModel.compositeKeys
  );

  // const [newkey, setNewkey] = React.useState(false);
  const [value, setvalue] = React.useState([]);

  const [selectedValue, setSelectedValue] = React.useState<string>(
    entityModel.type.toUpperCase()
  );

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const getItemStyle = (isDragging: boolean, draggableStyle: any) => ({
    userSelect: "none",
    ...draggableStyle,
  });

  const onDragEnd = (result: any, provided: any) => {
    // console.warn(result.source.index);
    // console.warn(result.destination.index);
    if (result.source && result.destination)
      [
        entityModel.attributes[result.source.index],
        entityModel.attributes[result.destination.index],
      ] = [
        entityModel.attributes[result.destination.index],
        entityModel.attributes[result.source.index],
      ];
  };
  // const dispatch = useDispatch();
  const handleAddEntity = () => {
    console.log("handle add clicked");
    const createAttributeModel = new CreateAttributeModel();
    entityModel.dialogModalModel.title = "Edit Attribute";
    entityModel.dialogModalModel.content =
      buildCreateAttribute(createAttributeModel);
    entityModel.dialogModalModel.dispatch(setModalOpen(true));
    // dispatch(setModalOpen(true));
  };

  const handleTableRowClick = (event: any, row: any) => {
    console.log(row);
    const createAttributeModel = new CreateAttributeModel();
    createAttributeModel.initialData = row;
    entityModel.dialogModalModel.title = "Edit Attribute";
    entityModel.dialogModalModel.content =
      buildCreateAttribute(createAttributeModel);
    entityModel.dialogModalModel.dispatch(setModalOpen(true));
  };

  const onDragStart = () => {};
  const handleCreateCompositeKey = () => {
    if (Object.keys(entityModel.eachCompositeKey).length > 0) {
      let compositeKeys: any[] = _.clone(entityModel.compositeKeys);
      compositeKeys.push(entityModel.eachCompositeKey);
      entityModel.eachCompositeKey = {};
      setCompositeKey(compositeKeys);
      entityModel.compositeKeys = compositeKeys;
      setvalue([]);
    }
  };

  return (
    <div className="entity-ui">
      <>{buildDialogModal(entityModel.dialogModalModel)}</>
      <div className="entity-name">
        <FormLabel id="user-name">Name : </FormLabel>
        <TextField
          onChange={() => {}}
          size="small"
          defaultValue={entityModel.entityName}
        />
      </div>
      <div className="radio-type">
        <FormLabel id="entity-type">Type : </FormLabel>
        <RadioGroup
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
          name="row-radio-buttons-group"
          value={selectedValue}
          defaultValue={entityModel.type}
          onChange={handleChange}
        >
          {/* ... (your Radio buttons code here) ... */}
          <FormControlLabel
            value="MASTER"
            control={<Radio size="small" />}
            label="Master"
          />
          <FormControlLabel
            value="TRANSACTIONAL"
            control={<Radio size="small" />}
            label="Transactional"
          />
          <FormControlLabel
            value="EMBEDDED"
            control={<Radio size="small" />}
            label="Embedded"
          />
          <FormControlLabel
            value="VIEW"
            control={<Radio size="small" />}
            label="View"
          />
          <FormControlLabel
            value="EXTERNAL"
            control={<Radio size="small" />}
            label="External"
          />
          <FormControlLabel
            value="Modal Dialog"
            control={<Radio size="small" />}
            label="Modal Dialog"
          />
        </RadioGroup>
      </div>
      <div className="checkboxes">
        <FormGroup row>
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Audited :"
            labelPlacement="start"
            onChange={(event: any) => {
              setCheckboxes((prev) => ({
                ...prev,
                audited: event.target.checked,
              }));
            }}
            checked={checkboxes.audited}
          />
          {/* ... (other checkboxes code) ... */}
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="Translate :"
            labelPlacement="start"
            onChange={(event: any) => {
              setCheckboxes((prev: any) => ({
                ...prev,
                translate: event.target.checked,
              }));
            }}
            checked={checkboxes.translate}
          />
          <FormControlLabel
            control={<Checkbox size="small" />}
            label="resyncByProcess :"
            labelPlacement="start"
            onChange={(event: any) => {
              setCheckboxes((prev: any) => ({
                ...prev,
                resyncByProcess: event.target.checked,
              }));
            }}
            checked={checkboxes.resyncByProcess}
          />
        </FormGroup>
      </div>
      <div className="table">
        <TableContainer component={Paper}>
          <DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {/* ... (your table header cells) ... */}
                  <TableCell
                    className="table-header-cell"
                    component="th"
                    scope="row"
                  ></TableCell>
                  <TableCell className="table-header-cell" align="left">
                    Attribute Name
                  </TableCell>
                  <TableCell className="table-header-cell" align="left">
                    Display Name
                  </TableCell>
                  <TableCell className="table-header-cell" align="left">
                    Type
                  </TableCell>
                  <TableCell className="table-header-cell" align="left">
                    Validations
                  </TableCell>
                  <TableCell className="table-header-cell" align="left">
                    Default Value{" "}
                  </TableCell>
                  <TableCell className="table-header-cell" align="left">
                    Unique
                  </TableCell>
                  <TableCell className="table-header-cell" align="left">
                    Auto Generated
                  </TableCell>
                  <TableCell className="table-header-cell" align="center">
                    <Button onClick={handleAddEntity}>Add</Button>
                  </TableCell>
                </TableRow>
              </TableHead>

              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <TableBody
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                  >
                    {entityModel.attributes.map((row, index) => (
                      <Draggable
                        key={row.attributeId}
                        draggableId={row.attributeId}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <TableRow
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                            onClick={(event: any) =>
                              handleTableRowClick(event, row)
                            }
                          >
                            {/* ... (your table body cells) ... */}
                            <TableCell
                              className="table-body-cell"
                              component="th"
                              scope="row"
                            >
                              <DragIndicatorIcon fontSize="small" />
                            </TableCell>
                            <TableCell className="table-body-cell" align="left">
                              <div className="cell-data">
                                <p>{row.name}</p>
                                <p>
                                {isAttributeNamePrimaryKey(
                                  row.name,
                                  entityModel["persistenceRules"]
                                )}
                                </p>
                              </div>
                            </TableCell>
                            <TableCell className="table-body-cell" align="left">
                              {row.displayName ?? row.name}
                            </TableCell>
                            <TableCell className="table-body-cell" align="left">
                              {row["type"] ?? ""}
                            </TableCell>
                            <TableCell className="table-body-cell" align="left">
                              {row["validations"].length
                                ? row["validations"][0]["validationType"]
                                : []}
                            </TableCell>
                            <TableCell className="table-body-cell" align="left">
                              {row["defaultValue"] ?? ""}
                            </TableCell>
                            <TableCell className="table-body-cell" align="left">
                              {isAttributeNameUnique(
                                row.name,
                                entityModel["persistenceRules"]
                              )}
                            </TableCell>
                            <TableCell
                              className="table-body-cell"
                              align="left"
                            ></TableCell>
                            <TableCell
                              className="table-body-cell"
                              align="center"
                            >
                              <DeleteIcon
                                fontSize="small"
                                sx={{ color: "red" }}
                              />
                            </TableCell>
                          </TableRow>
                        )}
                      </Draggable>
                    ))}
                  </TableBody>
                )}
              </Droppable>
            </Table>
          </DragDropContext>
        </TableContainer>
      </div>
      <div className="composite-key">
        <div className="first">
          <div className="label-and-create-button">
            <FormLabel id="composite-key-label">Composite Key : </FormLabel>
            <Button onClick={handleCreateCompositeKey}>CREATE</Button>
          </div>
          <div className="text-area">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              multiple
              options={entityModel.attributes}
              getOptionLabel={(attribute: any) => attribute["name"] || ""}
              sx={{ height: "100px" }}
              value={value}
              onChange={(event: any, child: any) => {
                if (child.length)
                  entityModel.eachCompositeKey["attributes"] = child.map(
                    (ch: any) => ({
                      attributeId: ch["attributeId"],
                      name: ch["name"],
                    })
                  );
                setvalue(child);
              }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Select a attribute in the list..."
                />
              )}
            />
          </div>
        </div>
        <div className="second">
          {value.length ? (
            <>
              <div className="label-message">
                <FormLabel id="user-name">Composite Key Message : </FormLabel>
              </div>
              <TextField
                sx={{ width: "100%", height: "100px" }}
                label="message"
                onChange={(event: any) => {
                  entityModel.eachCompositeKey["message"] = event.target.value;
                }}
              />
            </>
          ) : null}
        </div>
      </div>
      <div className="composite-key-list">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="table-header-cell" align="left">
                  Attributes
                </TableCell>
                <TableCell className="table-header-cell" align="left">
                  Composite Key Message
                </TableCell>
                <TableCell
                  className="table-header-cell"
                  align="left"
                ></TableCell>
                <TableCell
                  className="table-header-cell"
                  align="left"
                ></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {compositeKey.length > 0 &&
                compositeKey.map((_ck: any, index: number) => {
                  return (
                    <TableRow>
                      {/* key={_ck['attributes']['attributeId']+index} */}
                      <TableCell className="table-body-cell" align="left">
                        {_ck["attributes"]
                          .map((ele: any) => ele["name"])
                          .join(",")}
                      </TableCell>
                      <TableCell className="table-body-cell" align="left">
                        {_ck["message"]}
                      </TableCell>
                      <TableCell className="table-body-cell" align="left">
                        ###
                      </TableCell>
                      <TableCell className="table-body-cell" align="left">
                        $$$
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};
