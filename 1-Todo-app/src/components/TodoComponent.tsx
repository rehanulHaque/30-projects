import { BiTrash } from "react-icons/bi";

type Props = {
  id: string;
  title: string;
  completed: boolean;
  handelDelete: (id: string) => void;
  handelUpdate: (id: string) => void;
};

export default function TodoComponent({ id, title, completed, handelDelete, handelUpdate }: Props) {
  return (
    <div className="flex justify-between items-center">
      <div className="flex gap-4">

        {/* Copied Input box from here https://www.material-tailwind.com/docs/html/checkbox */}
        <label className="flex items-center cursor-pointer relative">
          <input
            type="checkbox"
            checked={completed}
            className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-slate-300 checked:bg-slate-800 checked:border-slate-800"
            id="check"
            onChange={() => handelUpdate(id)}
          />
          <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-3.5 w-3.5"
              viewBox="0 0 20 20"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="1"
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
        </label>
        <p>{title}</p>
      </div>
      <div>
        <button
          className="bg-red-600 p-2 text-white rounded-md"
          onClick={() => handelDelete(id)}
        >
          <BiTrash />
        </button>
      </div>
    </div>
  );
}
