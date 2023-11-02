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
import { BsBuildingFillExclamation } from "react-icons/bs";

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
      { label: "Requirements", icon: <FaBook />, url: "Admission" },
      { label: "Tuition Fees", icon: <FaBook />, url: "Admission" },
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
  // {
  //   page: "Updates",
  //   links: [
  //     { label: "News", icon: <FaBook />, url: "/products" },
  //     { label: "Events", icon: <FaBook />, url: "/products" },
  //   ],
  // },
  {
    page: "Public Information",
    links: [
      { label: "Policies", icon: <FaBook />, url: "Public Information" },
      { label: "Make Enquiries", icon: <FaBook />, url: "Public Information" },
      { label: "Our Patners", icon: <FaBook />, url: "Public Information" },
    ],
  },
  {
    page: "Contact",
    links: [
      { label: "enquiries@hust.edu.ng", icon: <FaBook />, url: "Contact" },
      { label: "contact@hust.com", icon: <FaBook />, url: "Contact" },
      { label: "+234 (901)-128-1920", icon: <FaBook />, url: "Contact" },
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
    page: "Resources",
    sublinks: true,
  },
  {
    page: "Student Life",
    sublinks: true,
  },
  // {
  //   page: "Updates",
  //   sublinks: true,
  // },
  {
    page: "Public Information",
    sublinks: true,
  },
  {
    page: "Contact",
    sublinks: true,
  },
];

export const TopLinks = [
  <Facebook sx={{ color: "#f7f7f7", opacity: "0.5", fontSize: "15px" }} />,
  <Instagram sx={{ color: "#f7f7f7", opacity: "0.5", fontSize: "15px" }} />,
  <LinkedIn sx={{ color: "#f7f7f7", opacity: "0.5", fontSize: "15px" }} />,
  <Twitter sx={{ color: "#f7f7f7", opacity: "0.5", fontSize: "15px" }} />,
];

/* Hero Content */

export const heroContents = [
  {
    class: "content-1",
    subtitle: "Welcome to",
    title: "Hillside Science and Technology",
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
      "Dedicated to Excellence in Education, Inspiring a Passion for Learnin and Building a Foundation for Success",
    btn1: "About Us",
    btn2: "Latest News",
  },
  {
    class: "content-3",
    subtitle: "Our Expert Faculties",
    title: "Excellent in Sci-Tech Education",
    subtitle2:
      "Meet Our World-Class Faculties Igniting Innovation Through Research and Transforming Ideas into Solutions",
    btn1: "Explore ",
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
    title: "Tech Innovation Hub",
    description:
      "The Tech Innovation Hub is a dynamic space for creativity and innovation. It fosters entrepreneurship, hosts tech startup incubators, and encourages students to think outside the box.",
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
    title: "Tech Innovation Hub",
    description:
      "The Tech Innovation Hub is a dynamic space for creativity and innovation. It fosters entrepreneurship, hosts tech startup incubators, and encourages students to think outside the box.",
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
      "We strive to create an environment that enhances collaboration and networking among students, faculty, and industry professionals. Our objective is to facilitate connections that lead to opportunities and partnerships in the tech sector.",
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
    college: "COLLEGE OF ENGINEERING SCIENCES & TECHNOLOGY",
  },
];

