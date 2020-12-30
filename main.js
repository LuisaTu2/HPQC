$(document).ready(function(){
    console.log("People page!");

    $('.peopleBio').hide();
    $('.peopleList').show();
   
    let faculty = [
        {id: 101, firstName: 'Nike',  lastName: 'Dattani',   imgName: 'NikeDattani.png',     title: 'PhD Oxford'},
        {id: 102, firstName: 'Erin',  lastName: 'Zuo',       imgName: 'ErinZuo.jpg',         title: 'PhD WIT'},
        {id: 103, firstName: 'Deyan', lastName: 'Mihaylov',  imgName: 'DeyanMihaylov.png',   title: 'PhD Cambridge'}
    ];

    faculty.forEach(person => {
        let card = `
            <div class="person" id=${person.id}" >
                <p class="personName"> ${person.firstName} ${person.lastName} </p>
                <img src="images/${person.imgName}">
                <p class="personTitle">${person.title}</p>
                <span></span>
            </div>`      
        $('#peopleFlexList').append(card); 
    });
    
    faculty.forEach(p => {
        console.log( `#${p.id}`);
        $('#peopleFlexList').on("click", "div", p.id, showBio); // 'on' is equivalent to deprecated 'delegate' method
    });

    document.getElementById('backToPeopleList').addEventListener('click', backToPeopleList);

    function showBio(){
        console.log("This is element", this.id);
        $('.peopleList').hide();
        $('.peopleBio').show();
    };

    function backToPeopleList(){
        $('.peopleList').show();
        $('.peopleBio').hide();
    }
})