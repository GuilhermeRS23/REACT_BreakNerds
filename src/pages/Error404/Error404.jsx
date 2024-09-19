import imgError404 from "../../images/404-page-not-found.svg";
import { useRouteError } from "react-router-dom";
import { PageNotfoundBody, PageNotfoundConatiner } from "./Error404Styled";

export default function Error404() {
  const error = useRouteError();
  console.error(error);

  return (
    <PageNotfoundConatiner id="error-page">
      <PageNotfoundBody>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <img src={imgError404} alt="Erro 404" />
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
      </PageNotfoundBody>
    </PageNotfoundConatiner>
  );
};
