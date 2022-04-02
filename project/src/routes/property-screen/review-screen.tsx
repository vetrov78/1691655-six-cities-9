import { useState } from 'react';

function ReviewScreen(): JSX.Element {
  const [commentText, setCommentText] = useState('');
  const [reviewRating, setReviewRating] = useState(0);

  const ratingForm = function() {
    const content = [];

    for (let i = 1; i < 6; i++) {
      content.push(
        <>
          <input className="form__rating-input visually-hidden" name="rating" value={i} id={`${i}-stars`} type="radio" />
          <label
            htmlFor={`${i}-stars`}
            className="reviews__rating-label form__rating-label"
            title="perfect"
            onMouseEnter={() => setReviewRating(6-i)}
          >
            <svg className="form__star-image" width="37" height="33">
              <use xlinkHref="#icon-star"></use>
            </svg>
          </label>
        </>,
      );
    }

    return <div className="reviews__rating-form form__rating">{content}</div>;
  };

  return (
    <form className="reviews__form form" action="#" method="post">
      {
        ratingForm()
      }
      <textarea
        className="reviews__textarea form__textarea" id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      >
      </textarea>
      <div className="reviews__button-wrapper">
        <h1>{reviewRating}</h1>
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled>Submit</button>
      </div>
    </form>
  );
}

export default ReviewScreen;
