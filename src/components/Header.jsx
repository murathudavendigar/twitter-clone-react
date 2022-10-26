import { useEffect, useState } from "react";
import styles from "./Header.module.css";
import Main from "./Main";
import { FaHandHoldingHeart } from "react-icons/fa";

const Header = () => {
  const [tweet, setTweet] = useState("");
  const [name, setName] = useState("");
  const [welcomeName, setWelcomeName] = useState("");
  const [userName, setUserName] = useState("");
  const [pictureURL, setPictureURL] = useState("");
  const [newTweet, setNewTweet] = useState([]);
  const [profilePicURL, setProfilePicURL] = useState("");

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
    setWelcomeName(name);
    setTweet("");
    setName("");
    setUserName("");
    setPictureURL("");
    setProfilePicURL("");
  };

  // useEffect(() => {

  // }, []);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.headerTop}>
          <div>
            <h1>Welcome {welcomeName || "Guest"}</h1>
          </div>
          <div className={styles.logoLike}>
            <FaHandHoldingHeart />
          </div>
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
