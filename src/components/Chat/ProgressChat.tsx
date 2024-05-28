import { useState, useEffect, useRef } from "react";
import moment from "moment";
import axios from "axios";
import { FaRegUserCircle, FaCamera } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";
import { baseUrl } from "../../shared/baseUrl";
import { useAppDispatch, useAppSelector } from "../../store/useStore";



const ProgressChat = ({ id, ticket, path }: any) => {
  const dispatch = useAppDispatch();
  const { data, isLoading, isSuccess, getTicketID } = useAppSelector((state: any) => state.comment)

  console.log(data)

  useEffect(() => {
    if (isSuccess) {
    }
  }, [isSuccess])
  const form: any = useRef();

  const [inputs, setInputs] = useState({
    comment: "",
    images: [],
  });
  const [imgsLocalURL, setImgsLocalURL] = useState<any>([]);
  const [isLoadingImg, setIsLoadingImg] = useState(false);


  const handleChangeInput = (input: any, value: any) => {
    setInputs((prevState) => ({
      ...prevState,
      [input]: value,
    }));
  };

  const handleSubmitComment = (e: any) => {
    e.preventDefault();
    if (inputs.comment) {
      // dispatch(createTicketCommentAction(id, inputs.comment, inputs.images));
      setImgsLocalURL([]);
    }
  };

  // const handleUploadMultiImg = async (e: any) => {
  //   setImgsLocalURL([]);

  //   const files = e.target.files;
  //   let formData = new FormData();

  //   for (const file of files) {
  //     formData.append("image", file);
  //     setImgsLocalURL((prevState: any) => [
  //       URL?.createObjectURL(file),
  //       ...prevState,
  //     ]);
  //   }

  //   try {
  //     setIsLoadingImg(true);
  //     const data = await axios.post(
  //       baseUrl + "/api/v1/imageupload/multiple",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           Authorization: `Bearer ${userInfo?.token}`,
  //         },
  //       }
  //     );
  //     setInputs((prevState) => ({
  //       ...prevState,
  //       images: data.data.IMAGES,
  //     }));
  //     setIsLoadingImg(false);
  //   } catch (err: any) {
  //     setIsLoadingImg(false);
  //     console.log(
  //       err.response && err.response.data.message
  //         ? err.response.data.message
  //         : err.message
  //     );
  //   }
  // };

  const [message, setMessage] = useState<any>([]);
  const [to_name, setTo_name] = useState<any>("");
  const [from_name, setFrom_name] = useState<any>("");

  // useEffect(() => {
  //   setTo_name("IT Support");
  //   setFrom_name(userInfo.firstname);
  //   setMessage([
  //     ` 
  //       Comment: ${inputs.comment}
  //       Created By Firstname: ${userInfo.firstname}
  //     `,
  //   ]);
  // }, [userInfo.firstname, inputs.comment]);

  return (
    <>
      <div>
        <form onSubmit={handleSubmitComment} className="form" ref={form}>
          <div className="btn-area-container">
            {/* <Toaster
              position="top-center"
              toastOptions={{
                // Define default options
                className: "",
                duration: 5000,
                // Default options for specific types
                success: {
                  duration: 5000,
                },
              }}
            /> */}

            <input
              type="text"
              placeholder="Comment on this request..."
              value={inputs?.comment}
              onChange={(e) => handleChangeInput("comment", e.target.value)}
            />
          </div>
          <div className="btn-area">
            <label className="img-pckr">
              <FaCamera size={20} color="rgb(0,91,144)" />
              <input
                type="file"
                accept="image/*"
                style={{ display: "none" }}
                multiple
              // onChange={handleUploadMultiImg}
              // disabled={loading}
              />
            </label>
            <button type="submit" disabled={isLoadingImg || false}>
              <IoMdSend size={20} />
            </button>
          </div>

          <div className="question-container" style={{ display: "none" }}>
            <input
              name="from_name"
              id="from_name"
              className="row-input"
              type="text"
              placeholder="Enter your name"
              defaultValue={from_name}
              onChange={(e) => setFrom_name(e.target.value)}
            />
            <input
              name="to_name"
              id="to_name"
              className="row-input"
              type="text"
              placeholder="Enter your name"
              defaultValue={to_name}
              onChange={(e) => setTo_name(e.target.value)}
            />

            <textarea
              name="message"
              id="message"
              className="row-input"
              rows={5}
              required
              defaultValue={message} />
          </div>
        </form>
        <div className="img-preview">
          {imgsLocalURL?.length > 0 && isLoadingImg ? (
            <p style={{ color: "red" }}>Please wait...</p>
          ) : (
            imgsLocalURL?.map((item: any, i: any) => (
              <img key={i} src={item} alt={`PhotoIMG-${i}`} />
            ))
          )}
        </div>
        <h5 className="page-title">CHAT</h5>
        <div className="chat-container">
          {ticket?.comments?.map((item: any, i: any) => (
            <div
              key={i}
            // className={userDetails?._id === item?.createdBy?.id
            //   ? "msg outgoing"
            //   : "msg incoming"
            // }
            >
              <div className="msg-icon">
                <FaRegUserCircle size={35} color="#e5e5e5" />
              </div>
              <div className="msg-content">
                <h6>
                  {item?.createdBy?.firstname} {item?.createdBy?.lastname}{" "}
                  <span>
                    [{moment(item?.createdAt).format("D-MMM-YYYY, h:mm A")}]
                  </span>
                </h6>
                <p>{item?.comment}</p>
                {item?.images?.length > 0 && (
                  <div className="msg-img">
                    {item?.images?.map((item: any, i: any) => (
                      <img
                        className="img"
                        key={i}
                        crossOrigin="anonymous"
                        src={baseUrl + "/" + item}
                        alt={`IMG-${i}`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProgressChat;
