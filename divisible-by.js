for (let i = 1; i<=50;i++){
    // console.log(i);
    if(i%3==0 && i%5==0){
        console.log('Foobar');
    }else if(i%5==0){
        console.log('Bar')
    }else if (i%3==0){
        console.log('Foo');
    }else{
        console.log(i);
    }
}