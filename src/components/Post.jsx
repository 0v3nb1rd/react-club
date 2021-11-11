import React from 'react';

export const Post = ({ post }) => {
  return (
    <div className="card text-center group">
      <figure className="px-10 pt-10 h-full transition transform filter drop-shadow-lg group-hover:-translate-y-1">
        <img
          src={post.img}
          className="rounded-xl object-cover h-full"
          alt="images"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{post.title}</h2>
        <p>{post.desc}</p>
      </div>
    </div>
  );
};
