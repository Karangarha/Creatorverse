import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import supabase from "../utils/supabase";
import { Icon } from "../icons";
import Nav from "../components/Nav";
import { useNavigate } from "react-router-dom";
import { DeletePopUp } from "../components/DeletePopUp";

export const ViewCreator = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const [deleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("creators")
        .select("*")
        .eq("id", id);
      if (error) {
        console.error("Error fetching data:", error.message);
      } else {
        setData(data);
      }
    };
    fetchData();
  }, [id]);

  const handleDelete = async () => {
    const { error } = await supabase.from("creators").delete().eq("id", id);

    if (error) alert(error.message);
    else navigate("/");
  };

  return (
    <>
      <Nav />
      {deleteOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <DeletePopUp
            onConfirm={() => handleDelete()}
            onCancel={() => setDeleteOpen(false)}
          />
        </div>
      )}
      <div className="flex flex-col items-center justify-center mb-[10vh]">
        <div className="flex gap-10 mx-[10vw] my-[10vh]">
          <div className="w-1/3 border-2 border-blue-500 rounded-md">
            <img
              src={data[0]?.imageURL}
              alt={data[0]?.name}
              className="h-106 object-cover rounded-sm object-center"
            />
          </div>
          <div className="text-white w-2/3 flex flex-col gap-4 py-10">
            <h2 className="text-blue-500 font-bold text-3xl">
              {data[0]?.name}
            </h2>
            <p className="text=2xl">{data[0]?.description}</p>
            <div>
              {data[0]?.youtube_url && (
                <button
                  onClick={() => window.open(data[0]?.youtube_url, "_blank")}
                  className="flex gap-2 text-white px-4 py-2 rounded-md "
                >
                  <div className="flex items-start justify-start gap-2">
                    {" "}
                    {Icon.youtube}{" "}
                    <h4
                      style={{ wordSpacing: "-0.3em" }}
                      className="lowercase text-xl font-semibold"
                    >
                      @{`${data[0]?.name}`}
                    </h4>
                  </div>
                </button>
              )}
              {data[0]?.instagram_url && (
                <button
                  onClick={() => window.open(data[0]?.instagram_url, "_blank")}
                  className="flex gap-2 text-white px-4 py-2 rounded-md "
                >
                  <div className="flex items-start justify-start gap-2">
                    {" "}
                    {Icon.instagram}{" "}
                    <h4
                      style={{ wordSpacing: "-0.3em" }}
                      className="lowercase text-xl font-semibold"
                    >
                      @{`${data[0]?.name}`}
                    </h4>
                  </div>
                </button>
              )}
              {data[0]?.x_url && (
                <button
                  onClick={() => window.open(data[0]?.x_url, "_blank")}
                  className="flex gap-2 text-white px-4 py-2 rounded-md "
                >
                  <div className="flex items-start justify-start gap-2">
                    {" "}
                    {Icon.X}{" "}
                    <h4
                      style={{ wordSpacing: "-0.3em" }}
                      className="lowercase text-xl font-semibold"
                    >
                      @{`${data[0]?.name}`}
                    </h4>
                  </div>
                </button>
              )}
            </div>
          </div>
        </div>
        <div className="flex gap-4 w-2/3 ">
          <button
            onClick={() => navigate(`/edit/${data[0]?.id}`)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-400 text-lg w-full"
          >
            Edit
          </button>
          <button
            onClick={() => setDeleteOpen(true)}
            className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-400 text-lg w-full"
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};
