import useInput from "../../hooks/use-input";

import classes from "./Checkout.module.css";

const isNotEmpty = (value) => value.trim() !== "";

const Checkout = (props) => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameHasError,
    valueChangeHandler: nameChangeHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: streetValue,
    isValid: streetIsValid,
    hasError: streetHasError,
    valueChangeHandler: streetChangeHandler,
    inputBlurHandler: streetBlurHandler,
    reset: resetStreet,
  } = useInput(isNotEmpty);

  const {
    value: postValue,
    isValid: postIsValid,
    hasError: postHasError,
    valueChangeHandler: postChangeHandler,
    inputBlurHandler: postBlurHandler,
    reset: resetPost,
  } = useInput(isNotEmpty);

  const {
    value: detailValue,
    isValid: detailIsValid,
    hasError: detailHasError,
    valueChangeHandler: detailChangeHandler,
    inputBlurHandler: detailBlurHandler,
    reset: resetDetail,
  } = useInput(isNotEmpty);

  let formIsValid = false;
  if (nameIsValid && detailIsValid && streetIsValid && postIsValid) {
    formIsValid = true;
  }

  const confirmHandler = (e) => {
    e.preventDefault();

    if (!formIsValid) {
      return;
    }

    props.onConfirm({
      name: nameValue,
      street: streetValue,
      post: postValue,
      detail: detailValue,
    });

    resetName();
    resetDetail();
    resetPost();
    resetStreet();
  };

  const nameClasses = nameHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;

  const streetClasses = streetHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;

  const postClasses = postHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;

  const detailClasses = detailHasError
    ? `${classes.control} ${classes.invalid}`
    : `${classes.control}`;

  return (
    <form className={classes.form} onSubmit={confirmHandler}>
      <div className={nameClasses}>
        <label htmlFor="name">성명</label>
        <input
          type="text"
          id="name"
          value={nameValue}
          onChange={nameChangeHandler}
          onBlur={nameBlurHandler}
        />
        {nameHasError && (
          <p className={classes["error-text"]}>내용이 비어있습니다.</p>
        )}
      </div>
      <div className={streetClasses}>
        <label htmlFor="street">주소</label>
        <input
          type="text"
          id="street"
          value={streetValue}
          onChange={streetChangeHandler}
          onBlur={streetBlurHandler}
        />
      </div>
      <div className={postClasses}>
        <label htmlFor="postal">우편번호</label>
        <input
          type="text"
          id="postal"
          size="5"
          value={postValue}
          onChange={postChangeHandler}
          onBlur={postBlurHandler}
        />
      </div>
      <div className={detailClasses}>
        <label htmlFor="city">상세주소</label>
        <input
          type="text"
          id="city"
          value={detailValue}
          onChange={detailChangeHandler}
          onBlur={detailBlurHandler}
        />
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={props.onCancle}>
          취소
        </button>
        <button className={classes.submit}>확인</button>
      </div>
    </form>
  );
};

export default Checkout;
