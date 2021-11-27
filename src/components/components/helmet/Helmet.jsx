import React from 'react';

const Helmet = ({ title, description, imageUrl, url }) => {
  return (
    <div>
      <meta
        property="og:url"
        content={`${window.location.pathname}${window.location.search}`}
      />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={imageUrl} />
    </div>
  );
};

export default Helmet;
