import { DocumentBuilder } from "./DocumentBuilder";

const header = "ACME Corporation — Report";
const body = "Quarterly performance increased by 12%.";
const footer = "--- Confidential ---";

const output = new DocumentBuilder()
  .addBody(body)
  .addFooter(footer)
  .addHeader(header)
  .build();

console.log(output);
