import './about.css';
import cowok from '../../img/cowok.jpeg'


const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={cowok} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About</h1> <br />
        <p className="a-desc">Domiciled in Jakarta Greater Area, I am a programmer using the Javascript language, for the front-end I use HTML, CSS, ReactJs. For Back-end I use NodeJs with its libraries like Sequelize a promise-based ORM (Object-relational mapping) with databases I've used MySql, Postgres and MongoDB.</p> <br />
        <p> Using PostMan for API Testing, GitHub and GitLab collaboration, and Trello organizing. Can also work in Windows and Linux application programs</p>
        <p>Have completed several projects, those that came from Glints Academy, my own projects and from real company projects that I can't explain here because they belong to company property</p> <br />
        <p>In addition, I am a graduate of the Communication and Media Study Program, Padjadjaran University, also have experience in the digital marketer field at a startup company in Bandung Digital Valley. Have enough knowledge about internet marketing, such as SEO, GoogleAds as well as Facebook & Instagram Ads</p>
        {/* <div className="a-award">
          <img src={Me} alt="" className='a-award-img'/>
          <img src={Me} alt="" className='a-award-img'/>
          <img src={Me} alt="" className='a-award-img'/>
          <img src={Me} alt="" className='a-award-img'/>
        </div> */}
      </div>
    </div>
  )
}

export default About