export const collegeSchools = [
  {
    id: 1,
    name: "Agribusiness & Food Technology",
    school: "School of Agribusiness & Food Technology",
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
    name: "Communication, Culture & Media Sciences",
    school: "School of Communication, Culture & Media Sciences",
    college: "COLLEGE OF AGRICULTURE, LIFE & ENVIRONMENTAL SCIENCES",
  },
  {
    id: 4,
    name: "Environmental & Earth Sciences",
    school: "School of Environmental & Earth Sciences",
    college: "COLLEGE OF AGRICULTURE, LIFE & ENVIRONMENTAL SCIENCES",
  },
  {
    id: 5,
    name: "Fashion & Hospitality Sciences",
    school: "School of Fashion & Hospitality Sciences",
    college: "COLLEGE OF AGRICULTURE, LIFE & ENVIRONMENTAL SCIENCES",
  },
  {
    id: 6,
    name: "Business Economics & Technology Management",
    school: "School of Business Economics & Technology Management",
    college: "COLLEGE OF BUSINESS, LAW & EDUCATIONAL SCIENCES",
  },
  {
    id: 7,
    name: "Law, Arbitration & Diplomacy",
    school: "School of Law, Arbitration & Diplomacy",
    college: "COLLEGE OF BUSINESS, LAW & EDUCATIONAL SCIENCES",
  },
  {
    id: 8,
    name: "Security Sciences & Technology",
    school: "School of Security Sciences & Technology",
    college: "COLLEGE OF BUSINESS, LAW & EDUCATIONAL SCIENCES",
  },
  {
    id: 9,
    name: "Technology Education & Innovation",
    school: "School of Technology Education & Innovation",
    college: "COLLEGE OF BUSINESS, LAW & EDUCATIONAL SCIENCES",
  },
  {
    id: 10,
    name: "Aerospace Engineering & Aviation Tech",
    school: "School of Aerospace Engineering & Aviation Tech",
    college: "COLLEGE OF ENGINEERING SCIENCES & TECHNOLOGY",
  },
  {
    id: 11,
    name: "Computing & Artificial Intelligence & Communications Engineering",
    school:
      "School of Computing & Artificial Intelligence & Communications Engineering",
    college: "COLLEGE OF ENGINEERING SCIENCES & TECHNOLOGY",
  },
  {
    id: 12,
    name: "Defense Engineering & Military Sciences",
    school: "School of Defense Engineering & Military Sciences",
    college: "COLLEGE OF ENGINEERING SCIENCES & TECHNOLOGY",
  },
  {
    id: 13,
    name: "Engineering Sciences & Technology",
    school: "School of Engineering Sciences & Technology",
    college: "COLLEGE OF ENGINEERING SCIENCES & TECHNOLOGY",
  },
  {
    id: 14,
    name: "Power Engineering & Geophysics",
    school: "School of Power Engineering & Geophysics",
    college: "COLLEGE OF ENGINEERING SCIENCES & TECHNOLOGY",
  },
  {
    id: 15,
    name: "Health & Allied Medical Sciences",
    school: "TriState College of Health & Allied Medical Sciences",
    college: "TriState College of Health & Allied Medical Sciences",
  },
  {
    id: 16,
    name: "Dentistry",
    school: "School of Dentistry",
    college: "TriState College of Health & Allied Medical Sciences",
  },
  {
    id: 17,
    name: "Human Development",
    school: "School of Human Development",
    college: "TriState College of Health & Allied Medical Sciences",
  },
  {
    id: 18,
    name: "Medicine",
    school: "School of Medicine",
    college: "TriState College of Health & Allied Medical Sciences",
  },
  {
    id: 19,
    name: "Nursing & Maternal Health Sciences",
    school: "School of Nursing & Maternal Health Sciences",
    college: "TriState College of Health & Allied Medical Sciences",
  },
  {
    id: 20,
    name: "Pharmaceutical Sciences",
    school: "School of Pharmaceutical Sciences",
    college: "TriState College of Health & Allied Medical Sciences",
  },
  {
    id: 21,
    name: "Public & Allied Health Sciences",
    school: "School of Public & Allied Health Sciences",
    college: "TriState College of Health & Allied Medical Sciences",
  },
  {
    id: 22,
    name: "Veterinary Medicine & Animal Health",
    school: "School of Veterinary Medicine & Animal Health",
    college: "TriState College of Health & Allied Medical Sciences",
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
    name: "Agricultural Sciences",
    School: "Agribusiness & Food Technology",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 1,
  },
  {
    name: "Agricultural Business Operations",
    School: "Agribusiness & Food Technology",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 2,
  },
  {
    name: "Agricultural Economics",
    School: "Agribusiness & Food Technology",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 3,
  },
  {
    name: "Agricultural Extension & Rural Development",
    School: "Agribusiness & Food Technology",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 4,
  },
  {
    name: "Agronomy",
    School: "Agribusiness & Food Technology",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 5,
  },
  {
    name: "Animal Science",
    School: "Agribusiness & Food Technology",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 6,
  },
  {
    name: "Horticulture",
    School: "Agribusiness & Food Technology",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 7,
  },
  {
    name: "Fish, Wildlands Sciences & Management",
    School: "Agribusiness & Food Technology",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 8,
  },
  {
    name: "Biological Sciences",
    School: "Basic, Applied and Life Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 9,
  },
  {
    name: "Forensic Sciences",
    School: "Basic, Applied and Life Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 10,
  },
  {
    name: "Forensic Biology",
    School: "Basic, Applied and Life Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 11,
  },
  {
    name: "Forensic Chemistry",
    School: "Basic, Applied and Life Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 12,
  },
  {
    name: "Forensic Physics",
    School: "Basic, Applied and Life Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 13,
  },
  {
    name: "Forensic Psychology",
    School: "Basic, Applied and Life Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 14,
  },
  {
    name: "Chemical Sciences",
    School: "Basic, Applied and Life Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 15,
  },
  {
    name: "Mathematical Sciences",
    School: "Basic, Applied and Life Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 16,
  },
  {
    name: "Engineering Physics",
    School: "Basic, Applied and Life Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 17,
  },
  {
    name: "Physical Sciences",
    School: "Basic, Applied and Life Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 18,
  },
  {
    name: "Environmental Physical",
    School: "Basic, Applied and Life Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 19,
  },
  {
    name: "Medical Physics",
    School: "Basic, Applied and Life Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 20,
  },
  {
    name: "Computational Physics",
    School: "Basic, Applied and Life Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 21,
  },
  {
    name: "Cinematography & Film/Video Production",
    School: "Communication, Culture & Media Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 22,
  },
  {
    name: "Fine Arts",
    School: "Communication, Culture & Media Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 23,
  },
  {
    name: "Graphic Designs",
    School: "Communication, Culture & Media Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 24,
  },
  {
    name: "Music Information Systems",
    School: "Communication, Culture & Media Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 25,
  },
  {
    name: "Music Performance",
    School: "Communication, Culture & Media Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 26,
  },
  {
    name: "Global Cultural Studies",
    School: "Communication, Culture & Media Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 27,
  },
  {
    name: "International Affairs & Strategic Studies",
    School: "Communication, Culture & Media Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 28,
  },
  {
    name: "Management Information Systems",
    School: "Communication, Culture & Media Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 29,
  },
  {
    name: "Mass Communication",
    School: "Communication, Culture & Media Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 30,
  },
  {
    name: "Media Production & Post Production",
    School: "Communication, Culture & Media Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 31,
  },
  {
    name: "Television & Radio",
    School: "Communication, Culture & Media Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 32,
  },
  {
    name: "Media and Social Media",
    School: "Communication, Culture & Media Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 33,
  },
  {
    name: "Playwriting & Screenwriting",
    School: "Communication, Culture & Media Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 34,
  },
  {
    name: "Public Relations/Image Management",
    School: "Communication, Culture & Media Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 35,
  },
  {
    name: "Theater Design & Technical Production",
    School: "Communication, Culture & Media Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 36,
  },
  {
    name: "Architecture",
    School: "Environmental & Earth Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 37,
  },
  {
    name: "Building Technology/Construction Science",
    School: "Environmental & Earth Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 38,
  },
  {
    name: "Climatology Sciences",
    School: "Environmental & Earth Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 39,
  },
  {
    name: "Environmental & Estates Management",
    School: "Environmental & Earth Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 40,
  },
  {
    name: "Estates Management",
    School: "Environmental & Earth Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 41,
  },
  {
    name: "Industrial Design",
    School: "Environmental & Earth Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 42,
  },
  {
    name: "Quantity Surveying",
    School: "Environmental & Earth Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 43,
  },
  {
    name: "Surveying & Geoinformatics",
    School: "Environmental & Earth Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 44,
  },
  {
    name: "Urban & Regional Planning",
    School: "Environmental & Earth Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 45,
  },
  {
    name: "Geographic Information Systems",
    School: "Environmental & Earth Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 46,
  },
  {
    name: "Geography",
    School: "Environmental & Earth Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 47,
  },
  {
    name: "Geology",
    School: "Environmental & Earth Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 48,
  },
  {
    name: "Project Engineering & Management",
    School: "Environmental & Earth Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 49,
  },
  {
    name: "Catering & Hospitality Management",
    School: "Fashion & Hospitality Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 50,
  },
  {
    name: "Fashion Design & Management",
    School: "Fashion & Hospitality Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 51,
  },
  {
    name: "Textile Technology",
    School: "Fashion & Hospitality Sciences",
    College: "College of Agriculture, Life & Environmental Sciences",
    Id: 52,
  },
  {
    name: "Accounting",
    School: "Business Economics & Technology Management",
    College: "College of Business, Law & Educational Sciences",
    Id: 53,
  },
  {
    name: "Economics",
    School: "Business Economics & Technology Management",
    College: "College of Business, Law & Educational Sciences",
    Id: 54,
  },
  {
    name: "Applied Economics",
    School: "Business Economics & Technology Management",
    College: "College of Business, Law & Educational Sciences",
    Id: 55,
  },
  {
    name: "Business Data Analytics",
    School: "Business Economics & Technology Management",
    College: "College of Business, Law & Educational Sciences",
    Id: 56,
  },
  {
    name: "Financial Information Systems",
    School: "Business Economics & Technology Management",
    College: "College of Business, Law & Educational Sciences",
    Id: 57,
  },
  {
    name: "Financial Mathematics",
    School: "Business Economics & Technology Management",
    College: "College of Business, Law & Educational Sciences",
    Id: 58,
  },
  {
    name: "Financial Technology",
    School: "Business Economics & Technology Management",
    College: "College of Business, Law & Educational Sciences",
    Id: 59,
  },
  {
    name: "Health Systems Management",
    School: "Business Economics & Technology Management",
    College: "College of Business, Law & Educational Sciences",
    Id: 60,
  },
  {
    name: "International Business/Development",
    School: "Business Economics & Technology Management",
    College: "College of Business, Law & Educational Sciences",
    Id: 61,
  },
  {
    name: "Management Information Systems",
    School: "Business Economics & Technology Management",
    College: "College of Business, Law & Educational Sciences",
    Id: 62,
  },
  {
    name: "Management Sciences",
    School: "Business Economics & Technology Management",
    College: "College of Business, Law & Educational Sciences",
    Id: 63,
  },
  {
    name: "Music Management",
    School: "Business Economics & Technology Management",
    College: "College of Business, Law & Educational Sciences",
    Id: 64,
  },
  {
    name: "Projects Management",
    School: "Business Economics & Technology Management",
    College: "College of Business, Law & Educational Sciences",
    Id: 65,
  },
  {
    name: "Transport Systems Management & Technology",
    School: "Business Economics & Technology Management",
    College: "College of Business, Law & Educational Sciences",
    Id: 66,
  },
  {
    name: "Criminal Justice Administration",
    School: "Law, Arbitration & Diplomacy",
    College: "College of Business, Law & Educational Sciences",
    Id: 67,
  },
  {
    name: "Global Conflict Studies",
    School: "Law, Arbitration & Diplomacy",
    College: "College of Business, Law & Educational Sciences",
    Id: 68,
  },
  {
    name: "Law",
    School: "Law, Arbitration & Diplomacy",
    College: "College of Business, Law & Educational Sciences",
    Id: 69,
  },
  {
    name: "Criminology",
    School: "Law, Arbitration & Diplomacy",
    College: "College of Business, Law & Educational Sciences",
    Id: 70,
  },
  {
    name: "Arbitration & Diplomacy",
    School: "Law, Arbitration & Diplomacy",
    College: "College of Business, Law & Educational Sciences",
    Id: 71,
  },
  {
    name: "Security Sciences",
    School: "Security Sciences & Technology",
    College: "College of Business, Law & Educational Sciences",
    Id: 72,
  },
  {
    name: "Security Systems Engineering",
    School: "Security Sciences & Technology",
    College: "College of Business, Law & Educational Sciences",
    Id: 73,
  },
  {
    name: "Agricultural Education",
    School: "Technology Education & Innovation",
    College: "College of Business, Law & Educational Sciences",
    Id: 74,
  },
  {
    name: "Computer Science",
    School: "Technology Education & Innovation",
    College: "College of Business, Law & Educational Sciences",
    Id: 75,
  },
  {
    name: "Health Education",
    School: "Technology Education & Innovation",
    College: "College of Business, Law & Educational Sciences",
    Id: 76,
  },
  {
    name: "Human Kinetics/Physical Education",
    School: "Technology Education & Innovation",
    College: "College of Business, Law & Educational Sciences",
    Id: 77,
  },
  {
    name: "Mathematics",
    School: "Technology Education & Innovation",
    College: "College of Business, Law & Educational Sciences",
    Id: 78,
  },
  {
    name: "Physics",
    School: "Technology Education & Innovation",
    College: "College of Business, Law & Educational Sciences",
    Id: 79,
  },
  {
    name: "Technology Education",
    School: "Technology Education & Innovation",
    College: "College of Business, Law & Educational Sciences",
    Id: 80,
  },
  {
    name: "Vocational Education",
    School: "Technology Education & Innovation",
    College: "College of Business, Law & Educational Sciences",
    Id: 81,
  },
  {
    name: "Aerospace Engineering",
    School: "Aerospace Engineering & Aviation Tech",
    College: "College of Engineering Sciences & Technology",
    Id: 82,
  },
  {
    name: "Aviation Technology",
    School: "Aerospace Engineering & Aviation Tech",
    College: "College of Engineering Sciences & Technology",
    Id: 83,
  },
  {
    name: "Computing & Data Sciences",
    School: "Computing & Artificial Intelligence & Communications Engineering",
    College: "College of Engineering Sciences & Technology",
    Id: 84,
  },
  {
    name: "Artificial Intelligence",
    School: "Computing & Artificial Intelligence & Communications Engineering",
    College: "College of Engineering Sciences & Technology",
    Id: 85,
  },
  {
    name: "Computational & Applied Mathematics",
    School: "Computing & Artificial Intelligence & Communications Engineering",
    College: "College of Engineering Sciences & Technology",
    Id: 86,
  },
  {
    name: "Computational Modeling & Data Analytics",
    School: "Computing & Artificial Intelligence & Communications Engineering",
    College: "College of Engineering Sciences & Technology",
    Id: 87,
  },
  {
    name: "Data Science",
    School: "Computing & Artificial Intelligence & Communications Engineering",
    College: "College of Engineering Sciences & Technology",
    Id: 88,
  },
  {
    name: "Modeling, Virtual Environments & Simulation",
    School: "Computing & Artificial Intelligence & Communications Engineering",
    College: "College of Engineering Sciences & Technology",
    Id: 89,
  },
  {
    name: "Computing & Systems Engineering",
    School: "Computing & Artificial Intelligence & Communications Engineering",
    College: "College of Engineering Sciences & Technology",
    Id: 90,
  },
  {
    name: "Computer Engineering Sciences",
    School: "Computing & Artificial Intelligence & Communications Engineering",
    College: "College of Engineering Sciences & Technology",
    Id: 91,
  },
  {
    name: "Computer Information Systems",
    School: "Computing & Artificial Intelligence & Communications Engineering",
    College: "College of Engineering Sciences & Technology",
    Id: 92,
  },
  {
    name: "Electronics & Electrical Engineering",
    School: "Computing & Artificial Intelligence & Communications Engineering",
    College: "College of Engineering Sciences & Technology",
    Id: 93,
  },
  {
    name: "Software Engineering",
    School: "Computing & Artificial Intelligence & Communications Engineering",
    College: "College of Engineering Sciences & Technology",
    Id: 94,
  },
  {
    name: "Game & Interactive Media Design",
    School: "Computing & Artificial Intelligence & Communications Engineering",
    College: "College of Engineering Sciences & Technology",
    Id: 95,
  },
  {
    name: "Telecommunications & Information Systems Engineering",
    School: "Computing & Artificial Intelligence & Communications Engineering",
    College: "College of Engineering Sciences & Technology",
    Id: 96,
  },
  {
    name: "Defense Systems Engineering",
    School: "Defense Engineering & Military Sciences",
    College: "College of Engineering Sciences & Technology",
    Id: 97,
  },
  {
    name: "Naval & Maritime Engineering",
    School: "Defense Engineering & Military Sciences",
    College: "College of Engineering Sciences & Technology",
    Id: 98,
  },
  {
    name: "Robotics Engineering",
    School: "Defense Engineering & Military Sciences",
    College: "College of Engineering Sciences & Technology",
    Id: 99,
  },
  {
    name: "Weapons Engineering",
    School: "Defense Engineering & Military Sciences",
    College: "College of Engineering Sciences & Technology",
    Id: 100,
  },
  {
    name: "Civil & Construction Engineering",
    School: "Engineering Sciences & Technology",
    College: "College of Engineering Sciences & Technology",
    Id: 101,
  },
  {
    name: "Consumer Products Technology",
    School: "Engineering Sciences & Technology",
    College: "College of Engineering Sciences & Technology",
    Id: 102,
  },
  {
    name: "Industrial Engineering",
    School: "Engineering Sciences & Technology",
    College: "College of Engineering Sciences & Technology",
    Id: 103,
  },
  {
    name: "Industrial & Product Design",
    School: "Engineering Sciences & Technology",
    College: "College of Engineering Sciences & Technology",
    Id: 104,
  },
  {
    name: "Mechanical & Mechatronics Engineering",
    School: "Engineering Sciences & Technology",
    College: "College of Engineering Sciences & Technology",
    Id: 105,
  },
  {
    name: "Railways & Transports Systems Engineering",
    School: "Engineering Sciences & Technology",
    College: "College of Engineering Sciences & Technology",
    Id: 106,
  },
  {
    name: "Chemical & Petroleum Engineering",
    School: "Power Engineering & Geophysics",
    College: "College of Engineering Sciences & Technology",
    Id: 107,
  },
  {
    name: "Electricity & Power Engineering",
    School: "Power Engineering & Geophysics",
    College: "College of Engineering Sciences & Technology",
    Id: 108,
  },
  {
    name: "Geophysics Engineering",
    School: "Power Engineering & Geophysics",
    College: "College of Engineering Sciences & Technology",
    Id: 109,
  },
  {
    name: "Materials & Metallurgical Engineering",
    School: "Power Engineering & Geophysics",
    College: "College of Engineering Sciences & Technology",
    Id: 110,
  },
  {
    name: "Mining & Mineral Engineering",
    School: "Power Engineering & Geophysics",
    College: "College of Engineering Sciences & Technology",
    Id: 111,
  },
  {
    name: "Oil & Gas Engineering",
    School: "Power Engineering & Geophysics",
    College: "College of Engineering Sciences & Technology",
    Id: 112,
  },
  {
    name: "Doctor of Dentistry/Doctor of Public Health",
    School: "Dentistry",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 113,
  },
  {
    name: "Dental Technology",
    School: "Dentistry",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 114,
  },
  {
    name: "Behavioral Sciences",
    School: "Human Development",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 115,
  },
  {
    name: "Exercise Science",
    School: "Human Development",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 116,
  },
  {
    name: "Clinical Counseling & Mental Health",
    School: "Human Development",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 117,
  },
  {
    name: "Developmental Psychology & Child Development",
    School: "Human Development",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 118,
  },
  {
    name: "Educational Psychology",
    School: "Human Development",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 119,
  },
  {
    name: "Industrial/Organizational Psychology",
    School: "Human Development",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 120,
  },
  {
    name: "Medical Sociology",
    School: "Human Development",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 121,
  },
  {
    name: "Nursing",
    School: "Nursing",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 122,
  },
  {
    name: "Nutrition & Dietetics",
    School: "Nursing",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 123,
  },
  {
    name: "Occupational Safety & Health",
    School: "Nursing",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 124,
  },
  {
    name: "Physical Education",
    School: "Nursing",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 125,
  },
  {
    name: "Physical Therapy",
    School: "Physical Therapy",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 126,
  },
  {
    name: "Occupational Therapy",
    School: "Physical Therapy",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 127,
  },
  {
    name: "Public Health & Community Health",
    School: "Public Health",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 128,
  },
  {
    name: "Rehabilitation & Human Services",
    School: "Rehabilitation & Human Services",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 129,
  },
  {
    name: "Social Work",
    School: "Social Work",
    College: "TriState College of Health & Allied Medical Sciences",
    Id: 130,
  },
  {
    name: "Clinical Psychology",
    School: "Human Behavior & Development",
    College: "TriState College of Psychology & Human Development Sciences",
    Id: 131,
  },
  {
    name: "Community & Environmental Psychology",
    School: "Human Behavior & Development",
    College: "TriState College of Psychology & Human Development Sciences",
    Id: 132,
  },
  {
    name: "Counseling Psychology",
    School: "Human Behavior & Development",
    College: "TriState College of Psychology & Human Development Sciences",
    Id: 133,
  },
  {
    name: "General Psychology",
    School: "Human Behavior & Development",
    College: "TriState College of Psychology & Human Development Sciences",
    Id: 134,
  },
  {
    name: "Human Development",
    School: "Human Behavior & Development",
    College: "TriState College of Psychology & Human Development Sciences",
    Id: 135,
  },
  {
    name: "Industrial & Organizational Psychology",
    School: "Human Behavior & Development",
    College: "TriState College of Psychology & Human Development Sciences",
    Id: 136,
  },
  {
    name: "Psychometrics & Quantitative Psychology",
    School: "Human Behavior & Development",
    College: "TriState College of Psychology & Human Development Sciences",
    Id: 137,
  },
  {
    name: "School Psychology",
    School: "Human Behavior & Development",
    College: "TriState College of Psychology & Human Development Sciences",
    Id: 138,
  },
  {
    name: "Sociology",
    School: "Human Behavior & Development",
    College: "TriState College of Psychology & Human Development Sciences",
    Id: 139,
  },
  {
    name: "Anthropology",
    School: "Social Sciences & Cultural Studies",
    College: "TriState College of Social Sciences & Cultural Studies",
    Id: 140,
  },
  {
    name: "Development Studies",
    School: "Social Sciences & Cultural Studies",
    College: "TriState College of Social Sciences & Cultural Studies",
    Id: 141,
  },
  {
    name: "Economic Development",
    School: "Social Sciences & Cultural Studies",
    College: "TriState College of Social Sciences & Cultural Studies",
    Id: 142,
  },
  {
    name: "History",
    School: "Social Sciences & Cultural Studies",
    College: "TriState College of Social Sciences & Cultural Studies",
    Id: 143,
  },
  {
    name: "International Relations",
    School: "Social Sciences & Cultural Studies",
    College: "TriState College of Social Sciences & Cultural Studies",
    Id: 144,
  },
  {
    name: "Journalism",
    School: "Social Sciences & Cultural Studies",
    College: "TriState College of Social Sciences & Cultural Studies",
    Id: 145,
  },
  {
    name: "Linguistics",
    School: "Social Sciences & Cultural Studies",
    College: "TriState College of Social Sciences & Cultural Studies",
    Id: 146,
  },
  {
    name: "Mass Communication",
    School: "Social Sciences & Cultural Studies",
    College: "TriState College of Social Sciences & Cultural Studies",
    Id: 147,
  },
  {
    name: "Political Science",
    School: "Social Sciences & Cultural Studies",
    College: "TriState College of Social Sciences & Cultural Studies",
    Id: 148,
  },
  {
    name: "Public Administration",
    School: "Social Sciences & Cultural Studies",
    College: "TriState College of Social Sciences & Cultural Studies",
    Id: 149,
  },
  {
    name: "Religious Studies",
    School: "Social Sciences & Cultural Studies",
    College: "TriState College of Social Sciences & Cultural Studies",
    Id: 150,
  },
  {
    name: "Sociology",
    School: "Social Sciences & Cultural Studies",
    College: "TriState College of Social Sciences & Cultural Studies",
    Id: 151,
  },
  {
    name: "Women & Gender Studies",
    School: "Social Sciences & Cultural Studies",
    College: "TriState College of Social Sciences & Cultural Studies",
    Id: 152,
  },
  {
    name: "Biblical & Religious Education",
    School: "Religious Studies & Theology",
    College: "TriState College of Religious Studies & Theology",
    Id: 153,
  },
  {
    name: "Islamic Studies",
    School: "Religious Studies & Theology",
    College: "TriState College of Religious Studies & Theology",
    Id: 154,
  },
  {
    name: "Religious Education",
    School: "Religious Studies & Theology",
    College: "TriState College of Religious Studies & Theology",
    Id: 155,
  },
  {
    name: "Theology",
    School: "Religious Studies & Theology",
    College: "TriState College of Religious Studies & Theology",
    Id: 156,
  },
  {
    name: "Social Policy & Administration",
    School: "Social Work & Social Welfare",
    College: "TriState College of Social Work & Social Welfare",
    Id: 157,
  },
  {
    name: "Social Welfare",
    School: "Social Work & Social Welfare",
    College: "TriState College of Social Work & Social Welfare",
    Id: 158,
  },
  {
    name: "Urban & Regional Planning",
    School: "Urban & Regional Planning",
    College: "TriState College of Urban & Regional Planning",
    Id: 159,
  },
  {
    name: "Women & Gender Studies",
    School: "Women & Gender Studies",
    College: "TriState College of Women & Gender Studies",
    Id: 160,
  },
  {
    name: "Elder Care",
    School: "Gerontology & Elder Care",
    College: "TriState College of Gerontology & Elder Care",
    Id: 161,
  },
  {
    name: "Gerontology",
    School: "Gerontology & Elder Care",
    College: "TriState College of Gerontology & Elder Care",
    Id: 162,
  },
  {
    name: "Human Development & Family Studies",
    School: "Human Development & Family Studies",
    College: "TriState College of Human Development & Family Studies",
    Id: 163,
  },
  {
    name: "Family & Child Studies",
    School: "Human Development & Family Studies",
    College: "TriState College of Human Development & Family Studies",
    Id: 164,
  },
  {
    name: "Nutrition & Dietetics",
    School: "Nutrition & Dietetics",
    College: "TriState College of Nutrition & Dietetics",
    Id: 165,
  },
  {
    name: "Clinical Nutrition",
    School: "Nutrition & Dietetics",
    College: "TriState College of Nutrition & Dietetics",
    Id: 166,
  },
  {
    name: "Dietetics",
    School: "Nutrition & Dietetics",
    College: "TriState College of Nutrition & Dietetics",
    Id: 167,
  },
  {
    name: "Food Science & Technology",
    School: "Nutrition & Dietetics",
    College: "TriState College of Nutrition & Dietetics",
    Id: 168,
  },
  {
    name: "Nutrition Science",
    School: "Nutrition & Dietetics",
    College: "TriState College of Nutrition & Dietetics",
    Id: 169,
  },
  {
    name: "Public Health",
    School: "Public Health",
    College: "TriState College of Public Health",
    Id: 170,
  },
  {
    name: "Social Work",
    School: "Social Work",
    College: "TriState College of Social Work",
    Id: 171,
  },
  {
    name: "Developmental Psychology",
    School: "Psychology",
    College: "TriState College of Psychology",
    Id: 172,
  },
  {
    name: "Forensic Psychology",
    School: "Psychology",
    College: "TriState College of Psychology",
    Id: 173,
  },
  {
    name: "Industrial & Organizational Psychology",
    School: "Psychology",
    College: "TriState College of Psychology",
    Id: 174,
  },
  {
    name: "School Psychology",
    School: "Psychology",
    College: "TriState College of Psychology",
    Id: 175,
  },
  {
    name: "Social Psychology",
    School: "Psychology",
    College: "TriState College of Psychology",
    Id: 176,
  },
  {
    name: "Agricultural Education",
    School: "Education",
    College: "TriState College of Education",
    Id: 177,
  },
  {
    name: "Curriculum & Instruction",
    School: "Education",
    College: "TriState College of Education",
    Id: 178,
  },
  {
    name: "Early Childhood Education",
    School: "Education",
    College: "TriState College of Education",
    Id: 179,
  },
  {
    name: "Educational Leadership & Administration",
    School: "Education",
    College: "TriState College of Education",
    Id: 180,
  },
  {
    name: "Educational Technology",
    School: "Education",
    College: "TriState College of Education",
    Id: 181,
  },
  {
    name: "Elementary Education",
    School: "Education",
    College: "TriState College of Education",
    Id: 182,
  },
  {
    name: "Higher Education Administration",
    School: "Education",
    College: "TriState College of Education",
    Id: 183,
  },
  {
    name: "Secondary Education",
    School: "Education",
    College: "TriState College of Education",
    Id: 184,
  },
  {
    name: "Special Education",
    School: "Education",
    College: "TriState College of Education",
    Id: 185,
  },
  {
    name: "Teacher Education",
    School: "Education",
    College: "TriState College of Education",
    Id: 186,
  },
  {
    name: "Adult Education",
    School: "Continuing & Adult Education",
    College: "TriState College of Continuing & Adult Education",
    Id: 187,
  },
  {
    name: "Distance Education",
    School: "Continuing & Adult Education",
    College: "TriState College of Continuing & Adult Education",
    Id: 188,
  },
  {
    name: "Adult Learning",
    School: "Continuing & Adult Education",
    College: "TriState College of Continuing & Adult Education",
    Id: 189,
  },
  {
    name: "Continuing Education",
    School: "Continuing & Adult Education",
    College: "TriState College of Continuing & Adult Education",
    Id: 190,
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
      "Our staff is dedicated to providing excellent service and helping you make the best dining choices.",
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
