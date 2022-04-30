import * as React from "react";
import { List, Datagrid, ListProps, DateField, TextField } from "react-admin";
import Pagination from "../Components/Pagination";

export const TesfdaList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"tesfdas fasdfklasdf"}
      perPage={50}
      pagination={<Pagination />}
    >
      <Datagrid rowClick="show">
        <DateField source="createdAt" label="Created At" />
        <TextField label="fdsafas" source="fdsafas" />
        <TextField label="ID" source="id" />
        <TextField label="sdafasd" source="sdafasd" />
        <DateField source="updatedAt" label="Updated At" />
      </Datagrid>
    </List>
  );
};
