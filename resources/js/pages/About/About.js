import React from "react";
import { app } from "../../constants/app";
import TopFeatures from "../../components/TopFeatures/TopFeatures";
import Content from "../../components/Content/Content";
import ContactUs from "../../components/ContactInfo/ContactInfo";
import Helmet from "react-helmet";

const About = () => {
  const whatToExpect = [
    "Top quality CNC machining to super tight close tolerances",
    "Military spec certified plating and materials; Aircraft grade fasteners and components always used",
    "All products assembled and inspected at our facility",
    "Top notch customer service; speak directly to the owner and designer of the products you purchase"
  ];

  const whatNotToExpect = [
    "We are not Walmart and as such we don't always have 1,000's of pieces in stock as these are custom machined products and we REFUSE to jeopardize quality for the sake of quantity. If you are in a hot rush and have no patience for quality craftsmanship then you should look elsewhere. We will never cut corners to rush our work. Plating, heat treating, and custom machining and molding of products all take time and sometimes we are at the mercy or our suppliers as well. We scrutinize our supplier chain so we are also willing to be patient with them for the return of a first class service. We can guarantee the BEST product for your money but quality takes time!",
    "We will NEVER charge your credit card until your order SHIPS from our facility... NEVER! A lot of companies charge you online and then you may not get your parts shipped for weeks. We believe your money is your money until we provide a product in return.",
    "We offer ground UPS for domestic orders and US mail for overseas or Canadian orders. We do not up charge our shipping for foreign orders but pricing varies so greatly that there is no way to know each shipping cost online. If you are concerned about shipping costs please call in your order. We only charge what the post office charges us!",
    "We do not offer 2 day air or next day because we can only ship this method when the items are in stock and we do not have online inventory. If you are in a rush and need the parts fast then please call us to determine availability. (706) 793-1770"
  ];

  const title = `About ${app.scudo} by MGW`;

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Content>
        <h1>{title}</h1>
        <p>
          MGW was established in 1984 by the current owner and president, Louis
          Ciamillo. The main focus was to CNC manufacture specialized firearms
          components for his custom competition pistols and revolvers. As word
          spread in the area of his reputation for making very high quality and
          close tolerance parts, MGW began to take on additional work from the
          aerospace and microwave industry. In 1986 MGW also became a key
          supplier for the defense and law enforcement industry, providing small
          arms parts and sighting systems for the armed forces and manufacturers
          such as Sig Sauer, Glock, Beretta and Trijicon.
        </p>
        <p>
          In 1989, MGW built a state of the art 12,000 square foot facility in
          Augusta, GA., where it currently operates. In 1994, Louis' son George
          Ciamillo took over management of the company in order for Louis to
          pursue other ventures and focus on additional product development.
          While still largely focused on the manufacturing of defense
          components, George began branching out into the automotive field due
          to his passion for sports cars and racing.
        </p>
        <p>
          MGW currently holds several patents to innovative designs for short
          throw shifters and billet accessories. We focus on domestic sports
          cars ...Dodge Viper, Corvette, Mustang and Camaro. Everything we make
          in our CNC machine shop is designed, manufactured and distributed by
          our company. We take great pride in our work and strive to make as
          close to perfect products as can be offered.
        </p>
        <p>
          In 2017, MGW introduced the first generation SCUDO wallet. A small,
          lightweight, and CNC machined billet wallet that is RFID shielding and
          extremely durable. Over the past two years, MGW has been perfecting
          the design and striving to make it lighter, smaller, and stronger
          along the way. All SCUDO wallets are machined in house and all
          hardware and components are proudly sourced in the USA.
        </p>
        <h2>What to expect from MGW...</h2>
        <ul>
          {whatToExpect.map((bullet, index) => (
            <li key={`whatToExpect-${index}`}>{bullet}</li>
          ))}
        </ul>
        <h2>
          What <strong>NOT</strong> to expect...
        </h2>
        {whatNotToExpect.map((bullet, index) => (
          <p key={`whatNotToExpect-${index}`}>{bullet}</p>
        ))}
        <ContactUs />
      </Content>
      <TopFeatures />
    </React.Fragment>
  );
};

export default About;
