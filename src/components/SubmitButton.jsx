function SubmitButton({ handleClick, children }) {
  return (
    <button 
      onClick={handleClick} 
      className="bg-purple-600 p-4 h-14 text-white text-lg leading-[100%] font-medium rounded-xl cursor-pointer 
      shadow-[0_16px_40px_rgba(143,160,193,0.14)] tablet:text-[28px] tablet:rounded-3xl tablet:p-8 tablet:h-23"
    >
      {children}
    </button>
  )
}

export default SubmitButton;