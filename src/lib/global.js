// build control
export const IS_DEVELOPMENT = process.env.NODE_ENV === "development";

export const APP_NAME = "Code Challenge";

export const COUNT_PER_PAGE = 12;

export const SERVER_URI = IS_DEVELOPMENT
  ? "http://localhost:4000/"
  : "https://ivan-code-challenge-api.herokuapp.com/";

export const RANDOM_IMAGE_LG =
  "https://source.unsplash.com/1600x900/?film,movie";

export const RANDOM_IMAGE_MD =
  "https://source.unsplash.com/800x450/?film,movie";

export const RANDOM_IMAGE_SM =
  "https://source.unsplash.com/400x225/?film,movie";
