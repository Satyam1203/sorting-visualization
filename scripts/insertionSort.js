const insertionSort=async(n)=>{
    for(let i=0;i<n-1;i++){
        let key=i+1;
        for(let j=i;j>=0;j--){
            showPicked(key,j);
                await wait(1500/n);    

                swapById(j,key);
                document.getElementById('cnt').innerText=cnt;
                key--;
            remPicked(key,j);

            // Get out of the loop when the key element reached it's correct position
            let a = document.getElementById(key+1).style.height.slice(0,-2);
            let b = document.getElementById(j).style.height.slice(0,-2);
            if(Number(a)>Number(b)) break;
        }
        for(let k=0;k<=i;k++) correctPos(k);
    }
    correctPos(n-1);
}