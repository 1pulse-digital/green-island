import MainLayout from "../layouts/MainLayout";
import Image from "next/image";
import running from "../images/running.jpeg";
import Service from "../components/service";
import RobinKohler from "../images/drrobinkohler.jpg";
import Bio from "../components/team_bios";
import SimonWorkman from "../images/SimonWorkman.jpg";
import BronwynKohler from "../images/BronwynKohler.jpg";
import SindiNtozini from "../images/SindiNtozini.jpg";
import Button from "../components/button";
import { useRef } from "react";

const About = () => {
  const teamRef = useRef<HTMLElement>(null);
  const serviceRef = useRef<HTMLElement>(null);
  return (
    <MainLayout>
      <div>
        <div className={"bg-green-400 grid lg:grid-cols-2 bg-gray-50 lg:px-32 md:px-10 px-4"}>
          {/* Left column - Text introduction goes here*/}
          <div className={"grid place-items-center h-32 lg:h-auto"}>
            <h1 className={"lg:text-5xl md:text-4xl text-2xl text-primary"}>
              Where it all began…
            </h1>
          </div>

          {/* Right column - Hero image goes here*/}

          <div className={"hidden lg:grid relative content-center"}>
            <Image
              objectFit="cover"
              src={running}
              placeholder={"blur"}
              alt={"Healthy family walking in a park"}
            />
          </div>

          <div className={"lg:hidden relative content-center"}>
            <Image
              height={650}
              objectFit="cover"
              src={running}
              placeholder={"blur"}
              alt={"Healthy family walking in a park"}
            />
          </div>
        </div>

        {/* Perfect Health Story goes here*/}
        <div className={""}>
          <div className={"px-4 pt-20 pb-10 lg:px-32 md:px-10  text-gray-700"}>
            <p>
              After completing his Masters in Homeopathy at the University of
              Johannesburg, Dr Kohler started consulting from the practice
              rooms of a health shop. While these humble beginnings taught him
              a great deal, the commercial environment was frenetic and he
              could sense that his patients often felt harried. As he built up
              his practice, he dreamed of having his own space, where he could
              offer a calm, welcoming environment where patients would feel at
              home. He and his wife Bronwyn searched for a place that felt
              right, and finally found it in the quiet leafy suburb of
              Bryanston.
            </p>
            <p>
              They started Perfect Health together in 2010, with Robin
              consulting, Bronwyn running the practice and their family
              playing just across the garden. When Sindi Ntozini took over
              reception in 2012, our core team was complete.
            </p>
            <br />

            <p>
              Our mission at Perfect Health is to help our patients understand
              and master their own healing and health. Robin devotes many
              hours to studying the deepest root causes of disease. He has
              added the modalities of iridology, live blood analysis, genetic
              analysis and functional testing to his skillset, and built up a
              dispensary of the most effective herbal, nutritional, metabolic
              and homeopathic tools available. Over the past 11 years, we have
              built a highly regarded and successful Functional Health
              practice that caters to patients from birth to old age.
            </p>
          </div>

          <div className={"flex content-center pb-10 lg:px-32 md:px-10 px-4"}>
            <Button
              color={"primary"}
              onClick={() =>
                teamRef.current?.scrollIntoView({ behavior: "smooth" })
              }>
              Meet the team
            </Button>

            <button
              className={"text-primary rounded-full mt-4 px-4 flex  "}
              onClick={() =>
                serviceRef.current?.scrollIntoView({ behavior: "smooth" })
              }>
              Our services
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="self-center w-4 h-4 ml-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap={"round"}
                  strokeLinejoin={"round"}
                  strokeWidth={"2"}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
          </div>
        </div>
        {/* Our Services goes here*/}
        <section ref={serviceRef}>
          <div className={"bg-gray-50 lg:px-32 md:px-10 px-4 pt-20 "}>
            <div>
              <h1
                className={
                  "grid col-span-2 text-4xl pb-5 mg:pb-20 text-primary"
                }>
                Our Services
              </h1>
            </div>

            <Service
              title="Functional Medical Assessment"
              content="Functional Medicine views health as a dance between seven functional body systems. When a symptom of ill health appears, it can be traced to break down in one or more of these systems, often far upstream from the symptom itself. The art of the Functional Medicine practitioner is to identify these root causes, and provide the interventions required to restore normal function to the systems concerned. This approach, which is especially valuable in the treatment of chronic disease aims for the restoration of full body health, rather than the suppression of individual symptoms."
            />
            <Service
              title="Iridology"
              content="A number of 19th century medical practitioners began to notice
          that certain injuries, ailments and constitutional weaknesses were
          associated with specific marks that appeared in the iris. In the
          early 1900’s, these observations were synthesised into a
          comprehensive study of the information that the iris could reveal
          about a patient’s state of health. Iridology offers clues to
          internal weaknesses, injuries or constitutional predispositions
          not easily perceived without invasive procedures. Dr Kohler uses
          this technique as a supplement to his normal diagnostic procedures
          to help him thoroughly assess the potential root causes of
          disease."
            />
            <Service
              title="Live Blood Analysis"
              content="Microscopic inspection of a droplet of fresh live blood can reveal a wealth of
          information about a patient’s current state of health, including nutritional concerns, infection,
          parasitic infestation, and toxicity. Dr Kohler uses live blood analysis to supplement his diagnostic processes."
            />
            <Service
              title="Nutrigenomics Assessment"
              content="The expression of the genes that influence our health is not set in stone. A great many of
          them can be upregulated, downregulated or even turned off by dietary, lifestyle and medicinal
          interventions. Understanding your genes can free you from health problems that might once have felt
          beyond your control and allow you to maximise your genetic potential."
            />

            <Service
              title="Organic Acid Analysis"
              content="Organic Acid Analysis examines metabolic end products in urine that provide highly
          specific insights into a vast range of health conditions."
            />

            <Service
              title="GI Mapping"
              content="GI Mapping analyses the gut microbiome and indicates where imbalances, overgrowths of
          pathogens and gastroenteric malfunctions have occured."
            />
            <div
              className={
                "grid sm:grid-col-1 lg:grid-cols-2 md:mx-10 lg:mx-20 px-4 py-20"
              }>
              <div className={"lg:text-right md:text-left lg:pr-10"}>
                <h2
                  className={
                    "grid col-span-2 text-2xl pb-10 md:pb-20 text-primary "
                  }>
                  Tailorblend Shake Formulation
                </h2>
              </div>
              <div>
                <p className={"text-gray-700"}>
                  Dr Kohler has teamed up with innovative nutritional
                  specialists Tailorblend. Based on your consultation,
                  Tailorblend can formulate an ideal blend of nutrients and
                  natural medicines into a delicious shake or drink. Taking
                  your supplements has never been easier.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Robin Kohler Bio */}
        <section ref={teamRef}>
          <div className={"grid grid-cols-1 md:grid-cols-2"}>
            <div className={" md:py-20 w-full"}>
              <div className={" lg:px-32"}>
                <Image
                  src={RobinKohler}
                  placeholder={"blur"}
                  alt={"Headshot of Robin Kohler"}
                />
              </div>
            </div>

            <div className={"grid content-center"}>
              <Bio
                name="Dr Robin Kohler"
                education="MTech Hom, Dip. Irid, Cert. Live Blood Analysis, FMCP"
                title="Naturopath, Iridologist, and Functional Medicine Practitioner "
                bio="The son of a specialist physician, Dr Robin Kohler chose to put his own spin on the family trade.
            While he wanted to work in health, his instincts drew him towards preventative and natural medicine. He qualified as a
            Registered Homeopath in 2004, and added the modalities of Iridology and Live Blood Analysis to his skillset in 2006. He has
            since invested hundreds of hours into Functional Medicine training through the Institute for Functional Medicine.

            Outside the practice, Dr Kohler is a loving father, a passionate beach volleyball player and an adventurer who loves to explore
            new places and cultures. "
              />
            </div>
          </div>

          <div
            className={
              "grid grid-cols-1 md:grid-cols-2 bg-secondary py-20 content-center px-4"
            }>
            {/* Dr Kohler's Mission Statement*/}

            <div>
              <h1 className={"md:text-right pr-10 pb-5 text-3xl text-white "}>
                Dr Kohler’s <br />
                Mission Statement:
              </h1>
            </div>
            <div>
              <p className={"text-white"}>
                “As a dad, I appreciate the weight that disease can put on a
                family. Whether you’re trying to cope with a relentlessly sick
                toddler, buckling under the weight of fatigue and stress, or
                watching your health slip away to chronic illness far too
                soon, I will hear you. I want to know your story, because you
                know yourself and your family better than anyone. Once I
                understand where you have come from, I can try to piece
                together the story of your health, discover the root of your
                ailments and help you chart a course that will free you from
                your disease burden.”
              </p>
            </div>
          </div>

          {/*Simon Workman Bio */}

          <div className={"grid grid-cols-1 md:grid-cols-2"}>
            <div className={"grid content-center"}>
              <Bio
                name="Dr Simon Workman"
                education="MSc. Chiropractic, Dip Sports ScienceMSc. Chiropractic, Dip Sports Science"
                title="Sports and Family Chiropractor "
                bio="Dr Simon Workman graduated with a Masters Degree in Chiropractic from the University of Johannesburg in 2010.
            He has completed an International Chiropractic Sports Science Diploma, as well as courses in rehabilitation, Instrument
            Assisted Soft Tissue Mobilisation (IASTM) and Kinesio-Taping. Although he has studied further in sports and has treated
            provincial and international athletes, his practice offers treatment for the whole family, from the young to the elderly.

            Simon has a special interest in pain management and rehabilitation and works closely with other health professionals to ensure
            a rounded care model.Dr Simon Workman graduated with a Masters Degree in Chiropractic from the University of Johannesburg in 2010.
            He has completed an International Chiropractic Sports Science Diploma, as well as courses in rehabilitation, Instrument Assisted Soft
            Tissue Mobilisation (IASTM) and Kinesio-Taping. Although he has studied further in sports and has treated provincial and international
            athletes, his practice offers treatment for the whole family, from the young to the elderly. Simon has a special interest in pain management
            and rehabilitation and works closely with other health professionals to ensure a rounded care model."
              />
            </div>
            <div className={"py-20 w-full"}>
              <div className={" lg:px-32"}>
                <Image
                  src={SimonWorkman}
                  placeholder={"blur"}
                  alt={"Headshot of Dr Simon Workman"}
                />
              </div>
            </div>
          </div>

          {/*Bronwyn Kohler Bio */}

          <div className={"grid grid-cols-1 md:grid-cols-2 bg-gray-100"}>
            <div className={"py-20 w-full"}>
              <div className={" lg:px-32"}>
                <Image
                  src={BronwynKohler}
                  placeholder={"blur"}
                  alt={"Headshot of Bronwyn Kohler"}
                />
              </div>
            </div>
            <div className={"grid content-center"}>
              <Bio
                name="Bronwyn Kohler"
                education=""
                title="Practice Manager"
                bio="Trained as an Environmental Scientist, Bronwyn spent her early career producing award winning wildlife documentaries. She has a fascination with creatures on the diminutive end of Nature, from dung beetles to microbes. Her particular passion is the world of microorganisms that co-habit our human bodies: the microbiome.

            When pregnant with her first child, Bronwyn left film to focus on building the Perfect Health Practice with her husband, Dr Kohler. She completed a Diploma in Nutrition and qualified as a certified Functional Health coach, and uses these skills to offer optimum care and support to the patients of Perfect Health. She authors our health-related blog articles and newsletters, and is always up for a meaty conversation about health! "
              />
            </div>
          </div>

          {/*Sindi Ntozini Bio */}

          <div className={"grid grid-cols-1 md:grid-cols-2"}>
            <div className={"grid content-center"}>
              <Bio
                name="Sindi Ntozini"
                education="Receptionist"
                bio="Sindi is a Soweto girl, born and raised. A fashionista with a passion for looking and feeling good
            inside and out, she has been the beating heart of our practice since its earliest days. She makes sure that everyone
            gets what they need when they need it, whether its an appointment, medication or a kind word. Her warmth and friendliness
            are part of what make Perfect Health a welcoming family practice."
              />
            </div>
            <div className={"py-20 w-full"}>
              <div className={" lg:px-32"}>
                <Image
                  src={SindiNtozini}
                  placeholder={"blur"}
                  alt={"Headshot of Sindi Ntozini"}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default About;
