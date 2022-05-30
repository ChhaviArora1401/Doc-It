import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useNavigate, useParams } from "react-router-dom";
import { collection, doc, updateDoc, onSnapshot } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Editor({ database }) {
  const [editorData, setEditorData] = useState("");
  const [title, setTitle] = useState("");
  let navigate = useNavigate();
  let databaseCollection = collection(database, "docs-data");
  let params = useParams();
  const getEditorData = (value) => {
    setEditorData(value);
  };

  useEffect(() => {
    const updateDocument = setTimeout(() => {
      let docToUpdate = doc(databaseCollection, params.id);

      updateDoc(docToUpdate, {
        body: editorData
      })
        .then(() => {
          toast.success("Document Updated", {
            autoClose: 1000
          });
        })
        .catch(() => {
          toast.error("Cannot Update Document");
        });
    }, 1000);

    return () => clearTimeout(updateDocument);
  });

  useEffect(() => {
    const document = doc(databaseCollection, params.id);
    onSnapshot(document, (docs) => {
      setTitle(docs.data().title);
      setEditorData(docs.data().body);
    });
  }, []);
  return (
    <div>
      <ToastContainer />
      <h3>{title} </h3>
      <ReactQuill value={editorData} onChange={getEditorData} />
    </div>
  );
}
