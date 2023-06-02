let count = 0
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
            <td><buttton type="button" class="btn btn-danger" onclick = "deleterow()">Delete</buttton></td>
            <td><buttton id = "edit-btn" type="button" class="btn btn-warning" onclick = "editrow(${count})" >Edit</buttton></td>
          </tr>`
          count++;
          
        })
        
        document.getElementById("td").innerHTML = td
        console.log(count)
        
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
    deleterow = (ref)=>{
        document.getElementById("tr"+ref).innerHTML = ""
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

