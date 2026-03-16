function ButtonItem({ children, handleClick }) {
  return (
    <button className="p-4 bg-white rounded-xl flex justify-start items-center cursor-pointer" onClick={handleClick}>
      {children}
    </button>
  )
}

export default ButtonItem;