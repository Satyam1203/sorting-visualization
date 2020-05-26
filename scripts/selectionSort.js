
const selectionSort=async(n)=>{
    for(i=0;i<n-1;i++){
        let min_idx=i;
        for(j=i+1;j<n;j++){
            showPicked(i,j);
                const a=document.getElementById(min_idx);
                const b=document.getElementById(j);
                let a_ht = a.style.height.slice(0,-2);
                let b_ht = b.style.height.slice(0,-2);
                if(Number(b_ht) < Number(a_ht)){
                    min_idx=j;
                    // console.log(min_idx+" min");
                }
                let promise = new Promise((resolve, reject) => {
                    setTimeout(() => resolve("done!"), 1000/n)
                });
        
                let result = await promise;
                
                document.getElementById('cnt').innerText=cnt;
            remPicked(i,j);
        }
        // document.getElementById(min_idx).style.background = "yellow";
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 500/n)
        });

        let result = await promise.then(()=>swapById(i,min_idx));
        document.getElementById(i).style.background = "orange";
    correctPos(i);
    }
    correctPos(i);
    
    // document.getElementsByClassName('arrow')[0].style.display='none';
}

