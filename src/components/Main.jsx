import styles from "./Main.module.css";
import { FaComment, FaRetweet, FaHeart, FaShare } from "react-icons/fa";
import { useState, useEffect } from "react";
import axios from "axios";
import { Modal } from "bootstrap";

const Main = ({ newTweet, addTweet }) => {
  //! HOOK
  const [user, setUser] = useState([]);
  const [quotes, setQuotes] = useState("");
  const [items, setItems] = useState([]);
  const [showItem, setShowItem] = useState([]);
  const [tweetPic, setTweetPic] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [firstAdd, setFirstAdd] = useState(0);

  //! URL
  const urlUser = "https://randomuser.me/api/";
  const urlQuotes = "https://api.quotable.io/random";

  //! AXIOUS
  const getUser = async () => {
    try {
      //! USER GET
      const { data } = await axios(urlUser);
      setUser(data.results[0]);
      // console.log(user);
      setUserInfo([...userInfo, user]);
      // console.log(userInfo);

      //! QUOTES GET
      const dataQuotes = await axios(urlQuotes);
      setQuotes(dataQuotes?.data?.content);
    } catch (error) {}

    setFirstAdd(firstAdd + 1);

    if (firstAdd === 0) {
      defaultAdd();
    } else {
      addArray();

      if (
        newTweet.haveTweet &&
        newTweet.tweet !== "" &&
        newTweet.name !== "" &&
        newTweet.userName !== ""
      ) {
        addUserTweet();
        newTweet.haveTweet = false;
      }
    }
  };
  // const getQuotes = async () => {
  //   try {
  //     const dataQuotes = await axios(urlQuotes);
  //     setQuotes(dataQuotes?.data?.content);
  //   } catch (error) {}
  // };

  //! SET INTERVAL
  // setInterval(() => {
  //   getUser();
  // }, 7000);

  const addUserTweet = () => {
    setItems([
      ...items,
      {
        id: items.length,
        firstName: newTweet.name,
        lastName: "",
        userName: newTweet.userName,
        profilePic:
          newTweet.profilePicURL === ""
            ? "https://freesvg.org/storage/img/thumb/abstract-user-flat-3.png"
            : newTweet.profilePicURL,
        pictureLarge: newTweet.profilePicURL,
        quotes: newTweet.tweet,
        tweetPic: newTweet.pictureURL,
        commentCount: Math.ceil(Math.random() * 100),
        retweetCount: Math.ceil(Math.random() * 200),
        likeCount: Math.ceil(Math.random() * 300),
      },
    ]);

    newTweet.tweet = "";
  };
  //???????????????????????????????????????????????????????????????????????????*
  const addArray = () => {
    //! PUSH INFO

    if (items.length > 0) {
      setItems([
        ...items,
        {
          id: items.length,
          firstName: user?.name?.first,
          lastName: user?.name?.last,
          userName: user?.login?.username,
          profilePic: user?.picture?.thumbnail,
          pictureLarge: user?.picture?.large,
          quotes: quotes,
          tweetPic: tweetPic,
          commentCount: Math.ceil(Math.random() * 100),
          retweetCount: Math.ceil(Math.random() * 200),
          likeCount: Math.ceil(Math.random() * 300),
        },
      ]);
    }
  };

  //! DEFAULT ADD

  const defaultAdd = () => {
    setItems([
      {
        id: items.length,
        firstName: "Murat H??davendig??r",
        lastName: "??nc??",
        userName: "captainprice",
        profilePic:
          "https://lh3.googleusercontent.com/a/ALm5wu1JY8Q5bFwRKo8FuVZc19ysPJ6peGZmWyGOvQJk=s288-p-rw-no",
        pictureLarge:
          "https://lh3.googleusercontent.com/a/ALm5wu1JY8Q5bFwRKo8FuVZc19ysPJ6peGZmWyGOvQJk=s288-p-rw-no",
        quotes: "Welcome Twitter Clone Page!!",
        commentCount: 999,
        retweetCount: 999,
        likeCount: 999,
      },
    ]);
  };

  //! ADD USER TWEET
  // if (newTweet.tweet !== "") {
  //   addUserTweet();
  // }

  //! USE_EFFECT
  useEffect(() => {
    getUser();
  }, [newTweet]);

  return (
    <div className={styles.container}>
      <button onClick={getUser} className={styles.showButton}>
        Show More Tweet
      </button>
      {items
        .map((elements) => (
          <div
            className={styles.tweet}
            key={elements.id}
            onClick={(e) => setShowItem(elements.id)}>
            <div className={styles.image}>
              <img
                className={styles.image}
                src={elements.profilePic}
                alt=""
                type="button"
                data-bs-target="#myModal"
                data-bs-toggle="modal"
              />

              {/** */}
              {/* MODAL */}
              <div className={styles.main}>
                <div className="modal text-dark" tabIndex="-1" id="myModal">
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <img
                          src={
                            showItem > userInfo.length
                              ? elements.profilePic
                              : userInfo[showItem]?.picture?.thumbnail
                          }
                          alt=""
                        />
                        <h5 className="modal-title text-dark ms-2">
                          {showItem > userInfo.length
                            ? elements.firstName
                            : userInfo[showItem]?.name?.first}{" "}
                          {showItem > userInfo.length
                            ? elements.lastName
                            : userInfo[showItem]?.name?.last}
                        </h5>
                        <h6 className="ms-3 text-primary mt-2">
                          @
                          {showItem > userInfo.length
                            ? elements.userName
                            : userInfo[showItem]?.login?.username}
                        </h6>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"></button>
                      </div>
                      <div className="modal-body">
                        <p>
                          <b>Cell:</b>{" "}
                          {showItem > userInfo.length
                            ? user?.cell
                            : userInfo[showItem]?.cell}
                        </p>
                        <p>
                          <b>Age:</b>{" "}
                          {showItem > userInfo.length
                            ? user?.dob?.age
                            : userInfo[showItem]?.dob?.age}
                        </p>
                        <p>
                          <b>City:</b>{" "}
                          {showItem > userInfo.length
                            ? user?.location?.city
                            : userInfo[showItem]?.location?.city}
                        </p>
                        <p>
                          <b>Country:</b>{" "}
                          {showItem > userInfo.length
                            ? user?.location?.country
                            : userInfo[showItem]?.location?.country}
                        </p>
                      </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-danger"
                          data-bs-dismiss="modal">
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* MODAL */}
              {/** */}
            </div>
            <div className={styles.tweetContent}>
              <h4 className={styles.name}>
                {elements.firstName} {elements.lastName}
                <small className={styles.userName}>@{elements.userName}</small>
              </h4>
              <p>{elements.quotes}</p>
              <img
                src={elements.tweetPic}
                alt=""
                className={styles.imageTweet}
              />
              <div className={styles.attr}>
                <div className={styles.faComment}>
                  <FaComment />
                  <span className={styles.numberAttr}>
                    {elements.commentCount}
                  </span>
                </div>
                <div className={styles.faRetweet}>
                  <FaRetweet />
                  <span className={styles.numberAttr}>
                    {elements.retweetCount}
                  </span>
                </div>
                <div className={styles.faHeart}>
                  <FaHeart />
                  <span className={styles.numberAttr}>
                    {elements.likeCount}
                  </span>
                </div>
                <div className={styles.faShare}>
                  <FaShare />
                </div>
              </div>
            </div>
          </div>
        ))
        .reverse()}
    </div>
  );
};
export default Main;
