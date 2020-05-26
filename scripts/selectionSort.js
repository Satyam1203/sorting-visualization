const selectionSort=async(n)=>{
    for(i=0;i<n-1;i++){
        let min_idx=i;
        document.getElementsByClassName('arrow')[0].style.marginLeft=window.getComputedStyle(document.getElementById(i)).marginLeft;
        document.getElementsByClassName('arrow')[0].style.display='block';
        for(j=i+1;j<n;j++){
            showPicked(i,j);
                const a=document.getElementById(min_idx);
                const b=document.getElementById(j);
                if(Number(b.innerText) < Number(a.innerText)){
                    min_idx=j;
                    // console.log(min_idx+" min");
                }
                let promise = new Promise((resolve, reject) => {
                    setTimeout(() => resolve("done!"), 600)
                });
        
                let result = await promise;
                
                document.getElementById('cnt').innerText=cnt;
            remPicked(i,j);
            // if(min_idx!==j){
            //     document.getElementById(min_idx).style.background = "yellow";
            //     document.getElementById(j).style.background = "transparent";
            // }
        }
        document.getElementById(min_idx).style.background = "yellow";
        let promise = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 600)
        });

        let result = await promise.then(()=>swapById(i,min_idx));
        document.getElementById(i).style.background = "transparent";
    document.getElementById(i).style.border='3px solid green';
    }
    document.getElementById(i).style.border='3px solid green';
    
    document.getElementsByClassName('arrow')[0].style.display='none';
}
