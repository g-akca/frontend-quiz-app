function SubmitButton( handleClick, children ) {
  return (
    <button 
      onClick={handleClick} 
      className="bg-purple-600 p-4 h-14 text-white text-lg leading-[100%] font-medium rounded-xl cursor-pointer transition-all"
    >
      {children}
    </button>
  )
}

export default SubmitButton