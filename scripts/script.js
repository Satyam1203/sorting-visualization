let arr=[];
let cnt=0;
let array=document.getElementsByClassName('array')[0];
console.time('swapElements');


const generateElements=()=>{
    if(document.getElementById('algo').value==0){
        alert("Please select an algorithm");
        return;
    }
    document.getElementById('sortBtn').disabled=false;
    arr=[];
    array.innerHTML="";
    let n=document.getElementById('num').value;
    if(n=="") alert("Enter number of elements to continue...");
    console.log(n);
    for(i=0;i<n;i++) arr.push(Math.ceil(Math.random()*200));
    console.log(arr);
    displayElements(arr);
}


const displayElements = (arr)=>{
    for(i=0;i<arr.length;i++){
        const div=document.createElement('div');
        div.innerText = arr[i];
        div.classList=['elements'];
        div.id=i;
        div.style.marginLeft=`${60*i}px`;
        // div.style.width=`${window.innerWidth/(arr.length+5)}px`;
        // div.style.height=`${arr[i]}px`;
        document.getElementsByClassName('array')[0].appendChild(div);
    }
}


const sortElements = async ()=>{
    cnt=0;
    console.log(arr);
    document.getElementById('sortBtn').disabled=true;
    const method=document.getElementById('algo').value;
    const n=arr.length;
    if(method==0) alert("Please select an algorithm");   
    else if(method==1) bubbleSort(n);
    else if(method==2) insertionSort(n);
    else if(method==3) selectionSort(n);
    // displayElements(arr);
}


// Sort by class (ANIMATION DOESN'T WORK)
const swap= async (i,j)=>{
    const a=document.getElementsByClassName('elements')[i];
    const b=document.getElementsByClassName('elements')[j];
    // if(arr[i]>arr[j]){
    if(Number(a.innerText) > Number(b.innerText)){
        // const tmp=arr[i];
        
        cnt++;
        const tmp =a.innerText;
        // arr[i]=arr[j];
        a.innerText = b.innerText;
        // arr[j]=tmp;
        b.innerText = tmp;
    }
}

// Sort by Id
const swapById= async(i,j)=>{
    const a=document.getElementById(i);
    const b=document.getElementById(j);
    
    if(Number(a.innerText) > Number(b.innerText)){
        cnt++;
        if(j!=i+1){
            a.style.transform='translateY(-75px)';
            b.style.transform='translateY(75px)';
        }
            
            const tmp=window.getComputedStyle(b).marginLeft;
        
            let promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve("done!"), 400)
            });

            let result = await promise.then(()=>{
                b.style.marginLeft=window.getComputedStyle(a).marginLeft;
                b.id=i;
                a.style.marginLeft=tmp;
                a.id=j;
            });

        if(j!=i+1){
            promise = new Promise((resolve, reject) => {
                setTimeout(() => resolve("done!"), 500)
            });

            result = await promise.then(()=>{
                a.style.transform='translateY(0px)';
                b.style.transform='translateY(0px)';
            });
        }  
            
        
        let promise2 = new Promise((resolve, reject) => {
            setTimeout(() => resolve("done!"), 1500)
        });

        let result2 = await promise2;
    }
    
}


const showPicked=(i,j)=>{
    document.getElementById(i).style.border='3px solid red';
    document.getElementById(j).style.border='3px solid red';
    document.getElementById(i).style.background='yellow';
    document.getElementById(j).style.background='yellow';
    document.getElementById(i).style.borderRadius='30%';
    document.getElementById(j).style.borderRadius='30%';
}


const remPicked=(i,j)=>{
    document.getElementById(i).style.border='2px solid orange';
    document.getElementById(j).style.border='2px solid orange';
    document.getElementById(i).style.background='transparent';
    document.getElementById(j).style.background='transparent';
    document.getElementById(i).style.borderRadius='0px';
    document.getElementById(j).style.borderRadius='0px';
}


const showVisual=(i,j)=>{

}