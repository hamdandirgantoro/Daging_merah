import React, { useState, useEffect } from "react";

type Surat = {
  id: number;
  nama: string;
  email: string;
};

type Feedback = {
  id: number;
  nama: string;
  email: string;
};

export default function Admin() {
  const [surats, setSurats] = useState<Surat[]>([]);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [selectedItem, setSelectedItem] = useState<any>(null);

  useEffect(() => {
    fetch("http://localhost:8000/surats")
      .then((res) => res.json())
      .then((data) => setSurats(data));

    fetch("http://localhost:8000/feedbacks")
      .then((res) => res.json())
      .then((data) => setFeedbacks(data));
  }, []);

  const handleDelete = (id: number, type: string) => {
    if (type === "surat") {
      fetch(`http://localhost:8000/surat/delete/${id}`, {
        method: "DELETE",
      }).then(() => {
        setSurats(surats.filter((item) => item.id !== id));
      });
    } else {
      fetch(`http://localhost:8000/feedback/delete/${id}`, {
        method: "DELETE",
      }).then(() => {
        setFeedbacks(feedbacks.filter((item) => item.id !== id));
      });
    }
  };

  const handleDisplay = (id: number, type: string) => {
    const endpoint =
      type === "surat"
        ? `http://localhost:8000/surat/show/${id}`
        : `http://localhost:8000/feedback/show/${id}`;
    fetch(endpoint)
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        setSelectedItem(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  return (
    <div className="h-screen w-screen bg-red-500 flex p-5 gap-5">
      <div className="bg-red-600 h-full w-1/2 rounded drop-shadow">
        <h1 className="h-1/6 pt-2 text-white font-bold text-lg shadown flex items-center justify-center">
          Surat Lamaran Kerja
        </h1>
        <div className="bg-white h-5/6 w-full rounded-b overflow-y-scroll">
          {surats.map((surat) => (
            <div
              key={surat.id}
              className="flex justify-between items-center p-3 border-b"
            >
              <div className="flex flex-col">
                <div>{surat.nama}</div>
                <div>{surat.email}</div>
                <div>{surat.email}</div>
              </div>
              <div>
                <button
                  className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleDelete(surat.id, "surat")}
                >
                  Delete
                </button>
                <button
                  className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDisplay(surat.id, "surat")}
                >
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-red-600 h-full w-1/2 rounded drop-shadow">
        <h1 className="h-1/6 pt-2 text-white font-bold text-lg shadow flex items-center justify-center">
          Feedback
        </h1>
        <div className="bg-white h-5/6 w-full rounded-b overflow-y-scroll">
          {feedbacks.map((feedback) => (
            <div
              key={feedback.id}
              className="flex justify-between items-center p-3 border-b"
            >
              <div>{feedback.nama}</div>
              <div>
                <button
                  className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded mr-2"
                  onClick={() => handleDelete(feedback.id, "feedback")}
                >
                  Delete
                </button>
                <button
                  className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
                  onClick={() => handleDisplay(feedback.id, "feedback")}
                >
                  Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      {selectedItem && (
        <div className="fixed top-0 left-0 w-screen h-screen flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded">
            {Object.keys(selectedItem).map((key) => (
              <div key={key}>
                <span className="font-bold">{key}: </span>
                <span>{selectedItem[key]}</span>
              </div>
            ))}
            <button
              className="bg-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded mt-3"
              onClick={() => setSelectedItem(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
