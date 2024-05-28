import React from "react";
import Select from "react-select";



const CcSelect = ({ user, isLoading }: any) => {

	const email = user?.map((department: any) => ({
		value: department.email,
		label: `${department.firstname}  ${department.lastname}`,
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
		/>
	)
}

export default CcSelect

