import { FaCheck } from "react-icons/fa";
import { InputField } from "../../components/Options";



const GeneralSetting = () => {

  return (
    <div id="general-setting-container">
      <section className="personal-details passwordSetting">
        <h3 className="personal-details-header-text">Password Setting</h3>
        <form>
          <div className="info-form-block">
            <div className="flex-input-button mt-4">
              <InputField label={"Current Password"} className={"class-input"} />
            </div>

            <div className='flex-input-button mt-4'>
              <InputField label={"New Password"} className={"class-input"} />
            </div>
            <div className='flex-input-button mt-4' >
              <InputField label={"Comfirm Password"} className={"class-input"} />
            </div>
          </div>
          <div className="mt-4">
            <button><FaCheck size={15} />Changes Password</button>
          </div>
        </form>
      </section>
    </div>

  )
}

export default GeneralSetting;