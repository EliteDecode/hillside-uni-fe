import { FaCreditCard, FaBook } from "react-icons/fa";
import {
  Facebook,
  Instagram,
  LinkedIn,
  Twitter,
  Accessible,
  LibraryBooks,
  Book,
  History,
  Person,
  Event,
  Lightbulb,
  Support,
  Work,
  Group,
  Home,
  SportsEsports,
} from "@mui/icons-material";

import img1 from "../assets/slider1.jpg";
import img2 from "../assets/slider2.jpg";
import img3 from "../assets/slider3.jpg";
import img4 from "../assets/slider4.jpg";
import img5 from "../assets/slider5.jpg";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import StarIcon from "@mui/icons-material/Star";
import PeopleIcon from "@mui/icons-material/People";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import GroupIcon from "@mui/icons-material/Group";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import SchoolIcon from "@mui/icons-material/School";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import CodeIcon from "@mui/icons-material/Code";
import BuildIcon from "@mui/icons-material/Build";
import engImg from "../assets/eng.jpg";
import lawimg from "../assets/law.jpg";
import agricImg from "../assets/agric.jpg";
import medImg from "../assets/medical.jpg";
import { BsBuildingFillExclamation } from "react-icons/bs";
import { Link } from "react-router-dom";

export const sublinks = [
  {
    page: "Home",
    links: [
      { label: "All News", icon: <FaBook />, url: "Home/news" },
      { label: "Events", icon: <FaBook />, url: "Home/events" },
      { label: "Gallery", icon: <FaBook />, url: "Home/gallery" },
    ],
  },
  {
    page: "About",
    links: [
      {
        label: "Mission and Vision",
        icon: <FaCreditCard />,
        url: "About/vision&misson",
      },
      {
        label: "University Objectives",
        icon: <FaCreditCard />,
        url: "About/objectives",
      },
      { label: "Core Values", icon: <FaCreditCard />, url: "About/corevalues" },
    ],
  },
  {
    page: "Academics",
    links: [
      {
        label: "Colleges and Schools",
        icon: <FaBook />,
        url: "Academics/colleges&schools",
      },
      {
        label: "Academic Calender",
        icon: <FaBook />,
        url: "Academics/calender",
      },
      {
        label: "Academic Programmes",
        icon: <FaBook />,
        url: "Academics/programmes",
      },
      { label: "Center of Excellence", icon: <FaBook />, url: "Academics" },
      { label: "Academic Research", icon: <FaBook />, url: "Academics" },
    ],
  },
  {
    page: "Admission",
    links: [
      { label: "How to Apply", icon: <FaBook />, url: "Admission" },
      {
        label: "Requirements",
        icon: <FaBook />,
        url: "Admission/requirements",
      },
    ],
  },
  {
    page: "Fees",
    links: [
      {
        label: "Fees",
        icon: <FaBook />,
        url: "Admission/fees",
      },
      {
        label: "Funding Options",
        icon: <FaBook />,
        url: "Admission/funding",
      },
    ],
  },
  {
    page: "Resources",
    links: [
      { label: "Library", icon: <FaBook />, url: "Resources/library" },
      { label: "Human Resources", icon: <FaBook />, url: "Resources/hr" },
      { label: "ICT Department", icon: <FaBook />, url: "Resources/ict" },
      {
        label: "Student Affairs",
        icon: <FaBook />,
        url: "Resources/studentAffairs",
      },
      {
        label: "Disclaimer",
        icon: <FaBook />,
        url: "Public Information",
      },
      {
        label: "University Adverts",
        icon: <FaBook />,
        url: "Public Information/Advert",
      },
    ],
  },
  {
    page: "Student Life",
    links: [
      { label: "Residence", icon: <FaBook />, url: "Student Life/residence" },
      {
        label: "Sports and Recreation",
        icon: <FaBook />,
        url: "Student Life/sports",
      },
      { label: "Socials", icon: <FaBook />, url: "Student Life/socials" },
      {
        label: "Food Services",
        icon: <FaBook />,
        url: "Student Life/foodService",
      },
    ],
  },

  {
    page: "Board of Directors",
    links: [
      {
        label: "Board of Regents",
        icon: <FaBook />,
        url: "Board of Directors/Board of Directors",
      },
      {
        label: "Governing Council",
        icon: <FaBook />,
        url: "Board of Directors/Governing council",
      },
      {
        label: "Managements",
        icon: <FaBook />,
        url: "Board of Directors/Managements",
      },
    ],
  },

  // {
  //   page: "Public Information",
  //   links: [
  //     {
  //       label: "Disclaimer",
  //       icon: <FaBook />,
  //       url: "Public Information",
  //     },
  //     {
  //       label: "University Adverts",
  //       icon: <FaBook />,
  //       url: "Public Information/Advert",
  //     },
  //   ],
  // },
  {
    page: "Contact",
    links: [
      { label: "Make enquiries", icon: <FaBook />, url: "Contact" },
      { label: "Send us a message", icon: <FaBook />, url: "Contact" },
    ],
  },
];

export const mainLinks = [
  {
    page: "Home",
    sublinks: true,
  },
  {
    page: "About",
    sublinks: true,
  },
  {
    page: "Academics",
    sublinks: true,
  },
  {
    page: "Admission",
    sublinks: true,
  },
  {
    page: "Fees",
    sublinks: true,
  },
  {
    page: "Resources",
    sublinks: true,
  },
  {
    page: "Student Life",
    sublinks: true,
  },
  // {
  //   page: "Public Information",
  //   sublinks: true,
  // },
  {
    page: "Board of Directors",
    sublinks: true,
  },
  {
    page: "Contact",
    sublinks: true,
  },
];

export const TopLinks = [
  <Link to="https://instagram.com/hust_uni?utm_source=qr&igshid=MzNlNGNkZWQ4Mg==">
    {" "}
    <Instagram sx={{ color: "#f7f7f7", opacity: "0.5", fontSize: "15px" }} />
  </Link>,
  <Link to="https://web.facebook.com/profile.php?id=100093139260751&notif_id=1699872689708600&notif_t=profile_plus_admin_invite&ref=notif">
    {" "}
    <Facebook sx={{ color: "#f7f7f7", opacity: "0.5", fontSize: "15px" }} />
  </Link>,

  <Link to="https://www.linkedin.com/company/hillside-university-of-science-and-technology-okemesi-ekiti">
    <LinkedIn sx={{ color: "#f7f7f7", opacity: "0.5", fontSize: "15px" }} />
  </Link>,
  <Link to="https://twitter.com/Hust_uni">
    {" "}
    <Twitter sx={{ color: "#f7f7f7", opacity: "0.5", fontSize: "15px" }} />
  </Link>,
];

/* Hero Content */

