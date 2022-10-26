import { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";

import styles from "./Header.module.css";
import Main from "./Main";
import {
  FaHandHoldingHeart,
  FaTwitter,
  FaHome,
  FaHashtag,
  FaInstagram,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

import { IoNotificationsSharp } from "react-icons/io5";
import { BiMessageSquareDetail } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";

const Header = () => {
  const [tweet, setTweet] = useState("");
  const [name, setName] = useState("");
  const [welcomeName, setWelcomeName] = useState("");
  const [userName, setUserName] = useState("");
  const [pictureURL, setPictureURL] = useState("");
  const [newTweet, setNewTweet] = useState([]);
  const [profilePicURL, setProfilePicURL] = useState("");
  const [show, setShow] = useState(false);

  const addTweet = () => {
    const newTweets = {
      tweet: tweet,
      name: name,
      userName: userName,
      pictureURL: pictureURL,
      profilePicURL: profilePicURL,
    };
    // console.log(newTweets);

    setNewTweet(newTweets);
    setWelcomeName(name === "" ? welcomeName : name);
    setTweet("");
    setName("");
    setUserName("");
    setPictureURL("");
    setProfilePicURL("");
  };

  // useEffect(() => {

  // }, []);

  //! POPOVER DEMO

  return (
    <>
      <div className={styles.leftMenu}>
        <ul>
          <li>
            <FaTwitter /> <span className={styles.span}>Twitter</span>
          </li>
          <li>
            <FaHome /> <span className={styles.span}>Home</span>
          </li>
          <li>
            <FaHashtag /> <span className={styles.span}>Discover</span>
          </li>
          <li>
            <IoNotificationsSharp />{" "}
            <span className={styles.span}>Notification</span>
          </li>
          <li>
            <BiMessageSquareDetail />{" "}
            <span className={styles.span}> Message</span>
          </li>
          <li>
            <CgProfile /> <span className={styles.span}>Profile</span>
          </li>
        </ul>
      </div>
      <div className={styles.container}>
        <div className={styles.headerTop}>
          <div>
            <h2>Welcome {welcomeName || "Guest"}</h2>
          </div>
          <div className={styles.logoLike}>
            <FaHandHoldingHeart onClick={() => setShow(true)} />
          </div>

          {/*MODAL  */}
          <Modal
            show={show}
            onHide={() => setShow(false)}
            dialogClassName="modal-90w"
            aria-labelledby="example-custom-modal-styling-title">
            <Modal.Header closeButton className="bg-dark">
              <Modal.Title id="example-custom-modal-styling-title">
                Designed By: Captain Price
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="bg-dark text-center">
              <h4>Follow My Accounts</h4>
              <FaTwitter
                className={styles.socialMedia}
                onClick={(e) =>
                  (window.location.href = "https://twitter.com/murathoncu")
                }
              />{" "}
              <FaInstagram
                className={styles.socialMedia}
                onClick={(e) =>
                  (window.location.href =
                    "https://www.instagram.com/m_hdavendigr/")
                }
              />{" "}
              <FaLinkedin
                className={styles.socialMedia}
                onClick={(e) =>
                  (window.location.href =
                    "https://www.linkedin.com/in/murathudavendigaroncu/")
                }
              />{" "}
              <FaGithub
                className={styles.socialMedia}
                onClick={(e) =>
                  (window.location.href =
                    "https://github.com/murathudavendigar")
                }
              />
            </Modal.Body>
          </Modal>
          {/*MODAL  */}
        </div>
        <div className={styles.tweet}>
          <div className={styles.image}>
            <img className={styles.image} src={profilePicURL} alt="" />
          </div>
          <div className="tweet-content">
            <textarea
              className={styles.textarea}
              name=""
              id=""
              cols="80"
              rows="2"
              placeholder="What's happening ?"
              wrap="hard"
              value={tweet}
              onChange={(e) => setTweet(e.target.value)}
              required></textarea>
            <div className={styles.attr}>
              <input
                type="text"
                className={styles.input}
                placeholder="Enter Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="text"
                className={styles.input}
                placeholder="Enter Userame"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
              />
              <input
                type="text"
                className={styles.input}
                placeholder="Add Your Picture URL"
                value={pictureURL}
                onChange={(e) => setPictureURL(e.target.value)}
              />

              <input
                type="text"
                className={styles.input}
                placeholder="Add Your Profile Pic URL"
                value={profilePicURL}
                onChange={(e) => setProfilePicURL(e.target.value)}
              />

              <button className={styles.button} onClick={addTweet}>
                Tweet
              </button>
            </div>
          </div>
        </div>
      </div>
      <Main newTweet={newTweet} addTweet={addTweet} />
    </>
  );
};

export default Header;
