const mergeSort = async (low,high)=>{
    if(low>=high) return;
    let mid = Math.floor((low+high)/2);
    mergeSort(low,mid);
    mergeSort(mid+1,high);
    tmpArr1=[];
    tmpArr2=[];
    l1=mid-low+1; // See this
    l2=high-mid; // See this
    i1=0;i2=0;k=low;
    for (i = 0; i < l1; i++) {
        tmpArr1[i] = document.getElementById(low+i).style.height.slice(0,-2);
    }
    for (j = 0; j < l2; j++) {
        tmpArr2[j] = document.getElementById(mid+1+j).style.height.slice(0,-2);
    }
    while(i1<l1 && i2<l2){
        if(Number(tmpArr1[i1]) > Number(tmpArr2[i2])){
            document.getElementById(k).style.height=`${tmpArr2[i2]}px`;
            i2++;
        }else {
            document.getElementById(k).style.height=`${tmpArr1[i1]}px`;
            i1++;
        }
        k++;
    }
    while(i1<l1){
        document.getElementById(k).style.height=`${tmpArr1[i1]}px`;
        i1++;
        k++;
    }
    while(i2<l2){
        document.getElementById(k).style.height=`${tmpArr2[i2]}px`;
        i2++;
        k++;
    }
}

const wait = ms => new Promise((r, j)=>setTimeout(r, ms))