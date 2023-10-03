import { Link } from 'react-router-dom';
import { imgs, categories } from '../data';
import { CategoryCard } from './CategoryCard';

const [
	imgAdhesion,
	imgAlquiler,
	imgInformatico,
	imgServicios,
	
] = imgs;

export const CategoryList = () => {
	return (
		<div className='flex flex-row flex-wrap justify-center gap-9 mt-10'>
			{/* Category Link Ciencia */}
			<CategoryCard
				category={categories.servicios}
				src={imgServicios}
				alt={`Categoría ${categories.servicios}`}
				gradientColor=' from-purple-500 to-pink-500'
			/>
			
			{/* Category Link Historia */}
			<CategoryCard
				category={categories.adhesion}
				src={imgAdhesion}
				alt={`Categoría ${categories.adhesion}`}
				gradientColor='from-sky-300 to-indigo-900'
			/>
			{/* Category Link Literatura */}
			<CategoryCard
				category={categories.alquiler}
				src={imgAlquiler}
				alt={`Categoría ${categories.alquiler}`}
				gradientColor='from-amber-400 to-emerald-600'
			/>
			{/* Category Link Tecnologia */}
			<CategoryCard
				category={categories.informatico}
				src={imgInformatico}
				alt={`Categoría ${categories.informatico}`}
				gradientColor='from-violet-900 to-rose-500 '
			/>
		</div>
	);
};
