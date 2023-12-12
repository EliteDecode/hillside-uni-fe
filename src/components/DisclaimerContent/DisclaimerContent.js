// DisclaimerContent.js
import React from "react";
import { Container, Typography } from "@mui/material";

const containerStyle = {
  marginTop: "2rem",
  marginBottom: "2rem",
};

const titleStyle = {
  marginBottom: "1rem",
};

const paragraphStyle = {
  marginBottom: "1rem",
};

const boldStyle = {
  fontWeight: "bold",
};

const DisclaimerContent = () => {
  return (
    <Container style={containerStyle}>
      <Typography variant="h4" component="h1" style={titleStyle}>
        Disclaimer Notice: Guarding Against Admission Scams
      </Typography>
      <Typography variant="body1" style={paragraphStyle}>
        Dear Prospective Students/Applicants,
      </Typography>
      <Typography variant="body1" style={paragraphStyle}>
        We wish to bring to your attention the presence of fraudulent entities
        seeking to exploit potential students with false assurances of admission
        to Hillside University of Science and Technology (HUST), Okemesi-Ekiti,
        Ekiti State, Nigeria. In light of this, we emphasize the importance of
        exercising caution and offer the following guidance:
      </Typography>
      <Typography variant="body1" style={paragraphStyle}>
        <span style={boldStyle}>Official Communication Channels:</span> All
        communication regarding admissions at Hillside University of Science and
        Technology (HUST), Okemesi-Ekiti, Ekiti State, Nigeria, will exclusively
        occur through our authorized channels. These include our official
        website, verified email addresses ending with @hust.edu.ng, and our
        officially social media accounts
        <ul>
          <li className="font-bold text-blue-800">
            Twitter: <a href="https://twitter.com/Hust_uni">@hust_uni</a>
          </li>
          <li className="font-bold text-blue-800">
            Instagram:{" "}
            <a href="https://instagram.com/hust_uni?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
              @hust_uni
            </a>
          </li>
          <li className="font-bold text-blue-800">
            LinkedIn:{" "}
            <a href="https://www.linkedin.com/company/hillside-university-of-science-and-technology-okemesi-ekiti">
              Hillside University of Science and Technology, Okemesi-Ekiti -
              HUST
            </a>
          </li>
          <li className="font-bold text-blue-800">
            Facebook:{" "}
            <a href="https://web.facebook.com/profile.php?id=100093139260751&notif_id=1699872689708600&notif_t=profile_plus_admin_invite&ref=notif">
              Hillside University of Science and Technology, Okemesi-Ekiti -
              HUST
            </a>
          </li>
        </ul>
      </Typography>
      <Typography variant="body1" style={paragraphStyle}>
        <span style={boldStyle}>No Assured Admissions:</span> The admission
        process at Hillside University of Science and Technology (HUST) is
        founded on merit and adherence to specific criteria outlined in our
        official admission guidelines. Beware of shortcuts or guaranteed
        admissions promoted through unauthorized channels or third parties.
      </Typography>
      <Typography variant="body1" style={paragraphStyle}>
        <span style={boldStyle}>Caution Against Solicitations:</span> Exercise
        prudence when encountering individuals or agencies claiming to secure
        guaranteed admission into our institution for a fee or by requesting
        personal information. Such solicitations are likely fraudulent.
      </Typography>
      <Typography variant="body1" style={paragraphStyle}>
        <span style={boldStyle}>Verification Procedures:</span> In case of
        uncertainty regarding the legitimacy of any communication or offer
        related to admissions, we strongly urge you to contact the Hillside
        University of Science and Technology (HUST), Okemesi-Ekiti, Ekiti State,
        Nigeria Admissions Office directly through official channels to verify
        its authenticity.
      </Typography>
      <Typography variant="body1" style={paragraphStyle}>
        We are dedicated to ensuring a fair and transparent admission process
        for all prospective students. We advise everyone to stay vigilant and
        rely solely on official sources for information concerning admissions at
        Hillside University of Science and Technology (HUST), Okemesi-Ekiti,
        Ekiti State, Nigeria.
      </Typography>
      <Typography variant="body1" style={paragraphStyle}>
        Sincerely,
        <br />
        Hillside University of Science and Technology (HUST), Okemesi-Ekiti,
        Ekiti State, Nigeria.
      </Typography>

      <Typography variant="h6" component="h2" style={titleStyle}>
        Social Media Disclaimer:
      </Typography>
      <Typography variant="body1" style={paragraphStyle}>
        <span style={boldStyle}>Disclaimer:</span> Hillside University School of
        Science and Technology, Okemesi-Ekiti, Ekiti State, Nigeria
        (Hust.edu.ng) cautions all potential applicants to be wary of potential
        scammers. The official admission application date will be communicated
        through our official channels. Please be informed that Hillside
        University of Science and Technology is not accepting any form of
        payment, nor has it authorized any third party to handle payments for
        the admission process. Any requests for payment should be treated as
        fraudulent, and applicants are strongly advised to verify information
        only through the university's official communication channels.
      </Typography>
    </Container>
  );
};

export default DisclaimerContent;
