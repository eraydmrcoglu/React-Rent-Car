import React from "react";

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "Hakkımızda",
  },

  {
    path: "#",
    display: "Gizlilik Politikası",
  },

  {
    path: "/cars",
    display: "Arabalar",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "İletişim",
  },
];

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" md="4" sm="12">
            <div className="logo footer__logo">
              <h1>
                <Link to="/home" className=" d-flex align-items-center gap-2">
                  <i class="ri-car-line"></i>
                  <span>
                     Demircioğlu <br /> Rent Car
                  </span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              On binlerce misafirimiz strese ve masrafa girmeden demircioglurentcar.com’a girdi ve aradığı ideal aracı en uygun fiyat garantisi ile Demircioğlu Rent Car’da buldu.
            </p>
          </Col>

          <Col lg="2" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title">Daha Fazlası</h5>
              <ListGroup>
                {quickLinks.map((item, index) => (
                  <ListGroupItem key={index} className="p-0 mt-3 quick__link">
                    <Link to={item.path}>{item.display}</Link>
                  </ListGroupItem>
                ))}
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4" sm="6">
            <div className="mb-4">
              <h5 className="footer__link-title mb-4">Bizimle iletişime geçin</h5>
              <p className="office__info">Telefon: +90 555 555 55 55</p>
              <p className="office__info">Email: demircioglurentacar@gmail.com</p>
              <p className="office__info">Çalışma Saatlerimiz: 07:00-20:00</p>
            </div>
          </Col>

          <Col lg="12">
            <div className="footer__bottom">
              <p className="section__description d-flex align-items-center justify-content-center gap-1 pt-4">
                <i class="ri-copyright-line"></i>Copyright {year}. Tüm hakları saklıdır.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
