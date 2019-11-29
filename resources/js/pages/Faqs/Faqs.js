import React from "react";
import NetflixScroll from "../../components/NetflixScroll/NetflixScroll";
import Content from "../../components/Content/Content";
import { app } from "../../constants/app";

const Faqs = () => {
  const faqs = [
    {
      question: "What does SCUDO mean?",
      answer:
        '"Scudo" is Italian for "shield." What does this wallet mean? This is not a minimalist wallet like the ones littering eBay and Amazon. This is a precision-made bespoke wallet designed to last for years of the most rugged use & abuse. SCUDO is a lifestyle statement—you\'re the kind of person that wants a wallet built to last, sturdy and rugged, just like you.'
    },
    {
      question: "How big is this wallet?",
      answer:
        "The biggest misconception about the SCUDO wallet is that it is bulky and heavy. Front to back the wallet is about a finger's deep width, about 0.75\" thick. Overall it's about the size of a smaller smartphone with a case, but weighs an extremely light 4oz (113g)."
    },
    {
      question: "What colors are available?",
      answer:
        "Currently, we offer Lava Orange Metallic, Dark Earth Bronze, Monster Green, Deep Blue Metallic, Gunmetal Grey, Fiery Red Metallic."
    },
    {
      question: "Will I get stopped by the TSA?",
      answer:
        "No! We've tested in airports across the country with zero issues. Compact, but with room for 16 cards and cash the Scudo makes a great travel companion."
    },
    {
      question: "Can this go in my back pocket?",
      answer:
        "Yes. Scudo wallets are designed for any pocket, front or back. Most of our customer use it as a front-pocket wallet. Despite it's huge capacity, it's still smaller than a comparable leather tri-fold wallet."
    },
    {
      question: "I still have a question!",
      answer: `We'd love to answer it! Just email us at ${app.email} or call at ${app.phone}.`
    }
  ];

  return (
    <React.Fragment>
      <Content>
        <h1>FAQs</h1>
        {faqs.map(({ question, answer }, index) => (
          <React.Fragment key={`faqs-${index}`}>
            <h2>{question}</h2>
            <p>{answer}</p>
          </React.Fragment>
        ))}
      </Content>

      <NetflixScroll />
    </React.Fragment>
  );
};

export default Faqs;
