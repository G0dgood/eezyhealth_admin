import { useState, useEffect, useRef } from "react";
import ToSelect from "./ToSelect";
import CcSelect from "./CcSelect";
import ReactQuillWrapper from "./ReactQuillWrapper";
import { useAppDispatch, useAppSelector } from "../../store/useStore";
import { SVGLoader } from "../SVGLoader";
import { toast } from "react-toastify";
import { customId } from "../Options";



const TicketForm = ({ type, setShow }: any) => {
  // @ts-ignore  
  const userInfo = JSON.parse(localStorage.getItem("eezy-user-info"));
  const { createisLoading, createisSuccess } = useAppSelector((state: any) => state.ticket)
  const dispatch = useAppDispatch();
  const { dataAll, isLoadingAll } = useAppSelector((state: any) => state.reg);
  const user = dataAll?.users







  useEffect(() => {
  }, [dispatch, userInfo?.id]);
  const formData = new FormData();
  const form: any = useRef();
  const [value, setValue] = useState('');
  const [input, setInput] = useState<any>({
    file: [],
    ticketType: type,
    affectedUsers: "",
    severity: "",
    emails: "",
    description: ""
  })


  useEffect(() => {
    if (createisSuccess) {
      toast.success("Ticket Created!", { toastId: customId });
      setShow(false)
    }


  }, [createisSuccess, dispatch, setShow]);
  const [issueCategories, setIssueCategories] = useState<any>([]);
  const [severityStyle, setSeverityStyle] = useState<any>({
    background: "transparent",
    width: "0%",
  });




  // console.log("formData", input);




  const formFields = [
    { key: 'file', value: input.file },
    { key: 'ticketType', value: input.ticketType },
    { key: 'affectedUsers', value: input.affectedUsers },
    { key: 'severity', value: input.severity },
    {
      key: 'emails', value: JSON.stringify(
        Array.isArray(input?.emails) ? input.emails.map((item: { value: any; }) => item?.value) : []
      )
    },
    { key: 'description', value: input.description },
  ];

  formFields.forEach(field => {
    formData.append(field.key, field.value);
  });


  useEffect(() => {
    setInput((prevState: any) => {
      return ({
        ...prevState,
        description: value,

      });
    });
  }, [value]);


  useEffect(() => {
    if (type === "INCIDENT") {
      setIssueCategories([
        "Access Creation",
        "Calling Issue",
        "Application Issue",
        "Product Issue",
        "IVR Issue",
        "Email Delivery Issue",
        "Prompt",
        "Total DOWNTIME",
        "Bad Laptop Battery",
        "Power Outage/Network",
        "Loss Of Internet",
        "VPN Not Connecting",
        "System Issue",
        "No Internet",
        "Network Issue",
        "Calls Not Recording",
        "Agents Access Deactivation",
        "Agent's Access Reactivation",
        "Laptop Not Booting",
        "Request For Calls",
        "System Issue",
        "Password Issue",
        "Inability to access .12",
        "Account reference locked out"

      ])
    }
    else if (type === "SERVICE") {
      setIssueCategories([
        "Password Issue",
        "License Issue",
        "Email Issue ",
        "Global Protect",
        "Inability To Access SIEBEL",
        "Issue  Case Management Issue",
        "AAUIActivation",
        "Call processing",
        "Flash Calls As Abandoned Calls",
        "Call processing at intervals",
        "Cracked Calls",
        "Calling Through GLO E1",
        "Call processing and Tascr error 500",
        "AURA BASE",
        "Agents Assigned On CCMA",
        "AMEYO ISSUE",
        "Inabilty To Login To CS Portal",
        "High Inactivity on NGUCC",
        "Inability to save calls on CS Portal",
        " Cases Management Issue",
        "Unable to Access CRM",
        "Fluctuating CRM Issue",
        "Inability To Login To CS Portal",
        "Flashed Calls",
        "TASCR site can't be reached",
        "Inability to sign in to LYNC",
        "FONALITY SET-UP",
        "Call Processing On TASCR",
        "Technically Unreachable calls on TASCR",
        "Office Network Downtime",
        "CRM Application is Slow/Not Saving",
      ])
    }
    else if (type === "CHANGE") {
      setIssueCategories([
        "New Prompt",
        "Modify Existing Prompt",
        "New IVR Flow ",
        "Modify Existing IVR",
        "New Report Feature",
        "Modify Existing Report"
      ])
    }
  }, [type])

  useEffect(() => {
    if (input.affectedUsers >= 1 && input.affectedUsers <= 5) {
      handleOnChange("severity", "Low");
      setSeverityStyle(() => ({
        background: "green",
        width: "25%",
      }));
    } else if (input.affectedUsers >= 6 && input.affectedUsers <= 10) {
      handleOnChange("severity", "Medium");
      setSeverityStyle(() => ({
        background: "yellow",
        width: "50%",
      }));
    } else if (input.affectedUsers >= 11) {
      handleOnChange("severity", "High");
      setSeverityStyle(() => ({
        background: "red",
        width: "100%",
      }));
    } else if (input.issueCategory === "Total DOWNTIME") {
      handleOnChange("severity", "Critical");
      setSeverityStyle(() => ({
        background: "red",
        width: "100%",
      }));
    } else {
      handleOnChange("severity", "");
      setSeverityStyle(() => ({
        background: "transparent",
        width: "0%",
      }));
    }
  }, [input.affectedUsers, input.issueCategory]);

  const handleOnChange = (input: string, value: string) => {
    setInput((prevState: any) => ({
      ...prevState,
      [input]: value,
    }));
  };
  const handleCreateTicket = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // @ts-ignore 
    dispatch(createTicket(formData));
  };



  // const handleUploadMultiImg = async (e: { target: { files: any; }; }) => {
  //   const files = e.target.files;
  //   let formData = new FormData();

  //   for (const file of files) {
  //     formData.append("image", file);
  //   }

  //   try {
  //     setIsLoadingImg(true);
  //     const data = await axios.post(
  //       baseUrl + "/api/v1/imageupload/multiple",
  //       formData,
  //       {
  //         headers: {
  //           "Content-Type": "multipart/form-data",
  //           // Authorization: `Bearer ${userInfo?.token}`,
  //         },
  //       }
  //     );
  //     setInput((prevState: any) => ({
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

  return (
    <div>
      <form id="ticket-form" onSubmit={handleCreateTicket} ref={form}>
        <div className="form-grp">
          <label htmlFor="contact-details">To</label>
          <ToSelect user={user} isLoading={isLoadingAll} handleOnChange={handleOnChange} input={input} />
        </div>
        <div className="form-grp">
          <label htmlFor="contact-details">Cc</label>
          <CcSelect user={user} isLoading={isLoadingAll} />
        </div>
        <div className="form-grp">
          <label htmlFor="contact-details">Ticket Type</label>
          <input
            type="text"
            id="contact-details"
            value={input.ticketType}
            disabled={true}
            required
            onChange={(e) => handleOnChange("ticketType", e.target.value)}
          />
        </div>

        {/* <div className="form-grp">
          <label htmlFor="category">Issue Category</label>
          <select
            // placeholder="subject"
            id="category"
            required
            value={input.issueCategory}
            onChange={(e) => handleOnChange("issueCategory", e.target.value)}>
            <option></option>
            {issueCategories.map((item: any, i: any) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
        </div> */}
        <div className="form-grp">
          <label htmlFor="description">Issue Description</label>
          <ReactQuillWrapper setValue={setValue} value={value} />
        </div>
        <div className="form-grp_row">
          <div className="form-grp">
            <label htmlFor="affected">Number of Users affected</label>
            <input
              type="number"
              id="affected"
              value={input.affectedUsers}
              required={
                input.issueCategory === "Total DOWNTIME" ? false : true
              }
              onChange={(e) => handleOnChange("affectedUsers", e.target.value)}
            />
          </div>
          <div className="form-grp">
            <label htmlFor="severity" style={{ display: "flex" }}>
              Severity
              <span
                style={{
                  backgroundColor: severityStyle.background,
                  width: severityStyle.width,
                  height: 7,
                  marginLeft: 7.5,
                  borderRadius: 5,
                  alignSelf: "center",
                  transition: "all .75s",
                }}
              />
            </label>
            <select id="severity" value={input.severity} disabled>
              <option></option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
              <option value="Critical">Critical</option>
            </select>
          </div>
        </div>

        <div className="form-grp">
          <label htmlFor="attach-image">Attach Screen</label>
          <input
            type="file"
            accept="image/*"
            multiple
            // @ts-ignore 
            onChange={(e) => handleOnChange("file", e.target.files)}
            id="attach-image"
          />
        </div>
        <div className="form-grp_btn">
          <button type="submit" id="custom-btn" disabled={createisLoading}>
            {createisLoading ? <SVGLoader width={"35px"} height={"35px"} color={"#fff"} /> : "Submit"}
          </button>

        </div>
      </form>
    </div>
  );
};

export default TicketForm;
