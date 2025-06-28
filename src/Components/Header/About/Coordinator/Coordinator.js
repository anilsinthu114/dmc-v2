import React from "react";
import { FaEnvelope } from "react-icons/fa";
import directorImage from "./coordinator.jpg";

// Data-driven sections for easier maintenance and UI improvements
const sectionData = [
  {
    title: "Educational Qualifications",
    items: [
      "M.Tech in Computer Science and Technology (2009-2011) from GITAM UNIVERSITY, Visakhapatnam.",
      "B.Tech in Information Technology (2002-2006) from Al-Ameer College of Engineering and Information Technology, affiliated to JNTU (HYDERABAD).",
    ],
  },
  {
    title: "Professional (Research/Teaching) Experience",
    items: [
      "Jan 2013 – Present: Assistant Professor, Department of Information Technology, Jawaharlal Nehru Technological University Gurajada Vizianagaram, 535003 Andhra Pradesh, India.",
      "September 2011 – Jan 2013: Assistant Professor, Department of Computer Science Engineering, Gokul Institute of Technology and Sciences, Bobbili, Vizianagaram.",
    ],
  },
  {
    title: "Administrative Service in this Institution",
    items: [
      "Appointed to act upon and maintain JNTUK-CoEeRD related process in the college on 29 October 2014.",
      "Served as Deputy Warden for Boys Hostel from Feb 2016 to Mar 2019.",
      "Working as Network and System Coordinator for college from Mar 2019 to present.",
    ],
  },
  {
    title: "Research Interests",
    items: ["Machine Learning", "Internet of Things", "Network Security"],
  },
  {
    title: "Membership of Academic/Professional Bodies",
    items: [
      "Associate Member (Life Member), The Institution of Engineers (INDIA).",
    ],
  },
  {
    title: "Invited Talks in Workshops and Conferences",
    items: [
      '"A day with Pandas and Numpy" at Two Day Workshop on Advanced Python Toolkits organized by Visakha Institute of Engineering and Technology, Visakhapatnam, AP, IN on 19th & 20th Sep 2018.',
    ],
  },
  {
    title: "Workshops / Short Term Courses Attended",
    items: [
      "One Day Workshop On Outcome Based Engineering Education held on 17-02-2013 in JNTUK, Vizianagaram.",
      "Two day National Level Hands On Workshop on Multicore Programming using CUDA, organized by the Department of Computer Science and Engineering during 9th and 10th June 2014, at UCEK, JNTUK, Kakinada.",
      "A Two Day National Level Workshop on “Learning Management Systems and Ed-Tech Tools (WLMSET-2017)” during 22-23 December 2017 organized by Digital Monitoring Cell, JNTUK, Kakinada, Andhra Pradesh-533003.",
      "One day Workshop on Classroom Communication on 12 February 2016 as part of a 5 day workshop on Activity Based Language Teaching: Basic Level 8th to 12th February 2016 at JNTUK-UCEV, Vizianagaram.",
      "A Two Day International and Inter Departmental Workshop on IOT and its Applications in the field of Engineering, organized by the Departments of Information Technology and Electrical and Electronics Engineering during 24th and 25th March 2017.",
      "A three days Faculty Development Program at JNTU College of Engineering Vizianagaram from 13-15 June 2013, organized by VANGUARDZ Pro Skills Training and Consultancy.",
      "Workshop for Training Resource Persons on Outcome Based Accreditation-Phase-I conducted by NBA Nodal Centre at JNTUK UCEV Vizianagaram on 13 September 2013 to identify Resource Persons and Evaluators for NBA.",
      "Workshop for Training Resource Persons on Outcome Based Accreditation-Phase-II conducted by NBA Nodal Centre at JNTUK UCEV Vizianagaram on 26-28 September 2013 to identify Resource Persons and Evaluators for NBA.",
      "A Two Day National Level Workshop on Recent Research Trends in Computer Science and Information Technology on 21st and 22nd June 2013.",
      "A Two Day Workshop on Cyber Physical Systems: Applications and Open Challenges organized by Indian Institute of Technology Hyderabad from March 22-23, 2013.",
      "A Faculty Development Program on Rational Application Developer 7.0 conducted in collaboration with IBM at GVP College of Engineering (A) during 28th November to 1st December 2011.",
      "A Summer School on Wireless Networks: Research Issues and Applications offered by Computer Science and Engineering Department during May 19-May 23, 2014.",
      "A Two National Workshop on Pattern Recognition and its Applications organized by the Department of Information Technology during 19th and 20th March 2014.",
      "Oracle JAVA-FEP Training at Lendi Institute of Engineering and Technology from 13-02-2012 to 15-02-2012.",
      "Three day Faculty Development Program on Soft Skills for Effective Teaching at JNTUK UCEV Vizianagaram from 13-15 June 2013.",
      "One-Week National Workshop on Research Trends in Machine Learning organized by Department of Information Technology JNTUK UCEV(A), Vizianagaram on October 9-11, 2017 and November 16-18, 2017.",
      "International Workshops on Evolutionary Computation and Computer Security (IWECCS2016) 8th-9th January 2016 organized by Department of CSE, CSI Student Branch, Anil Neerukonda Institute of Technology and Sciences, Visakhapatnam.",
      "One Week Workshop on “Research Challenges and Issues in Big Data and Cloud Computing” organized by Department of Computer Science and Engineering, JNTUK – University College of Engineering Vizianagaram 27th to 31st January, 2015.",
      "Faculty Improvement Program (FIP) on IBM Business Analytics from 21st to 26th Nov 2016 organized by APSSDC, Department of Skill Development, Entrepreneurship & Innovations, Govt of AP. MeitY, Govt. of INDIA, Sponsored “One Week Faculty Development Programme (FDP) on Machine Intelligence & Soft Computing organized by the E & ICT Academy, National Institute of Technology, Warangal, at the Department of Computer Science & Systems Engineering, Andhra University College of Engineering, Visakhapatnam, A.P, from 10th July, 2017. Got A grade in TEST.",
      "Two Day National Workshop on Programming With R 6th and 7th July, 2017 organized by Department of Information Technology, JNTUK UCEV Vizianagaram.",
      "Faculty Development Program on Block Chain Technology held from July 13th, 2020 to July 17th, 2020 conducted by Andhra Pradesh State Skill Development Corporation (APSSDC), Department of Skills Development and Training, Govt of Andhra Pradesh.",
      "FDP: Author Academy, Be A Scientist, conducted by Nature Research Academies held from 7-9 December 2020.",
      "Faculty Development Program on Data Science held from June 1st, 2020 to June 30th, 2020 conducted by Andhra Pradesh State Skill Development Corporation (APSSDC).",
      "Certificate of Course Completion for Faculty Development Program on Data Science Training and completed assignments and projects held from June 1st, 2020 to June 30th, 2020 (60 Contact Hours).",
    ],
  },
  {
    title: "Internships",
    items: [
      "Successfully completed internship project on 24th November 2020. The project is a part of ExcelR & APSSDC Faculty Development Program held from June 1st, 2020 to June 30th, 2020 and was able to participate in and accomplish all the tasks requested for the project and able to showcase great work ethic and team player skills.",
    ],
  },
];

