function Button({text}) {
  return (
    <>
        <button className="w-40 h-auto px-2 py-3 border-2 hover:shadow-lg hover:shadow-black border-black text-base cursor-pointer text-gray-500 bg-white rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none">{text}</button>
    </>
  )
}

export default Button