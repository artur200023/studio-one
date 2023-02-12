import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import img from "../../img";
import { DefaultLayout } from "../../layouts/DefaultLayout";
import "./profile.css";

const Profile = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn || isLoggedIn == "false") {
      navigate("/login");
    }
  }, []);

  const logOut = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <div className="container">
        <DefaultLayout>
          <div className="profile">
            <h1 className="profile_title">Profile</h1>
            <h2 className="about">I'm a WEB developer</h2>
          </div>

          <div className="about_me">
            <p className="about_text">
              I am trying to find my place in the field of web programming. I
              try to do everything possible to achieve the desired result
            </p>
            <img className="img_profile" src={img.profile} alt="" />
            <div className="about_info">
              <span>Name :</span>
              <p>Artur Zadelyan</p>
              <span>Age :</span>
              <p>25 years</p>
              <span>Location:</span>
              <p>I live in Yerevan, on Sebastia Street</p>
            </div>
          </div>
          <div>
            <button className="log_out_btn" onClick={() => logOut()}>
              Log Out
            </button>

            <iframe
              className="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.1309013716254!2d44.4613805!3d40.18390019999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abd96f0d4ef39%3A0xcd400e20ce5d3f95!2s25%20Sebastia%20St%2C%20Yerevan!5e0!3m2!1sru!2s!4v1664884333841!5m2!1sru!2s"
            />
          </div>
        </DefaultLayout>
      </div>
    </>
  );
};

export default Profile;
