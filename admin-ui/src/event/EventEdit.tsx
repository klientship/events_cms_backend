import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
  DateTimeInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { BranchTitle } from "../branch/BranchTitle";
import { CategoryTitle } from "../category/CategoryTitle";
import { EventRegistrationTitle } from "../eventRegistration/EventRegistrationTitle";

export const EventEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="branch.id" reference="Branch" label="Branch">
          <SelectInput optionText={BranchTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="category.id"
          reference="Category"
          label="category"
        >
          <SelectInput optionText={CategoryTitle} />
        </ReferenceInput>
        <TextInput label="Description" multiline source="description" />
        <DateTimeInput label="End date" source="endDate" />
        <ReferenceArrayInput
          source="eventRegistrations"
          reference="EventRegistration"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={EventRegistrationTitle} />
        </ReferenceArrayInput>
        <SelectInput
          source="eventType"
          label="Event Type"
          choices={[
            { label: "individual", value: "Individual" },
            { label: "Team", value: "Team" },
          ]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <TextInput label="img" source="img" />
        <DateTimeInput label="Start date" source="startDate" />
        <TextInput label="Title" source="title" />
        <TextInput label="Venue" source="venue" />
      </SimpleForm>
    </Edit>
  );
};