export const heroContents = [
  {
    class: "content-1",
    subtitle: "Welcome to",
    title: "Hillside University of Science and Technology",
    subtitle2:
      "Where Innovation Meets Education and Pioneering Excellence in Science and Technology Education",
    btn1: "Apply Now",
    btn2: "Academics",
  },
  {
    class: "content-2",
    subtitle: "Our Mission",
    title: "Shaping Futures In Science and Technology",
    subtitle2:
      "Dedicated to Excellence in Education, Inspiring a Passion for Learning and Building a Foundation for Success",
    btn1: "About Us",
    btn2: "Latest News",
  },
  {
    class: "content-3",
    subtitle: "Our Expert Faculties",
    title: "Excellence in Sci-Technology Education",
    subtitle2:
      "Meet Our World-Class Faculties Igniting Innovation Through Research and Transforming Ideas into Solutions",
    btn1: "Explore",
    btn2: "Contact Us",
  },
];

export const newsArray = [
  {
    title: "Hillside School Launches New STEM Program",
    description:
      "Hillside School is excited to announce the launch of its new STEM (Science, Technology, Engineering, and Mathematics) program. This comprehensive program is designed to prepare students for careers in science and technology by offering a wide range of courses and hands-on experiences. From robotics to advanced mathematics, students will have the opportunity to explore their interests and develop essential skills for the future. The launch of this program represents Hillside School's commitment to providing top-tier education in the STEM fields.",
    date: "October 15, 2023",
    image: img1,
  },
  {
    title: "Hillside School titled Among Top Science Schools",
    description:
      "We are proud to share that Hillside School has been recognized as one of the top science schools in the country. This prestigious recognition is a testament to our dedication to excellence in science education. Our world-class faculty, state-of-the-art facilities, and innovative curriculum have all contributed to this achievement. We continue to inspire and empower our students to excel in the fields of science and technology.",
    date: "September 5, 2023",
    image: img2,
  },
  {
    title: "Innovative Research Projects Showcase Student Talent",
    description:
      "Students at Hillside School showcased their innovative research projects at the annual Science and Technology Fair. From building autonomous drones to conducting groundbreaking experiments in chemistry and physics, our students demonstrated their passion for science and technology. The fair was a testament to their hard work, creativity, and dedication to pushing the boundaries of knowledge.",
    date: "August 20, 2023",
    image: img3,
  },
  {
    title: "New Science Building Opens at Hillside School",
    description:
      "Hillside School is proud to unveil its state-of-the-art science building. This modern facility is equipped with cutting-edge laboratories and technology to foster scientific exploration and discovery. Our commitment to providing top-notch resources for our students is evident in this new addition to our campus. The building will serve as a hub for scientific research, experimentation, and collaboration.",
    date: "July 10, 2023",
    image: img4,
  },
  {
    title: "Hillside School Receives Grant for STEM Scholarships",
    description:
      "Thanks to a generous grant from a philanthropic organization, Hillside School will provide scholarships to aspiring STEM (Science, Technology, Engineering, and Mathematics) students. This initiative aims to ensure that talented individuals have access to quality education in STEM fields, regardless of their financial circumstances. The scholarships will open doors to opportunities and empower students to pursue their dreams in science and technology.",
    date: "June 5, 2023",
    image: img5,
  },
  {
    title: "Celebrating Student Achievements in Science Olympiad",
    description:
      "Hillside School students achieved remarkable success at the National Science Olympiad, bringing home numerous awards and accolades for their scientific prowess. Our students' dedication to mastering scientific concepts and problem-solving skills has been truly impressive. We celebrate their achievements and look forward to nurturing their passion for science and technology in the years to come.",
    date: "May 12, 2023",
    image: img2,
  },
];

export const upcomingEvents = [
  {
    title: "Science Fair Showcase",
    date: "October 25, 2023",
  },
  {
    title: "Parent-Teacher Conference",
    date: "November 10, 2023",
  },
  {
    title: "STEM Workshop for Students",
    date: "December 5, 2023",
  },
  {
    title: "Career Day: Exploring STEM Careers",
    date: "January 15, 2024",
  },
  {
    title: "Annual Robotics Competition",
    date: "February 20, 2024",
  },
  {
    title: "Graduation Ceremony",
    date: "June 1, 2024",
  },
];

export const coreValues = [
  {
    value: "Innovation",
    icon: <InsertEmoticonIcon sx={{ color: "#1d6400" }} />,
    subtitle: "Fostering Creativity",
  },
  {
    value: "Excellence",
    icon: <StarIcon sx={{ color: "#1d6400" }} />,
    subtitle: "Our Culture",
  },
  {
    value: "Diversity",
    icon: <PeopleIcon sx={{ color: "#1d6400" }} />,
    subtitle: "Celebrating Differences",
  },
  {
    value: "Integrity",
    icon: <VerifiedUserIcon sx={{ color: "#1d6400" }} />,
    subtitle: "Honesty and Ethics",
  },
  {
    value: "Teamwork",
    icon: <GroupIcon sx={{ color: "#1d6400" }} />,
    subtitle: "Collaborative Spirit",
  },
  {
    value: "Respect",
    icon: <ThumbUpIcon sx={{ color: "#1d6400" }} />,
    subtitle: "Valuing Others",
  },
  {
    value: "Learning",
    icon: <SchoolIcon sx={{ color: "#1d6400" }} />,
    subtitle: "Lifelong Education",
  },
  {
    value: "Community",
    icon: <LocationCityIcon sx={{ color: "#1d6400" }} />,
    subtitle: "Building Connections",
  },
];

export const reasonsToChooseUs = [
  {
    key: 1,
    label: "Excellence in Education",
    children:
      "We are committed to providing a top-tier education that fosters academic excellence and prepares students for success in science and technology.",
  },
  {
    key: 2,
    label: "Innovative STEM Programs",
    children:
      "Our innovative STEM (Science, Technology, Engineering, and Mathematics) programs offer a wide range of courses and hands-on experiences to nurture young talents.",
  },
  {
    key: 3,
    label: "Diverse and Inclusive Community",
    children:
      "We celebrate diversity and create an inclusive learning environment where students from various backgrounds thrive and learn together.",
  },
  {
    key: 4,
    label: "Strong Emphasis on Integrity",
    children:
      "We instill a strong sense of integrity, ethics, and honesty in our students, preparing them for responsible and ethical careers in science and technology.",
  },
  {
    key: 5,
    label: "Collaborative Teamwork",
    children:
      "Our emphasis on teamwork and collaboration prepares students to work effectively in interdisciplinary teams, a valuable skill in the modern world.",
  },
  {
    key: 6,
    label: "Respect for All",
    children:
      "We teach the importance of respect for others, creating a respectful and inclusive community that values each individual's contributions.",
  },
  {
    key: 7,
    label: "Lifelong Learning",
    children:
      "We foster a culture of lifelong learning, encouraging students to continuously expand their knowledge and skills throughout their lives.",
  },
  {
    key: 8,
    label: "Engaging Extracurricular Activities",
    children:
      "Our school offers a variety of extracurricular activities, clubs, and events to enrich students' experiences beyond the classroom.",
  },
];

