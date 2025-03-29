const Modal = ({ content, show = false }) => {
  return show ? (
    <>
      <div className="bg-black opacity-20 h-full w-full fixed top-0 left-0 overflow-hidden z-40 items-center"></div>
      <div className="absolute w-6/12 mx-[25%] bg-white z-50 border border-orange-600 rounded-md">
        {content}
      </div>
    </>
  ) : (
    <></>
  );
};

export default Modal;
