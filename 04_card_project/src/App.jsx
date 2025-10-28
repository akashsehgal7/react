import React from 'react'
import Card from './components/Card';


const App = () => {
  const jobOpenings = [
  {
    brandLogo: "https://logo.clearbit.com/amazon.com",
    companyName: "Amazon",
    datePosted: "5 days ago",
    jobTitle: "Senior UI/UX Designer",
    tag1: "Part-time",
    tag2: "Senior",
    pay: "$120/hr",
    location: "Mumbai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/google.com",
    companyName: "Google",
    datePosted: "2 days ago",
    jobTitle: "Frontend Developer",
    tag1: "Full-time",
    tag2: "Fresher",
    pay: "$100/hr",
    location: "Bangalore, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/microsoft.com",
    companyName: "Microsoft",
    datePosted: "1 day ago",
    jobTitle: "React Native Engineer",
    tag1: "Full-time",
    tag2: "Senior",
    pay: "$130/hr",
    location: "Hyderabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/flipkart.com",
    companyName: "Flipkart",
    datePosted: "3 days ago",
    jobTitle: "Product Designer",
    tag1: "Part-time",
    tag2: "Fresher",
    pay: "$90/hr",
    location: "Delhi, India"
  },
  {
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Adobe_Acrobat_DC_logo_2020.svg/1200px-Adobe_Acrobat_DC_logo_2020.svg.png",
    companyName: "Adobe",
    datePosted: "6 days ago",
    jobTitle: "UX Researcher",
    tag1: "Full-time",
    tag2: "Senior",
    pay: "$110/hr",
    location: "Pune, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/netflix.com",
    companyName: "Netflix",
    datePosted: "4 days ago",
    jobTitle: "UI Engineer",
    tag1: "Part-time",
    tag2: "Fresher",
    pay: "$95/hr",
    location: "Chennai, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/airbnb.com",
    companyName: "Airbnb",
    datePosted: "7 days ago",
    jobTitle: "Visual Designer",
    tag1: "Full-time",
    tag2: "Senior",
    pay: "$125/hr",
    location: "Kolkata, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/spotify.com",
    companyName: "Spotify",
    datePosted: "2 days ago",
    jobTitle: "Interaction Designer",
    tag1: "Part-time",
    tag2: "Fresher",
    pay: "$85/hr",
    location: "Ahmedabad, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/intuit.com",
    companyName: "Intuit",
    datePosted: "5 days ago",
    jobTitle: "Design Systems Engineer",
    tag1: "Full-time",
    tag2: "Senior",
    pay: "$140/hr",
    location: "Noida, India"
  },
  {
    brandLogo: "https://logo.clearbit.com/zomato.com",
    companyName: "Zomato",
    datePosted: "3 days ago",
    jobTitle: "Junior UI Designer",
    tag1: "Part-time",
    tag2: "Fresher",
    pay: "$75/hr",
    location: "Jaipur, India"
  }
];

console.log(jobOpenings);

  return (
    <div className='parent'>
     {jobOpenings.map(function(elem){
      return <Card company={elem.companyName} brand={elem.brandLogo} date={elem.datePosted} post = {elem.jobTitle} t1 = {elem.tag1} t2 = {elem.tag2} pay={elem.pay} location = {elem.location}/>
     })}
    </div>
  )
}

export default App
