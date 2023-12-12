// Ap.js

import React from "react";

function Advert() {
  return (
    <div className="bg-gray-100 min-h-screen p-4">
      <main className="bg-white p-8 rounded shadow">
        <header className=" mb-8">
          <h1 className="text-3xl font-bold text-primary">
            HILLSIDE UNIVERSITY OF SCIENCE AND TECHNOLOGY
          </h1>
          <h2 className="text-xl">FACULTY AND STAFF VACANCY ADVERT</h2>
          <p>
            Join us at Hillside University of Science and Technology, Okemesi –
            Ekiti State
          </p>
        </header>
        {/* Content Section */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">
            About Hillside University
          </h3>
          <p>
            A First-in-Class entrepreneurial University of Health Sciences and
            Technology, Hillside is purpose-built on a sustainability-driven
            industry-inspired curriculum and operating structure to bridge an
            insatiable gaping deficit of a famished Nigerian mega healthcare
            services professionals and technology consumer market. Its mission
            is to maximize the potential of its learners and to rebuild the
            nation’s economy and society through an accelerated demand-driven
            manpower development program based on innovation, integrated applied
            learning and research.
            <br />
            <br />
            The university’s unique pedagogy integrates work and study,
            embracing authentic learning in a real-world environment
            collaborations with key strategic partners. Its focus on applied
            research with business impact aims at helping industry innovate,
            contributing to the growth of knowledge and culture while
            establishing a functional model of higher education for today’s
            complex world.
            <br />
            <br />
            HUST invites applications from accomplished, highly motivated,
            innovation-driven global talent professionals and teachers passioned
            by the quintuple Hillside service values of Competence; Character;
            Courage; Commitment; Cooperation; to fill the below listed full-time
            positions:
          </p>
          {/* Include the rest of your content here */}
        </section>

        {/* Academic Positions Section */}
        <section className="mb-8">
          <div className="bg-white p-4 rounded shadow mb-8">
            <h3 className="text-2xl font-semibold mb-4">
              A. ACADEMIC FACULTY VACANCIES
            </h3>

            {/* 1) Agriculture, Basic & Life Sciences */}
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2">
                1) Agriculture, Basic & Life Sciences
              </h4>
              <ul className="list-disc pl-4">
                <li className="text-[15px]">
                  a) Agricultural Sciences (All Branches)
                </li>
                <ul className="list-disc pl-4">
                  <li className="text-[15px]">i) Agribusiness</li>
                  <li className="text-[15px]">ii) Agricultural Economics</li>
                  <li className="text-[15px]">
                    iii) Horticulture & Landscape Management
                  </li>
                  <li className="text-[15px]">
                    iv) Water Resources Management
                  </li>
                </ul>
                <li className="text-[15px]">b) Biological Sciences</li>
                <ul className="list-disc pl-4">
                  <li className="text-[15px]">i) Biology</li>
                  <li className="text-[15px]">ii) Microbiology</li>
                </ul>
                <li className="text-[15px]">c) Chemical Sciences</li>
                <ul className="list-disc pl-4">
                  <li className="text-[15px]">i) Biochemistry</li>
                  <li className="text-[15px]">ii) Chemistry</li>
                  <li className="text-[15px]">iii) Medicinal Chemistry</li>
                  <li className="text-[15px]">iv) Petroleum Chemistry</li>
                </ul>
                <li className="text-[15px]">
                  d) Computing & Artificial Intelligence
                </li>
                <ul className="list-disc pl-4">
                  <li className="text-[15px]">i) Artificial Intelligence</li>
                  <li className="text-[15px]">ii) Computer Science</li>
                  <li className="text-[15px]">
                    iii) Information & Communications Technology
                  </li>
                </ul>
                <li className="text-[15px]">e) Cyber Security</li>
                <li className="text-[15px]">
                  f) Environmental Science & Toxicology
                </li>
                <li className="text-[15px]">g) Forensic Sciences</li>
              </ul>
            </div>

            {/* 2) Business, Law & Educational Sciences */}
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2">
                2) Business, Law & Educational Sciences
              </h4>
              <ul className="list-disc pl-4">
                <li className="text-[15px]">
                  a) Accounting & Management Sciences
                </li>
                {/* Include the subcategories and their details */}
                <li className="text-[15px]">b) Economics</li>
                <ul className="list-disc pl-4">
                  <li className="text-[15px]">i) Economics</li>
                  <li className="text-[15px]">
                    ii) Petroleum Economics & Policy Studies
                  </li>
                  <li className="text-[15px]">
                    iii) Politics, Philosophy & Economics
                  </li>
                </ul>
                <li className="text-[15px]">c) Management Sciences</li>
                {/* Include the subcategories and their details */}
                <li className="text-[15px]">d) Mass Communication</li>
                <ul className="list-disc pl-4">
                  <li className="text-[15px]">i) Advertising</li>
                  <li className="text-[15px]">ii) Broadcasting</li>
                  <li className="text-[15px]">
                    iii) Development Communication Studies
                  </li>
                  <li className="text-[15px]">iv) Film & Multimedia Studies</li>
                  <li className="text-[15px]">
                    v) Information & Media Studies
                  </li>
                  <li className="text-[15px]">vi) Public Relations</li>
                  <li className="text-[15px]">vii) Strategic Communication</li>
                </ul>
              </ul>
            </div>

            {/* 3) Engineering Sciences & Technology */}
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2">
                3) Engineering Sciences & Technology
              </h4>
              <ul className="list-disc pl-4">
                <li className="text-[15px]">a) Aerospace Engineering</li>
                {/* Include the subcategories and their details */}
                <li className="text-[15px]">b) Chemical Engineering</li>
                {/* Include the subcategories and their details */}
                <li className="text-[15px]">
                  c) Civil & Constructions Engineering
                </li>
                {/* Include the subcategories and their details */}
                <li className="text-[15px]">
                  d) Data Science & Software Engineering
                </li>
                <ul className="list-disc pl-4">
                  <li className="text-[15px]">i) Data Science</li>
                  <li className="text-[15px]">ii) Information Systems</li>
                  <li className="text-[15px]">iii) Software Engineering</li>
                </ul>
                <li className="text-[15px]">
                  e) Electronics & Electrical Engineering
                </li>
                <li className="text-[15px]">
                  f) Industrial & Productions Engineering
                </li>
                <li className="text-[15px]">g) Mechanical Engineering</li>
                <li className="text-[15px]">h) Mechatronics Engineering</li>
                <li className="text-[15px]">i) Systems Engineering</li>
              </ul>
            </div>

            {/* 4) Health & Medical Sciences */}
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2">
                4) Health & Medical Sciences
              </h4>
              <ul className="list-disc pl-4">
                <li className="text-[15px]">a) Anatomy</li>
                {/* Include the subcategories and their details */}
                <li className="text-[15px]">b) Audiology</li>
                {/* Include the subcategories and their details */}
                <li className="text-[15px]">
                  c) Dentistry (All Specializations)
                </li>
                {/* Include the subcategories and their details */}
                <li className="text-[15px]">
                  d) Medicine (All Specializations)
                </li>
                {/* Include the subcategories and their details */}
                <li className="text-[15px]">e) Medical Laboratory Science</li>
                {/* Include the subcategories and their details */}
                <li className="text-[15px]">
                  f) Nursing Sciences (All Specializations)
                </li>
                {/* Include the subcategories and their details */}
                <li className="text-[15px]">g) Nutrition & Dietetics</li>
                <li className="text-[15px]">h) Optometry</li>
                <li className="text-[15px]">
                  i) Pharmaceutical Sciences (All Specializations)
                </li>
                {/* Include the subcategories and their details */}
                <li className="text-[15px]">j) Physiology</li>
              </ul>
            </div>

            {/* 5) Academic Planning */}
            <div>
              <h4 className="text-xl font-semibold mb-2">
                5) Academic Planning
              </h4>
              <ul className="list-disc pl-4">
                <li className="text-[15px]">
                  a) Director of Academic Planning (Senior Lecturer and above)
                </li>
                {/* Include the subcategories and their details */}
                <li className="text-[15px]">b) Academic Planning Officers</li>
                {/* Include the subcategories and their details */}
              </ul>
            </div>
          </div>
          <h3 className="text-2xl font-semibold mb-4"></h3>
          {/* Include the list of academic positions and their details here */}
        </section>

        {/* Support Staff Section */}
        <section className="mb-8">
          <div className="bg-white p-4 rounded shadow mb-8">
            <h3 className="text-2xl font-semibold mb-4">
              B. SUPPORT STAFF VACANCIES
            </h3>

            {/* 1. General Administration */}
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2">
                1. General Administration
              </h4>
              <ul className="list-disc pl-4">
                <li>a. Administrative Officers & Confidential Secretaries</li>
                <li>b. Accountants</li>
                <li>c. Procurement, Stores and Quality Control Officers</li>
                <li>d. Library Officers & Archivists</li>
                <li>
                  e. Security & Intelligence Officers (Uniformed; Mufti; Cyber)
                </li>
              </ul>
            </div>

            {/* 2. Engineers & Technologists */}
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2">
                2. Engineers & Technologists (Civil; Electrical; Mechanical)
              </h4>
              <ul className="list-disc pl-4">
                <li>a. Civil Engineering</li>
                <li>b. Electrical Engineering</li>
                <li>c. Mechanical Engineering</li>
              </ul>
            </div>

            {/* 3. Tristate Healthcare System */}
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2">
                3. Tristate Healthcare System
              </h4>
              <ul className="list-disc pl-4">
                <li>a. Consultant Physicians (All Specializations)</li>
                <li>b. Medical Officers</li>
                <li>c. Nursing Officers</li>
                <li>
                  d. Health Technologists & Allied Medical Professionals (All
                  Specializations)
                </li>
              </ul>
            </div>

            {/* 4. Physical Planning */}
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2">
                4. Physical Planning
              </h4>
              <ul className="list-disc pl-4">
                <li>a. Architects</li>
                <li>b. Estates & Facilities Managers</li>
                <li>c. Physical Planning Officers</li>
              </ul>
            </div>

            {/* 5. Technicians */}
            <div className="mb-4">
              <h4 className="text-xl font-semibold mb-2">5. Technicians</h4>
              <ul className="list-disc pl-4">
                <li>a. Electrical & Plumbing</li>
                <li>b. Masonry & Construction Work</li>
                <li>
                  c. Vehicular Operations & Logistics (Drivers; Mechanics;
                  etc..)
                </li>
                <li>d. Welding & Metalworks</li>
              </ul>
            </div>

            {/* 6. Students Support & Total Care Services */}
            <div>
              <h4 className="text-xl font-semibold mb-2">
                6. Students Support & Total Care Services
              </h4>
              <ul className="list-disc pl-4">
                <li>a. Career Counseling Psychologists</li>
                <li>b. Food Service Professionals & Cooks</li>
                <li>c. Hall Administrators & Assistants</li>
                <li>d. Social Workers</li>
                <li>e. Substance Abuse Counselors & Therapists</li>
              </ul>
            </div>
          </div>
          {/* Include the list of support staff positions and their details here */}
        </section>

        {/* Application Process Section */}
        <section className="mb-8">
          <div className="bg-white p-4 rounded shadow mb-8">
            <h3 className="text-2xl font-semibold mb-4">Application Details</h3>

            <p>
              <strong>Method of Application</strong>
            </p>
            <p>
              Candidates for each position are to submit a soft copy of
              applications, detailed curriculum vitae, photocopies of
              credentials, and other valid documents.
            </p>
            <p>
              In addition to the above, and as a matter of requirement, the
              respective candidate should prepare his or her application, CV,
              all credentials, and attachments in a single PDF file and forward
              with a cover letter to{" "}
              <a href="mailto:careers@hust.edu.ng">careers@hust.edu.ng</a>. The
              subject of the document should be marked with the relevant
              position being applied for.
            </p>

            <p>
              <strong>REFERENCES:</strong>
            </p>
            <p>
              The submission of suitable educational, work, and character
              references will greatly expedite the candidate evaluation process
              and should not be unreasonably delayed. No candidate will be
              enlisted on the Payroll whose references have not been received on
              file.
            </p>

            <p>
              <strong>REMUNERATION:</strong>
            </p>
            <p>
              Hillside University of Science and Technology pays 150% of the
              Federal Salary Scale with a provision for another 25-50% in
              Graduated Allowances based on critical skills, innovation, and
              productivity as assessed and provided by the University
              exclusively and personalized to each employee.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Advert;
