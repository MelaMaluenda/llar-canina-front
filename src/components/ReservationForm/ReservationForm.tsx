import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import ReservationFormStyled from "./ReservationFormStyled";

const ReservationForm: React.FC = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({
    nombreHumano: "",
    nombrePerro: "",
    edadPerro: 0,
    correo: "",
    telefono: "",
    fechaInicio: "",
    fechaFin: "",
    horaInicio: "",
    horaFin: "",
    primeraVez: "",
    tieneBono: "",
    acercaDelPerro: "",
    tamañoPerro: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    const formattedForm = {
      ...form,
      fechaInicio: new Date(form.fechaInicio).toLocaleDateString(
        "es-ES",
        options,
      ),
      fechaFin: form.fechaFin
        ? new Date(form.fechaFin).toLocaleDateString("es-ES", options)
        : "",
    };

    try {
      const response = await fetch("https://formspree.io/f/mwpebepr", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formattedForm),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        setError(t("form.errorMessage"));
      }
    } catch (error) {
      setError(t("form.errorMessage"));
    }
  };

  return (
    <ReservationFormStyled>
      <div className="reservation-form__container">
        <h1 className="reservation-form__title">
          {t("form.reservationTitle")}
        </h1>
        <p className="reservation-form__description">
          {t("form.reservationDescription")}
        </p>
        {submitted ? (
          <p className="reservation-form__confirmation">
            {t("form.successMessage")}
          </p>
        ) : (
          <form className="reservation-form__form" onSubmit={handleSubmit}>
            {error && <p className="reservation-form__error">{error}</p>}

            <div className="reservation-form__group">
              <label className="reservation-form__label" htmlFor="nombreHumano">
                {t("form.humanName")}
              </label>
              <input
                className="reservation-form__input"
                type="text"
                id="nombreHumano"
                name="nombreHumano"
                value={form.nombreHumano}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reservation-form__group">
              <label className="reservation-form__label" htmlFor="nombrePerro">
                {t("form.dogName")}
              </label>
              <input
                className="reservation-form__input"
                type="text"
                id="nombrePerro"
                name="nombrePerro"
                value={form.nombrePerro}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reservation-form__group">
              <label className="reservation-form__label">
                {t("form.dogSize")} {/* Traducción de "Tamaño del Perro" */}
              </label>
              <div className="reservation-form__radio-group">
                <div className="reservation-form__circle">
                  <input
                    className="reservation-form__input reservation-form__input--circle"
                    type="radio"
                    id="tamañoGrande"
                    name="tamañoPerro"
                    value="grande"
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="tamañoGrande">{t("form.large")}</label>
                </div>
                <div className="reservation-form__circle">
                  <input
                    className="reservation-form__input reservation-form__input--circle"
                    type="radio"
                    id="tamañoMediano"
                    name="tamañoPerro"
                    value="mediano"
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="tamañoMediano">{t("form.medium")}</label>
                </div>
                <div className="reservation-form__circle">
                  <input
                    className="reservation-form__input reservation-form__input--circle"
                    type="radio"
                    id="tamañoPequeño"
                    name="tamañoPerro"
                    value="pequeño"
                    onChange={handleChange}
                    required
                  />
                  <label htmlFor="tamañoPequeño">{t("form.small")}</label>
                </div>
              </div>
            </div>

            <div className="reservation-form__group">
              <label className="reservation-form__label" htmlFor="edadPerro">
                {t("form.dogAge")}
              </label>
              <input
                className="reservation-form__input age"
                type="range"
                id="edadPerro"
                name="edadPerro"
                min="0"
                max="20"
                value={form.edadPerro}
                onChange={handleChange}
                required
              />
              <span>{form.edadPerro}</span>
            </div>

            <div className="reservation-form__group">
              <label className="reservation-form__label" htmlFor="correo">
                {t("form.email")}
              </label>
              <input
                className="reservation-form__input"
                type="email"
                id="correo"
                name="correo"
                value={form.correo}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reservation-form__group">
              <label className="reservation-form__label" htmlFor="telefono">
                {t("form.phone")}
              </label>
              <input
                className="reservation-form__input"
                type="tel"
                id="telefono"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reservation-form__group">
              <label className="reservation-form__label" htmlFor="fechaInicio">
                {t("form.startDate")}
              </label>
              <input
                className="reservation-form__input"
                type="date"
                id="fechaInicio"
                name="fechaInicio"
                value={form.fechaInicio}
                onChange={handleChange}
                required
              />
            </div>

            <div className="reservation-form__group">
              <label className="reservation-form__label" htmlFor="fechaFin">
                {t("form.endDate")}
              </label>
              <input
                className="reservation-form__input"
                type="date"
                id="fechaFin"
                name="fechaFin"
                value={form.fechaFin}
                onChange={handleChange}
              />
            </div>

            <div className="reservation-form__time-container">
              <div className="reservation-form__group">
                <label className="reservation-form__label" htmlFor="horaInicio">
                  {t("form.startTime")}
                </label>
                <input
                  className="reservation-form__input reservation-form__input--half"
                  type="time"
                  id="horaInicio"
                  name="horaInicio"
                  value={form.horaInicio}
                  onChange={handleChange}
                  step={900}
                  required
                />
              </div>
              <div className="reservation-form__group">
                <label className="reservation-form__label" htmlFor="horaFin">
                  {t("form.endTime")}
                </label>
                <input
                  className="reservation-form__input reservation-form__input--half"
                  type="time"
                  id="horaFin"
                  name="horaFin"
                  value={form.horaFin}
                  onChange={handleChange}
                  step={900}
                  required
                />
              </div>
            </div>

            <div className="reservation-form__row">
              <label className="reservation-form__label">
                {t("form.isFirstTime")}
              </label>
              <div className="reservation-form__radio-group">
                <div className="reservation-form__circle">
                  <input
                    className="reservation-form__input reservation-form__input--circle"
                    type="radio"
                    id="primeraVezYes"
                    name="primeraVez"
                    value="yes"
                    onChange={handleChange}
                  />
                  <label htmlFor="primeraVezYes">{t("form.yes")}</label>
                </div>
                <div className="reservation-form__circle">
                  <input
                    className="reservation-form__input reservation-form__input--circle"
                    type="radio"
                    id="primeraVezNo"
                    name="primeraVez"
                    value="no"
                    onChange={handleChange}
                  />
                  <label htmlFor="primeraVezNo">{t("form.no")}</label>
                </div>
              </div>
            </div>

            <div className="reservation-form__row">
              <label className="reservation-form__label">
                {t("form.hasBono")}
              </label>
              <div className="reservation-form__radio-group">
                <div className="reservation-form__circle">
                  <input
                    className="reservation-form__input reservation-form__input--circle"
                    type="radio"
                    id="tieneBonoYes"
                    name="tieneBono"
                    value="yes"
                    onChange={handleChange}
                  />
                  <label htmlFor="tieneBonoYes">{t("form.yes")}</label>
                </div>
                <div className="reservation-form__circle">
                  <input
                    className="reservation-form__input reservation-form__input--circle"
                    type="radio"
                    id="tieneBonoNo"
                    name="tieneBono"
                    value="no"
                    onChange={handleChange}
                  />
                  <label htmlFor="tieneBonoNo">{t("form.no")}</label>
                </div>
              </div>
            </div>

            <div className="reservation-form__group">
              <label
                className="reservation-form__label"
                htmlFor="acercaDelPerro"
              >
                {t("form.aboutDog")}
              </label>
              <textarea
                className="reservation-form__textarea"
                id="acercaDelPerro"
                name="acercaDelPerro"
                value={form.acercaDelPerro}
                onChange={handleChange}
              />
            </div>

            <button className="reservation-form__button" type="submit">
              {t("form.submit")}
            </button>
          </form>
        )}
      </div>
    </ReservationFormStyled>
  );
};

export default ReservationForm;
