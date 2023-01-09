import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useState, useEffect } from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"

import calender from "./assets/calendar.png"
import logo from "./assets/logo.png"
import header_bg from "./assets/header_bg.png"
import header_right_bg from "./assets/header_right_bg.png"
import header_text_bg from "./assets/header_text_bg.png"
import middle_bg_image from "./assets/middle_bg_image.png"
import middle_bg_image_2 from "./assets/fixing_a_spring.jpg"
import middle_bg_image_3 from "./assets/middle_bg_image_3.png"
import hours from "./assets/hours.png"
import backintime from "./assets/back-in-time.png"
import licensing from "./assets/licensing.png"
import ratting from "./assets/rating.png"
import warehouse from "./assets/warehouse.png"
import team from "./assets/team.png"
import garage from "./assets/garage.png"
import quote from "./assets/quote.png"
import star from "./assets/stars.png"
import ceo from "./assets/ceo.png"
import logoBlack from "./assets/logo-black.png"
import "jquery/dist/jquery.min.js"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faMinus,faPhone } from "@fortawesome/free-solid-svg-icons"
import { flip, popper } from "@popperjs/core"
import { withPrefix } from "gatsby"
import Helmet from "react-helmet"

const IndexPage = () => {
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${7} times`
  })
  const [faq, setfaq] = useState([false, false, false, false])
  function hadnleFaq(index) {
    let temp = [...faq]
    temp[index] = !temp[index]
    setfaq(temp)
    // alert(index)
  }
  return (
    <>
      <Helmet>
        <script src={withPrefix("jquery.js")}></script>
        <script
          src={withPrefix("popper.js")}
        ></script>
        <script
          src={"bootstrap.js"}
        ></script>
        <script src={withPrefix("script.js")} type="text/javascript" defer />
      </Helmet>
      <div className="container-fluid">
        <nav className="navbar navbar-expand-md navbar-light pt-4 pr-5 pl-5">
          <a className="navbar-brand" href="#">
            <img src={logo} height={60} alt="" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mr-auto" />
            <ul className="navbar-nav" style={{ fontWeight: "bold" }}>
              <li className="nav-item px-4">
                <a className="nav-link" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item  px-4">
                <a className="nav-link" href="#">
                  About Us
                </a>
              </li>
              <li className="nav-item  px-4">
                <a className="nav-link" href="#">
                  Services
                </a>
              </li>
              <li className="nav-item  px-4">
                <a className="nav-link" href="#">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="row">
          <div
            className="col-md-5  align-self-center"
            style={{ padding: "0px" }}
          >
            <img
              className="img-fluid"
              style={{ minWidth: "121%" }}
              src={header_text_bg}
              alt=""
            />
            {/* <div
              style={{
                position: "absolute",
                bottom: "50%",
                right: "30%",
                color: "white",
              }}
            >
              <h1 style={{ fontSize: "60px", fontWeight: "bold" }}>
                AGS Doors
              </h1>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "65%",
                right: "40%",
                color: "white",
              }}
            >
              <p>Get it done right within an hour</p>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "35%",
                right: "29%",
                color: "white",
              }}
            >
              <p>American Service Garage Doors and Gates:</p>
              <br />
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "34%",
                right: "29%",
                color: "white",
              }}
            >
              <p>Experts at your service!</p>
            </div> */}
             <div
              style={{
                position: "absolute",
                bottom: "50%",
                right: "30%",
                color: "white",
                top:"30%"
              }}
            >
              <p style={{top:"10px", marginLeft:10, fontSize:"16px"}} className="popin">Get it done right within one hour</p>
              <h1 style={{ top:"20px",fontSize:72}}>ASG DOORS</h1>
              <p className="popin" style={{fontSize:18}}>American Service Garage Doors and Gates:</p>
              <p style={{fontSize:18}}  className="popin">Experts at your service!</p>
              <button
                style={{
                  backgroundColor: "#fff !important",
                  color: "#2d5fa3",
                  borderColor: "#fff",
                  fontWeight: "bold",
                }}
                type="button"
                className="btn btn-primary mt-3 px-4 py-2 white"
              >
                <FontAwesomeIcon icon={faPhone} transform={{ rotate: 90 }} />
                +456985-632
              </button>
            </div>
            <div
              style={{
                position: "absolute",
                bottom: "23%",
                right: "51%",
                color: "white",
              }}
            >
             
            </div>
          </div>
          <div className="col-md-7" style={{ padding: "0px" }}>
            <img
              className="img-fluid"
              style={{ marginLeft: "-3.6%", minWidth: "103.6%" }}
              src={header_right_bg}
              alt=""
            />
          </div>
        </div>
        <div className="row mt-5">
          <div className="col-md-4 offset-4">
            <h3
              className="abril"
              style={{
                textAlign: "center",
                fontWeight: "bolder",
                fontSize: "1.8rem",
              }}
            >
              Repairs By ASG Doors and Gates It's What We Do Best!
            </h3>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-5" style={{ padding: "0px" }}>
            <img className="img-fluid" src={middle_bg_image} alt="" style={{
              marginLeft:"-15px",
              marginBottom:"-15px"
            }} />
          </div>
          <div className="col-md-1" />
          <div className="col-md-5 os">
            <p
              style={{
                marginLeft: "-9%",
                textAlign: "justify",
                fontSize: "16px",
              }}
            >
              When you think about a garage door, what comes to mind? This
              simple feature to your home or commercial building really has two
              important jobs: going up and coming down. They really don't have
              much character than that, do they? But neither does a body guard
              until you need their service, or if one isn't around when you
              really need them to be.
              <br />
              <br />
              This simple feature of any home or building may not have much else
              to do, but it's performing a very important function: Keeping you,
              your family, your home and your possessions safe and secure. They
              keep out intruders of all kinds: People, pests, and unwelcome
              weather. It's only when they stop doing their rather simple job
              (go up, come down!), that you realize how important the role
              really is. And how much you take for granted that they can go up
              and down with the click of a few buttons.
              <br />
              <br />
              At American Service Garage Doors and Gates, we operate with your
              safety and a high standard of service in mind. We are licensed
              experts who are knowledgeable on exactly what you need, and can
              get the job done right. Garage doors and gates may be rather bland
              to anyone else, but it's all that we do, all day, every day, here
              at ASG Doors and Gates.
            </p>
            <button
              style={{
                marginLeft: "-9%",
                fontWeight: "bold",
                backgroundColor: "#1a519b",
                width:264.75
              }}
              type="button"
              className="btn btn-primary mt-3 px-4 py-2"
            >
              Our Services
            </button>
          </div>
        </div>
        <div className="row abril" style={{ backgroundColor: "#25b0ff" }}>
          {/* 25b0ff */}
          <div className="col-md-10 offset-1">
            <h2
              className="mt-4 abril"
              style={{ textAlign: "center", color: "#fff" }}
            >
              What makes us your best choice?
            </h2>
            <div className="row mt-5">
              <div className="col-md-4  px-5" style={{ textAlign: "center" }}>
                <img className="img-fluid" src={calender} alt="" />
                <h3 className="abril" style={{ color: "#fff" }}>
                  Same Day Service
                </h3>
                <p style={{ color: "#fff" }} className="roboto">
                  Our service is fast and reliable. Just fill out the form and
                  wait for someone to call in a matter of hours.
                </p>
              </div>
              <div className="col-md-4 px-5" style={{ textAlign: "center" }}>
                <img className="img-fluid" src={hours} alt="" />
                <h3 style={{ color: "#fff" }}>24/7 Support</h3>
                <p style={{ color: "#fff" }} className="roboto">
                  Our customer service support team is available around the
                  clock. Give us a call any day, any time.
                </p>
              </div>
              <div className="col-md-4 px-5" style={{ textAlign: "center" }}>
                <img className="img-fluid" src={licensing} alt="" />
                <h3 style={{ color: "#fff" }}>Licensed Expert</h3>
                <p style={{ color: "#fff" }} className="roboto">
                  All of the professionals within our network are licensed and
                  trained experts.
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-md-4  px-5" style={{ textAlign: "center" }}>
                <img className="img-fluid" src={backintime} alt="" />
                <h3 style={{ color: "#fff" }}>Repair within an Hour</h3>
                <p style={{ color: "#fff" }} className="roboto">
                  We work quickly and efficiently. This means that we come with
                  all of our tools, assess the problem, and complete the repair
                  within an hour.
                </p>
              </div>
              <div className="col-md-4 px-5" style={{ textAlign: "center" }}>
                <img className="img-fluid" src={team} alt="" />
                <h3 style={{ color: "#fff" }}>
                  Thousands of highly trained professionals
                </h3>
                <p style={{ color: "#fff" }} className="roboto">
                  A wide network means you receive prompt and efficient service.
                </p>
              </div>
              <div className="col-md-4 px-5" style={{ textAlign: "center" }}>
                <img className="img-fluid" src={ratting} alt="" />
                <h3 style={{ color: "#fff" }}>Rave reviews</h3>
                <p className="roboto" style={{ color: "#fff" }}>
                  How do you know to trust us without customer reviews? You
                  don't. We have many, many customer reviews for you to trust
                  instead. Don't take our word for it! See what others like you
                  have experienced.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="row pt-5 pb-5" style={{ backgroundColor: "#f0f4fd" }}>
          <div className="col-md-1" />
          <div className="col-md-5">
            <h2
              style={{ textAlign: "center", fontWeight: "bolder" }}
              className="mb-5"
            >
              Why Us?
            </h2>
            <p className="roboto" style={{ textAlign: "justify" }}>
              When you need your door repaired or installed, you need it done
              now and that makes it difficult to vet out the real professionals
              from the amateurs. A quick search on the Internet shows many local
              professionals and companies who claim to know how to do the job,
              but did you know that garage door repairs is a licensable trade?
              There is enough to the matter that requires mechanical and
              electrical training to know how to properly fix or install an
              electric garage door. But since anyone can technically post a
              service ad and claim to be an expert, you could potentially hire
              someone without really knowing their experience level. Often this
              is precisely what happens.
              <br />
              <br />
              American Service Garage Doors and Gates was born to remedy this
              very gap in the industry. Not only are we licensed and have the
              experience and professionalism to do the job right, we also have
              thousands of positive reviews from customers just like you. This
              means you can take the guess-work right out of wondering if we're
              fit for the job — we literally have the references right at the
              tip of your fingers to show you that we do!
              <br />
              <br />
              At ASG Doors and Gates, we are licensed professionals with years
              of experience fixing all kinds of garage doors. When you reach out
              to us, we assess the problem and schedule the closest same-day
              appointment. Then we show up to get the job done right the first
              time around, all within the hour. Our service is available 24/7,
              and we pride ourselves for the value we provide to our customers.
              All this for a fraction of the cost you would end up spending with
              anyone else.
            </p>
            <button
              style={{ fontWeight: "bold" }}
              type="button"
              className="btn btn-primary mt-3 px-4 py-2"
            >
              Book a Services
            </button>
          </div>
          <div className="col-md-1" />
          <div className="col-md-5" style={{ padding: "0px" }}>
            <img className="img-fluid" src={middle_bg_image_2} alt="" />
          </div>
        </div>
        <div className="row" style={{ marginTop: "-40px" }}>
          <div
            className="col-md-5"
            style={{ padding: "0px", position: "relative" }}
          >
            <img className="img-fluid" src={middle_bg_image_3} alt="" />
            <div
              style={{
                position: "absolute",
                bottom: "50%",
                right: "30%",
                color: "white",
              }}
            >
              <h1 style={{ fontWeight: "bold" }}>Our Services</h1>
            </div>
          </div>
          <div className="col-md-1" />
          <div className="col-md-5">
            <div className="pt-5">
              <img
                className="img-fluid p-3"
                style={{ backgroundColor: "#081221" }}
                src={warehouse}
                alt=""
              />
              <h4 className="pt-4 popins" style={{ fontWeight: "bold" }}>
                Residential Garage Doors
              </h4>
              <p className="popins">
                Whether you are a homeowner or tenant, having a faulty garage
                door can be worrisome. Get in touch with us to have your door
                repaired quickly and efficiently.
              </p>
            </div>
            <div className="pt-5">
              <img
                className="img-fluid p-3"
                style={{ backgroundColor: "#081221" }}
                src={garage}
                alt=""
              />
              <h4 className="pt-4 popins" style={{ fontWeight: "bold" }}>
                Commercial Garage Doors
              </h4>
              <p className="popins">
                There are added levels of security and safety concerns related
                to garage doors in commercial establishments. Whether you are
                the owner of the building, security personnel, or building
                management the longer that door remains inoperable or faulty,
                the greater the consequences to yourself and others. Everything
                from occupant and visitor convenience to the buildings safety
                and security are jeopardized. We understand the predicament and
                will work with you to prioritize your needs.
              </p>
            </div>
          </div>
        </div>
        <div className="row pt-5 pb-5">
          <div className="col-md-10 offset-1">
            <h2
              style={{ textAlign: "center", fontWeight: "bolder" }}
              className="mb-5"
            >
              FAQs
            </h2>
            <div
              className="panel-group"
              id="accordion"
              role="tablist"
              aria-multiselectable="true"
            >
              <div className="panel panel-default border  border-dark mb-4">
                <div className="panel-heading" role="tab" id="headingFour">
                  <h4
                    className="panel-title  p-2"
                    style={{ marginBottom: "0px" }}
                  >
                    <a
                      onClick={() => hadnleFaq(0)}
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseOne"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      style={{
                        color: "black",
                        fontSize: "17px",
                        fontWeight: "bold",
                      }}
                    >
                      {/* <i className="more-less fa fa-plus" /> */}
                      <FontAwesomeIcon
                        className="more-less"
                        icon={faq[0] ? faMinus : faPlus}
                      ></FontAwesomeIcon>
                      My door stopped working and it's pretty late at night. Can
                      you have someone over now?
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseOne"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingFour"
                >
                  <div className="panel-body p-3 roboto">
                    Absolutely! We understand that emergencies don't arrive
                    announced, so we are ready to get to work as soon as we
                    reasonably can. Fill out the form or give us a call to
                    discuss the issue.
                  </div>
                </div>
              </div>
              <div className="panel panel-default border  border-dark mb-4">
                <div className="panel-heading" role="tab" id="headingOne">
                  <h4
                    className="panel-title  p-2"
                    style={{ marginBottom: "0px" }}
                  >
                    <a
                      onClick={() => hadnleFaq(1)}
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseTwo"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      style={{
                        color: "black",
                        fontSize: "17px",
                        fontWeight: "bold",
                      }}
                    >
                      <FontAwesomeIcon
                        className="more-less"
                        icon={faq[1] ? faMinus : faPlus}
                      ></FontAwesomeIcon>
                      I have a really old garage door. Are you able to repair
                      it?
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseTwo"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                >
                  <div className="panel-body p-3 rooto">N/A</div>
                </div>
              </div>
              <div className="panel panel-default border  border-dark mb-4">
                <div className="panel-heading" role="tab" id="headingTwo">
                  <h4
                    className="panel-title  p-2"
                    style={{ marginBottom: "0px" }}
                  >
                    <a
                      onClick={() => hadnleFaq(2)}
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseThree"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      style={{
                        color: "black",
                        fontSize: "17px",
                        fontWeight: "bold",
                      }}
                    >
                      <FontAwesomeIcon
                        className="more-less"
                        icon={faq[2] ? faMinus : faPlus}
                      ></FontAwesomeIcon>
                      Are you licensed?
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseThree"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingTwo"
                >
                  <div className="panel-body p-3" roboto>N/A</div>
                </div>
              </div>
              <div className="panel panel-default border  border-dark mb-4">
                <div className="panel-heading" role="tab" id="headingThree">
                  <h4
                    className="panel-title  p-2"
                    style={{ marginBottom: "0px" }}
                  >
                    <a
                      onClick={() => hadnleFaq(3)}
                      role="button"
                      data-toggle="collapse"
                      data-parent="#accordion"
                      href="#collapseFour"
                      aria-expanded="true"
                      aria-controls="collapseOne"
                      style={{
                        color: "black",
                        fontSize: "17px",
                        fontWeight: "bold",
                      }}
                    >
                      <FontAwesomeIcon
                        className="more-less"
                        icon={faq[3] ? faMinus : faPlus}
                      ></FontAwesomeIcon>
                      How can I get someone to call me for what I need?
                    </a>
                  </h4>
                </div>
                <div
                  id="collapseFour"
                  className="panel-collapse collapse"
                  role="tabpanel"
                  aria-labelledby="headingThree"
                >
                  <div className="panel-body p-3 roboto">N/A</div>
                </div>
              </div>
            </div>
            <div style={{ textAlign: "center" }}>
              <button
                style={{ fontWeight: "bold" }}
                type="button"
                className="btn btn-primary mt-3 px-4 py-2"
              >
                Get a quote now!
              </button>
            </div>
          </div>
        </div>
        {/* Scroller */}
        <div className="mt-4 os" >
          <h3 style={{ textAlign: "center", fontWeight: "bold" }}>
            What Out Customer Says
          </h3>
          <div className="row mx-auto my-auto pt-5">
            <div
              id="recipeCarousel"
              className="carousel slide"
              data-ride="carousel"
            >
              <div className="carousel-inner" role="listbox">
                <div className="carousel-item active pl-2">
                  <div className="col-md-4">
                    <div
                      className="card card-body"
                      style={{ border: "0px", backgroundColor: "#081221" }}
                    >
                      <img
                        className="img-fluid"
                        style={{ alignSelf: "flex-start" }}
                        src={quote}
                      />
                      <p className="py-4" style={{ color: "#fff" }}>
                        I called on a Saturday and the service men came in
                        within hours to do the job. Excellent work and really
                        professional!
                      </p>
                      <img
                        className="img-fluid"
                        style={{ alignSelf: "flex-start" }}
                        src={star}
                      />
                      <div className="row">
                        <div className="col-md-2 os">
                          <img
                            className="img-fluid pt-2"
                            style={{ alignSelf: "flex-start" }}
                            src={ceo}
                          />
                        </div>
                        <div className="col-md-10 mt-3">
                          <strong
                            style={{ alignSelf: "center", color: "#fff" }}
                          >
                            Joe Martin
                          </strong>
                          <br />
                          <label style={{ color: "#fff" }}>CEO</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item pl-2">
                  <div className="col-md-4">
                    <div
                      className="card card-body"
                      style={{ border: "0px", backgroundColor: "#081221" }}
                    >
                      <img
                        className="img-fluid"
                        style={{ alignSelf: "flex-start" }}
                        src={quote}
                      />
                      <p className="py-4" style={{ color: "#fff" }}>
                      They delivered on their promise. Arrived on time and were done within the hour! Very professional.

                      </p>
                      <img
                        className="img-fluid"
                        style={{ alignSelf: "flex-start" }}
                        src={star}
                      />
                      <div className="row">
                        <div className="col-md-2">
                          <img
                            className="img-fluid pt-2"
                            style={{ alignSelf: "flex-start" }}
                            src={ceo}
                          />
                        </div>
                        <div className="col-md-10 mt-3">
                          <strong
                            style={{ alignSelf: "center", color: "#fff" }}
                          >
                            Joe Martin
                          </strong>
                          <br />
                          <label style={{ color: "#fff" }}>CEO</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="col-md-4">
                    <div
                      className="card card-body"
                      style={{ border: "0px", backgroundColor: "#081221" }}
                    >
                      <img
                        className="img-fluid"
                        style={{ alignSelf: "flex-start" }}
                        src={quote}
                      />
                      <p className="py-4" style={{ color: "#fff" }}>
                      Highly skilled people at ASG Doors and Gates! I will be recommending to my friends and family.
                      </p>
                      <img
                        className="img-fluid"
                        style={{ alignSelf: "flex-start" }}
                        src={star}
                      />
                      <div className="row">
                        <div className="col-md-2">
                          <img
                            className="img-fluid pt-2"
                            style={{ alignSelf: "flex-start" }}
                            src={ceo}
                          />
                        </div>
                        <div className="col-md-10 mt-3">
                          <strong
                            style={{ alignSelf: "center", color: "#fff" }}
                          >
                            Joe Martin
                          </strong>
                          <br />
                          <label style={{ color: "#fff" }}>CEO</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
              <a
                className="carousel-control-prev w-auto"
                href="#recipeCarousel"
                role="button"
                data-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon bg-dark border border-dark rounded-circle"
                  aria-hidden="true"
                />
                <span className="sr-only">Previous</span>
              </a>
              <a
                className="carousel-control-next w-auto"
                href="#recipeCarousel"
                role="button"
                data-slide="next"
              >
                <span
                  className="carousel-control-next-icon bg-dark border border-dark rounded-circle"
                  aria-hidden="true"
                />
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
        {/* Scroller finished */}
        <div
          className="row mt-5 custom-footer"
          style={{ backgroundColor: "#e5e3ff" }}
        >
          <div className="col-md-10 offset-1 mt-4">
            <div className="row">
              <div className="col-md-4">
                <img src={logoBlack} className="img-fluid p-3" alt="" />
                <p>
                  What makes us so awesome and why should you fill out that
                  form? Because we have thousands of satisfied customers to
                  vouch for our track record. Nothing beats consistently amazing
                  service, and we have the reviews to show for it.
                </p>
              </div>
              <div className="col-md-8 pl-5">
                <div className="row pb-4">
                  <div className="col-md-4">
                    <strong>Navigation</strong>
                  </div>
                  <div className="col-md-4">
                    <strong>Company</strong>
                  </div>
                  <div className="col-md-4">
                    <strong>Social</strong>
                  </div>
                </div>
                <div className="row pb-2">
                  <div className="col-md-4">
                    <strong>Home</strong>
                  </div>
                  <div className="col-md-4">
                    <strong>Contact Us</strong>
                  </div>
                  <div className="col-md-4">
                    <strong>Facebook</strong>
                  </div>
                </div>
                <div className="row pb-2">
                  <div className="col-md-4">
                    <strong>Services</strong>
                  </div>
                  <div className="col-md-4">
                    <strong>FAQs</strong>
                  </div>
                  <div className="col-md-4">
                    <strong>Instagram</strong>
                  </div>
                </div>
                <div className="row pb-2">
                  <div className="col-md-4">
                    <strong>About Us</strong>
                  </div>
                  <div className="col-md-4">
                    <strong />
                  </div>
                  <div className="col-md-4">
                    <strong>Google Plus</strong>
                  </div>
                </div>
                <div className="row pb-2">
                  <div className="col-md-4">
                    <strong>Book Service</strong>
                  </div>
                  <div className="col-md-4">
                    <strong />
                  </div>
                  <div className="col-md-4">
                    <strong>Twitter</strong>
                  </div>
                </div>
              </div>
            </div>
            <div className="row pt-5">
              <div className="col-md-3">
                <p style={{ fontWeight: "bold" }}>© 2021 All Rights Reserved</p>
              </div>
              <div className="col-md-5" />
              <div className="col-md-4 row">
                <p style={{ fontWeight: "bold" }}>Terms and Conditions</p>
                <p style={{ fontWeight: "bold" }} className="pl-4">
                  Privacy Policy
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default IndexPage
