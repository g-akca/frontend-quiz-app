function ListItemButton({ children, handleClick, className="" }) {
  return (
    <button 
      className={`p-4 bg-white rounded-xl flex justify-between items-center 
        cursor-pointer shadow-[0_16px_40px_rgba(143,160,193,0.14)] tablet:rounded-3xl desktop:p-6 ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default ListItemButton;