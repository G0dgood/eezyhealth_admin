import React from 'react'
import Select from "react-select";
const ToSelect = ({ user, isLoading, handleOnChange, input }: any) => {


	const email = user?.map((item: any) => ({
		value: item.email,
		label: `${item.firstname}  ${item.lastname}`,
	})) || [];

	return (
		<Select
			isDisabled={isLoading}
			isLoading={isLoading}
			isMulti
			name="colors"
			options={email}
			className="basic-multi-select"
			classNamePrefix="select"
			value={input.emails}
			onChange={(e: any) => handleOnChange("emails", e)}
		/>
	)
}


export default ToSelect

