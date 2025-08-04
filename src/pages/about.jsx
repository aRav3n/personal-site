import { useState } from "react";
import { Link } from "react-router-dom";
import { CircleX } from "lucide-react";

import "../style/about.css";

function PassionDisplay({
  name,
  formattedContents,
  leadPhotoUrl,
  expandedSection,
  setExpandedSection,
}) {
  if (expandedSection && expandedSection !== name) {
    return null;
  }

  function PassionInfo() {
    if (!expandedSection) {
      return null;
    }

    return (
      <div>
        <button
          type="button"
          onClick={() => {
            setExpandedSection(null);
          }}
        >
          <CircleX />
          close
        </button>
        {formattedContents}
      </div>
    );
  }

  return (
    <div className="passion">
      <button
        type="button"
        onClick={() => {
          setExpandedSection(name);
        }}
      >
        <img src={leadPhotoUrl} alt={`lead photo for ${name}`} />
        {name}
      </button>
      <PassionInfo />
    </div>
  );
}

function PassionsList({ expandedSection, setExpandedSection }) {
  const languageContents = (
    <div>
      <p>
        I've been interested in learning languages ever since my first trip
        abroad (see the travel section for more on that). Traveling in Latin
        America provided an excellent opportunity to improve my conversational
        Spanish. I also get to travel to Sri Lanka regularly to visit family on
        my wife's side so I get to learn some Sinhala.
      </p>
      <p>
        Two of my favorite language learning resources are{" "}
        <a
          href="https://www.dreamingspanish.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dreaming Spanish
        </a>{" "}
        and{" "}
        <a
          href="https://www.lazybutsmartsinhala.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lazy but Smart Sinhala
        </a>
        .
      </p>
    </div>
  );

  const natureContents = (
    <div>
      <p>
        Spending time in nature has been a passion of mine for as long as I can
        remember. When I was young, my parents used to take my siblings and I to
        a nearby creek to catch tadpoles in the spring time and snowshoeing in
        the winter (complete with a fire and hot ramen for lunch).
      </p>
      <p>
        When I was a bit older I got to start participating in the{" "}
        <a
          href="https://redwingelc.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Red Wing Environmental Learning Center
        </a>
        . I would spend several years learning not only how to thrive outdoors
        (what plants you can eat, where to set up your tent, how to build a fire
        with a single match, etc.), but more importantly an inner confidence and
        sense of self-reliance, that I was unable to truly find elsewhere.
        <img
          src="./passion-photos/elc-alaska-expedition.jpg"
          alt="group photo of our expedition to Prince William Sound"
        />
      </p>
    </div>
  );

  const photographyContents = (
    <div>
      <p>
        I became interested in photography during a two week trip to California
        for work. I started out with a Sony a6000 and{" "}
        <a
          href="https://travelphotographycourse.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Laurence Norah's travel photography course
        </a>
        . Learning photography has been really beneficial because it helps me
        see the beauty in everyday things, which has helped me enjoy my passion
        for travel even more.
        <img
          src="/passion-photos/tortel-boat.jpg"
          alt="boat in the fog in Tortel, Chile"
        />
        <img
          src="/passion-photos/torres-sunset.jpg"
          alt="sunset over Torres Del Paine national park"
        />
      </p>
    </div>
  );

  const readingContents = (
    <div>
      <p>
        There's not much better than sipping some tea or coffee and reading a
        good book. My recent favorite is{" "}
        <a
          href="https://timcopejourneys.com/book-shop/on-the-trail-of-genghis-khan-an-epic-journey-through-the-land-of-the-nomads/"
          target="_blank"
          rel="noopener noreferrer"
        >
          On the Trail of Genghis Khan
        </a>{" "}
        by Tim Cope. My all-time favorites include the Wheel of Time series, The
        Alchemist, Atomic Habits, and the Harry Potter series.
      </p>
    </div>
  );

  const travelContents = (
    <div>
      <p>
        My passion for traveling really took off during a two week family trip
        to Sweden and Norway when I was in high school. This trip would kindle
        my love for travel as well as my desire to go with single small bag to
        enable use of public transit.
        <img
          src="/passion-photos/sweden-1.jpg"
          alt="cool buildings in Stockholm Sweden"
        />
        <img
          src="/passion-photos/sweden-2.jpg"
          alt="some boats along Sweden's western coast"
        />
      </p>
      <p>
        More recently, my wife and I drove the Pan American Highway (Prudhoe
        Bay, Alaska, USA to Ushuaia, Argentina). We spent some extended time in
        Uruguay and Argentina afterwards which was quite nice. We planned and
        saved for the trip for roughly five years before setting out on our
        three year journey.
        <img
          src="/passion-photos/tuk-ocean.jpg"
          alt="our vehicle at the ocean in Tuktoyaktuk"
        />
        <img
          src="/passion-photos/ushuaia-city-sign.jpg"
          alt="the three of us in Ushuaia"
        />
      </p>
    </div>
  );

  return (
    <div className="passion-list">
      <div>
        <h2>My Passions</h2>
        <p>(click to see more)</p>
      </div>
      <div>
        <PassionDisplay
          name={"Travel"}
          formattedContents={travelContents}
          leadPhotoUrl={"/passion-photos/travel-small.png"}
          expandedSection={expandedSection}
          setExpandedSection={setExpandedSection}
        />
        <PassionDisplay
          name={"Photography"}
          formattedContents={photographyContents}
          leadPhotoUrl={"/passion-photos/photography-small.jpg"}
          expandedSection={expandedSection}
          setExpandedSection={setExpandedSection}
        />
        <PassionDisplay
          name={"Reading"}
          formattedContents={readingContents}
          leadPhotoUrl={"/passion-photos/reading-small.jpeg"}
          expandedSection={expandedSection}
          setExpandedSection={setExpandedSection}
        />
        <PassionDisplay
          name={"Language Learning"}
          formattedContents={languageContents}
          leadPhotoUrl={"/passion-photos/language-learning-small.jpg"}
          expandedSection={expandedSection}
          setExpandedSection={setExpandedSection}
        />
        <PassionDisplay
          name={"Nature"}
          formattedContents={natureContents}
          leadPhotoUrl={"/passion-photos/nature-small.jpg"}
          expandedSection={expandedSection}
          setExpandedSection={setExpandedSection}
        />
      </div>
    </div>
  );
}

export default function AboutPage() {
  const [expandedSection, setExpandedSection] = useState(null);

  return (
    <>
      <h1>About Me</h1>
      <p>
        Hi there, I'm Andy! In 2022 I left my ten year career as a manufacturing
        engineer to drive the Pan American Highway with my wife (check out our{" "}
        <a
          href="https://www.instagram.com/4funnervibes/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram
        </a>{" "}
        to learn more). Around three months into our travels my mind needed
        something to do and there was only so much perfecting of our cost
        tracking spreadsheet I could do. I decided to look for a passion that
        had the potential to turn into location independent work after our trip.
        After a bit of searching, a friend of mine suggested I take a look at
        both CS50 and The Odin Project (thanks Ryan!) and here I am! If you'd
        like to get in touch with me to collaborate on a project please head
        over to the <Link to="/contact">contact page</Link> and send me a
        message.
      </p>
      <PassionsList
        expandedSection={expandedSection}
        setExpandedSection={setExpandedSection}
      />
    </>
  );
}
