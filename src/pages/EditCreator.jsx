import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import supabase from "../utils/supabase";
import { Form } from "../components/Form";

export const EditCreator = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [creator, setCreator] = useState(null);

  useEffect(() => {
    const fetchCreator = async () => {
      const { data } = await supabase.from("creators").select("*").eq("id", id).single();
      setCreator(data);
    };
    fetchCreator();
  }, [id]);

  const handleUpdate = async (formData) => {
    const { error } = await supabase
      .from("creators")
      .update(formData)
      .eq("id", id);

    if (error) alert(error.message);
    else navigate(`/view/${id}`);
  };

  return (
    <div className="p-10">
      <h1 className="text-center text-4xl font-bold text-white">Edit Creator</h1>
      {creator ? (
        <Form onSubmit={handleUpdate} initialData={creator} />
      ) : (
        <p className="text-white text-center mt-10 text-2xl font-semibold text-blue-300">Loading creator details...</p>
      )}
    </div>
  );
};