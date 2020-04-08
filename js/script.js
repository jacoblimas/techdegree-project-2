//part1-----CREATE GLOBAL VARIABLES-----//

const studentList = document.querySelectorAll('.student-item');

const studentsPerPage = 10;


//part2-----DISPLAY A PAGE-----//

function showStudents (list, page){
  //CREATE TWO VARIABLES startIndex & endIndex TO STORE START AND END OF LIST ITEMS D
  const startIndex = (page * studentsPerPage) - studentsPerPage;
  const endIndex = (page * studentsPerPage);

  //LOOP OVER LIST PARAMETER:
      //if LIST ITEM >= startIndex && <endIndex -> DISPLAY LIST ITEM
      for(let i = 0; i < list.length; i +=1){
        if(i >= startIndex && i < endIndex){
          list[i].style.display = 'block';
        }else {
          list[i].style.display = 'none';
        }
      }
}

//part3-----ADD PAGINATION LINKS-----//

function paginationLink (list) {
  //1. CREATE DIV ELEMENT WITH CLASS NAME OF "pagination"
  const divPagination = document.createElement('div');
  divPagination.className = 'pagination';
    //2. APPEND divPagination VARIABLE TO THE DIV WITH CLASS NAME OF PAGE
  const page = document.querySelector('.page');
  page.appendChild(divPagination);

  //3. NESTED ul ELEMENT CONTAINING ONE li ELEMENT FOR EVERY 10 STUDENTS IN LIST
  const ulNested = document.createElement('ul');
  divPagination.appendChild(ulNested);
    //4. DIVIDE list.length BY MAX NUMBER OF studentsPerPage
    const numberOfPage = Math.ceil(list.length / 10);
      //5. USE LOOP THAT ITERATES HOW MANY TIMES TO CREATE CORRECT NUMBER OF li ELEMENTS
      for(let i = 0; i < numberOfPage; i +=1){
        const li = document.createElement('li');
        const a = document.createElement('a');
        a.href = '#';
        a.textContent = i +1;
        li.appendChild(a);
        ulNested.appendChild(li);
        divPagination.appendChild(ulNested);
        if(i === 0){
          a.className = 'active';
        };
        //adds event listener to a element
        for(let i = 0; i < list.length; i +=1){
          a.addEventListener('click', (event) => {
            let a = document.querySelectorAll('a');
            for(let i = 0; i < a.length; i +=1){
              a[i].className = ' ';
            }
            //uses event object to change class name of the target that was clicked
            event.target.className = 'active';
            showStudents(studentList, event.target.textContent);
          });
      }
    }
}

//part4-----CALL FUNCTIONS-----//
showStudents(studentList, 1);

paginationLink(studentList);
