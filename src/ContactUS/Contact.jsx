import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ for navigation
import styles from "./Contact.module.css";

function InfoItem({ title, children, icon }) {
  return (
    <div className={styles.infoItem}>
      <div className={styles.iconBox}>{icon}</div>
      <div className={styles.infoText}>
        <h4>{title}</h4>
        <p>{children}</p>
      </div>
    </div>
  );
}

function ContactInput({ type, name, placeholder, value, onChange }) {
  return (
    <div className={styles.inputGroup}>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

function ContactTextArea({ name, placeholder, value, onChange }) {
  return (
    <div className={styles.inputGroup}>
      <textarea
        name={name}
        rows={6}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
}

// ✅ Formspree ID
const FORMSPREE_ID = "xldlywdl";

export default function Contact() {
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    details: "",
  });
  const [status, setStatus] = useState("idle");
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((d) => ({ ...d, [name]: value }));
  };

  async function submitToFormspree(payload) {
    const endpoint = `https://formspree.io/f/${FORMSPREE_ID}`;
    const res = await fetch(endpoint, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err?.error || "Submit failed");
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    setMessage("");

    try {
      await submitToFormspree({
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.details,
      });
      setStatus("success");
      setMessage("Thanks! Your message has been sent.");
      setData({ name: "", email: "", phone: "", details: "" });

      // ✅ Redirect to thanks page after 1 second
      setTimeout(() => navigate("/thanks"), 1000);
    } catch (err) {
      setStatus("error");
      setMessage(err.message || "Something went wrong. Please try again.");
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* LEFT: copy deck + contact info */}
        <div className={styles.leftCol}>
          <span className={styles.kicker}>Contact Us</span>
          <h2 className={styles.title}>GET IN TOUCH WITH US</h2>
          <p className={styles.lead}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eius
            tempor incididunt ut labore e dolore magna aliqua. Ut enim adiqua
            minim veniam quis nostrud exercitation ullamco
          </p>

          {/* Info Items with SVG icons */}
          <InfoItem
            title="Our Location"
            icon={
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path
                  d="M30.6 11.8002L17.7 3.5002C16.65 2.8502 15.3 2.8502 14.3 3.5002L1.4 11.8002C0.9 12.1502 0.75 12.8502 1.05 13.3502C1.4 13.8502 2.1 14.0002 2.6 13.7002L3.45 13.1502V25.8002C3.45 27.5502 4.85 28.9502 6.6 28.9502H25.4C27.15 28.9502 28.55 27.5502 28.55 25.8002V13.1502L29.4 13.7002C29.6 13.8002 29.8 13.9002 30 13.9002C30.35 13.9002 30.75 13.7002 30.95 13.4002C31.3 12.8502 31.15 12.1502 30.6 11.8002ZM13.35 26.7502V18.5002C13.35 18.0002 13.75 17.6002 14.25 17.6002H17.75C18.25 17.6002 18.65 18.0002 18.65 18.5002V26.7502H13.35ZM26.3 25.8002C26.3 26.3002 25.9 26.7002 25.4 26.7002H20.9V18.5002C20.9 16.8002 19.5 15.4002 17.8 15.4002H14.3C12.6 15.4002 11.2 16.8002 11.2 18.5002V26.7502H6.7C6.2 26.7502 5.8 26.3502 5.8 25.8502V11.7002L15.5 5.4002C15.8 5.2002 16.2 5.2002 16.5 5.4002L26.3 11.7002V25.8002Z"
                  fill="currentColor"
                />
              </svg>
            }
          >
            99 S.t Jomblo Park Pekanbaru
            <br />
            28292. Indonesia
          </InfoItem>

          <InfoItem
            title="Phone Number"
            icon={
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <g clipPath="url(#clip0)">
                  <path
                    d="M24.3 31.1499C22.95 31.1499 21.4 30.7999 19.7 30.1499C16.3 28.7999 12.55 26.1999 9.2 22.8499C5.85 19.4999 3.25 15.7499 1.9 12.2999C0.4 8.59994 0.55 5.54994 2.3 3.84994C2.35 3.79994 2.45 3.74994 2.5 3.69994L6.7 1.19994C7.75 0.599942 9.1 0.899942 9.8 1.89994L12.75 6.29994C13.45 7.34994 13.15 8.74994 12.15 9.44994L10.35 10.6999C11.65 12.7999 15.35 17.9499 21.25 21.6499L22.35 20.0499C23.2 18.8499 24.55 18.4999 25.65 19.2499L30.05 22.1999C31.05 22.8999 31.35 24.2499 30.75 25.2999L28.25 29.4999C28.2 29.5999 28.15 29.6499 28.1 29.6999C27.2 30.6499 25.9 31.1499 24.3 31.1499Z"
                    fill="currentColor"
                  />
                  <path
                    d="M29.3 14.25C28.7 14.25 28.25 13.8 28.2 13.2C27.8 8.15003 23.65 4.10003 18.55 3.75003C17.95 3.70003 17.45 3.20003 17.5 2.55003C17.55 1.95003 18.05 1.45003 18.7 1.50003C24.9 1.90003 29.95 6.80003 30.45 13C30.5 13.6 30.05 14.15 29.4 14.2C29.4 14.25 29.35 14.25 29.3 14.25Z"
                    fill="currentColor"
                  />
                </g>
                <defs>
                  <clipPath id="clip0">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            }
          >
            (+62)81 414 257 9980
          </InfoItem>

          <InfoItem
            title="Email Address"
            icon={
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                aria-hidden="true"
              >
                <path
                  d="M28 4.7998H4C2.3 4.7998 0.85 6.1998 0.85 7.9498V24.1498C0.85 25.8498 2.25 27.2998 4 27.2998H28C29.7 27.2998 31.15 25.8998 31.15 24.1498V7.8998C31.15 6.1998 29.7 4.7998 28 4.7998ZM28 7.0498C28.05 7.0498 28.1 7.0498 28.15 7.0498L16 14.8498L3.85 7.0498C3.9 7.0498 3.95 7.0498 4 7.0498H28ZM28 24.9498H4C3.5 24.9498 3.1 24.5498 3.1 24.0498V9.2498L14.8 16.7498C15.15 16.9998 15.55 17.0998 15.95 17.0998C16.35 17.0998 16.75 16.9998 17.1 16.7498L28.8 9.2498V24.0998C28.9 24.5998 28.5 24.9498 28 24.9498Z"
                  fill="currentColor"
                />
              </svg>
            }
          >
            info@yourdomain.com
          </InfoItem>
        </div>

        {/* RIGHT: form card with decorations */}
        <div className={styles.rightCol}>
          <div className={styles.formCard}>
            <span className={styles.shapeQuarter}>
              <svg width="100" height="100" viewBox="0 0 100 100">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z"
                  fill="#FC7000"
                />
              </svg>
            </span>

            <span className={styles.shapeDotsRight}>
              <svg width="34" height="134" viewBox="0 0 34 134">
                {Array.from({ length: 10 }).map((_, i) => (
                  <circle
                    key={`r1-${i}`}
                    cx="32"
                    cy={132 - i * 14.667}
                    r="1.6667"
                    fill="#FC7000"
                  />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                  <circle
                    key={`r2-${i}`}
                    cx="17.3333"
                    cy={132 - i * 14.667}
                    r="1.6667"
                    fill="#FC7000"
                  />
                ))}
                {Array.from({ length: 10 }).map((_, i) => (
                  <circle
                    key={`r3-${i}`}
                    cx="2.6667"
                    cy={132 - i * 14.667}
                    r="1.6667"
                    fill="#FC7000"
                  />
                ))}
              </svg>
            </span>

            <span className={styles.shapeDotsBottomLeft}>
              <svg width="107" height="134" viewBox="0 0 107 134">
                {[
                  105, 90.3333, 75.6654, 61, 46.3333, 31.9993, 17.3333, 2.66536,
                ].map((cx) =>
                  Array.from({ length: 10 }).map((_, i) => (
                    <circle
                      key={`${cx}-${i}`}
                      cx={cx}
                      cy={132 - i * 14.667}
                      r="1.6667"
                      transform={`rotate(180 ${cx} ${132 - i * 14.667})`}
                      fill="#FC7000"
                    />
                  ))
                )}
              </svg>
            </span>

            {/* Form */}
            <form onSubmit={handleSubmit} noValidate>
              <ContactInput
                type="text"
                name="name"
                placeholder="Your Name"
                value={data.name}
                onChange={handleChange}
              />
              <ContactInput
                type="email"
                name="email"
                placeholder="Your Email"
                value={data.email}
                onChange={handleChange}
              />
              <ContactInput
                type="tel"
                name="phone"
                placeholder="Your Phone"
                value={data.phone}
                onChange={handleChange}
              />
              <ContactTextArea
                name="details"
                placeholder="Your Message"
                value={data.details}
                onChange={handleChange}
              />

              <button
                type="submit"
                className={styles.submitBtn}
                disabled={status === "submitting"}
                aria-busy={status === "submitting"}
              >
                {status === "submitting" ? "Sending..." : "Send Message"}
              </button>

              <div aria-live="polite" style={{ marginTop: 10 }}>
                {status === "success" && (
                  <span style={{ color: "#13c296" }}>{message}</span>
                )}
                {status === "error" && (
                  <span style={{ color: "#f87171" }}>{message}</span>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* MAP */}
      <div className={styles.mapWrap}>
        <iframe
          src="https://www.google.com/maps?q=28.537260688401712,77.21781207495324&z=14&hl=en&output=embed"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Teacher Cool Map"
        />
      </div>
    </section>
  );
}
