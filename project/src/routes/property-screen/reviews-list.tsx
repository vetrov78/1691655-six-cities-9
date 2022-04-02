import { Review } from '../../types/review';
import ReviewsItem from './reviews-item';

function ReviewsList(props: {reviews: Review[] }): JSX.Element {
  const {reviews} = props;

  return (
    <ul className="reviews__list">
      {
        reviews.map((review) => (
          <ReviewsItem
            key={review.id}
            review={review}
          />
        ))
      }
    </ul>
  );
}

export default ReviewsList;
