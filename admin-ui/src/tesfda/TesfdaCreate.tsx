import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const TesfdaCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="fdsafas" source="fdsafas" />
        <TextInput label="sdafasd" source="sdafasd" />
      </SimpleForm>
    </Create>
  );
};
