import { useState } from "react";

const Form = () => {
  const [answer, setAnswer] = useState("");
  const [status, setStatus] = useState("typing");
  const [error, setError] = useState(null);

  if (status === "succes") {
    return <h1 className="text-medium text-green-500">Tebakan anda benar</h1>;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submittingForm(answer);
      setStatus("succes");
    } catch (error) {
      setStatus("typing");
      setError(error);
    }
  };

  const handleTextAreaChange = (e) => {
    setAnswer(e.target.value);
  };

  return (
    <>
      <h2 className="mb-2 font-bold text-2xl">Kuis Kota</h2>
      <p className="mb-4">
        Di kota manakah terdapat papan reklame yang mengubah udara menjadi air
        minum?
      </p>

      <form onSubmit={handleSubmit}>
        <textarea
          value={answer}
          onChange={handleTextAreaChange}
          disabled={status === "submitting"}
          className="p-3"
        />
        <button
          disabled={answer.length === 0 || status === "submitting"}
          className="block mt-4 bg-slate-900 text-white text-sm px-3 py-1 rounded-md"
        >
          Submit
        </button>

        {error !== null && (
          <p className="mt-4 text-red-500 font font-medium">{error.message}</p>
        )}
      </form>
    </>
  );
};

const submittingForm = (answer) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let shouldError = answer.toLowerCase() !== "lima";

      if (shouldError) {
        reject(
          new Error(
            "jawaban anda salah, tetapi tebakan anda bagus, silahkan coba lagi"
          )
        );
      } else {
        resolve();
      }
    }, 1500);
  });
};

export default Form