import React, { Fragment, FunctionComponent } from "react";
import { IonItem, IonLabel, IonSelect, IonSelectOption } from "@ionic/react";
import { ErrorMessage } from "@hookform/error-message";
import { Controller } from "react-hook-form";

type Option = {
  label: string;
  value: string;
};

type Props = {
  defaultValue: any;
  control: any;
  errors: any;
  name: any;
  label: string;
  rules: any;
  options: Option[] | undefined;
};

const Select: FunctionComponent<Props> = ({
  defaultValue,
  control,
  errors,
  name,
  label,
  rules,
  options
}) => {
  return (
    <Fragment>
      <IonItem className="mb-4">
        <IonLabel position="floating" color="primary">
          {label}
        </IonLabel>
        <Controller
          render={({ field: { onChange, onBlur, value } }) => (
            <IonSelect
              value={value}
              onIonChange={onChange}
              onIonBlur={onBlur}
              interface="action-sheet"
              className="mt-2"
            >
              {options ? (
                options.map((opcion) => {
                  return (
                    <IonSelectOption value={opcion.value} key={opcion.value}>
                      {opcion.label}
                    </IonSelectOption>
                  );
                })
              ) : (
                <Fragment />
              )}
            </IonSelect>
          )}
          control={control}
          name={name}
          defaultValue={defaultValue}
          rules={rules}
        />
      </IonItem>
      <ErrorMessage
        errors={errors}
        name={name}
        as={<div className="text-red-600 px-6" />}
      />
    </Fragment>
  );
};

export default Select;
