import imgError401 from "../../../images/401-Error-Unauthorized.svg";
import { PageNotfoundBody, PageNotfoundConatiner } from "../Error404/Error404Styled";

export default function Error401() {

  return (
    <PageNotfoundConatiner id="error-page">
      <PageNotfoundBody>
        <h1>Oops!</h1>
        <p>Desculpa, você precisa está logado para ver essa página.</p>
        <img src={imgError401} alt="Erro 401" />
      </PageNotfoundBody>
    </PageNotfoundConatiner>
  );
};
