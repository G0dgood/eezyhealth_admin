import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
// Importing core components




const ReactQuillWrapper = ({ value, setValue }: any) => {
	// Editor state


	// useEffect(() => {
	// 	setInput((prevState: any) => {
	// 		return ({
	// 			...prevState,
	// 			firstname: data?.firstname,
	// 			lastname: data?.lastname,
	// 			email: data?.email,
	// 			mobileNumber: data?.mobileNumber,
	// 			role: data?.role,
	// 			activated: data?.activated,
	// 		});
	// 	});
	// }, [ ]);

	// Editor ref
	const quill: any = useRef();

	// Handler to handle button clicked
	// function handler() {
	// 	console.log(value);
	// }

	const imageHandler = useCallback(() => {
		// Create an input element of type 'file'
		const input: any = document.createElement("input");
		input.setAttribute("type", "file");
		input.setAttribute("accept", "image/*");
		input.click();

		// When a file is selected
		input.onchange = () => {
			const file = input.files[0];
			const reader = new FileReader();

			// Read the selected file as a data URL
			reader.onload = () => {
				const imageUrl = reader.result;
				const quillEditor = quill.current.getEditor();

				// Get the current selection range and insert the image at that index
				const range = quillEditor.getSelection(true);
				quillEditor.insertEmbed(range.index, "image", imageUrl, "user");
			};

			reader.readAsDataURL(file);
		};
	}, []);

	const modules = useMemo(
		() => ({
			toolbar: {
				container: [
					[{ header: [2, 3, 4, false] }],
					["bold", "italic", "underline", "blockquote"],
					[{ color: [] }],
					[
						{ list: "ordered" },
						{ list: "bullet" },
						{ indent: "-1" },
						{ indent: "+1" },
					],
					["link", "image"],
					["clean"],
				],
				handlers: {
					image: imageHandler,
				},
			},
			clipboard: {
				matchVisual: true,
			},
		}),
		[imageHandler]
	);

	const formats = [
		'font', 'size',
		'bold', 'italic', 'underline', 'strike',
		'color', 'background',
		'script',
		'header', 'blockquote', 'code-block',
		'indent', 'list',
		'direction', 'align',
		'link', 'image', 'video', 'formula',
	];

	return (
		<div  >
			{/* <QuillEditor
				ref={(el) => (quill.current = el)}
				className={"editor"}
				theme="snow"
				formats={formats}
				modules={modules}
				onChange={(value) => setValue(value)}
				value={value}
			/> */}
			{/* <button onClick={handler} className={"btn"}>
				Submit
			</button> */}
		</div>
	);
};

export default ReactQuillWrapper
