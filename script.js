let count = 1
data = fetch("https://jsonplaceholder.typicode.com/albums")
    .then((data) => {
        // console.log(data.json())
        return (data.json())
    })
    .then((fetchedData) => {
        // console.log(fetchedData)
        let td = ""
        fetchedData.map((values) => {
            td += `
        <tr id = tr${count}>
            <td id = ci${count}>${count}</td>
            <td id = cuid${count}>${values.userId}</td>
            <td id = ct${count}>${values.title}</td>
            <td><buttton type="button" class="btn btn-danger" onclick = "deleterow(${count})">Delete</buttton></td>
            <td><buttton id = "edit-btn" type="button" class="btn btn-warning" onclick = "editrow(${count})" >Edit</buttton></td>
          </tr>`
          count++;
          
        })
        
        document.getElementById("td").innerHTML = td
        // console.log(count)
        
    })
    let ref = 0 
    editrow =(x)=>{
        // console.log(x)
        console.log(document.getElementById("inpedit").value)
        document.querySelector("#form").style.display = "block";
        ref = x
        // document.getElementById("divsearch").innerHTML = ""
        // console.log(ref)
        
        // return
    }
    
    submitedit =(ref)=>{
        document.getElementById("ct"+ref).innerHTML = document.getElementById("inpedit").value
        document.querySelector("#form").style.display = "None";

    }
    idel = 0
    deleterow = (x)=>{
        // idel = x
        // if(x>idel){
        document.getElementById("tr"+x).style.display = "None";
        idel++  
    // }
    // else{
    //     document.getElementById("table").deleteRow(idel-x);
    //     idel++
    //     }
        console.log(x)
        console.log(idel)

        // for(let r = x; r <= document.getElementById("table").rows.length; r++){
        //     document.getElementById("ci"+x).innerHTML = Number(document.getElementById("ci"+(x)).innerHTML) - 1
        // }
    }
    var srow = ""
    search = ()=>{
        searchval = document.getElementById("searchbar").value.toString();

        // console.log(document.getElementById("ct"+x).innerHTML)
        for(var i = 1; i < Number(document.getElementById("table").rows.length); i++){
            var j = i.toString()
            // console.log(j)
        srow = srow + document.getElementById("ct"+j).innerHTML
        if(srow.search(searchval)>=0){
            // console.log(srow.search(searchval))
            console.log(j)
            console.log(document.getElementById("ct"+j).innerHTML)
        }
        else{
            document.getElementById("tr"+j).style.display = "None"            
            // document.getElementById("table").deleteRow(i)            
        }
        srow = ""
        }
    }
    
    document.querySelector("#btnsubmit").addEventListener('click', ()=>{
        let ttl = document.querySelector("#inpttl").value
        let uid = document.querySelector("#inpuid").value

        let template = `
        <tr>
            <td>5</td>
            <td>${uid}</td>
            <td>${ttl}</td>
            <td><buttton type="button" class="btn btn-danger">Delete</buttton></td>
            <td><buttton id = "edit-btn" type="button" class="btn btn-warning" >Edit</buttton></td>
          </tr>
        `
        document.querySelector("#table").innerHTML += template
        count++
        console.log(count)
      
        

    })

