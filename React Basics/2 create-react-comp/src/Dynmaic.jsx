function Dynamic(){
    var Name = "Raj";
    let fulName = () =>{
        return 'Raj Kumar'
    }
    return <h3>
        Hello this is dynamic.i am {fulName()}
    </h3>
}

export default Dynamic;