var content = document.getElementById('content');

const taskData = [
    { 
        title : "Chart", 
        description : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eos saepe adipisci, id voluptatem perspiciatis dolorum repellat repellendus, aperiam incidunt excepturi asperiores ea! Repellendus adipisci voluptatum dolor libero iste, quasi ex.",
        status: "not done"
    },
    {
        title : "Table",
        description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi voluptatum odit veritatillo dolores, facilis nulla animi quos quod iure mollitia? Sed vero ipsa corrupti adipisci debitis quia fuga animi!",
        status: "done"
    },
    {
        title : "Shelf", 
        description : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium suscipit praesentium autem nobis incidunt saepe veniam, odit doloribus consectetur eum dicta sed voluptas mollitia vel neque quod, quo deserunt sequi!",
        status: "done"
    },
    {
        title : "Cereals",
        description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Itaque consequuntur eum possimus ea mollitia libero. Expedita, eligendi. Fugit nulla nesciunt, nobis ipsa at similique id error quia veniam recusandae ut.",
        status: "not done"
    }
];

function Task(title, description, status)
{
    this.title = title;
    this.description = description;
    this.status = status;
}

Task.prototype.checkDone = function(){
    this.status = "done";
    return this.status;
};

taskData.forEach(function (task, index){
    content.innerHTML += '<li><input type="checkbox" id="check' + index + '"><div class="task-item">' + 
        '<h2 id="title' + index + '">'+ task.title +'</h2><p>'+ task.description +'</p></div></li>';
    let checkBox = document.getElementById("check" + index);
    let title = document.getElementById("title" + index);
    if(task.status === "done")
    {
        checkBox.checked = true;
        title.style.textDecoration = "line-through";
        title.style.color = "darkgray";
    }
});