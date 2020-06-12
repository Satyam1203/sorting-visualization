
const selectionSort=async(n)=>{
    for(i=0;i<n-1;i++){
        let min_idx=i;
        for(j=i+1;j<n;j++){
            showPicked(i,j);
                l = min_idx;
                document.getElementById(min_idx).style.background = 'orange';
                const a=document.getElementById(min_idx);
                const b=document.getElementById(j);
                let a_ht = a.style.height.slice(0,-2);
                let b_ht = b.style.height.slice(0,-2);
                if(Number(b_ht) < Number(a_ht)){
                    min_idx=j;
                    document.getElementById(l).style.background = '#99AAAB';
                    document.getElementById(min_idx).style.background = 'orange';
                    // console.log(min_idx+" min");
                }
                await wait(1500/n);
                
                document.getElementById('cnt').innerText=cnt;
            remPicked(i,j);
        }
        document.getElementById(min_idx).style.background = "#99AAAB";
        await wait(500/n);
        swapById(i,min_idx);
    correctPos(i);
    }
    correctPos(i);
}

