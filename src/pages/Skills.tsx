import { useState } from "react";

import Title from '../components/ui/Title';
import SkillsCards from "../components/Skills/SkillsCards";
import SkillsCategories from "../components/Skills/SkillsCategories";
import SkillCategory from "../components/Skills/SkillCategory";
import { categories } from "../models/skills";

const SkillsPage = () => {
	const [categoryId, setCategoryId] = useState<number>(1);

	const categoryHandler = (id: number): void => {
		setCategoryId(id);
	}

	return <>
		<Title>Skills page</Title>
		<div className="flex flex-1 flex-col gap-9 py-9 w-full bg-bg-theme-2 rounded-xl">
			<SkillCategory categoryId={categoryId} />
			<div className="flex flex-col md:flex-row gap-12 px-12 h-full">
				<SkillsCategories categories={categories} onSetCategory={categoryHandler} />
				<SkillsCards skillsId={categoryId} />
			</div>
		</div>
	</>
};

export default SkillsPage;