export const galleryImages = [
  {
    title: "Engineering Complex",
    description:
      "The Engineering Complex houses state-of-the-art laboratories, workshops, and classrooms dedicated to various engineering disciplines. It's where students turn innovative ideas into reality.",
    img: "https://img.freepik.com/free-photo/concentrated-young-woman-with-virtual-reality-glasses_74855-4104.jpg?size=626&ext=jpg&uid=R79909057&ga=GA1.2.1797571327.1691582797&semt=ais",
  },
  {
    title: "Computer Science Center",
    description:
      "The Computer Science Center is a hub for computer science and technology education. It's equipped with advanced computing facilities and collaborative spaces for coding and research.",
    img: "https://img.freepik.com/free-photo/focused-woman-typing-computer-keyboard_74855-4060.jpg?size=626&ext=jpg&uid=R79909057&ga=GA1.2.1797571327.1691582797&semt=ais",
  },
  {
    title: "Science Research Labs",
    description:
      "Our Science Research Labs are where groundbreaking discoveries happen. Students and faculty conduct experiments and research in physics, chemistry, biology, and more.",
    img: "https://img.freepik.com/free-photo/study-group-african-people_23-2149156390.jpg?size=626&ext=jpg&uid=R79909057&ga=GA1.2.1797571327.1691582797&semt=ais",
  },
  {
    title: "Technology Innovation Hub",
    description:
      "The Technology Innovation Hub is a dynamic space for creativity and innovation. It fosters entrepreneurship, hosts technologystartup incubators, and encourages students to think outside the box.",
    img: "https://img.freepik.com/free-photo/red-buildings-households_1127-2024.jpg?size=626&ext=jpg&uid=R79909057&ga=GA1.2.1797571327.1691582797&semt=ais",
  },
  {
    title: "Library and Learning Center",
    description:
      "The Library and Learning Center is a resource-rich facility with a vast collection of books, digital resources, and study spaces to support students in their academic pursuits.",
    img: "https://img.freepik.com/free-photo/low-rise-building_1127-3272.jpg?size=626&ext=jpg&uid=R79909057&ga=GA1.2.1797571327.1691582797&semt=ais",
  },
  {
    title: "Science Research Labs",
    description:
      "Our Science Research Labs are where groundbreaking discoveries happen. Students and faculty conduct experiments and research in physics, chemistry, biology, and more.",
    img: "https://img.freepik.com/free-photo/passageway_1127-3255.jpg?size=626&ext=jpg&uid=R79909057&ga=GA1.2.1797571327.1691582797&semt=ais",
  },
  {
    title: "Technology Innovation Hub",
    description:
      "The Technology Innovation Hub is a dynamic space for creativity and innovation. It fosters entrepreneurship, hosts technologystartup incubators, and encourages students to think outside the box.",
    img: "https://img.freepik.com/free-photo/red-buildings-households_1127-2024.jpg?size=626&ext=jpg&uid=R79909057&ga=GA1.2.1797571327.1691582797&semt=ais",
  },
  {
    title: "Library and Learning Center",
    description:
      "The Library and Learning Center is a resource-rich facility with a vast collection of books, digital resources, and study spaces to support students in their academic pursuits.",
    img: "https://img.freepik.com/free-photo/technology-e-learning-school-break-lunch-concept_53876-31605.jpg?size=626&ext=jpg&uid=R79909057&ga=GA1.2.1797571327.1691582797&semt=ais",
  },
  {
    title: "Science Research Labs",
    description:
      "Our Science Research Labs are where groundbreaking discoveries happen. Students and faculty conduct experiments and research in physics, chemistry, biology, and more.",
    img: "https://img.freepik.com/free-photo/study-group-african-people_23-2149156390.jpg?size=626&ext=jpg&uid=R79909057&ga=GA1.2.1797571327.1691582797&semt=ais",
  },
];

export const objectives = [
  {
    title: "Foster Technological Innovation",
    description:
      "Our primary objective is to foster technological innovation by providing cutting-edge education and resources to our students, enabling them to become pioneers in their chosen fields of technology.",
    icon: <CodeIcon />,
  },
  {
    title: "Empower Students for the Digital Age",
    description:
      "We aim to empower our students with the skills and knowledge necessary to thrive in the digital age. Our curriculum is designed to prepare them for careers in a rapidly evolving tech-driven world.",
    icon: <SchoolIcon />,
  },
  {
    title: "Promote Research and Development",
    description:
      "We encourage research and development activities among our faculty and students. Our objective is to contribute to advancements in technology through groundbreaking research projects and innovations.",
    icon: <BuildIcon />,
  },

  {
    title: "Enhance Collaboration and Networking",
    description:
      "We strive to create an environment that enhances collaboration and networking among students, faculty, and industry professionals. Our objective is to facilitate connections that lead to opportunities and partnerships in the technologysector.",
    icon: <GroupIcon />,
  },
];

export const colleges = [
  {
    name: "BUSINESS, LAW & EDUCATIONAL SCIENCES",
    imageUrl: lawimg,
    id: 1,
    college: "COLLEGE OF BUSINESS, LAW & EDUCATIONAL SCIENCES",
  },
  {
    name: "AGRICULTURE, LIFE  & ENVIRONMENTAL SCIENCES",
    imageUrl: agricImg,
    id: 2,
    college: "COLLEGE OF AGRICULTURE, LIFE & ENVIRONMENTAL SCIENCES",
  },
  {
    name: "ENGINEERING SCIENCES & TECHNOLOGY",
    imageUrl: engImg,
    id: 3,
    college: "COLLEGE OF ENGINEERING AND COMPUTING SCIENCES",
  },
  {
    name: "HEALTH AND ALLIED MEDICAL SCIENCES",
    imageUrl: medImg,
    id: 4,
    college: "TRISTATE COLLEGE OF HEALTH AND ALLIED MEDICAL SCIENCES",
  },
];

export const collegeSchools = [
  {
    id: 1,
    name: "Agriculture",
    school: "School of Agriculture",
    college: "COLLEGE OF AGRICULTURE, LIFE & ENVIRONMENTAL SCIENCES",
  },
  {
    id: 2,
    name: "Basic, Applied and Life Sciences",
    school: "School of Basic, Applied and Life Sciences",
    college: "COLLEGE OF AGRICULTURE, LIFE & ENVIRONMENTAL SCIENCES",
  },
  {
    id: 3,
    name: "Communication, Culture & Media Studies",
    school: "School of Communication, Culture & Media Studies",
    college: "COLLEGE OF BUSINESS, LAW & EDUCATIONAL SCIENCES",
  },
  {
    id: 6,
    name: "Business Economics & Technology Management",
    school: "School of Business Economics & Technology Management",
    college: "COLLEGE OF BUSINESS, LAW & EDUCATIONAL SCIENCES",
  },
  {
    id: 11,
    name: "Computing Sciences",
    school: "School of Computing Sciences",
    college: "COLLEGE OF ENGINEERING AND COMPUTING SCIENCES",
  },

  {
    id: 13,
    name: "Engineering Sciences & Technology",
    school: "School of Engineering Sciences & Technology",
    college: "COLLEGE OF ENGINEERING AND COMPUTING SCIENCES",
  },
  {
    id: 14,
    name: "Power Engineering",
    school: "School of Power Engineering",
    college: "COLLEGE OF ENGINEERING AND COMPUTING SCIENCES",
  },
  {
    id: 15,
    name: "Allied Health",
    school: "School of Allied Health",
    college: "TRISTATE COLLEGE OF HEALTH AND ALLIED MEDICAL SCIENCES",
  },
  {
    id: 16,
    name: "Dentistry",
    school: "School of Dentistry",
    college: "TRISTATE COLLEGE OF HEALTH AND ALLIED MEDICAL SCIENCES",
  },
  {
    id: 17,
    name: "Basic Medical Sciences",
    school: "School of Basic Medical Sciences",
    college: "TRISTATE COLLEGE OF HEALTH AND ALLIED MEDICAL SCIENCES",
  },
  {
    id: 18,
    name: "Clinical Sciences",
    school: "School of Clinical Sciences",
    college: "TRISTATE COLLEGE OF HEALTH AND ALLIED MEDICAL SCIENCES",
  },
  {
    id: 19,
    name: "Nursing",
    school: "School of Nursing & Midwifery Sciences",
    college: "TRISTATE COLLEGE OF HEALTH AND ALLIED MEDICAL SCIENCES",
  },
  {
    id: 20,
    name: "Pharmaceutical Sciences",
    school: "School of Pharmaceutical Sciences",
    college: "TRISTATE COLLEGE OF HEALTH AND ALLIED MEDICAL SCIENCES",
  },
];

