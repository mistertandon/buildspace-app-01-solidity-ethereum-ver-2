import React, { useEffect, useState } from "react";
import "./AddWave.css";
import Contact from "../contact/Contact";

const AddWave = ({ classFromParent }) => {
  const [classFromParentRef, setClassFromParent] = useState("");

  const [formFields, setFormFields] = useState({ message: "" });

  const [formFieldsErrors, setFormFieldsErrors] = useState({ message: false });
  const [disableFormSubmission, setDisableFormSubmission] = useState(false);

  useEffect(() => {
    if (typeof classFromParent != undefined && classFromParent) {
      setClassFromParent(classFromParent);
    }
  }, [classFromParent]);

  const handleFormInputRequest = (event) => {
    setFormFields({ ...formFields, [event.target.name]: event.target.value });
  };

  const handleFormSubmitRequest = async (event) => {
    event.preventDefault();

    setDisableFormSubmission(true);

    if (!formFields["message"]) {
      setFormFieldsErrors({ ...formFieldsErrors, message: true });
    } else {
      setFormFieldsErrors({ ...formFieldsErrors, message: false });
    }

    setDisableFormSubmission(false);
  };

  return (
    <div className={`${classFromParentRef} add-wave--container`}>
      <form onSubmit={handleFormSubmitRequest}>
        <div className={"add-wave-form--container"}>
          <div className="child-a--awc">
            <div className="ca-child-a--awc">
              {formFieldsErrors["message"] && (
                <div className="display-error-message">
                  Please write down a message.
                </div>
              )}
              <textarea
                name="message"
                value={formFields.message}
                className={`caca-child-a__input--awc ${
                  formFieldsErrors["message"]
                    ? "highlight-field-with-error"
                    : ""
                }`}
                rows={4}
                cols={50}
                onChange={handleFormInputRequest}
              />
            </div>
            <div className="ca-child-b--awc">
              <button className="cacb-child-a__button--awc">Add Wave</button>
            </div>
          </div>

          <Contact classFromParent="child-b--awc " />
        </div>
      </form>
    </div>
  );
};

export default AddWave;
