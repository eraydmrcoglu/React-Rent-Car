import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";

import "../styles/contact.css";

const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line",
  },
  {
    url: "#",
    icon: "ri-instagram-line",
  },
  {
    url: "#",
    icon: "ri-linkedin-line",
  },
  {
    url: "#",
    icon: "ri-twitter-line",
  },
];

const Contact = () => {
  return (
    <Helmet title="İletişim">
      <CommonSection title="İletişim" />
      <section>
        <Container>
          <Row>
            <Col lg="7" md="7">
              <h6 className="fw-bold mb-4">İletişimde kalalım</h6>

              <Form>
                <FormGroup className="contact__form">
                  <Input placeholder="İsminiz" type="text" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <Input placeholder="Email" type="email" />
                </FormGroup>
                <FormGroup className="contact__form">
                  <textarea
                    rows="5"
                    placeholder="Mesajınız"
                    className="textarea"
                  ></textarea>
                </FormGroup>

                <button className=" contact__btn" type="submit">
                  Mesajı Gönder
                </button>
              </Form>
            </Col>

            <Col lg="5" md="5">
              <div className="contact__info">
                <h6 className="fw-bold">İletişim bilgileri</h6>
                <p className="section__description mb-0">
                  Altunizade Mah. Üsküdar, İstanbul
                </p>
                <div className=" d-flex align-items-center gap-2">
                  <h6 className="fs-6 mb-0">Telefon:</h6>
                  <p className="section__description mb-0">+90 555 55 55</p>
                </div>

                <div className=" d-flex align-items-center gap-2">
                  <h6 className="mb-0 fs-6">Email:</h6>
                  <p className="section__description mb-0">demircioglurentcar@gmail.com</p>
                </div>

                <h6 className="fw-bold mt-4">Bizi Takip Edin</h6>

                <div className=" d-flex align-items-center gap-4 mt-3">
                  {socialLinks.map((item, index) => (
                    <Link
                      to={item.url}
                      key={index}
                      className="social__link-icon"
                    >
                      <i class={item.icon}></i>
                    </Link>
                  ))}
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Contact;
