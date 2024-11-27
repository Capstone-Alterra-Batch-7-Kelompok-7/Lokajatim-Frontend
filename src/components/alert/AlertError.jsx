import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const AlertError = ({ text, setError, error }) => {
  const closeError = (e) => {
    e.target.parentElement.style.display = "none";
    setError(null);
  };
  return (
    <>
      {error && (
      <div
        role="alert"
        className="alert bg-[#F8D7DA] text-[#58151C] border border-[#EA868F] rounded-md py-2 w-[70%] mb-6 relative"
      >
        <FontAwesomeIcon icon={faTriangleExclamation} />
        <span>{text}</span>
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