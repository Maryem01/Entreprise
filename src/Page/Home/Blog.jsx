import React from 'react';
import BlogImg1 from "../../assets/Blog1.png";
import BlogImg2 from "../../assets/Blog2.png";
import BlogImg3 from "../../assets/Blog3.png";

const BlogList = [
  {
    id: 1,
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    discriptcs:
      "Don’t wrestle with rig assembly and hot, noisy miners at home. We have the fastest bitcoin mining hardware running for you....",
    img: BlogImg1,
  },
  {
    id: 2,
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    discriptcs:
      "Don’t wrestle with rig assembly and hot, noisy miners at home. We have the fastest bitcoin mining hardware running for you....",
    img: BlogImg2,
  },
  {
    id: 3,
    title: "Lorem Ipsum is simply dummy text of the printing and typesetting.",
    discriptcs:
      "Don’t wrestle with rig assembly and hot, noisy miners at home. We have the fastest bitcoin mining hardware running for you....",
    img: BlogImg3,
  },
];

const Blog = () => {
  return (
    <section className="container mx-auto px-12 py-12">
      <h2 className='font-bold text-3xl pb-6 uppercase'>our recent blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-25">
        {BlogList.map((blog, id) => (
          <div key={blog.id} className="space-y-3">
            <img src={blog.img} alt="" />
            <div className="space-y-3">
              <h2 className="text-[20px] font-semibold">{blog.title}</h2>
              <p>{blog.discriptcs}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Blog