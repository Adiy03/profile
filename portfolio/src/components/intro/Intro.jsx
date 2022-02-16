// import css
import "./intro.css"
import Me from '../../img/me.jpg'

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My name is</h2>
          <h1 className="i-name">Adi Yogo</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Bachelor Comm</div>
              <div className="i-title-item">Glint Academy Batch 9</div>
              <div className="i-title-item">Javascript Programmer</div>
              <div className="i-title-item">Back End Developer</div>
              <div className="i-title-item">Digital Marketer</div>
            </div>
          </div>
          <p className="i-desc">
          An Intermediate backend developer, alumni of Glints Academy and also a Padjadjaran university in the field of communication and media science studies. Previous position as programmer backend developer at PT. Mitra Kuadran Teknologi <br /><br /> More about me? see description below
          </p>
        </div>
      </div>
      <div className="i-right">
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro;