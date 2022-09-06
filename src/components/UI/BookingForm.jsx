import React from "react";
import "../../styles/booking-form.css";
import { Form, FormGroup } from "reactstrap";

const BookingForm = () => {
  const submitHandler = (event) => {
    event.preventDefault();
  };
  return (
    <Form onSubmit={submitHandler}>
      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Adınız" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Soyadınız" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="email" placeholder="Email" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="number" placeholder="Telefon Numaranız" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="text" placeholder="Adresiniz" />
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <input type="text" placeholder="Teslimat Adresi" />
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <select name="" id="">
          <option value="1 person">1 Kişi</option>
          <option value="2 person">2 Kişi</option>
          <option value="3 person">3 Kişi</option>
          <option value="4 person">4 Kişi</option>
          <option value="5+ person">5+ Kişi</option>
        </select>
      </FormGroup>
      <FormGroup className="booking__form d-inline-block ms-1 mb-4">
        <select name="" id="">
          <option value="1 luggage">1 Bagaj</option>
          <option value="2 luggage">2 Bagaj</option>
          <option value="3 luggage">3 Bagaj</option>
          <option value="4 luggage">4 Bagaj</option>
          <option value="5+ luggage">5+ Bagaj</option>
        </select>
      </FormGroup>

      <FormGroup className="booking__form d-inline-block me-4 mb-4">
        <input type="date" placeholder="Yolculuk Tarihi" />
      </FormGroup>

      <FormGroup>
        <textarea
          rows={5}
          type="textarea"
          className="textarea"
          placeholder="Eklemek istediğiniz varsa yazın"
        ></textarea>
      </FormGroup>
    </Form>
  );
};

export default BookingForm;
