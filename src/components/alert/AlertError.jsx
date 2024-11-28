import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AlertError = ({ setError, error }) => {
  const closeError = (e) => {
    e.target.parentElement.style.display = "none";
    setError(null);
  };
  return (
    <>
      {error && (
      <div
        role="alert"
        className="alert bg-[#F8D7DA] text-[#58151C] border border-[#EA868F] rounded-md py-2 w-[70%] mb-6 flex justify-between items-center"
      >
        <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={faTriangleExclamation} />
        <span>{error}</span>
        </div>
        <button
          className=" border-none  text-[#58151C]  "
          onClick={closeError}
        >
          ✕
        </button>
      </div>
      )}
    </>
  );
};
export default AlertError