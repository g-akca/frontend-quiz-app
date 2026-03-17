function SubmitButton({ handleClick, disabled, children }) {
  return (
    <button 
      type="button"
      onClick={handleClick} 
      disabled={disabled}
      className={`p-4 h-14 text-white text-lg leading-[100%] font-medium rounded-xl transition-all 
        shadow-[0_16px_40px_rgba(143,160,193,0.14)] dark:shadow-[0_16px_40px_rgba(49,62,81,0.14)] 
        tablet:text-[28px] tablet:rounded-3xl tablet:p-8 tablet:h-23
        ${disabled ? "bg-purple-400 cursor-not-allowed" : "bg-purple-600 cursor-pointer hover:bg-purple-500"}`}
    >
      {children}
    </button>
  )
}

export default SubmitButton;