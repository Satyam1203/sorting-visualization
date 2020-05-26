const bubbleSort=async(n)=>{
    for(i=0;i<n-1;i++){
        for(j=0;j<n-1-i;j++){
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve("done!"), 300)
            });
    
            let result = await promise;
            showPicked(j,j+1);
            // console.time('swapById');
                promise = new Promise((resolve, reject) => {
                    setTimeout(() => resolve("done!"), 600)
                });

                result = await promise.then(()=>swapById(j,j+1));
            // console.timeEnd('swapById');

                // result=await swapById(i,j);
                document.getElementById('cnt').innerText=cnt;
            remPicked(j,j+1);
            // console.log("DOne ");
        }
    document.getElementById(n-1-i).style.border='3px solid green';
    }
    document.getElementById(n-1-i).style.border='3px solid green';
}
