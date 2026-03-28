import { Card } from "../components/Card";
import { useState, useEffect } from "react";
import supabase from "../utils/supabase";
import Nav from "../components/Nav";

export const ShowCreators = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from("creators").select("*");
      if (error) {
        console.error("Error fetching data:", error.message);
      } else {
        setData(data);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Nav />
      <div className="my-[10vh] mx-[12vw]">
        {data.length === 0 ? (
          <div className="text-white text-center text-3xl font-semibold uppercase">
            No creators yet.
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-5">
            {data.map((item) => (
              <Card data={item} key={item.id} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};
