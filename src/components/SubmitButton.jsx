function SubmitButton({ handleClick, disabled, children }) {
  return (
    <button 
      onClick={handleClick} 
      disabled={disabled}
      className={`p-4 h-14 text-white text-lg leading-[100%] font-medium rounded-xl transition-all 
        shadow-[0_16px_40px_rgba(143,160,193,0.14)] tablet:text-[28px] tablet:rounded-3xl tablet:p-8 tablet:h-23
        ${disabled ? "bg-purple-300 cursor-not-allowed" : "bg-purple-600 cursor-pointer hover:bg-purple-400"}`}
    >
      {children}
    </button>
  )
}

export default SubmitButton;