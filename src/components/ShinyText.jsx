function ShinyText({ text, disabled = false, speed = 5, className = '' }) {
  const animationDuration = `${speed}s`;

  return (
    <div
      className={`
        text-center w-28 h-auto px-2 py-2 xl:w-32 xl:px-1.5 xl:py-2
        border-2 hover:shadow-lg hover:shadow-black border-black 
        text-sm cursor-pointer xl:text-base
        rounded-tl-none rounded-tr-2xl rounded-bl-2xl rounded-br-none 
        bg-white 
        ${className}
      `}
    >
      <span
        className={`
          inline-block 
          ${disabled ? '' : 'animate-shine'} 
          text-gray-600 bg-clip-text
        `}
        style={{
          backgroundImage:
            'linear-gradient(120deg, rgba(0, 0, 0, 0) 40%, rgba(0, 0, 0, 0.8) 50%, rgba(0, 0, 0, 0) 60%)',
          backgroundSize: '200% 100%',
          WebkitBackgroundClip: 'text',
          animationDuration: animationDuration,
        }}
      >
        {text}
      </span>
    </div>
  );
}

export default ShinyText;
