import React from "react";
import PropTypes from "prop-types";

const Youtube = ({ videoId, title }) => {
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <iframe
      width="560"
      height="315"
      src={url}
      frameBorder="0"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title={title}
    />
  );
};

Youtube.propTypes = {
  videoId: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};

Youtube.defaultProps = {
  videoId: "HfBPpcCexhc",
  title: "Scudo Wallets Video"
};

export default Youtube;
