import { Link } from "react-router-dom";

export const CategoryCard = ({
	category,
	alt,
	src,
	gradientColor,
}) => {
	return (
		<Link
			to={`/category/${category}`}
			className={`flex flex-col justify-between basis-2/6 bg-slate-200 rounded-2xl overflow-hidden bg-gradient-to-r ${gradientColor} transition-all hover:scale-105`}
		>
			<div className='p-5 flex justify-center items-center'>
				<img src={src} alt={alt} className='w-36' />
			</div>

			<h1 className='text-3xl font-semibold text-stone-100 bg-green-900 bg-opacity-60 p-3 px-1 text-center'>
				{category}
			</h1>
		</Link>
	);
};
