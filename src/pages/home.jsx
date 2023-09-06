import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import "./home.css";

const Home = () => {
  return (
    <div className="background py-5">
      <Container>
        <Row>
          <Col md={12}>
            <Card className="shadow">
              <Card.Body>
                <Row>
                  <Col md={4}>
                    <div className="rounded">
                      <iframe
                        width="100%"
                        height="200"
                        src="https://www.youtube.com/embed/qX6zmKY4KP0?si=9CE-Ls2i-S27PRO0&start=0&end=15"
                        title="YouTube Video"
                        frameborder="0"
                        allowfullscreen
                      ></iframe>
                    </div>
                  </Col>
                  <Col md={8}>
                    <h3>Complete Web & Mobile Developer Guide in 2023</h3>
                    <div className="d-flex my-3">
                      <div className="border border-primary mr-2 rounded p-2">
                        23 Mins
                      </div>
                      <div className="border border-primary mx-2 rounded p-2">
                        David Mathew
                      </div>
                    </div>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Nostrum ab exercitationem, numquam dolor molestiae cum
                      enim, in cumque voluptate totam voluptas pariatur ipsam
                      saepe tempore praesentium reiciendis quidem dolore? Eius
                      sunt temporibus sed veritatis reiciendis id nulla,
                      quisquam saepe est ipsa quam, reprehenderit quis quasi?
                      Totam optio ducimus ipsum nam?
                    </p>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
