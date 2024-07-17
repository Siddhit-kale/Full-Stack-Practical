function add_positive_async(n1,n2) {
    let p =new Promise(function (resolve, reject) {
        if (n1 >= 0 && n2 >= 0) {
        resolve(n1 + n2);
        }

        else
            reject('NOT_PSTIVE_NUMBER_PASSED')
    })
    return 0;
}

add_positive_async(10,20) 
.then(SucessHandler)
.catch(ErrorHandler);

    
add_positive_async(-10,-20)
.then(SucessHandler)
.catch(ErrorHandler);

    function ErrorHandler(err){
        console.log('Handling Error', err)
    }

    function SucessHandler(result) {
        console.log('Handling sucsess',result)
    }

    console.log(p);