// Responsive Section component with inline styles
const Section = ({ title, items }) => (
  <section
    style={{
      marginBottom: 28,
      padding: "0 0.5rem",
    }}
  >
    <h3
      style={{
        fontSize: "1.15rem",
        fontWeight: 600,
        color: "#234",
        margin: "0 0 8px 0",
        letterSpacing: 0.2,
      }}
    >
      {title}
    </h3>
    <ul
      style={{
        paddingLeft: 20,
        margin: 0,
        listStyle: "disc",
        fontSize: "0.98rem",
        color: "#2a3b4c",
        lineHeight: 1.6,
        wordBreak: "break-word",
      }}
    >
      {items.map((item, idx) => (
        <li
          key={idx}
          style={{
            marginBottom: 6,
            paddingLeft: 2,
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  </section>
);

function useResponsiveContainerStyle() {
  // Responsive container style for different screen sizes
  const [style, setStyle] = React.useState(getStyle(window.innerWidth));

  React.useEffect(() => {
    function handleResize() {
      setStyle(getStyle(window.innerWidth));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getStyle(width) {
    if (width < 480) {
      return {
        maxWidth: "98vw",
        margin: "0 auto",
        background: "#fff",
        borderRadius: 10,
        boxShadow: "0 1px 8px rgba(0,0,0,0.08)",
        padding: 10,
      };
    } else if (width < 768) {
      return {
        maxWidth: 540,
        margin: "0 auto",
        background: "#fff",
        borderRadius: 12,
        boxShadow: "0 1.5px 12px rgba(0,0,0,0.08)",
        padding: 18,
      };
    } else {
      return {
        maxWidth: 900,
        margin: "0 auto",
        background: "#fff",
        borderRadius: 16,
        boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
        padding: 32,
      };
    }
  }

  return style;
}

function useResponsiveImageStyle() {
  const [style, setStyle] = React.useState(getStyle(window.innerWidth));

  React.useEffect(() => {
    function handleResize() {
      setStyle(getStyle(window.innerWidth));
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  function getStyle(width) {
    if (width < 480) {
      return {
        height: 120,
        width: 100,
        objectFit: "cover",
        borderRadius: 8,
        boxShadow: "0 1px 4px rgba(0,0,0,0.10)",
        border: "2px solid #e0e7ef",
        background: "#f8fafc",
      };
    } else if (width < 768) {
      return {
        height: 160,
        width: 120,
        objectFit: "cover",
        borderRadius: 10,
        boxShadow: "0 1.5px 6px rgba(0,0,0,0.10)",
        border: "2.5px solid #e0e7ef",
        background: "#f8fafc",
      };
    } else {
      return {
        height: 220,
        width: 180,
        objectFit: "cover",
        borderRadius: 12,
        boxShadow: "0 2px 8px rgba(0,0,0,0.10)",
        border: "3px solid #e0e7ef",
        background: "#f8fafc",
      };
    }
  }

  return style;
}

function Coordinator() {
  const containerStyle = useResponsiveContainerStyle();
  const imageStyle = useResponsiveImageStyle();

  // Responsive heading
  const headingStyle = {
    fontSize: "clamp(1.3rem, 4vw, 2rem)",
    fontWeight: 700,
    textAlign: "center",
    marginBottom: 16,
    color: "#2a3b4c",
    letterSpacing: 0.2,
    lineHeight: 1.2,
  };

  // Responsive profile name
  const nameStyle = {
    margin: 0,
    fontSize: "clamp(1.1rem, 3vw, 1.5rem)",
    fontWeight: 600,
    color: "#1a2a3a",
    lineHeight: 1.1,
  };

  // Responsive subheading
  const subheadingStyle = {
    margin: "4px 0 0 0",
    fontSize: "clamp(1rem, 2.5vw, 1.15rem)",
    color: "#3b4a5a",
    fontWeight: 500,
    lineHeight: 1.1,
  };

  // Responsive designation
  const designationStyle = {
    fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
    color: "#4a5a6a",
    fontWeight: 400,
    marginTop: 4,
    lineHeight: 1.1,
  };

  // Responsive email link
  const emailLinkStyle = {
    color: "#1a73e8",
    textDecoration: "none",
    fontWeight: 500,
    fontSize: "clamp(0.95rem, 2vw, 1.05rem)",
    display: "inline-flex",
    alignItems: "center",
    gap: 6,
    transition: "color 0.2s",
    marginTop: 10,
    wordBreak: "break-all",
  };

  // Responsive divider
  const dividerStyle = {
    margin: "32px 0 24px 0",
    border: 0,
    borderTop: "1.5px solid #e0e7ef",
  };

  // Responsive profile container
  const profileContainerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 0,
  };

  // Responsive image wrapper
  const imageWrapperStyle = {
    marginBottom: 16,
    width: "100%",
    display: "flex",
    justifyContent: "center",
  };

  // Email hover effect
  const [isEmailHovered, setIsEmailHovered] = React.useState(false);

  return (
    <div style={containerStyle}>
      <div style={headingStyle}>
        Co-Ordinator of Digital Monitoring Cell
      </div>
      <div style={profileContainerStyle}>
        <div style={imageWrapperStyle}>
          <img
            src={directorImage}
            alt="Mr. Anil Wurity"
            style={imageStyle}
          />
        </div>
        <div style={{ textAlign: "center" }}>
          <h3 style={nameStyle}>Mr. Anil Wurity</h3>
          <h4 style={subheadingStyle}>Co-Ordinator of Digital Monitoring Cell</h4>
        </div>
        <div style={designationStyle}>
          Assistant Professor, Dept. of Information Technology
        </div>
        <div>
          <a
            href="mailto:dmc@jntugv.edu.in"
            style={{
              ...emailLinkStyle,
              color: isEmailHovered ? "#0b3d91" : "#1a73e8",
            }}
            onMouseOver={() => setIsEmailHovered(true)}
            onMouseOut={() => setIsEmailHovered(false)}
            aria-label="Send email to dmc@jntugv.edu.in"
          >
            <FaEnvelope style={{ verticalAlign: "middle" }} /> dmc@jntugv.edu.in
          </a>
        </div>
      </div>
      <hr style={dividerStyle} />

      {/* Render all sections dynamically */}
      <div>
        {sectionData.map((section) => (
          <Section key={section.title} title={section.title} items={section.items} />
        ))}
      </div>
    </div>
  );
}

export default Coordinator;