import { Info, Pen } from "lucide-react";
import { Icon } from "../icons";
import { Link } from "react-router-dom";

export const Card = ({ data }) => {
  return (
    <>
      <div
        className=" relative card bg-base-100 shadow-xl rounded-md border-2 border-blue-500"
        key={data.id}
      >
        <div className="card-image">
          <img
            className="h-84 w-full object-cover rounded-sm brightness-40 object-center"
            src={`${data.imageURL}`}
            alt={data.name}
          />
        </div>
        <div className=" absolute bottom-0 left-0 card-body p-4 text-white w-full flex flex-col gap-2">
          <div className="flex justify-between items-center">
            <h2 className="card-title text-xl font-bold uppercase text-blue-500/80">
              {data.name}
            </h2>
            <div className="flex gap-2">
              <Link to={`/view/${data.id}`} className="btn btn-ghost">
                <Info color="black" className="bg-white rounded-full" />
              </Link>
              <div>
                <Link to={`/edit/${data.id}`} className="btn btn-ghost">
                  <Pen color="white" />
                </Link>
              </div>
            </div>
          </div>
          <div className="flex gap-2">
            {data.youtube_url ? (
              <a
                href={data.youtube_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {Icon.youtube}
              </a>
            ) : null}
            {data.instagram_url ? (
              <a
                href={data.instagram_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {Icon.instagram}
              </a>
            ) : null}
            {data.x_url ? (
              <a
                href={data.x_url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                {Icon.X}
              </a>
            ) : null}
          </div>

          <div>
            <p className="text-md font-normal">{data.description}</p>
          </div>
        </div>
      </div>
    </>
  );
};
