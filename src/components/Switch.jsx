function Switch({ enabled, setEnabled }) {
  return (
    <button
      type="button"
      className="w-8 h-5 p-1 bg-purple-600 rounded-full cursor-pointer flex items-center tablet:w-12 tablet:h-7"
      onClick={() => setEnabled(prev => !prev)}
    >
      <div
        className={`bg-white h-full aspect-square rounded-full transform transition-transform duration-200 ${
          enabled ? "translate-x-3 tablet:translate-x-5" : "translate-x-0"
        }`}
      />
    </button>
  );
}

export default Switch;