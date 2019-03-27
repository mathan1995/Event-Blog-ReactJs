import React from "react";

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        title="Hello"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31465.82886328325!2d80.02554649999999!3d9.6614981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3afe5418ed6c1b2b%3A0x7915bb4278791116!2sNallur+Kandaswamy+Kovil!5e0!3m2!1sen!2slk!4v1553662455016"
        width="100%"
        height="500px"
        frameBorder="0"
        allowFullScreen
      />

      <div className="location_tag">
        <div>Location</div>
      </div>
    </div>
  );
};

export default Location;
