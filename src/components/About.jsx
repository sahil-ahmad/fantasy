import React from "react";

const About = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="w-full bg-cover bg-center min-h-[600px] text-white"
        style={{
          backgroundImage:
            "url('public/images/background-image.webp')",
        }}
      >
        <div className="container mx-auto min-h-[600px] flex items-center justify-center">
          <div className="text-center">
            <p
              className="text-6xl font-bold"
              style={{
                background:
                  "linear-gradient(180deg, #fff61d 49.5%, #ffd600 50%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontFamily: "Carter One",
              }}
            >
              ABOUT US
            </p>
          </div>
        </div>
      </div>

      {/* Introduction Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl font-semibold mb-6 font-['Khand']">
            Introduction
          </h1>
          <p className="text-xl leading-relaxed text-gray-800 font-['Roboto']">
            Fookri is more than just a fantasy sports platform; it's a vibrant
            community of sports enthusiasts united by the thrill of competition.
            Our mission is to revolutionise the fantasy sports experience by
            offering a fair, transparent, and innovative platform that puts
            users at the heart of everything we do.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2">
            <img
              src="public\images\ourstory-img.webp"
              alt="Our Story"
              className="w-full h-auto"
            />
          </div>
          <div className="w-full md:w-1/2 text-center">
            <h1 className="text-4xl font-semibold mb-6 font-['Khand']">
              Our Story
            </h1>
            <p className="text-xl leading-relaxed text-gray-800 font-['Roboto']">
              Born out of a shared passion for sports and technology, Fookri
              was founded with a vision to create a platform that redefines the
              fantasy sports experience. Our journey began with a simple idea:
              to provide a fair, exciting, & user-friendly platform for sports
              fans to showcase their knowledge and compete with friends.
            </p>
          </div>
        </div>
      </section>

      {/* What Sets Us Apart Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-semibold mb-8 text-center font-['Khand']">
            What Sets Us Apart
          </h1>
          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                icon: "public/images/setusapart-icon-1.png",
                title: "Immersive Gaming Experience",
                content:
                  "Our platform is designed to provide an unparalleled gaming experience with intuitive navigation, real-time updates, and exciting features that keep you engaged.",
              },
              {
                icon: "public/images/setusapart-icon-2.png",
                title: "Diverse Game Options",
                content:
                  "From Cricket, Football to Kabaddi and Basketball, we offer a wide range of fantasy sports to cater to every fan's passion.",
              },
              // Add other cards similarly
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg flex gap-6"
              >
                <div className="w-12 flex-shrink-0">
                  <img src={card.icon} alt="" className="w-full" />
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{card.title}</h3>
                  <p className="text-gray-700">{card.content}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Offerings Section */}
      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-semibold mb-8 text-center font-['Khand']">
          Our Offerings
        </h1>
        <ul className="text-xl space-y-4 max-w-4xl mx-auto list-disc pl-6">
          <li>
            Refer and Earn with Fookri, get referrals of Friends, Family and
            get a chance to earn up to Rs.10,000 with Referrals.
          </li>
          <li>
            Only Real Users - No Bot Simulation, only verified users to play
            your contests.
          </li>
          <li>
            Lowest Platform Fee - Fookri offers lowest platform fee as
            compared to any other Fantasy Sports app
          </li>
          <li>
            2nd Innings - An opportunity as backup to recover from the first
            innings of the match and Double your gains or recover your loss
          </li>
          <li>
            Wide Range of Fantasy Sports to choose from, like Cricket, Football,
            Basketball, and Kabaddi.
          </li>
        </ul>
      </section>

      {/* Our Team Section */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="w-full md:w-1/2 text-center">
            <h1 className="text-4xl font-semibold mb-6 font-['Khand']">
              Our Team
            </h1>
            <p className="text-xl leading-relaxed text-gray-800 font-['Roboto']">
              The Fookri team is a dynamic blend of sports enthusiasts,
              technologists, and marketing experts united by a shared passion
              for creating an exceptional fantasy sports experience. Our
              dedicated marketing team works tirelessly to connect with our
              users, understand their needs, and deliver innovative campaigns
              that drive engagement and excitement.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img
              src="images/ourteam-img.webp"
              alt="Our Team"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
