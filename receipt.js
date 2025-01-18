document.write(`
    <div style="width:50%; margin:auto;">
    
    
    <h1><center><hr></center><h1>
   <h1><center> 🛒Grocery Store</center><h1>
    <h1><center><hr></center><h1>
    <h1><center>--------- 📝Receipt------</center><h1>
    <table id="gt" border="1" style="width:100%; border-collapse : collapse;">
    <tr>
    <th >🛍️Items</th>
    <th> 📦Quqntity</th>
    </tr>
    <tr>
    <td>🥛 milk</td>
    <td style="text-align:right">2</td>
    </tr>
    <tr>
    <td>🥪Bread</td>
    <td style="text-align:right">1</td>
    </tr>
    <tr>

    <td>🥚Eggs</td>
    <td style="text-align:right">12</td>
    </tr>
    <tr>
    <td>🍙 Rice</td>
    <td style="text-align:right">5</td>
    </tr>
    <tr>
    <td>🧈Butter</td>
    <td style="text-align:right">1</td>
    </tr>
    <tr>
    <td>🍎Apple</td>
    <td style="text-align:right">6</td>
    </tr>
    <tr>
    <td style="text-align:center" >Total</td>
    <td style="text-align:right">27</td>
    </tr>

    </tr>
    </table>
    </div>
    
    
    
    
    `)
    let table=document.getElementById("gt")
    let total=0
    for(let i=1;i<= table.ariaRowSpan.length-1;i++){
        

    }

