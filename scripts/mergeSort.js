const mergeSort = async (low,high)=>{
    if(low>=high) return;
    let mid = Math.floor((low+high)/2);
    await mergeSort(low,mid);
    await mergeSort(mid+1,high);
    tmpArr1=[];
    tmpArr2=[];
    l1=mid-low+1; // Check this
    l2=high-mid; // Check this
    i1=0;i2=0;k=low;
    for (i = 0; i < l1; i++) {
        tmpArr1[i] = document.getElementById(low+i).style.height.slice(0,-2);
    }
    for (j = 0; j < l2; j++) {
        tmpArr2[j] = document.getElementById(mid+1+j).style.height.slice(0,-2);
    }
    while(i1<l1 && i2<l2){
        await wait(1000/n);
        if(Number(tmpArr1[i1]) > Number(tmpArr2[i2])){
            document.getElementById(k).style.height=`${tmpArr2[i2]}px`;
            await animateMerge(k);

            i2++;
        }else {
            document.getElementById(k).style.height=`${tmpArr1[i1]}px`;
            await animateMerge(k);
            i1++;
        }
        k++;
    }
    while(i1<l1){
        await wait(1000/n);
        document.getElementById(k).style.height=`${tmpArr1[i1]}px`;
        await animateMerge(k);
        i1++;
        k++;
    }
    while(i2<l2){
        await wait(1000/n);
        document.getElementById(k).style.height=`${tmpArr2[i2]}px`;
        await animateMerge(k);
        i2++;
        k++;
    }
}

const animateMerge = async (k)=>{
    document.getElementById(k).style.background = '#99AAAB';
    await wait(1500/n);
    document.getElementById(k).style.background = '#00CCCD';
}

// const wait = ms => new Promise((r, j)=>setTimeout(r, ms))