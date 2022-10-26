import { Modal } from "bootstrap";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import styles from "./UserProfile.module.css";

const UserProfile = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.AuthFormContainer}>
      <form className={styles.AuthForm}>
        <div className={styles.AuthFormContent}>
          <h3 className={styles.AuthFormTitle}>Sign Up</h3>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              type="text"
              className="form-control mt-1"
              placeholder="Enter Full Name"
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Enter password"
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </div>
          <p className="forgot-password text-right text-dark mt-2">
            Forgot password?
          </p>
        </div>
      </form>
    </div>
  );
};

export default UserProfile;
