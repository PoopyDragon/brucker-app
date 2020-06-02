import React from 'react';

function FAQ() {
  return (
    <div className="container-fluid">
    <div className="FAQ">
      <h1 className="headerfaq">
        Frequently Asked Questions
      </h1>


          <p className="question">
            How do I use College Post?
            <div className="answer">
              College Post is easy to use. Just go to our alumni section to learn more.
            </div>
          </p>

          <p className="question">
            How much does it cost to use College Post?
            <div className="answer">
              College Post is completely free.
            </div>
          </p>

          <p className="question">
            How can I contact College Post?
            <div className="answer">
              Please email us at support@collegepost.com.
            </div>
          </p>

          <p className="question">
            How old do you have to be to use College Post?
            <div className="answer">
              College Post is meant to help high schoolers but anyone can utilize our services.
            </div>
          </p>

        </div>
    </div>
  );
}

export default FAQ;
