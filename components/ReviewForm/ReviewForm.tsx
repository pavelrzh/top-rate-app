import { ReviewFormProps } from './ReviewForm.props';
import styles from './ReviewForm.module.css';
import cn from 'classnames';
import { Rating } from '../Rating/Rating';
import { Input } from '../Input/Input';
import { Textarea } from '../Textarea/Textarea';
import { Button } from '../Button/Button';
import CloseIcon from './close.svg';
import { IReviewForm, IReviewSentResponse } from './ReviewForm.interface';
import { useForm, Controller } from 'react-hook-form';
import { API } from '../../helpers/api';
import axios from 'axios';
import { useState } from 'react';
import { motion } from 'framer-motion';


export const ReviewForm = ({productId, isOpened, className, ...props}: ReviewFormProps): JSX.Element => {
	const {register, control, handleSubmit, formState: {errors}, reset, clearErrors } = useForm<IReviewForm>();
	const [isSuccess, setIsSuccess] = useState<boolean>(false);
	const [error, setError] = useState<string>();

	const variants = {
		visible: {opacity: 1, height: 'auto'},
		hidden: {opacity: 0, height: 0},
		exit: {opacity: 0, height: 0}
	};

	const onSubmit = async (formData: IReviewForm) => {
		try {
			const {data} = await axios.post<IReviewSentResponse>(API.review.createDemo, {...formData, productId});
			if (data.message) {
				setIsSuccess(true);
				reset();
			} else {
				setError('Что-то пошло не так :(');
			}
		}
		catch (e) {
			if (e instanceof Error) {
				setError(e.message);
			}
		}
	};

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className={cn(styles.reviewForm, className)} {...props}>
				<Input 
					{...register('name', {required: {value: true, message: 'Необходимо ввести имя'}})}
					placeholder='Имя'
					error={errors.name}
					tabIndex={isOpened ? 0 : -1}
					aria-invalid={errors.name ? true : false}
				/>
				<Input 
					{...register('title',  {required: {value: true, message: 'Необходимо ввести заголовок'}})}
					placeholder='Заголовок отзыва'
					className={styles.title}
					error={errors.title}
					tabIndex={isOpened ? 0 : -1}
					aria-invalid={errors.title ? true : false}
				/>	
				<div className={styles.rating}>
					<span>Оценка:</span>
					<Controller
						control={control}
						name='rating'
						rules={{required: {value: true, message: 'Необходимо указать рейтинг'}}}
						render={({field}) => (
							<Rating
								isEditable 
								rating={field.value} 
								setRating={field.onChange}
								ref={field.ref}
								error={errors.rating}
								tabIndex={isOpened ? 0 : -1}
							/>
						)}
					/>
				</div>
				<Textarea {...register('description', {required: {value: true, message: 'Необходимо заполнить описание'}})}
					placeholder='Текст отзыва' 
					className={styles.description}
					error={errors.description}
					tabIndex={isOpened ? 0 : -1}
					aria-label='текст отзыва'
					aria-invalid={errors.description ? true : false}
					/>
				<div className={styles.submit}>
					<Button appearance='primary' tabIndex={isOpened ? 0 : -1} onClick={() => clearErrors()}>Отправить</Button>
					<span className={styles.info}>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
				</div>
			</div>
			<motion.div animate={isSuccess ? 'visible' : 'hidden'}
						variants={variants} 
						initial='hidden'
				>
				{isSuccess && <div	className={cn(styles.success, styles.panel)} role="alert">
					<div className={styles.successTitle}>Ваш отзыв отправлен</div>
					<div className={styles.successDescr}>Спасибо, Ваш отзыв будет опубликован после проверки</div>
					<button 
						className={styles.close} 
						onClick={()=>setIsSuccess(!isSuccess)}
						aria-label="Закрыть оповещение"
					>
						<CloseIcon />
					</button>
				</div>}
			</motion.div>
			{error && <div className={cn(styles.error, styles.panel)} role="alert">
			Что-то пошло не так, попробуйте обновить страницу
				<button 
					className={styles.close} 
					onClick={()=>setError(undefined)}
					aria-label="Закрыть оповещение"
				>
					<CloseIcon/>
				</button>
			</div>}
		</form>
       
    );
    
};