export const undergraduatePrograms = [
  {
    name: "Bachelor of Agriculture",
    shortName: "B.Agric",
    meaning: "A bachelor's degree in Agriculture",
  },
  {
    name: "Bachelor of Technology",
    shortName: "B.Tech",
    meaning: "A bachelor's degree in Technology",
  },
  {
    name: "Bachelor of Science",
    shortName: "B.Sc",
    meaning: "A bachelor's degree in Science",
  },
  {
    name: "Bachelor of Fine Arts",
    shortName: "B.F.A",
    meaning: "A bachelor's degree in Fine Arts",
  },
  {
    name: "Bachelor of Architecture",
    shortName: "B.Arch",
    meaning: "A bachelor's degree in Architecture",
  },
  {
    name: "Bachelor of Engineering",
    shortName: "B.Eng",
    meaning: "A bachelor's degree in Engineering",
  },
  {
    name: "Doctor of Dental Surgery",
    shortName: "D.D.S",
    meaning: "A doctoral degree in Dental Surgery",
  },
  {
    name: "Bachelor of Medicine and Bachelor of Surgery",
    shortName: "MBBS",
    meaning: "A combined bachelor's degree in Medicine and Surgery",
  },
  {
    name: "Bachelor of Nursing Science/Registered Nurse/Registered Midwife",
    shortName: "BNSC/RN/RM",
    meaning:
      "A combined program in Nursing Science with Registered Nurse and Registered Midwife qualifications",
  },
  {
    name: "Diploma in Nursing and Integrated Science",
    shortName: "DNIS",
    meaning: "A diploma program in Nursing and Integrated Science",
  },
];

export const mastersPrograms = [
  {
    name: "Master of Business Administration",
    shortName: "MBA",
    meaning: "A master's degree in Business Administration",
  },
  {
    name: "Master of Business Administration and Master of Science",
    shortName: "MBA-MSc",
    meaning: "A dual master's degree in Business Administration and Science",
  },
  {
    name: "Master of Engineering",
    shortName: "M.Eng",
    meaning: "A master's degree in Engineering",
  },
  {
    name: "Doctor of Dental Surgery/Doctor of Philosophy",
    shortName: "DDS/DrPh",
    meaning: "A dual degree program in Dental Surgery and Philosophy",
  },
  {
    name: "Bachelor of Medicine, Bachelor of Surgery/Doctor of Philosophy/Master of Business Administration",
    shortName: "MBBS/MD or MBBS/DrPh or MBBS/MBA",
    meaning:
      "A combined program in Medicine, Surgery, Philosophy, and Business Administration",
  },
  {
    name: "Bachelor of Nursing Science/Registered Nurse/Registered Midwife",
    shortName: "BNSC/RN/RM",
    meaning:
      "A combined program in Nursing Science with Registered Nurse and Registered Midwife qualifications",
  },
  {
    name: "Doctor of Audiology",
    shortName: "D.Aud",
    meaning: "A doctoral degree in Audiology",
  },
  {
    name: "Bachelor of Medical Laboratory Science",
    shortName: "BMLS",
    meaning: "A bachelor's degree in Medical Laboratory Science",
  },
  {
    name: "Doctor of Optometry",
    shortName: "O.D",
    meaning: "A doctoral degree in Optometry",
  },
  {
    name: "Master of Public Health",
    shortName: "MPH",
    meaning: "A master's degree in Public Health",
  },
  {
    name: "Master of Arts in Teaching",
    shortName: "MAT",
    meaning: "A master's degree in Teaching",
  },
  {
    name: "Master of Occupational Therapy",
    shortName: "MOT",
    meaning: "A master's degree in Occupational Therapy",
  },
  {
    name: "Doctor of Physical Therapy",
    shortName: "DPT",
    meaning: "A doctoral degree in Physical Therapy",
  },
  {
    name: "Doctor of Science",
    shortName: "ScD",
    meaning: "A doctoral degree in Science",
  },
  {
    name: "Bachelor of Radiation Science Technology",
    shortName: "BRST",
    meaning: "A bachelor's degree in Radiation Science Technology",
  },
  {
    name: "Doctor of Veterinary Medicine",
    shortName: "DVM",
    meaning: "A doctoral degree in Veterinary Medicine",
  },
  {
    name: "Master of Science",
    shortName: "MSc",
    meaning: "A master's degree in Science",
  },
  {
    name: "Master of Technology",
    shortName: "M.Tech",
    meaning: "A master's degree in Technology",
  },
  {
    name: "Master of Fine Arts",
    shortName: "M.FA",
    meaning: "A master's degree in Fine Arts",
  },
  {
    name: "Master of Architecture",
    shortName: "M.Arch",
    meaning: "A master's degree in Architecture",
  },
  {
    name: "Associate Chartered Accountant",
    shortName: "ACA",
    meaning: "An associate-level qualification in Chartered Accountancy",
  },
  {
    name: "Bachelor of Laws/Master of Laws",
    shortName: "LLB/LLM",
    meaning:
      "A combined program offering a bachelor's and master's degree in Law",
  },
  {
    name: "Master of Science in Education",
    shortName: "MSc.Ed",
    meaning: "A master's degree in Education",
  },
  // Add more master's programs as needed
];

