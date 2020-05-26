const bubbleSort=async(n)=>{
    for(i=0;i<n-1;i++){
        for(j=0;j<n-1-i;j++){
            showPicked(j,j+1);
            // console.time('swapById');
                promise = new Promise((resolve, reject) => {
                    setTimeout(() => resolve("done!"), 1000/n)
                });

                result = await promise.then(()=>swapById(j,j+1));
            // console.timeEnd('swapById');
                document.getElementById('cnt').innerText=cnt;
            remPicked(j,j+1);
        }
    correctPos(n-1-i);
    }
    correctPos(n-1-i);
}