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
        // console.log(ref)
        
        // return
    }
    
    submitedit =(ref)=>{
        document.getElementById("ct"+ref).innerHTML = document.getElementById("inpedit").value
        document.querySelector("#form").style.display = "None";

    }
    deleterow = (x)=>{
        let tllen = document.getElementsByTagName("tr").length
        let b = 1
        console.log(x)
        document.getElementById("tr"+x).style.display = "none"  
        let c1 = Number(document.getElementById("ci"+x).innerHTML)
        for(let i = c1; i<=tllen - 1; i++){
            document.getElementById("ci"+i).innerHTML = i - 1   
            b = b + 1; 
            tllen = tllen - b;
        }
        // console.log(ref)
    }

    search = ()=>{
        searchval = (document.getElementById("searchbar").value)
        for(let i = 0; i<=document.getElementsByTagName("tr").length; i++)
        if(searchval == document.getElementsByTagName("tr"+ref)[2]){
            console.log("tr"+ref)
        }
        else{
            console.log("not found")

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

