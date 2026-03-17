function ListItemButton({ children, handleClick, className="" }) {
  return (
    <button 
      type="button"
      className={`p-4 bg-white dark:bg-blue-850 rounded-xl flex justify-between gap-2 items-center 
        shadow-[0_16px_40px_rgba(143,160,193,0.14)] dark:shadow-[0_16px_40px_rgba(49,62,81,0.14)] 
        cursor-pointer tablet:rounded-3xl desktop:p-6 ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  )
}

export default ListItemButton;