import React from 'react';
import '../styles/Reviews.css'; 
import home from '../images/home.jpg'

const reviews = [
    {
      image: home,
      name: 'John Doe',
      date: '15/09/23',
      desc: "Great service! The team was professional and attentive, exceeding our expectations with their attention to detail.",
      stars: 5
    },
    {
      image: home,
      name: 'Jane Smith',
      date: '22/10/23',
      desc: "Amazing experience. The service was top-notch, and the staff went above and beyond. Highly recommended!",
      stars: 4
    },
    {
      image: home,
      name: 'Alice Johnson',
      date: '11/02/23',
      desc: "Professional and friendly staff. We felt valued and the team provided clear, knowledgeable explanations.",
      stars: 5
    },
    {
      image: home,
      name: 'Michael Brown',
      date: '04/04/23',
      desc: "Exceptional quality and attention to detail. Every step was handled with precision. Outstanding results.",
      stars: 5
    },
    {
      image: home,
      name: 'Emily White',
      date: '01/02/24',
      desc: "Great customer support! The team was responsive, addressing all concerns promptly with excellent communication.",
      stars: 4
    },
  ];
  
  

export const Reviews = () => {
  return (
    <div className='reviews'>
      <h1 className="section_title">Our Services</h1>
      <h3 className='section_subtitle'>add a slogan add a slogan</h3>

      <div className='reviews_scroller'>
        <div className='reviews_track'>
          {reviews.map((review, index) => (
            <div key={index} className='review_item'>
                <div className='review_top'>
                    <img src={review.image} alt={review.name} className='review_image' />
                    <div className='review_top_right'>
                        <h4 className='review_name'>{review.name}</h4>
                        <p className='review_date'>{review.date}</p>
                    </div>
                </div>
                <div className='review_stars'>
                  {Array(review.stars).fill('★').join('')}
                  {Array(5 - review.stars).fill('☆').join('')}
                </div>
                <p className='review_desc'>{review.desc}</p>
            </div>

          ))}
          {reviews.map((review, index) => (
            <div key={index} className='review_item'>
                <div className='review_top'>
                    <img src={review.image} alt={review.name} className='review_image' />
                    <div className='review_top_right'>
                        <h4 className='review_name'>{review.name}</h4>
                        <p className='review_date'>{review.date}</p>
                    </div>
                </div>
                <div className='review_stars'>
                  {Array(review.stars).fill('★').join('')}
                  {Array(5 - review.stars).fill('☆').join('')}
                </div>
                <p className='review_desc'>{review.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
