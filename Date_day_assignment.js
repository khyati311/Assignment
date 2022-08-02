D = {
    '2020-01-01':6,
    '2020-01-04':12,
    '2020-01-05':14,
    '2020-01-06':2,
    '2020-01-07':4
    
}
function Solution(D) {
    const Days = {
        1:'Mon',
        2:'Tue',
        3:'Wed',
        4:'Thu',
        5:'Fri',
        6:'Sat',
        0:'Sun'
    }
    
    result = {
     
    }
    keys = Object.keys(D)
    for(let i of Object.keys(Days))
     result[Days[i]]=0
    for(let i of keys)
    {
        var dt = new Date(i)
        // console.log(D[i])
        result[Days[dt.getDay()]] +=  D[i]
    }
    for(let i=0;i<7;i++)
     if(result[Days[i]]==0)
     {
        result[Days[i]]= (result[Days[i-1]]+result[Days[i+1]])/2
     }
    return result
}
console.log(Solution(D));
