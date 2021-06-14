import React from "react";
import Navigation from "../partials/navigation";
import church from "../../assets/church (1).svg";
import bible from "../../assets/bible.svg";
import cross from "../../assets/cross.svg";
import shepherd1 from "../../assets/shepherd.svg";
import church_img from "../../assets/church_img.png";
import anniversary from "../../assets/51.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Home = () => {
  return (
    <div className="home">
      <div className="head" id="home">
        <div className="container">
          <div className="center-container">
            <Navigation />
            <header className="banner">
              <div className="left">
                <h1>
                  Welcome to Celestial Church of Christ, Eleyele Cathedral.
                </h1>
                <p></p>
                <a href="#send_us_a_message" className="send_message">
                  Send us a message
                </a>
              </div>
            </header>
          </div>
        </div>
      </div>
      <section className="church-vision" id="church-vision">
        <div className="container">
          <h1 className="title">The Vision of the Church.</h1>
          <div className="church-missions">
            <div className="a-mission">
              <img src={church} className="img" alt="church" />
              <p>
                The church came with a vision to cleanse the world through the
                proclamation of the good news of the messiah, Jesus Christ and
                the Kingdom of God.
              </p>
            </div>
            <div className="a-mission">
              <img src={bible} className="img" alt="bible" />
              <p>
                With the mighty name of Jesus Christ, the church was also raised
                to proclaim deliverance to those bound by the shackles of satan
                and bring healing to the brokenhearted, the sick and also
                restore hope to the hopeless.
              </p>
            </div>
            <div className="a-mission">
              <img src={cross} className="img" alt="cross" />
              <p>
                The church was also viewed to reinforce the faith of all, both
                the feable and the strong in the unfailing righteousness and
                faithfulness of God Almighty and Jesus Christ, our lord &
                saviour.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="harvest" id="harvest">
        <div className="container">
          <aside className="section-left">
            <h1 className="head-text">
              We invite you to our annual Adult Harvest Thanksgiving.
            </h1>
            <div className="design">
              <h1 className="hephzibah">
                Hephzibah <span className="d">2021</span>
              </h1>
              <div className="bible-passage">
                <p>
                  For Zion's sake I will not keep silent, for Jerusalem's sake I
                  will not remain quiet, till her righteousness shines out like
                  the dawn, her salvation like a blazing torch. The nations will
                  see your righteousness, and all kings your glory; you will be
                  called by a new name that the mouth of the LORD will bestow.
                </p>
                <h6>Isaiah 62 vs 4.</h6>
              </div>
            </div>
          </aside>
          <aside className="section-right">
            <img src={anniversary} alt="51st anniversary" />
          </aside>
        </div>
      </section>
      <section className="shepherd">
        <div className="container">
          <h1 className="title">Shepherd in charge.</h1>
          <h4>A/V/S/E Sunday I Odiagbe.</h4>

          <div className="container">
            {/* shepherd image */}
            <img src={shepherd1} alt="shepherd in charge" />
          </div>
        </div>
      </section>
      <section className="church-history" id="church-history">
        <div className="container">
          <h1 className="title">History of the Church.</h1>
          <div className="content">
            <aside className="left">
              <p>
                We bless Jehovah our creator and Jesus christ our saviour that
                saw us through our journey from 1970 till date, and has given us
                the opportunity to celebrate the 50th Golden Jubilee of this
                great Church. We believe Jehovah will continue to be with us now
                and forever. Celestia Church of Christ, Eleyele Cathedral Ibadan
                was established.......
              </p>

              <a href="continue-reading" className="continue-reading">
                Continue reading
              </a>
            </aside>
            <aside className="right">
              <img src={church_img} alt="eleyele church" />
            </aside>
          </div>
        </div>
      </section>

      <section className="weekly-events" id="weekly-events">
        <div className="container">
          <h1 className="title">Weekly Events.</h1>
          <div className="events-container">
            <div className="events">
              <div className="event">
                <h4>Monday.</h4>
                <div className={`sub-events`}>
                  <ul>
                    <li>
                      Consultation <span>9am</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="event">
                <h4>Tuesday.</h4>
                <div className={`sub-events`}>
                  <ul>
                    <li>
                      Victory day prayer. <span>9am</span>
                    </li>
                    <li>
                      Consultation <span>11am</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="event">
                <h4>Wednesday.</h4>
                <div className={`sub-events`}>
                  <ul>
                    <li>
                      Service for the needy. <span>9am</span>
                    </li>
                    <li>
                      Evening Service. <span>6pm</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="event">
                <h4>Thursday.</h4>
                <div className={`sub-events`}>
                  <ul>
                    <li>
                      Consultation <span>9am</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="event">
                <h4>Friday.</h4>
                <div className={`sub-events`}>
                  <ul>
                    <li>
                      Prophet and prophetess service. <span>12pm</span>
                    </li>
                    <li>
                      Service for the Pregnant. <span>3pm</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="event">
                <h4>Saturday.</h4>
                <div className={`sub-events`}>
                  <ul>
                    <li>
                      Cleaning of the Church. <span>Morning</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="event">
                <h4>Sunday.</h4>
                <div className={`sub-events`}>
                  <ul>
                    <li>
                      Sunday School. <span>9:30am</span>
                    </li>
                    <li>
                      Sunday Service. <span>10am</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="gallery"></section> */}
      <section className="contact" id="send_us_a_message">
        <div className="container">
          <div className="left-image">
            <h1>We would love to hear from you.</h1>
          </div>
          <div className="form-container">
            <h3>Send us a message.</h3>
            <form>
              <div className="input-container">
                <input type="text" placeholder="Your name or organisation" />
              </div>
              <div className="input-container">
                <input type="text" placeholder="Reason" />
              </div>
              <div className="input-container">
                <textarea placeholder="your message"></textarea>
              </div>
              <div>
                <button className="submit">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <ul className="navigation-link">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#home">Church History</a>
            </li>
            <li>
              <a href="#home">Vision</a>
            </li>
            <li>
              <a href="#home">Contact</a>
            </li>
            <li>
              <a href="#home">Shepherd</a>
            </li>
          </ul>
          <ul className="socials">
            <li>
              <a href="https://www.facebook.com">
                <FaFacebook /> Facebook
              </a>
            </li>
            <li>
              <a href="https://www.twitter.com">
                <FaTwitter /> Twitter
              </a>
            </li>
            <li>
              <a href="https://www.facebook.com">
                <FaInstagram /> Instagram
              </a>
            </li>
          </ul>
          <ul
            style={{
              textAlign: "center",
              fontSize: "14px",
              color: "#fff",
            }}
          >
            <li>Yekini Oladiti street, Off Benjamin Street, Eleyele, Ibadan</li>
            <li>(+234) 08033028582, (+234) 08024152469</li>
            <li>&copy;eleyelecathedral.com {new Date().getFullYear()}</li>
          </ul>
        </div>
      </footer>
    </div>
  );
};

export default Home;