export const departments = [
  {
    name: "Agribusiness",
    School: "Agriculture",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 1,
    Content:
      "Candidates will be admitted into Agribusiness through UTME and HUST Post-UTME Screening. In addition to UTME score, the candidate should possess five credit passes in WAEC, NECO, IGSCE or its equivalent to include English Language, Mathematics, Agricultural Science and any other two subjects from the following list: Chemistry, Physics or Biology and Economics in not more than two sittings.",
  },
  {
    name: "Agricultural Economics",
    School: "Agriculture",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 2,
    Content:
      "Candidates will be admitted into Agricultural Economics through UTME and HUST Post-UTME Screening. In addition to UTME score, the candidate should possess five credit passes in WAEC, NECO, IGSCE or its equivalent to include English Language, Mathematics, Agricultural Science and any other two subjects from the following list: Chemistry, Physics or Biology and Economics in not more than two sittings.",
  },
  {
    name: "Microbiology",
    School: "Basic, Applied and Life Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 3,
    Content:
      "Candidates will be admitted into Microbiology through UTME and HUST Post-UTME Screening. The entry requirements shall be at least credit level passes in five subjects including English language, mathematics, biology, chemistry, and physics in WAEC, NECO, IGSCE or its equivalent. In addition, an acceptable pass in the unified tertiary matriculation examination (UTME) is required.",
  },

  {
    name: "Forensic Sciences",
    School: "Basic, Applied and Life Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 4,
    Content:
      "Candidates will be admitted into Forensic Science through UTME and HUST Post-UTME Screening. The minimum academic requirement is credit level passes at WAEC, NECO, IGSCE or its equivalent in English Language, Mathematics, Biology, Chemistry and Physics at not more than two sittings. In addition, an acceptable pass in the following Unified Tertiary Matriculation Examination (UTME) subjects is also required for admission; English, Biology, Chemistry and Physics",
  },

  {
    name: "Environmental Management & Toxicology",
    School: "Basic, Applied and Life Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 5,
    Content:
      "Candidates will be admitted into Environmental Management and Toxicology through UTME and HUST Post-UTME Screening. Candidates who have successfully completed WAEC, NECO, IGSCE or its equivalent and obtained five credits in Mathematics, English Language, Physics, Chemistry and Biology or Agricultural Science, in not more than two sittings. Candidate must have acceptable score in the UTME with relevant subject combination",
  },
  {
    name: "Petroleum Chemistry",
    School: "Basic, Applied and Life Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 6,
    Content:
      "Candidates will be admitted into Petroleum Chemistry through UTME and HUST Post-UTME Screening. The candidate must have in addition a minimum of credit level pass in five subjects at not more than two sittings in WAEC, NECO, IGSCE or its equivalent. The required credit level passes are; English language, Mathematics, Chemistry, Physics and any relevant Science Subject. The UTME subjects are; English Language, Mathematics, Chemistry and Physics.",
  },

  {
    name: "Accounting",
    School: "Business Economics & Technology Management",
    College: "College of Business, Law & Educational Sciences",
    Id: 7,

    Content:
      "Candidates will be admitted into Accounting through UTME and HUST Post-UTME Screening. In addition to UTME requirements, the prospective candidate for a 4-year degree programme is expected to have obtained credit passes in five subjects in WAEC, NECO, IGSCE or its equivalent including English Language, Mathematics and any other three (3) from Principles of Accounting, Commerce, Economics and any other relevant commercial subjects at not more than two sittings.",
  },
  {
    name: "Economics",
    School: "Business Economics & Technology Management",
    College: "College of Business, Law & Educational Sciences",
    Id: 8,

    Content:
      "Candidates will be admitted into Economics through UTME and HUST Post-UTME Screening. In addition to UTME requirements, the prospective candidate for a 4-year degree programme is expected to have obtained credit passes in five WAEC, NECO, IGSCE subjects or its equivalent including English Language, Mathematics, Economics and any of, Commerce, Principles of Accounting, Business Methods and any other relevant commercial subjects at not more than two sittings.",
  },

  {
    name: "Logistics and Supply Chain Management",
    School: "Business Economics & Technology Management",
    College: "College of Business, Law & Educational Sciences",
    Id: 9,

    Content:
      "Candidates will be admitted into Logistics and Supply Chain Management through UTME and HUST Post-UTME Screening. In addition to UTME requirements, the prospective candidate for a 4-year degree programme is expected to have obtained credit passes in five WAEC, NECO, IGSCE subjects or its equivalent including English Language and Mathematics, Economics and any of, Financial Accounting, Marketing, Commerce and Business Methods at not more than two sittings.",
  },

  {
    name: "Mass Communication",
    School: "Communication, Culture & Media Studies",
    College: "College of Business, Law & Educational Sciences",
    Id: 10,
    Content:
      "Candidates will be admitted into Mass Communication through UTME and HUST Post-UTME Screening. In addition to acceptable passes in UTME, candidates must obtain at credit level, passes in WAEC, NECO, IGSCE or its equivalent in five subjects including Mathematics, English Language and three other arts or social science subjects in not more than two sittings.",
  },

  {
    name: "Computing & Artificial Intelligence",
    School: "Computing Sciences",
    College: "College of Engineering And Computing Sciences",
    Id: 11,
    Content:
      "Candidates will be admitted into Computing and Artificial Intelligence through UTME and HUST Post-UTME Screening. In addition to appropriate UTME Score, a candidate must possess five WAEC, NECO, IGSCE or its equivalent credits passes including English Language, Mathematics, Physics and any other relevant Science subjects in not more than two sittings.",
  },

  {
    name: "Data Science",
    School: "Computing Sciences",
    College: "College of Engineering And Computing Sciences",
    Id: 12,
    Content:
      "Candidates will be admitted into Data Science through UTME and HUST Post-UTME Screening. In addition to appropriate UTME Score, a candidate must possess five WAEC, NECO, IGSCE or its equivalent credits passes including English Language, Mathematics, Physics and any other relevant Science subjects in not more than two sittings.",
  },

  {
    name: "Software Engineering",
    School: "Computing Sciences",
    College: "College of Engineering And Computing Sciences",
    Id: 13,
    Content:
      "Candidates will be admitted into Software Engineering through UTME and HUST Post-UTME Screening. In addition to appropriate UTME Score, a candidate must possess five WAEC, NECO, IGSCE or its equivalent credits passes including English Language, Mathematics, Physics and any other relevant Science subjects in not more than two sittings.",
  },
  {
    name: "Cyber Security",
    School: "Computing Sciences",
    College: "College of Engineering And Computing Sciences",
    Id: 14,
    Content:
      "Candidates will be admitted into Cyber Security through UTME and HUST Post-UTME Screening. In addition to appropriate UTME Score, a candidate must possess five WAEC, NECO, IGSCE or its equivalent credits passes including English Language, Mathematics, Physics and any other relevant Science subjects in not more than two sittings.",
  },

  {
    name: "Mechanical Engineering",
    School: "Engineering Sciences & Technology",
    College: "College of Engineering And Computing Sciences",
    Id: 15,
    Content:
      "Candidates will be admitted into Mechanical Engineering through UTME and HUST Post-UTME Screening. For the five-year degree programme, in addition to acceptable passes in the Unified Tertiary Matriculation Examination (UTME), the minimum admission requirement is credit level passes in WAEC, NECO, IGSCE or its equivalent in at least five subjects, which must include English Language, Mathematics, Physics, Chemistry and other acceptable science subjects at not more than two sittings.",
  },

  {
    name: "Civil & Construction Engineering",
    School: "Engineering Sciences & Technology",
    College: "College of Engineering And Computing Sciences",
    Id: 16,
    Content:
      "Candidates will be admitted into Civil and Construction Engineering through UTME and HUST Post-UTME Screening. For the five-year degree programme, in addition to acceptable passes in the Unified Tertiary Matriculation Examination (UTME), the minimum admission requirement is credit level passes in WAEC, NECO, IGSCE or its equivalent in at least five subjects, which must include English Language, Mathematics, Physics, Chemistry and other acceptable science subjects at not more than two sittings",
  },
  {
    name: "Mechatronics Engineering",
    School: "Engineering Sciences & Technology",
    College: "College of Engineering And Computing Sciences",
    Id: 17,
    Content:
      "Candidates will be admitted into Mechatronic Engineering through UTME and HUST Post-UTME Screening. For the five-year degree programme, in addition to acceptable passes in the Unified Tertiary Matriculation Examination (UTME), the minimum admission requirement is credit level passes in WAEC, NECO, IGSCE or its equivalent in at least five subjects, which must include English Language, Mathematics, Physics, Chemistry and other acceptable science subjects at not more than two sittings.",
  },
  {
    name: "Industrial & Production Engineering",
    School: "Engineering Sciences & Technology",
    College: "College of Engineering And Computing Sciences",
    Id: 18,
    Content:
      "Candidates will be admitted into Industrial and Production Engineering through UTME and HUST Post-UTME Screening. For the five-year degree programme, in addition to acceptable passes in the Unified Tertiary Matriculation Examination (UTME), the minimum admission requirement is credit level passes in WAEC, NECO, IGSCE or its equivalent in at least five subjects, which must include English Language, Mathematics, Physics, Chemistry and other acceptable science subjects at not more than two sittings.",
  },

  {
    name: "Aerospace Engineering",
    School: "Power Engineering",
    College: "College of Engineering And Computing Sciences",
    Id: 19,
    Content:
      "Candidates will be admitted into Aerospace Engineering through UTME and HUST Post-UTME Screening. For the five-year degree programme, in addition to acceptable passes in the Unified Tertiary Matriculation Examination (UTME), the minimum admission requirement is credit level passes in WAEC, NECO, IGSCE or its equivalent in at least five subjects, which must include English Language, Mathematics, Physics, Chemistry and other acceptable science subjects at not more than two sittings.",
  },

  {
    name: "Electrical Engineering",
    School: "Power Engineering",
    College: "College of Engineering And Computing Sciences",
    Id: 20,
    Content:
      "Candidates will be admitted into Electrical Engineering through UTME and HUST Post-UTME Screening. For the five-year degree programme, in addition to acceptable passes in the Unified Tertiary Matriculation Examination (UTME), the minimum admission requirement is credit level passes in WAEC, NECO, IGSCE or its equivalent in at least five subjects, which must include English Language, Mathematics, Physics, Chemistry and other acceptable science subjects at not more than two sittings.",
  },

  {
    name: "Systems Engineering",
    School: "Power Engineering",
    College: "College of Engineering And Computing Sciences",
    Id: 21,
    Content:
      "Candidates will be admitted into Systems Engineering through UTME and HUST Post-UTME Screening. For the five-year degree programme, in addition to acceptable passes in the Unified Tertiary Matriculation Examination (UTME), the minimum admission requirement is credit level passes in WAEC, NECO, IGSCE or its equivalent in at least five subjects, which must include English Language, Mathematics, Physics, Chemistry and other acceptable science subjects at not more than two sittings.",
  },

  {
    name: "Chemical Engineering",
    School: "Power Engineering",
    College: "College of Engineering And Computing Sciences",
    Id: 22,
    Content:
      "Candidates will be admitted into Chemical Engineering through UTME and HUST Post-UTME Screening. For the five-year degree programme, in addition to acceptable passes in the Unified Tertiary Matriculation Examination (UTME), the minimum admission requirement is credit level passes in WAEC, NECO, IGSCE or its equivalent in at least five subjects, which must include English Language, Mathematics, Physics, Chemistry and other acceptable science subjects at not more than two sittings.",
  },

  {
    name: "Dentistry",
    School: "Dentistry",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 23,
    Content: "",
  },

  {
    name: "Optometry",
    School: "Allied Health",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 24,
    Content:
      "Candidates will be admitted into Dentistry through UTME and HUST Post-UTME Screening. In addition to acceptable scores in the Unified Tertiary Matriculation Examination (UTME), candidates to be admitted into the degree programme shall possess a credit pass in each of the following: Physics, Chemistry, Biology, Mathematics and English language at WAEC, NECO, IGSCE or its equivalent at one sitting.",
  },

  {
    name: "Audiology",
    School: "Allied Health",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 25,
    Content:
      "Candidates will be admitted into Audiology through UTME and HUST Post-UTME Screening. The minimum academic requirements is credit level passes in five subjects at WAEC, NECO, IGSCE or its equivalent including English Language, Mathematics, Physics, Chemistry and Biology at not more than two (2) sittings and an acceptable pass mark at the Unified Tertiary Matriculation Examination.",
  },

  {
    name: "Nutrition & Dietetics",
    School: "Allied Health",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 26,
    Content:
      "Candidates will be admitted into Nutrition and Dietetics through UTME and HUST Post-UTME Screening. Candidates must satisfy the university minimum requirements of five credits passes at WAEC, NECO, IGSCE or its equivalent, which must include Mathematic, Physics, Biology, Chemistry and English Language.",
  },

  {
    name: "Physiology",
    School: "Basic Medical Sciences",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 27,
    Content:
      "Candidates will be admitted into Physiology through UTME and HUST Post-UTME Screening. In addition to the UTME requirements, candidates seeking admission into the Human Anatomy degree programme must possess a minimum of five credit passes in WAEC, NECO, IGSCE or its equivalent to include English Language, Mathematics, Physics, Chemistry and Biology at not more than two (2) sittings.",
  },

  {
    name: "Optometry",
    School: "Medicine",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 28,
    Content:
      "Throughout the course of study, the student is required to maintain a professional code of conduct as embodied in the fundamental ethical principles of the Optometry profession. Candidates will be admitted into Optometry through UTME and HUST Post-UTME Screening. Candidate for admission must have a minimum of Five WAEC, NECO, IGSCE credits or its equivalents at one sitting in English, Mathematics, Physics, Chemistry, and Biology.",
  },
  {
    name: "Anatomy",
    School: "Basic Medical Sciences",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 29,
    Content:
      "Candidates will be admitted into Anatomy through UTME and HUST Post-UTME Screening. In addition to the UTME requirements, candidates seeking admission into the Human Anatomy degree programme must possess a minimum of five credit passes in WAEC, NECO, IGSCE or its equivalent to include English Language, Mathematics, Physics, Chemistry and Biology at not more than two (2) sittings.",
  },
  {
    name: "Biochemistry",
    School: "Basic Medical Sciences",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 30,
    Content:
      "Candidates will be admitted into Biochemistry through UTME and HUST Post-UTME Screening. In addition to the UTME requirements, candidates seeking admission into the Human Anatomy degree programme must possess a minimum of five credit passes in WAEC, NECO, IGSCE or its equivalent to include English Language, Mathematics, Physics, Chemistry and Biology at not more than two (2) sittings.",
  },

  {
    name: "Medical Laboratory Science",
    School: "Allied Health",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 31,
    Content:
      "Candidates will be admitted into Medical Laboratory Science through UTME and HUST Post-UTME Screening. In addition to appropriate UTME scores, the candidate must score five credits passes in Mathematics, Physics, Chemistry, Biology and English Language in not more than two sittings at WAEC, NECO, IGSCE or its equivalent.",
  },

  {
    name: "Pharmaceutical Sciences",
    School: "Pharmaceutical Sciences",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 32,
    Content:
      "Candidates will be admitted into Pharmacy through UTME and HUST Post-UTME Screening. In addition to acceptable scores in the Unified Tertiary Matriculation Examination (UTME), candidates to be admitted into the degree programme shall possess a credit pass in each of the following: Physics, Chemistry, Biology, Mathematics and English language at WAEC, NECO, IGSCE or its equivalent at one sitting.",
  },

  {
    name: "Medicine",
    School: "Clinical Sciences",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 33,
    Content:
      "Candidates will be admitted into Medicine through UTME and HUST Post-UTME Screening. In addition to acceptable scores in the Unified Tertiary Matriculation Examination (UTME), candidates to be admitted into the degree programme shall possess a credit pass in each of the following: Physics, Chemistry, Biology, Mathematics and English language at WAEC, NECO, IGSCE or its equivalent at one sitting.",
  },
  {
    name: "Nursing",
    School: "Nursing",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 34,
    Content:
      "Candidates will be admitted into Nursing through UTME and HUST Post-UTME Screening. In addition to appropriate Unified Tertiary Matriculation Examination scores, candidate must obtain five credit passes including Mathematics, Physics, Chemistry, Biology and English Language at not more than two sittings in WAEC, NECO, IGSCE or its equivalent",
  },
];

