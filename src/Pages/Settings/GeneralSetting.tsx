import { FaCheck } from "react-icons/fa";
import { TbCloudUpload } from "react-icons/tb";
import { FaFaceGrin } from "react-icons/fa6";
import { InputField } from "../../components/Options";


// @ts-ignore 
const GeneralSetting: React.FC<Props> = ({ userData }) => {


  return (
    <div id="general-setting-container">

      <section className="personal-details">
        <h3 className="personal-details-header-text">Personal Details</h3>

        <div className="faceicon-container">
          <div className="faceicon">
            <FaFaceGrin size={25} className="faceicon-mix-icon" />
          </div>
          <button className="personal-details-image">
            <TbCloudUpload size={30} />
            <p>Upload profile image</p>
          </button>
        </div>
        <form>
          <div className="info-form">
            <InputField label={"Name"} value={userData?.user?.firstName} className={"class-input"} />
            <InputField label={"Username"} value={userData?.user?.LastName} className={"class-input"} />
          </div>
          <div className="warning">
            <p>You can change username 24 days once, so check the username before process</p>
          </div>
          <div>
            <button><FaCheck size={15} /> Save Changes</button>
          </div>
        </form>
      </section>

      <section className="personal-details">
        <h3 className="personal-details-header-text">Email and Phone details</h3>
        <form className="flex-setting-container">
          <div className="info-form-block">
            <div className="flex-input-button">
              <InputField label={"Email Address"} value={userData?.user?.email} className={"class-input"} />
              <button className="mt-4">Update</button>
            </div>

            <div className="warning">
              <p> Note: You'll get comfirmation email within 30mins</p>
            </div>
            <div className='flex-input-button'>
              <InputField label={"Phone Number"} value={userData?.user?.phoneNumber} className={"class-input"} />
              <button className="mt-4">Update</button>
            </div>
          </div>

          <div className="warning">
            <p>Note: You'll get comfirmation OTP within 30mins</p>
          </div>
        </form>
      </section>

    </div>

  )
}

export default GeneralSetting;