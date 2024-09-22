import React, { useState } from 'react';

function FAQsSection() {
  const faqs = [
    {
      question: "What is Printify?",
      answer: "Printify is a print-on-demand service that allows you to create and sell custom products without holding inventory."
    },
    {
      question: "How does the pricing work?",
      answer: "We offer competitive prices based on the products you choose and the print providers available."
    },
    {
      question: "What products can I sell?",
      answer: "You can sell a wide range of products including T-shirts, mugs, and home decor items."
    },
    {
      question: "Is there a monthly fee?",
      answer: "No, Printify is free to use. You only pay for the products you sell."
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto text-center mb-12">
        <h2 className="text-3xl font-bold mb-6">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-700">Find answers to your questions below.</p>
      </div>
      <div className="max-w-lg mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="mb-4">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 bg-white border rounded-lg hover:bg-gray-100 focus:outline-none"
            >
              <span className="font-semibold">{faq.question}</span>
              <span className={`ml-2 ${openIndex === index ? 'rotate-180' : ''}`}>&#9660;</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-gray-100 border rounded-lg mt-2">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQsSection;
