import { useState } from "react";

function CalculadoraMedia({ onClose }) {
  const Result = (a, b) => a * 0.4 + b * 0.6;
  const [media, setMedia] = useState(null);
  const [notaAva, setNotaAva] = useState(() => Array(7).fill(""));
  const [notaProva, setNotaProva] = useState("");

  const calcularMedia = () => {
    const avaNumbers = notaAva.map(v => parseFloat(v) || 0);
    const avaAvg = avaNumbers.reduce((s, x) => s + x, 0) / avaNumbers.length;
    const m = Result(avaAvg, parseFloat(notaProva) || 0);
    setMedia(m.toFixed(2));
  };

  const getStatusStyle = (media) => {
    return media >= 5
      ? "text-green-600 font-bold text-2xl mt-4"
      : "text-red-600 font-bold text-2xl mt-4";
  };

  const inputNoteAva = notaAva.map((val, i) => (
    <label key={i} className="">
      <span className="block font-bold">Nota AVA {i + 1}:</span>
      <input
        type="number"
        placeholder="Nota AVA"
        max={10}
        min={0}
        step={0.01}
        value={val}
        onChange={(e) => {
          const next = [...notaAva];
          next[i] = e.target.value;
          setNotaAva(next);
        }}
        className="mb-2 p-2 rounded w-full bg-white"
      />
    </label>
  ));



  return (
    <>
      <dialog
        open
        className="grid place-items-center fixed w-[60%] h-[80%] m-auto border-2 border-black p-5 rounded-lg
                          top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
                           bg-[#EEECEC] shadow-lg z-[1000]"
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center rounded-full 
                     hover:bg-gray-200 transition-colors duration-200"
        >
          <span className="text-2xl">&times;</span>
        </button>
        <div className="grid grid-cols-2 gap-4 w-full h-full">
          <div
            id="inputs"
            className="flex flex-col justify-center items-center border-r pr-4"
          >
            <div className="grid grid-cols-2 gap-4 w-full mb-4">
            {inputNoteAva}
            </div>
            <label className="block mb-4 w-full">
              <span className="block font-bold">Nota prova regular:</span>
              <input
                type="number"
                placeholder="Nota da mesma matéria que do AVA"
                max={10}
                min={0}
                step={0.01}
                value={notaProva}
                onChange={(e) => setNotaProva(e.target.value)}
                className="mb-2 p-2 rounded w-full bg-white"
              />
            </label>
            <button
              onClick={calcularMedia}
              className="mt-4 px-4 py-2 bg-[#141313] text-white rounded"
            >
              Calcular Média Final
            </button>
          </div>
          <div
            id="resultado"
            className="flex flex-col justify-center items-center"
          >
            <h2 className="text-xl font-bold mb-4">Sua média final é:</h2>
            {media && (
              <>
                <p className="text-3xl font-bold text-black">{media}</p>
                <p className={getStatusStyle(parseFloat(media))}>
                  {parseFloat(media) >= 5
                    ? "\u{1F44F} APROVADO"
                    : "\u{1F90F} REPROVADO"}
                </p>
              </>
            )}
          </div>
        </div>
      </dialog>
    </>
  );
}

export default CalculadoraMedia;
