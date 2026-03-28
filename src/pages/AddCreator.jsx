import { useNavigate } from "react-router-dom";
import supabase from "../utils/supabase";
import { Form } from "../components/Form";

export const AddCreator = () => {
  const navigate = useNavigate();

  const handleInsert = async (formData) => {
    const { error } = await supabase.from("creators").insert([formData]);

    if (error) alert(error.message);
    else navigate("/");
  };

  return (
    <div className="p-10">
      <h1 className="text-center text-4xl font-bold text-white">Add New Creator</h1>
      <Form onSubmit={handleInsert} initialData={{}}/>
    </div>
  );
};