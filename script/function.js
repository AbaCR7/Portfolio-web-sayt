const AboutMeStats=[
    {
        name: "Project none",
        amount:20 
    },
    {
        name: "Cup of coffee",
        amount:20 
    },
    {
        name: "Experience in years",
        amount: 5
    },
    {
        name: "Working Hourse",
        amount: 587
    }
]

const personalInfo=[
    {
       key:"name",
       value: "Abror Hoshimov" 
    },
    {
        key:"Date of birth",
        value: "1998.10.08"
    },
    {
        key: "Adress",
        value: "Tashkent"
    },
    {
        key:"Email",
        value:"abrorronaldo@gmail.com"
    },
    {
        key:"phone",
        value:"+998970003066"
    }

]

    function createStatics (){
        let target= document.getElementById("about-me-statistics");
        
        for( let i of AboutMeStats){
            let boxDiv =document.createElement("div")
            let amountDiv=document.createElement("div")
            let nameDiv=document.createElement("div")

            boxDiv.setAttribute("class","box")
            amountDiv.setAttribute("class","amount")
            nameDiv.setAttribute("class","name")

            amountDiv.innerText=i.amount
            nameDiv.innerText=i.name

            boxDiv.appendChild(amountDiv)
            boxDiv.appendChild(nameDiv)
            target.appendChild(boxDiv)
        }
    }
    function creatPersonInfo(){
        let target=document.getElementById("personal-information");
        for(let i of personalInfo){
            let singleInfo = document.createElement("div")
            let span1 = document.createElement("span")
            let span2 = document.createElement("span")
            
            singleInfo.setAttribute("class", "single-info")

            span1.innerText = i.key +":"
            span2.innerText = i.value;

            singleInfo.appendChild(span1)
            singleInfo.appendChild(span2)
            target.appendChild(singleInfo)
        }
    }
    createStatics()
    creatPersonInfo()