import React, { useContext, useState } from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import { illustration, contactInfo } from "../../portfolio";
import { Fade } from "react-reveal";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";
import easterEggPhoto from "../../assets/images/me_and_ashish_vaswani.jpeg"; // ✅ 이미지 import

export default function Contact() {
  const { isDark } = useContext(StyleContext);
  const [showPhoto, setShowPhoto] = useState(false); // ✅ 상태 정의

  return (
    <Fade bottom duration={1000} distance="20px">
      <div className="main contact-margin-top" id="contact">
        <div className="contact-div-main">
          <div className="contact-header">
            <h1 className="heading contact-title">{contactInfo.title}</h1>
            <p
              className={
                isDark
                  ? "dark-mode contact-subtitle"
                  : "subTitle contact-subtitle"
              }
            >
              {contactInfo.subtitle}
            </p>
            <div
              className={
                isDark ? "dark-mode contact-text-div" : "contact-text-div"
              }
            >
              {contactInfo.number && (
                <div
                  style={{ position: "relative", display: "inline-block" }}
                  onMouseEnter={() => setShowPhoto(true)}
                  onMouseLeave={() => setShowPhoto(false)}
                >
                  <a className="contact-detail" href={"tel:" + contactInfo.number}>
                    {contactInfo.number}
                  </a>

                  {/* ✅ 이스터에그 이미지 */}
                  {showPhoto && (
                    <img
                      src={easterEggPhoto}
                      alt="Easter Egg"
                      style={{
                        position: "absolute",
                        top: "30px",
                        left: "110%",
                        width: "120px",
                        borderRadius: "8px",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
                        zIndex: 100,
                      }}
                    />
                  )}
                </div>
              )}

              <br />
              <br />

              {contactInfo.email_address && (
                <>
                  <a
                    className="contact-detail-email"
                    href={"mailto:" + contactInfo.email_address}
                  >
                    {contactInfo.email_address}
                  </a>
                  <br />
                  <br />
                </>
              )}

              {contactInfo.location && (
                <>
                  <a
                    className="contact-detail-location"
                    href={contactInfo.location}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Current Location 🌏 : {contactInfo.location}
                  </a>
                  <br />
                  <br />
                </>
              )}

              {/* ✅ 지도 임베드 */}
              <div className="map-container">
                <iframe
                  title="current-location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3174.3848802467196!2d126.819177!3d37.28601109999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b6e7956db5f73%3A0x6c21d40a4fc10dd1!2z6rK96riw64-EIO2ZlOyEseyLnCDsiJjrhbjsnYQx66GcIDE0OA!5e0!3m2!1sko!2skr!4v1749980138226!5m2!1sko!2skr"
                  width="300"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>

              <br />
              <br />

              <SocialMedia />
            </div>
          </div>

          <div className="contact-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={email} />
            ) : (
              <img
                alt="Man working"
                src={require("../../assets/images/contactMailDark.svg")}
              />
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