export const libraryFeatures = [
  {
    title: "Online Catalog Access",
    description:
      "Explore the university's extensive collection of books, journals, and digital resources through our user-friendly online catalog, available 24/7.",
    icon: <LibraryBooks />,
  },
  {
    title: "Resource Reservations",
    description:
      "Reserve study rooms, multimedia equipment, and other resources in advance to ensure you have the necessary tools for your academic success.",
    icon: <Book />,
  },
  {
    title: "Research Assistance",
    description:
      "Our knowledgeable librarians are ready to assist you with research inquiries, citation guidance, and accessing specialized databases.",
    icon: <Group />,
  },
  {
    title: "Interlibrary Loan Services",
    description:
      "If we don't have a specific resource you need, take advantage of our interlibrary loan services to access materials from other institutions.",
    icon: <Accessible />,
  },
  {
    title: "Digital Archives",
    description:
      "Discover historical documents, manuscripts, and university archives in our digital collection, providing a valuable resource for research and nostalgia.",
    icon: <History />,
  },
];

export const schoolResourceContents = [
  {
    title: "Job Openings",
    description:
      "Explore current job openings within our university and join our academic community. We offer a wide range of career opportunities in various academic and administrative areas.",
  },
  {
    title: "Faculty Directory",
    description:
      "Find information about our esteemed faculty members, their expertise, and contact details. Our dedicated professors are committed to providing quality education and research support.",
  },
  {
    title: "Staff Directory",
    description:
      "Access contact information for our dedicated staff members who support the university's operations. Our staff is here to assist you with administrative needs and ensure the smooth functioning of the institution.",
  },
  {
    title: "HR Policies",
    description:
      "Learn about the university's HR policies and guidelines to ensure a positive work environment. We prioritize a fair and inclusive workplace for all employees.",
  },
  {
    title: "Employee Benefits",
    description:
      "Discover the comprehensive benefits offered to our faculty and staff, including health, retirement, and professional development programs. We aim to provide competitive and rewarding benefits to support your well-being and career growth.",
  },
  {
    title: "Employee Assistance Program",
    description:
      "Explore the support services available to employees, including counseling and resources for work-life balance. We understand the importance of well-being, and our program is here to assist you in times of need.",
  },
  {
    title: "Academic Resources",
    description:
      "Access a wide range of academic resources, including libraries, research centers, and laboratories. We provide state-of-the-art facilities to enhance your learning and research experience.",
  },
  {
    title: "Student Support Services",
    description:
      "Learn about the student support services available to provide guidance, counseling, and assistance to our students. We are committed to helping students achieve academic success.",
  },
  {
    title: "Campus Facilities",
    description:
      "Discover our campus facilities, including classrooms, sports centers, and recreational areas. We offer a vibrant and inclusive campus environment for our community.",
  },
  {
    title: "Events and Announcements",
    description:
      "Stay updated with the latest university events and announcements. We host a variety of academic, cultural, and social events to engage and inform our community.",
  },
];

