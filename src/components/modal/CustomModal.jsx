const CustomModal = ({img, id, title, description}) => {
  return (
    <>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      <dialog id={id} className="modal">
        <div className="modal-box">
          <img src={img} alt="" width={200} className="mx-auto" />
          <h3 className="font-bold text-2xl text-center">
            {title}
          </h3>
          <p className="text-center">{description}</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}

export default CustomModal;