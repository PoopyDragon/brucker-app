import React from 'react';

function Contact() {
  return (
    <div className="container-fluid">

      <div className="Contact">
      <p className="ContactTitle">
        Contact
      </p>
        <div className="grid-container">
          <div className="item1">
            <p>
            <div className="bold">
            Email:
            </div>
            College Post
            <br/>
            support@collegebook.com
            <br/><br/>
            <div className="bold">
            Phone:
            </div>
            College Post
            <br/>
            4085918582
            <br/><br/>
            <div className="bold">
            Address:
            </div>
            College Post
            <br/>
            41717 Palm Ave
            <br/>
            Fremont, CA 94539
            </p>
          </div>
          <div className="item2">

            <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSeGLTzDVqVRB_KHYuS7Wl0XO6tezcDn9fSX8f5dlzUUPnX-9Q/viewform?embedded=true" width="400" height="680" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