export const WhyUsData = [
  {
    title: "Curriculum Design",
    description:
      "Our curriculum is comprehensive, practical, and regularly updated to reflect the latest industry standards. We achieve this by implementing the Maranatha Institute of Science and Technology curriculum and working closely with industry leaders. This ensures that our students are equipped  with the skills, knowledge, and expertise required by employers, making them competitive in the job market upon graduation.",
  },
  {
    title: "Experiential Learning",
    description:
      "Our structured internship schemes and cooperative programs offer students vital industry exposure, while our collaborative  projects with industry partners allow students to tackle real-world business challenges",
  },
  {
    title: "Innovation and Research",
    description:
      "We foster research collaborations that yield innovative outcomes for both the university and industry sectors. Our shared research spaces and initiatives equip students and faculty with cuttingedge technology and industry know-how",
  },
  {
    title: "Faculty Expertise",
    description:
      "Our faculty benefits from insights of industry specialists via guest lectures and workshops. Academic staff are encouraged to take sabbaticals within the industry to enhance their practical  knowledge and teaching approach.",
  },
  {
    title: "Resource Sharing",
    description:
      "Our collaboration includes shared access to facilities and high-quality equipment enriched with industry inputs such as specialized software and practical case studies.  ",
  },
  {
    title: "Career Pathways",
    description:
      "We organise campus recruitment and networking events to connect students directly with industry professionals. Our career services are tailored to meet the expectations and requirements of our industry partners.",
  },
  {
    title: "Continuous Professional Development",
    description:
      "We provide industry-expert-led certification programs and tailor-made training to meet the learning needs of professionals, ensuring they stay at the forefront of industry trends and technological advancements.",
  },
  {
    title: "Investment in Education",
    description:
      "Industry-funded scholarships and grants help facilitate exceptional learning environments. Corporate entities investing in academia are eligible for tax incentives and recognition.",
  },
  {
    title: "Entrepreneurship and Innovation Support",
    description:
      "Our incubators and accelerators support entrepreneurship and innovation through mentorship, funding, and entrepreneurial courses incorporating industry expertise.",
  },
  {
    title: "Strategic Influence and Consultation",
    description:
      "We collaborate with industry leaders to promote education policies that bolster economic growth and job creation. Our advisory teams include influential figures who help shape our long-term institutional and educational strategies",
  },
];

