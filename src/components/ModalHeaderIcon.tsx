
import { MdOutlineClose } from "react-icons/md";



const ModalHeaderIcon = ({ setShow, icon, title, subtitle }: any) => {

	return (
		<div className='modal-handle-header'>
			<div className='modal-handle-sub'>
				<div className='modal-handle-sub-title'>
					{icon}</div>
				<div  >
					<h3 className="span-center-title">{title}</h3>
					<p className='span-center-title-sup'>{subtitle}</p>
				</div>

			</div>
			<MdOutlineClose size={28} className='close-span-icon' onClick={() => setShow(false)} />
		</div>
	);
};
export default ModalHeaderIcon;

