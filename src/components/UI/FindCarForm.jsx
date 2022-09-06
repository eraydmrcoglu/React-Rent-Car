import React from "react";
import "../../styles/find-car-form.css";
import "../../styles/find-car-form.css";
import { Form, FormGroup } from "reactstrap";

const FindCarForm = () => {
  return (
    <Form className="form">
      <div className=" d-flex align-items-center justify-content-between flex-wrap">
        <FormGroup className="form__group">
          <input type="text" placeholder="Teslim Alınacak Yer" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="text" placeholder="Teslim Edilecek Yer" required />
        </FormGroup>

        <FormGroup className="form__group">
          <input type="date" placeholder="Yolculuk Tarihi" required />
        </FormGroup>

        <FormGroup className="select__group">
          <select>
            <option value="ac">Klimalı Araba</option>
            <option value="non-ac">Klimasız Araba</option>
          </select>
        </FormGroup>

        <FormGroup className="form__group">
          <button className="btn find__car-btn">Araba Bul</button>
        </FormGroup>
      </div>
    </Form>
  );
};

export default FindCarForm;