export const studentAffairsPoints = [
  {
    icon: <Person />,
    title: "Personalized Support",
    description:
      "Our dedicated staff provides personalized support to address students' academic and personal needs. Whether you need academic guidance, counseling, or assistance with personal challenges, we are here to help you navigate your university journey and ensure your success.",
  },
  {
    icon: <Book />,
    title: "Academic Advising",
    description:
      "Academic advising is at the heart of our student support system. Our advisors work closely with you to choose the right courses, plan your degree, and develop academic success strategies. We are committed to helping you achieve your academic goals and make the most of your university experience.",
  },
  {
    icon: <Event />,
    title: "Student Events",
    description:
      "The university experience goes beyond the classroom. Our vibrant campus life offers a wide range of social, cultural, and extracurricular activities. Join clubs, attend cultural festivals, and engage in events that enrich your social life and create lasting memories.",
  },
  {
    icon: <Lightbulb />,
    title: "Leadership Opportunities",
    description:
      "Leadership development is a key focus at Hillside University. We offer a variety of leadership programs, clubs, and student organizations that provide you with the chance to grow as a leader, foster valuable skills, and make a positive impact on your community.",
  },
  {
    icon: <Support />,
    title: "Wellness Support",
    description:
      "Your well-being is important to us. Our student affairs department provides access to counseling, health services, and resources to help you maintain your physical and mental well-being. We are here to support your holistic development.",
  },
  {
    icon: <Work />,
    title: "Career Services",
    description:
      "Your future career is as important to us as your current studies. Our career services team offers career guidance, job placement support, and internship opportunities. We aim to prepare you for a successful transition into the professional world.",
  },
  {
    icon: <LibraryBooks />,
    title: "Academic Resources",
    description:
      "Access a wealth of academic resources, including libraries, research centers, and laboratories. These resources are designed to enhance your learning and research experience, providing valuable tools for academic success.",
  },
  {
    icon: <Home />,
    title: "Housing Assistance",
    description:
      "Our housing assistance program helps students find safe and convenient living arrangements, both on and off-campus. We aim to provide comfortable living spaces that support your academic pursuits.",
  },
  {
    icon: <SportsEsports />,
    title: "Sports and Recreation",
    description:
      "Engage in sports and recreation activities to stay active and build a sense of community. We offer various sports facilities and opportunities for students to pursue their athletic interests and enjoy a healthy lifestyle.",
  },
];

export const residenceDetails = [
  {
    icon: <BsBuildingFillExclamation />,
    title: "Residence Halls",
    description:
      "Our campus features modern and comfortable residence halls, providing students with a safe and convenient place to live during their university experience. Explore a variety of room and housing options to suit your preferences and needs.",
  },
  {
    icon: <BsBuildingFillExclamation />,
    title: "Classrooms and Labs",
    description:
      "Our state-of-the-art classrooms and well-equipped laboratories offer a conducive environment for academic learning and research. We provide the latest technology and resources to support your educational journey.",
  },
  {
    icon: <BsBuildingFillExclamation />,
    title: "Hostel Accommodation",
    description:
      "Experience comfortable and attractive hostel accommodations that make you feel at home. Our hostels are designed to offer a welcoming and supportive environment for students.",
  },
  {
    icon: <BsBuildingFillExclamation />,
    title: "Libraries and Resources",
    description:
      "Access extensive libraries and academic resources, including research materials, digital databases, and knowledgeable librarians to assist with your studies and research projects.",
  },
  {
    icon: <BsBuildingFillExclamation />,
    title: "Dining Facilities",
    description:
      "Enjoy a variety of dining options on campus, from cafeterias to restaurants, offering delicious and nutritious meals to keep you fueled throughout the day.",
  },
  {
    icon: <BsBuildingFillExclamation />,
    title: "Fitness and Recreation",
    description:
      "Stay active and healthy with our fitness and recreation facilities. We provide gyms, sports fields, and recreational spaces for students to engage in physical activities and maintain a balanced lifestyle.",
  },
  {
    icon: <BsBuildingFillExclamation />,
    title: "Medical Services",
    description:
      "Your health is our priority. We offer medical services, clinics, and healthcare resources to address your health and well-being needs during your university journey.",
  },
  {
    icon: <BsBuildingFillExclamation />,
    title: "Campus Security",
    description:
      "Our campus is equipped with security measures to ensure a safe and secure environment for all students. We take your safety seriously and provide 24/7 security services.",
  },
];

export const foodFeatures = [
  {
    title: "Delicious Dining Options",
    description:
      "Enjoy a diverse range of mouthwatering dishes from various cuisines, all prepared with the finest ingredients.",
  },
  {
    title: "Healthy and Nutritious Menus",
    description:
      "Our food service focuses on providing nutritious meals that support your well-being and dietary needs.",
  },
  {
    title: "Convenient Locations",
    description:
      "Hillside Superstores are strategically located across the campus, making it easy to access delicious food options.",
  },
  {
    title: "Cafeterias and Restaurants",
    description:
      "Choose from our cafeterias for quick bites or dine at our restaurants for a more upscale experience.",
  },
  {
    title: "Friendly and Knowledgeable Staff",
    description:
      "Our staff are dedicated to providing excellent service and helping you make the best dining choices.",
  },
  {
    title: "Special Dietary Accommodations",
    description:
      "We offer options for various dietary preferences, including vegetarian, vegan, and gluten-free meals.",
  },
  {
    title: "Affordable Meal Plans",
    description:
      "Explore budget-friendly meal plans that cater to students' financial needs.",
  },
  {
    title: "Hours to Suit Your Schedule",
    description:
      "Hillside Superstores have flexible operating hours to accommodate your busy university life.",
  },
];

export const fundingOptions = [
  {
    title: "Bonded Student Loans Repayment Schemes (Federal/States/Corporate)",
    points: [
      "Funded through a Federal, State, or Corporate body Student Loan Scheme",
      "Settled in cash on an established repayment schedule",
      "Collateralized certificates released at maturity",
      "Presentation of 'Certificate of Non-Indebtedness' required",
    ],
  },
  {
    title:
      "Bonded Student Scholarship Service Schemes (Federal/States/Corporate/Development Agencies)",
    points: [
      "Funded through a Federal, State, or Corporate body Student Scholarship Scheme",
      "Student undertakes post-graduation professional services",
      "One year of service for each year of sponsorship",
      "Collateralized certificates released at maturity",
      "Presentation of 'Certificate of Service Release' required",
    ],
  },
  {
    title: "Bonded MiST Mediated Student Loans Scheme",
    points: [
      "Corporate Student Loan Scheme mediated by the MiST system",
      "Settled in cash on an established repayment schedule",
      "Collateralized certificates released at maturity",
      "Presentation of 'Certificate of Non-Indebtedness' required",
      "Duly executed by MiST",
    ],
  },
  {
    title: "Bonded MiST Scholarship Service Schemes",
    points: [
      "Funded through MiST mediated Student Scholarship Funds",
      "Student undertakes post-graduation professional services",
      "One year of service for each year of sponsorship",
      "Collateralized certificates released at maturity",
      "Presentation of 'Certificate of Service Release' required",
      "Duly executed by the MiST organization",
    ],
  },
  {
    title: "Direct Personal Student Sponsorship",
    points: [
      "Non-Bonded direct program funding through student’s own resources",
      "Uncollateralized certificates released on full completion of the course of study",
      "Certificates released upon payment of all fees due",
    ],
  },
];
