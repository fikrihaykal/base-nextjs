import { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["JPEG", "PNG", "GIF"];

export function DragnDrop() {
  const [file, setFile] = useState<any>();
  const handleChange = (file: any) => {
    setFile(file);
    console.log(file[0].name);
    const reader = new FileReader();
    reader.readAsDataURL(file[0]);
    reader.onloadend = (readerEvent: ProgressEvent<FileReader>) => {
      if (readerEvent?.target?.result) {
        console.log(file[0].name, readerEvent.target.result);
        // setFieldValue(props.name, readerEvent.target.result);
      }
    };
  };

  return (
    <div className="App">
      <h1>Hello To Drag & Drop Files</h1>
      <FileUploader
        multiple={true}
        handleChange={handleChange}
        name="file"
        types={fileTypes}
      />
      <p>{file ? `File name: ${file[0].name}` : "no files uploaded yet"}</p>
    </div>
  );
}
