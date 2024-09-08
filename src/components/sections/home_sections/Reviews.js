import React from 'react';
import '../../styles/home_styling/Reviews.css'; 
import image from '../../images/main/image3.jpg'

const reviews = [
    {
      name: 'Marie-Claire Pickard',
      stars: 5,
      desc: "Absolutely fantastic work by Jack, the car was utterly spotless inside and out, he was meticulous in his work.  Highly recommend, I would definitely use this company again."
    },
    {
      name: 'Debbie Roberts',
      stars: 5,
      desc: "Professional, great experience, knowledgable about different products and fantastic job done. Had a ceramic coating and I would highly recommend this- it’s like glass. Thankyou Isaac, will definitely be back."
    },
    {
      name: 'Simon Parker',
      stars: 5,
      desc: "Made a fantastic job of my van. It’s never looked as clean. Car next?"
    },
    {
      name: 'John Firth',
      stars: 5,
      desc: "Absolutely brilliant service from swaledale valeting. Got my car looking brand new and it was in a bad way before Issac worked his magic. Highly recommend!"
    },
    {
      name: 'Josh Bowskill',
      stars: 5,
      desc: "5/5 star service, 100% recommend and will use again, spent 9 hours cleaning my car and putting it back to showroom condition. "
    },
    {
      name: 'Megan Knowlson',
      stars: 5,
      desc: "Absolute miracle workers, my car looks brand new again, highly recommend"
    },
    {
      name: 'Joanne Rumbold',
      stars: 5,
      desc: "Thank you for a great job, my car is looking like new again!"
    },
    {
      name: 'Jenny Bumby',
      stars: 5,
      desc: "Excellent proffesional company, really recommend, communication was spot on. Really pleased with results on our pick up, we will def be using you again. Thank you!!"
    },
    {
      name: 'Ken Jackson',
      stars: 5,
      desc: "thanks Issac the car looks good , a professional outfit from first phone call ,I can really recommend this company."
    },
    {
      name: 'Sky Ting Yip',
      stars: 5,
      desc: "Highly recommend, you definitely get what you have paid for"
    },
];

export const Reviews = () => {
  return (
    <div className='reviews'>
      <h1 className="section_title">Reviews</h1>
      <h3 className='section_subtitle'>Our Reputation Shines as Bright as Your Car</h3>

      <div className='reviews_scroller'>
        <div className='reviews_track'>
          {reviews.map((review, index) => (
            <div key={index} className='review_item'>
              <span className='review_span'></span>
              <h4 className='review_name'>{review.name}</h4>
              <p className='review_stars'>
                {Array(review.stars).fill('★').join('')}
                {Array(5 - review.stars).fill('☆').join('')}
              </p>
              <p className='review_desc'>{review.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
