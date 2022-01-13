import MainLayout from "../layouts/MainLayout";
import Image from "next/image";
import running from "../images/running.jpeg";
import Service from "../components/service";
import RobinKohler from "../images/drrobinkohler.jpg";
import Bio from "../components/team_bios";
import SimonWorkman from "../images/SimonWorkman.jpg";
import BronwynKohler from "../images/BronwynKohler.jpg";
import SindiNtozini from "../images/SindiNtozini.jpg";
import KhayelihleNgwenya from "../images/KhayelihleNgwenya.jpg";
import Button from "../components/button";
import { useRef } from "react";

const About = () => {
  const teamRef = useRef<HTMLElement>(null);
  const serviceRef = useRef<HTMLElement>(null);
  return (
    <MainLayout>
      <div className={""}>
        <div
          className={"grid lg:grid-cols-2 bg-gray-50 lg:px-32 md:px-10 px-4"}>
          {/* Left column - Text introduction goes here*/}
          <div className={"grid content-center h-32 lg:h-auto pr-40"}>
            <h2 className={"text-5xl font-light font-karla text-primary"}>
              Where patients can <b className="font-bold">learn</b> how to <b className="font-bold">restore</b> their own health, and
              <b className="font-bold"> optimise</b> and <b className="font-bold">preserve</b> it far into the future.
            </h2>
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
        <div
          className={
            "mt-8 md:mt-16 space-y-10 px-4 md:px-10 lg:px-32 text-gray-700"
          }>
          <div>
            <p>
              From an early age, Dr Robin Kohler knew that he wanted to help
              people. Like his specialist physician father, Dr Kohler was always
              intrigued by what made people ill. He completed a Masters in
              Homeopathy at the University of Johannesburg but found his true
              calling when he discovered Functional Medicine.
            </p>
            <br />
            <p>
              Functional Medicine’s systematic, science-based approach to
              finding and treating root causes was a perfect fit, and Dr Kohler
              has spent hundreds of hours growing and deepening his functional
              health knowledge.
            </p>
            <br />
            <p>
              He started the Perfect Health Practice with his wife, Bronwyn
              Kohler, in 2010. Together, they have striven to make it a haven of
              both healing and learning, where patients can learn how to not
              only restore their health, but also optimise and preserve it far
              into the future.
            </p>
          </div>

          <div className={"flex content-center "}>
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
        <section
          ref={serviceRef}
          className={"mt-8 md:mt-16 bg-gray-50 px-4 md:px-10 lg:px-32"}>
          <h1 className={"text-4xl text-primary py-10"}>Our Services</h1>

          <div className={"mt-8 space-y-16 lg:space-y-14 "}>
            <Service title="Functional Medical Assessment">
              Functional Medicine views health as a dance between seven
              functional body systems. When a symptom of ill health appears, it
              can be traced to a break down in one or more of these systems,
              often far upstream from the symptom itself. The art of the
              Functional Medicine practitioner is to identify these root causes,
              and provide the interventions required to restore normal function
              to the systems concerned. This approach, which is especially
              valuable in the treatment of chronic disease, aims for the
              restoration of full body health rather than the suppression of
              individual symptoms.
            </Service>
            <Service title="Iridology">
              19th century medical practitioners noticed that certain injuries,
              ailments, and constitutional weaknesses were associated with
              specific marks that appeared in the iris. These observations were
              synthesised into a comprehensive study of the information that the
              iris could reveal about a patient’s state of health. Iridology
              offers clues to internal weaknesses, injuries or constitutional
              predispositions not easily perceived without invasive procedures.
              Dr Kohler uses this technique as a supplement to his normal
              diagnostic procedures to help him thoroughly assess the potential
              root causes of disease.
            </Service>
            <Service title="Live Blood Analysis">
              Microscopic inspection of a droplet of fresh live blood can reveal
              a wealth of information about a patient’s current state of health,
              including nutritional concerns, infection, parasitic infestation,
              and toxicity. Dr Kohler uses live blood analysis to supplement his
              diagnostic processes.
            </Service>
            <Service title="Nutrigenomics Assessment">
              The expression of the genes that influence our health is not set
              in stone. A great many of them can be upregulated, downregulated
              or even turned off by dietary, lifestyle and medicinal
              interventions. Understanding your genes can free you from health
              problems that might once have felt beyond your control and allow
              you to maximise your genetic potential.
            </Service>
            <Service title="Organic Acid Analysis">
              Organic Acid Analysis examines metabolic end products in urine
              that provide highly specific insights into a vast range of health
              conditions.
            </Service>
            <Service title="GI Mapping">
              GI Mapping analyses the gut microbiome and indicates where
              imbalances, overgrowths of pathogens and gastroenteric
              malfunctions have occured.
            </Service>
          </div>
        </section>

        <section
          ref={teamRef}
          className={
            "mt-8 md:mt-32 px-4 md:px-10 lg:px-32 space-y-12 lg:space-y-32 xl:space-y-44"
          }>
          {/* Robin Kohler Bio */}
          <div>
            <Bio
              name="Dr Robin Kohler"
              education="MTech Hom, Dip. Irid, Cert. Live Blood Analysis, FMCP"
              title="Naturopath, Iridologist, and Functional Medicine Practitioner"
              profilePicture={RobinKohler}>
              Anyone who knows Dr Kohler will tells you that he eats, sleeps and
              breaths natural health. Son of a specialist physician, Robin’s
              interest in health began at an early age, but his real passion
              ignited when he discovered Functional Medicine. Solving the puzzle
              of health through the lens of root causes is a quest that has
              inspired him to devote hundreds of hours to learning and growing
              his skillset over nearly two decades of private practice. He was
              amongst the first graduates of the Applied Functional Medicine in
              Clinical Practice course, hosted by the Institute of Functional
              medicine in 2012. He has trained in iridology, dark field
              microscopy, bio puncture, traditional Chinese medicine and
              nutrigenomics to supplement his diagnostic and therapeutic
              abilities.
              <p>
                <br />
                Outside the practice, Dr Kohler is a loving father, a talented
                beach volleyball player, and an adventurer who loves to explore
                new places and cultures.
              </p>
            </Bio>

            <div
              className={
                "text-white grid md:grid-cols-2 gap-x-10 bg-secondary py-10 md:py-20 content-center px-4 md:px-10"
              }>
              {/* Dr Kohler's Mission Statement*/}

              <div>
                <h2 className={"md:text-right pb-5 text-3xl"}>
                  Dr Kohler’s <br />
                  Mission Statement:
                </h2>
              </div>
              <div>
                <p>
                  As a dad, I appreciate the weight that disease can put on a
                  family. Whether you’re trying to cope with a relentlessly sick
                  toddler, buckling under the weight of fatigue and stress, or
                  watching your health slip away to chronic illness far too
                  soon, I will hear you. I want to know your story, because you
                  know yourself and your family better than anyone. Once I
                  understand where you have come from, I can try to piece
                  together the story of your health, discover the root of your
                  ailments and help you chart a course that will free you from
                  your disease burden.
                </p>
              </div>
            </div>
          </div>

          {/* Simon Workman Bio */}
          <Bio
            name="Dr Simon Workman"
            education="MSc. Chiropractic, Dip Sports ScienceMSc. Chiropractic, Dip Sports Science"
            title="Sports and Family Chiropractor"
            profilePicture={SimonWorkman}
            reverse>
            Dr Simon Workman graduated with a Masters Degree in Chiropractic
            from the University of Johannesburg in 2010. He has completed an
            International Chiropractic Sports Science Diploma, as well as
            courses in rehabilitation, Instrument Assisted Soft Tissue
            Mobilisation (IASTM) and Kinesio-Taping. Although he has studied
            further in sports and has treated provincial and international
            athletes, his practice offers treatment for the whole family, from
            the young to the elderly. Simon has a special interest in pain
            management and rehabilitation and works closely with other health
            professionals to ensure a rounded care model.
          </Bio>

          {/*Bronwyn Kohler Bio */}
          <Bio
            name="Bronwyn Kohler"
            education=""
            title="Practice Manager"
            profilePicture={BronwynKohler}>
            Bronwyn is a certified Functional Health Coach with an honours
            degree in Microbiology and Environmental Science and a Diploma in
            Nutrition . Her particular passion is the hidden world that
            co-habits our human bodies: the microbiome. She uses her training
            and skills to offer optimum care and support to the patients of
            Perfect Health, and author our health-related blog articles and
            newsletters.
          </Bio>

          {/*Sindi Ntozini Bio */}
          <Bio
            profilePicture={SindiNtozini}
            name="Sindi Ntozini"
            title="Receptionist"
            reverse>
            Sindi is a Soweto girl, born and raised. A fashionista with a
            passion for looking and feeling good inside and out, she has been
            the beating heart of our practice since its earliest days. She makes
            sure that everyone gets what they need when they need it, whether
            its an appointment, medication or a kind word. Her warmth and
            friendliness are part of what make Perfect Health a welcoming family
            practice.
          </Bio>
          {/*Khayelihle Ngwenya */}
          <Bio
            name="Khayelihle Ngwenya"
            education=""
            title="Administrator"
            profilePicture={KhayelihleNgwenya}>
            Khayelihle, or Lihle as we know her, takes care of the
            behind-the-scenes admin for the practice. Mother of two boys, Lihle
            is always calm under pressure and ready to solve whatever problems
            come her way. She can always be depended on for a friendly smile and
            a helping hand.
          </Bio>
        </section>
      </div>
    </MainLayout>
  );
};

export default About;
