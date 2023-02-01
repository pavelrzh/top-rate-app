import { Advantages, HhData, Htag, Tag } from "../../components";
import { TopPageComponentProps } from "./TopPageComponent.props";
import styles from './TopPageComponent.module.css';
import { TopLevelCategory } from "../../interfaces/page.interface";

export const TopPageComponent = ({page, products, firstCategory}: TopPageComponentProps): JSX.Element => {
    return (
		<div className={styles.wrapper}>
			<div className={styles.title}>
				<Htag tag='h1'>{page.title}</Htag>
				{products && <Tag color='grey' size='medium'>{products.length}</Tag>}
				<span>Sortirovka</span>
			</div>
			<div>
				{products && products.map(p => (<div key={p._id}>{p.title}</div>))}
			</div>
			{firstCategory == TopLevelCategory.Courses &&                   // Если firstCategory - Курсы, отображать блок Вакансии
				<div className={styles.hhTitle}>
					<Htag tag='h2'>Вакансии - {page.category}</Htag>
					<Tag color='red' size='medium'>hh.ru</Tag>
				</div>
			}	
			{firstCategory == TopLevelCategory.Courses && page.hh && <HhData {...page.hh}/>}
			{page.advantages && page.advantages.length > 0 && 
				<div className={styles.advantageTitle}>
					<Htag tag='h2'>Преимущества</Htag>
					<Advantages advantages={page.advantages}/>
				</div>
			}
			{page.seoText && <div className={styles.seo} dangerouslySetInnerHTML={{ __html: page.seoText }} />}
			<Htag tag='h2'>Получаемые навыки</Htag>
			{page.tags.map(t => <Tag className={styles.advantageTag} key={t} color='primary'>{t}</Tag>)}
		</div>

    );
    
};