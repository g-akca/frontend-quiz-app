function ListItemButton({ children, handleClick, className="" }) {
  return (
    <button 
      className={`p-4 bg-white rounded-xl flex justify-between items-center cursor-pointer ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default ListItemButton;