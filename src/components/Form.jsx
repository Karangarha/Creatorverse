import { useState } from "react";
import { Icon } from "../icons";
import { useNavigate } from "react-router-dom";
import { Discard } from "./Discard";

export const Form = ({ onSubmit, initialData = {} }) => {
  const navigate = useNavigate();

  const [name, setName] = useState(initialData.name || "");
  const [description, setDescription] = useState(initialData.description || "");
  const [imageURL, setImageURL] = useState(initialData.imageURL || "");
  const [youtube_url, setYoutube_url] = useState(initialData.youtube_url || "");
  const [instagram_url, setInstagram_url] = useState(
    initialData.instagram_url || "",
  );
  const [x_url, setX_url] = useState(initialData.x_url || "");

  const [haschanges, setHasChanges] = useState(false);
  const [discardOpen, setDiscardOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      name,
      description,
      imageURL,
      youtube_url,
      instagram_url,
      x_url,
    });
  };

  const handleDiscard = () => {
    if (haschanges) {
      setDiscardOpen(true);
    } else {
      navigate(-1);
    }
  };

  return (
    <>
      {discardOpen && haschanges && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
          <Discard
            onConfirm={() => navigate("/")}
            onCancel={() => setDiscardOpen(false)}
          />
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 text-white items-center my-[10vh] mx-[17vw]"
      >
        <label htmlFor="name" className=" flex flex-col ">
          Name:
          <input
            id="name"
            type="text"
            placeholder="Name"
            required={true}
            value={name}
            onChange={(e) => {
              setName(e.target.value);
              setHasChanges(true);
            }}
            className="bg-white"
          />
        </label>
        <label htmlFor="imageURL" className=" flex flex-col">
          Image URL:
          <p>
            Provide a link to an image of your creator. Be sure to include the
            http://
          </p>
          <input
            id="imageURL"
            type="text"
            placeholder="Image URL"
            required={true}
            value={imageURL}
            onChange={(e) => {
              setImageURL(e.target.value);
              setHasChanges(true);
            }}
            className="bg-white"
          />
        </label>

        <label htmlFor="description" className=" flex flex-col">
          Description:
          <p>
            Provide a description of the creator. Who are they? What makes them
            interesting?
          </p>
          <textarea
            id="description"
            placeholder="Description"
            required={true}
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
              setHasChanges(true);
            }}
            className="bg-white"
          />
        </label>
        <h2 className=" flex text-3xl font-bold text-blue-400 uppercase mt-12 mb-4 place-self-start">
          Social media links
        </h2>
        <label htmlFor="youtube_url" className=" flex flex-col">
          <h1 className="flex gap-2">{Icon.youtube} YouTube:</h1>
          <p>Provide a link to the creator's YouTube channel.</p>
          <input
            id="youtube_url"
            type="text"
            placeholder="YouTube URL"
            required={true}
            value={youtube_url}
            onChange={(e) => {
              setYoutube_url(e.target.value);
              setHasChanges(true);
            }}
            className="bg-white"
          />
        </label>

        <label htmlFor="instagram_url" className=" flex flex-col">
          <h1 className="flex gap-2">{Icon.instagram} Instagram:</h1>
          <p>Provide a link to the creator's Instagram profile.</p>
          <input
            type="text"
            id="instagram_url"
            placeholder="Instagram URL"
            value={instagram_url}
            onChange={(e) => {
              setInstagram_url(e.target.value);
              setHasChanges(true);
            }}
            className="bg-white"
          />
        </label>
        <label htmlFor="x_url" className=" flex flex-col">
          <h1 className="flex gap-2">{Icon.X} X (Twitter):</h1>
          <p>Provide a link to the creator's X profile.</p>
          <input
            type="text"
            id="x_url"
            placeholder="X URL"
            value={x_url}
            onChange={(e) => {
              setX_url(e.target.value);
              setHasChanges(true);
            }}
            className="bg-white"
          />
        </label>

        <div className="flex flex-col items-center w-full gap-2">
          <button
            type="submit"
            className="bg-blue-500/80 hover:bg-blue-700/80 text-white font-bold text-xl py-2 px-4 rounded mt-4 w-1/2"
          >
            Submit
          </button>

          <button
            type="button"
            onClick={() => handleDiscard()}
            className="bg-gray-500/80 hover:bg-gray-700/80 text-white font-bold text-xl py-2 px-4 rounded w-1/2"
          >
            {haschanges ? "Discard" : "Cancel"}
          </button>
        </div>
      </form>
    </>
  );
};
