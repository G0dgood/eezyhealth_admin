import { useEffect } from "react";
import { GoArrowLeft } from "react-icons/go";
import { useNavigate } from "react-router-dom";

const AddEmployeeTitle = ({ setActive, active, click, setFinish, handleSubmitMyForm, decrementCount, incrementCountCancel, incrementCount, finish }: any) => {
  const navigate = useNavigate();





  useEffect(() => {
    if (active === 6) {
      setFinish(true);
    } else {
      setFinish(!true);
    }
  }, [active, setFinish]);

  return (
    <div className="addemployeecontainer-sup">
      <div className="back-to-employee-container">
        <button
          onClick={() => navigate("/")}
          className="back-to-employee-button"
        >
          <GoArrowLeft className="back-to-employee-icon" size={20} />
        </button>
        <h4
          className="addemployeecontainer-title"
          onClick={incrementCountCancel}
        >
          Login
        </h4>
      </div>

      <div className="addemployee-sup">
        <div>
          <button
            className="back-to-employee-button"
            onClick={decrementCount}
          >
            BACK
          </button>
        </div>
        <div className="addemployee-space" />
        <div>
          {finish ? (
            <button
              className="back-to-employee-button2"
              onClick={incrementCount}  >
              FINISH
            </button>
          ) : (
            <button
              className="back-to-employee-button2"
              onClick={click}
              type="submit"
            >
              CONTINUE
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AddEmployeeTitle;
