import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const TesfdaEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="fdsafas" source="fdsafas" />
        <TextInput label="sdafasd" source="sdafasd" />
      </SimpleForm>
    </Edit>
  );
};
