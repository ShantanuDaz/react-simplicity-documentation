import { Table } from "react-simplicity-lib";
import {
  DocComponentDocumentation,
  DocComponentDisplay,
  DocHeader,
  DocTemplate,
} from "../DocTemplate";
import TableDoc from "./TableDoc";
const columns = [
  { name: "Name", field: "name" },
  { name: "Superpower", field: "superpower" },
  { name: "Favorite Snack", field: "snack" },
];

const rows = [
  {
    name: "Alice",
    superpower: "Invisible when nobody's looking",
    snack: "Choco Chip Cookies",
  },
  {
    name: "Bob",
    superpower: "Overthinking everything",
    snack: "Salted Pretzels",
  },
  { name: "Charlie", superpower: "Accidentally funny", snack: "Gummy Bears" },
  { name: "Diana", superpower: "Sleeping through alarms", snack: "Popcorn" },
  { name: "Eve", superpower: "Untangling earphones", snack: "Sour Patch Kids" },
];

const TableDisplay = ({ isOpen, isClosed = () => {} }) => {
  return (
    <div style={{ padding: "10px" }}>
      <Table columns={columns} rows={rows} />
      <DocTemplate isOpen={isOpen}>
        <DocHeader title="Table" onClick={() => isClosed()} />
        <DocComponentDisplay>
          <TableDisplay />
        </DocComponentDisplay>
        <DocComponentDocumentation>
          <TableDoc />
        </DocComponentDocumentation>
      </DocTemplate>
    </div>
  );
};

export default TableDisplay;
