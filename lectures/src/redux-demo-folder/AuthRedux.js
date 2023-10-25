import { useDispatch, useSelector } from "react-redux";
import { authActions } from "./store";

function AuthRedux(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth.auth);

  function formSubmitHandler(event) {
    event.preventDefault();
    dispatch(authActions.login());
  }

  return (
    <div className="container">
      {!auth && (
        <form onSubmit={formSubmitHandler}>
          <label htmlFor="email">Email :</label>
          <input type="email" name="email" id="email" />

          <label htmlFor="pass">Password :</label>
          <input type="password" name="password" id="password" />
          <button type="submit">submit</button>
        </form>
      )}
    </div>
  );
}
{
  /* 
    E ovako redux koristimo kada treba da se menja nesto cesto 
    jer context nije tako mobilan moze da zakaze  i da nam ne prikaze stanje 
    ovde koristimo fju dispatch da pozivamo fje dok slice nam omogucava da imamo neke akcije 
    napomena ovo mora uvek da se nanovo kreira tj ne treba da se pamte vrednosti nego da se nanovo kreiraju 
    ako ima neka lista krairati ponovo nikako da se koristi ista itd.
    kreiramo store neki 
    reduceri tj slices treba da bude u odvojenim folderima i tako da se pozivaju i samo ubace i jedan store
    mislim da je to to 
    
    
    
    
    
    */
}
export default AuthRedux;
