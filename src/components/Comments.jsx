import Start from '../images/app/icn-start.webp';

function Comments({ imgUser, textUser, textComment }) {
  return (
    <article className="w-80 h-full px-2 py-3 flex items-center justify-center rounded-lg shadow-lg bg-white xl:w-full 2xl:w-full">
      <div className="w-1/3 h-full flex items-center justify-center">
        <img className="w-16 h-16 object-cover rounded-full" src={imgUser} alt="img-user" />
      </div>
      <div className="w-2/3 h-full text-start flex flex-col items-start justify-center gap-1">
        <h1 className="text-[12px] font-bold text-black xl:text-[16px]">{textUser}</h1>
        <img src={Start} alt="icon-start" />
        <p className="text-[10px] text-gray-600 xl:text-[12px]">{textComment}</p>
      </div>
    </article>
  );
}

export default Comments;