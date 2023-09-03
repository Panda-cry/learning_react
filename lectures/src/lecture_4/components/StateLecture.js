

function StateLecutre(props){
    function clcikHandler(){
        props.changeTitle("Updated");
        console.log("Hello")
    }

    return <button onClick={clcikHandler}>Change me!!!</button>

}



export default StateLecutre;



//event handlere uvek dodajemo kao fju ali bez zagrada
//react ima prekopirane eventove za dugme dropdown itd.
//pocinju sa on i tu treba nesto da se radi
//moze kao u python da se funkcija doda varijablie
// i da se poziva varijabla tj u varijabli se cuva adresa
// i tako se preko adrese poziva :D
//trebalo bi da se zavrsava sa Handler click blur itd eventovi :D
//Posto je ceo React u fjama kada zelimo da dinamicki menjamo
//React jednom prodje kroz sve i tjt nema nazad
//ali useState pravi fju koja moze da se poziva i da se polje menja