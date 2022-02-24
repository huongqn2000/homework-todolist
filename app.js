var content = document.getElementById('content');

function Tasks(title, description, status)
{
    this.title = title;
    this.description = description;
    this.status = status;

    Tasks.prototype.checkDone = function(){
        if(this.status === "done")
        {
            return "checked";
        }
    };
}

const tasks = [
    new Tasks("Chart", "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos saepe adipisci, id voluptatem perspiciatis dolorum repellat repellendus, aperiam incidunt excepturi asperiores ea! Repellendus adipisci voluptatum dolor libero iste, quasi ex.", ""),
    new Tasks("Table", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatum odit veritatis illo dolores, facilis nulla animi quos quod iure mollitia? Sed vero ipsa corrupti adipisci debitis quia fuga animi!", "done"),
    new Tasks("Shelf", "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium suscipit praesentium autem nobis incidunt saepe veniam, odit doloribus consectetur eum dicta sed voluptas mollitia vel neque quod, quo deserunt sequi!", "done"),
    new Tasks("Cereals", "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur eum possimus ea mollitia libero. Expedita, eligendi. Fugit nulla nesciunt, nobis ipsa at similique id error quia veniam recusandae ut.", "")
    // { 
    //     title : "Chart", 
    //     description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos saepe adipisci, id voluptatem perspiciatis dolorum repellat repellendus, aperiam incidunt excepturi asperiores ea! Repellendus adipisci voluptatum dolor libero iste, quasi ex."
    // },
    // {
    //     title : "Table",
    //     description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatum odit veritatillo dolores, facilis nulla animi quos quod iure mollitia? Sed vero ipsa corrupti adipisci debitis quia fuga animi!"
    // },
    // {
    //     title : "Shelf", 
    //     description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium suscipit praesentium autem nobis incidunt saepe veniam, odit doloribus consectetur eum dicta sed voluptas mollitia vel neque quod, quo deserunt sequi!"
    // },
    // {
    //     title : "Cereals",
    //     description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur eum possimus ea mollitia libero. Expedita, eligendi. Fugit nulla nesciunt, nobis ipsa at similique id error quia veniam recusandae ut."
    // }
];

tasks.forEach(function (task){
    content.innerHTML += "<h2>" + task.title + "</h2><div class='task-item'><input type='checkbox'" + task.checkDone() + "><p>" + task.description + "</p></div>";
});