import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Bannar.scss";

import fashionMan from "../../Assets/images/man.png";
import fashionWomen from "../../Assets/images/girl4.png";

function Bannar() {
  return (
    <div className="bannar">
      <Container>
        <Row>
          <Col md={6}>
            <div className="bannar__card card-shadow position-relative mb-4  me-2 bg-primary text-light rounded-3">
              <div className="card__content py-2 my-2 my-md-0 py-md-5 px-4 text-lg-start text-sm-start">
                <h5 className="text-light">Men's Fashion</h5>
                <h3 className="card__content__title text-bold">Up to 50%</h3>
                <Link
                  className="card__content__btn btn btn-outline-light mt-2"
                  to="/category/men's_clothing"
                >
                  Shop Now!
                </Link>
              </div>
              <img
                className="card__image position-absolute bottom-0 end-0"
                src={fashionMan}
                alt="fashion Man"
              />
            </div>
          </Col>
          <Col md={6}>
            <div className="bannar__card card-shadow position-relative mb-4 me-2 bg-secondary text-black rounded-3">
              <div className="card__content py-2 my-2 my-md-0 py-md-5 px-4 d-lg-flex justify-lg-content-center flex-lg-column align-items-lg-end text-lg-end text-sm-end text-xs-end">
                <h5 className="text-gray-800">Women's Fashion</h5>
                <h3 className="card__content__title text-bold">Up to 70%</h3>
                <Link
                  className="card__content__btn btn btn-outline-gray-800 mt-2"
                  to="/category/women's_clothing"
                >
                  Shop Now!
                </Link>
              </div>
              <img
                className="card__image position-absolute bottom-0"
                src={fashionWomen}
                alt="fashion Women"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Bannar;
