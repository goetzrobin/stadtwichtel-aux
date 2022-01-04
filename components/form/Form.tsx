import React, { useState } from "react";
import { Formik, ErrorMessage } from "formik";

import FormContainer from "./container/FormContainer";
import { inputClasses } from "./input/input";
import FormLabel from "./label/FormLabel";
import FormSection from "./section/FormSection";
import FormError from "./error/FormError";

const initalValues = {
  firstName: "",
  lastName: "",
  birthday: "",
  gender: "",
  language: "",
  nationality: "",
  street: "",
  zipCode: "",
  city: "",
  duringWeek: "",
  friday: "",
  begin: "",
  parentFirstName: "",
  parentLastName: "",
  email: "",
  parentPhone: "",
  parentLanguage: "",
  parentNationality: "",
  parentStreet: "",
  parentZipCode: "",
  parentCity: "",
  job: "",
  comments: "",
  data: "",
};
const required = (label: string) => ` ${label} ist ein Pflichfeld`;
function Form() {
  const [formSubmitted, setformSubmitted] = useState(false);
  return (
    <div className="bg-accent">
      <div className="px-4 py-24 mx-auto sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8">
        <h2 className="mb-8 text-3xl font-extrabold tracking-tight text-astra-500 font-accent sm:text-4xl">
          Anmeldung
        </h2>
        <p className="mt-4 mb-8 text-bg-200">
          Eine Liste der aktuellen Beitragssätze finden sie{" "}
          <a
            className="font-semibold hover:underline text-astra-500"
            href="/kostenbeitragssaetze.pdf"
            target="_blank"
          >
            hier.
          </a>
        </p>

        <Formik
          initialValues={initalValues}
          validate={(values) => {
            const errors: { [key: string]: string } = {};
            if (!values.email) {
              errors.email = required("Email");
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Ungültige Email Adresse";
            }
            if (!values.firstName) {
              errors.firstName = required("Vorname");
            }
            if (!values.lastName) {
              errors.lastName = required("Nachname");
            }
            if (!values.birthday) {
              errors.birthday = required("Geburtstag");
            }
            if (!values.gender) {
              errors.gender = required("Geschlecht");
            }
            if (!values.language) {
              errors.language = required("Muttersprache");
            }
            if (!values.nationality) {
              errors.nationality = required("Staatsangehörigkeit");
            }
            if (!values.street) {
              errors.street = required("Straße");
            }
            if (!values.zipCode) {
              errors.zipCode = required("Postleitzahl");
            }
            if (!values.city) {
              errors.city = required("Wohnort");
            }

            if (!values.begin) {
              errors.begin = required("Betreuungsbeginn");
            }

            if (!values.parentFirstName) {
              errors.parentFirstName = required("Vorname");
            }
            if (!values.parentLastName) {
              errors.parentLastName = required("Nachname");
            }
            if (!values.parentPhone) {
              errors.parentPhone = required("Telefonnummer");
            }
            if (!values.parentLanguage) {
              errors.parentLanguage = required("Muttersprache");
            }
            if (!values.parentNationality) {
              errors.parentNationality = required("Staatsangehörigkeit");
            }
            if (!values.job) {
              errors.job = required("Berufstätigkeit");
            }

            if (!values.data) {
              errors.data = required("Zustimmung zum Datenschutz");
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            fetch("https://formspree.io/f/moqrvkgd", {
              method: "POST",
              body: JSON.stringify(values, null, 2),
              headers: {
                Accept: "application/json",
              },
            })
              .then((response) => {
                setSubmitting(false);
                setformSubmitted(true);
              })
              .catch((error) => {
                setSubmitting(false);
                setformSubmitted(true);
                alert(error);
                console.error(error);
              });
          }}
        >
          {({
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit(e);
              }}
            >
              <FormSection
                headline="Über Deinen Wichtel"
                description="Diese Informationen Helfen uns Ihr Kind bestens zu betreuen."
              >
                <FormContainer>
                  <div className="col-span-6 sm:col-span-3">
                    <FormLabel for="firstName" label="Vorname*">
                      <input
                        type="text"
                        name="firstName"
                        id="firstName"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.firstName}
                      />
                      <FormError name="firstName" />
                    </FormLabel>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <FormLabel for="lastName" label="Nachname*">
                      <input
                        type="text"
                        name="lastName"
                        id="lastName"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.lastName}
                      />
                      <FormError name="lastName" />
                    </FormLabel>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <FormLabel for="gender" label="Geschlecht*">
                      <input
                        type="text"
                        name="gender"
                        id="gender"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.gender}
                      />
                      <FormError name="gender" />
                    </FormLabel>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <FormLabel for="birthday" label="Geburtstag*">
                      <input
                        type="date"
                        name="birthday"
                        id="birthday"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.birthday}
                      />
                      <FormError name="birthday" />
                    </FormLabel>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <FormLabel for="language" label="Muttersprache*">
                      <input
                        type="text"
                        name="language"
                        id="language"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.language}
                      />
                      <FormError name="language" />
                    </FormLabel>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <FormLabel for="nationality" label="Staatsangehörigkeit*">
                      <input
                        type="text"
                        name="nationality"
                        id="nationality"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.nationality}
                      />
                      <FormError name="nationality" />
                    </FormLabel>
                  </div>

                  <div className="col-span-6">
                    <FormLabel for="street" label="Straße*">
                      <input
                        type="text"
                        name="street"
                        id="street"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.street}
                      />
                      <FormError name="street" />
                    </FormLabel>
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <FormLabel for="zipCode" label="Postleitzahl*">
                      <input
                        type="text"
                        name="zipCode"
                        id="zipCode"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.zipCode}
                      />
                      <FormError name="zipCode" />
                    </FormLabel>
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <FormLabel for="city" label="Wohnort*">
                      <input
                        type="text"
                        name="city"
                        id="city"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.city}
                      />
                      <FormError name="city" />
                    </FormLabel>
                  </div>
                </FormContainer>
              </FormSection>

              <FormSection
                headline="Gewünschte Betreuung"
                description="Wie und wann können wir Ihnen bei der Betreuung Ihres Kindes helfen."
              >
                <FormContainer>
                  <h4 className="col-span-6 -mb-2 font-semibold">
                    Betreuungszeit, falls abweichend von Öffnungszeiten
                  </h4>
                  <div className="col-span-6">
                    <FormLabel
                      for="duringWeek"
                      label="Montag – Donnerstag (07:00 – 15:00 Uhr)"
                    >
                      <input
                        type="text"
                        name="duringWeek"
                        id="duringWeek"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.duringWeek}
                      />
                    </FormLabel>
                  </div>
                  <div className="col-span-6">
                    <FormLabel for="friday" label="Freitag (07:00 – 14:00 Uhr)">
                      <input
                        type="text"
                        name="friday"
                        id="friday"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.friday}
                      />
                    </FormLabel>
                  </div>

                  <h4 className="col-span-6 -mb-2 font-semibold">
                    Gewünschter Betreuungsbeginn*
                  </h4>
                  <div className="col-span-6">
                    <FormLabel for="begin" label="Monat, Jahr">
                      <input
                        type="text"
                        name="begin"
                        id="begin"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.begin}
                      />
                      <FormError name="begin" />
                    </FormLabel>
                  </div>
                </FormContainer>
              </FormSection>

              <FormSection
                headline="Sorgeberechtigte /er"
                description="Alles was wir über Sie wissen sollten."
              >
                <FormContainer>
                  <div className="col-span-6 sm:col-span-3">
                    <FormLabel for="parentFirstName" label="Vorname*">
                      <input
                        type="text"
                        name="parentFirstName"
                        id="parentFirstName"
                        autoComplete="given-name"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.parentFirstName}
                      />
                      <FormError name="parentFirstName" />
                    </FormLabel>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <FormLabel for="parentLastName" label="Nachname*">
                      <input
                        type="text"
                        name="parentLastName"
                        id="parentLastName"
                        autoComplete="family-name"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.parentLastName}
                      />
                      <FormError name="parentLastName" />
                    </FormLabel>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <FormLabel for="parentPhone" label="Telefonnummer*">
                      <input
                        type="text"
                        name="parentPhone"
                        id="parentPhone"
                        autoComplete="phone"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.parentPhone}
                      />
                      <FormError name="parentPhone" />
                    </FormLabel>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <FormLabel for="email" label="Email*">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      <FormError name="email" />
                    </FormLabel>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <FormLabel for="parentLanguage" label="Muttersprache*">
                      <input
                        type="text"
                        name="parentLanguage"
                        id="parentLanguage"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.parentLanguage}
                      />
                      <FormError name="parentLanguage" />
                    </FormLabel>
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <FormLabel
                      for="parentNationality"
                      label="Staatsangehörigkeit*"
                    >
                      <input
                        type="text"
                        name="parentNationality"
                        id="parentNationality"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.parentNationality}
                      />
                      <FormError name="parentNationality" />
                    </FormLabel>
                  </div>

                  <div className="col-span-6">
                    <FormLabel for="job" label="Berufstätigkeit*">
                      <input
                        type="text"
                        name="job"
                        id="job"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.job}
                      />
                      <FormError name="job" />
                    </FormLabel>
                  </div>

                  <div className="col-span-6">
                    <FormLabel
                      for="parentStreet"
                      label="Straße (falls abweichend)"
                    >
                      <input
                        type="text"
                        name="parentStreet"
                        id="parentStreet"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.parentStreet}
                      />
                    </FormLabel>
                  </div>

                  <div className="col-span-6 sm:col-span-2">
                    <FormLabel for="parentZipCode" label="Postleitzahl">
                      <input
                        type="text"
                        name="parentZipCode"
                        id="parentZipCode"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.parentZipCode}
                      />
                    </FormLabel>
                  </div>

                  <div className="col-span-6 sm:col-span-4">
                    <FormLabel for="parentCity" label="Wohnort">
                      <input
                        type="text"
                        name="parentCity"
                        id="parentCity"
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.parentCity}
                      />
                    </FormLabel>
                  </div>
                </FormContainer>
              </FormSection>

              <FormSection
                headline="Fast Geschafft"
                description="Gibt es noch was wir wissen sollten? Und dann fehlt nur noch der Datenschutz und Ihre Anmeldung ist fertig! "
              >
                <FormContainer>
                  <div className="col-span-6">
                    <FormLabel
                      for="comments"
                      label="Was Sie uns noch sagen wollten"
                    >
                      <textarea
                        name="comments"
                        id="comments"
                        rows={5}
                        className={inputClasses}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.comments}
                      />
                    </FormLabel>
                  </div>
                  <div className="flex col-span-6">
                    <input
                      className="block w-1/12 mt-2 mr-2 sm:w-auto"
                      type="checkbox"
                      name="data"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.data}
                    />
                    <label
                      htmlFor="data"
                      className="w-11/12 text-sm sm:w-full text-stone-800"
                    >
                      Hiermit erkläre ich mich einverstanden, dass meine in das
                      Kontaktformular eingegebenen Daten elektronisch
                      gespeichert und zum Zweck der Kontaktaufnahme verarbeitet
                      und genutzt werden. Mir ist bekannt, dass ich meine
                      Einwilligung jederzeit widerrufen kann.
                      <FormError name="data" />
                    </label>
                  </div>
                </FormContainer>
              </FormSection>

              <div className="flex flex-row justify-end pt-8">
                {formSubmitted ? (
                  <p className="text-right text-bg-200">
                    Danke für Ihre Anfrage. Wir werden uns so bald wie Möglich
                    bei Ihnen melden!
                  </p>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white border border-transparent rounded-md shadow-sm bg-accent-600 hover:bg-accent-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-bg-500"
                  >
                    {isSubmitting
                      ? "Form wird gesendet"
                      : "Anmeldung Abschicken"}
                  </button>
                )}
              </div>
            </form>
          )}
        </Formik>
      </div>
    </div>
  );
}

export default Form;
