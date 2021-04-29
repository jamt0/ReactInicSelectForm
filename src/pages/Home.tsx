import React from "react";
import {
  IonButton,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar
} from "@ionic/react";
import { useForm } from "react-hook-form";
import Select from "../components/Select";

let defaultValues = {
  subjectId: ""
};

const options = [
  {
    label: "Option1",
    value: "1"
  },
  {
    label: "Option2",
    value: "2"
  }
];

const Home: React.FC = () => {
  const {
    control,
    handleSubmit,
    formState: { isSubmitting, isValid, errors }
  } = useForm({
    defaultValues: defaultValues,
    mode: "onChange"
  });

  const handlerSendButton = async (select: any) => {
    alert(JSON.stringify(select));
  };

  const rulesSubject = {
    required: "this field is required"
  };

  return (
    <IonPage id="home-page">
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Example Select React Hook Form</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h6 className="text-2xl font-bold text-center">Contact us</h6>
        <Select
          control={control}
          errors={errors}
          defaultValue={defaultValues.subjectId}
          options={options}
          name="subjectId"
          label={"Subject"}
          rules={rulesSubject}
        />
        <IonButton
          expand="block"
          className="mt-16"
          onClick={handleSubmit(handlerSendButton)}
          disabled={!isValid || isSubmitting}
        >
          Save
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;
