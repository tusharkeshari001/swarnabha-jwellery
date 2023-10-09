import { CreateAttributeModel } from "../model/CreateAttributeModel";

let defaultConfig = {
  activityLog: false,
  attributeId: "",
  audited: false,
  currency: false,
  displayName: "",
  defaultValue: "",
  encrypted: false,
  id: "",
  isUnique: false,
  mappedAsLOV: false,
  mappedAsREF: false,
  modified: false,
  name: "",
  type: "",
  related: false,
  validations: [],
};

export function makeAttributeDataConfig(
  createAttributeModel: CreateAttributeModel
) {
  let attributeDataConfig = {};
  console.log(defaultConfig);
  console.log(createAttributeModel.initialData);
  return attributeDataConfig;
}

export const AttributeType = [
  { label: "Text", type: "text" },
  { label: "Number", type: "number" },
  { label: "File", type: "file" },
  { label: "Date", type: "date" },
  { label: "DateTime", type: "datetime" },
  { label: "Time", type: "time" },
  { label: "LongText", type: "longtext" },
  { label: "Boolean", type: "boolean" },
  { label: "Activity", type: "activity" },
];

export const SupportedFileFormats = [
  { label: "DOC", value: "doc" },
  { label: "DOCX", value: "docx" },
  { label: "PDF", value: "pdf" },
  { label: "XLS", value: "xls" },
  { label: "XLSX", value: "xlsx" },
  { label: "CSV", value: "csv" },
  { label: "PPT", value: "ppt" },
  { label: "PPTX", value: "pptx" },
  { label: "JPG", value: "jpg" },
  { label: "JPEG", value: "jpeg" },
  { label: "PNG", value: "png" },
  { label: "BMP", value: "bmp" },
  { label: "GIF", value: "gif" },
  { label: "SVG", value: "svg" },
  { label: "MSG", value: "msg" },
  { label: "TXT", value: "txt" },
  { label: "ZIP", value: "zip" },
];

export const TextFormats = [
  { label: "None", value: "none" },
  { label: "Email", value: "email" },
  { label: "Only Alphabets", value: "alphabets" },
  { label: "Alpha Numeric", value: "alphanumeric" },
  { label: "Phone", value: "phone" },
  { label: "Mobile", value: "mobile" },
  { label: "Website", value: "website" },
  { label: "Fax", value: "fax" },
  { label: "Gst", value: "gst" },
  { label: "Ifsc", value: "ifsc" },
  { label: "Pan", value: "pan" },
];

export const TextCase = [
  { label: "None", value: "none" },
  { label: "Upper Case", value: "uppercase" },
  { label: "Lower Case", value: "lowercase" },
];

// activityLog
// :
// false
// attributeId
// :
// "attr_203"
// audited
// :
// false
// currency
// :
// false
// defaultValue
// :
// "dayOfTheWeek"
// displayName
// :
// "dayOfTheWeek "
// encrypted
// :
// false
// id
// :
// "attr_203"
// mappedAsLOV
// :
// false
// mappedAsREF
// :
// false
// modified
// :
// false
// name
// :
// "dayOfTheWeek"
// related
// :
// false
// type
// :
// "text"
// validations
// :
// []
