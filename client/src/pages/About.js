import React from 'react'
import Layout from '../components/Layout/Layout'

const About = () => {
  return (
    <Layout title={"About us - Ecommerce App"}>
        <div className="row contactus ">
        <div className="col-md-6 ">
          <img
            src="/images/about.jpeg"
            alt="contactus"
            style={{ width: "50%" }}
          />
        </div>
        <div className="col-md-4">
          <p className="text-justify mt-2">
          Welcome to Paudha Mandi, your premier destination for all things green. As a dedicated platform for plant enthusiasts, we are more than just a marketplace—we are a thriving ecosystem where the beauty of nature meets the convenience of online shopping.
          </p>
        </div>
      </div>
    </Layout>
  );
};

Layout.defaultProps ={
  title: "Ecommerce app - shop now",
  description: "A online platform for plant lover",
  keywords: "mongodb, react, nodeJS",
  author: "divyansh"
};
export default About