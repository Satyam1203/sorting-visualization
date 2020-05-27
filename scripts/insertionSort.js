const insertionSort=async(n)=>{
    for(let i=0;i<n-1;i++){
        let key=i+1;
        for(let j=i;j>=0;j--){
            showPicked(key,j);
            // let a = document.getElementById(key).style.height.slice(0,-2);
            // let b = document.getElementById(j).style.height.slice(0,-2);
            // if(a>b){
                let promise = new Promise((resolve, reject) => {
                    setTimeout(() => resolve("done!"), 1000/n)
                });

                result = await promise.then(()=>{
                    swapById(j,key);
                    key--;
                })
            // }
            remPicked(key,j);
        }
        for(let k=0;k<=i;k++) correctPos(k);
    }
    correctPos(n-1);
}