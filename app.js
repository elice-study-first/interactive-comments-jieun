async function commentData() {
    // json데이터 가져오기
    const res = await fetch('./data.json')
    const data = await res.json()

    Object.keys(data)
    Object.values(data)

    // object를 배열로 바꾸기
    const arryData = Object.entries(data)
    console.log(arryData[1][1])

    let html = ''

    // 데이터 출력하기
    for(let i in arryData) {
        const element = `
        <li class="list">
            <div class="list-top">
              <h1 class="name">${arryData[1][1][i].user.username}</h1>
              <div class="list-top-buttons">
                <button class="reply-btn"></button>
              </div>
            </div>
            <p class="content">${arryData[1][1][i].content}</p>
        </li>
    `
        html += element
    }

    return document.querySelector(".list-container").innerHTML = html
}

commentData()


// 기능 구현이 아직 진행중이라 주석 처리함
// function listValue(commentData) {
//     document.querySelector(".list-container").innerHTML += `
//         <li class="list">
//             <div class="list-top">
//               <h1 class="name">${commentData.name}</h1>
//               <div class="list-top-buttons">
//                 <button class="edit-btn">수정</button>
//                 <button class="delete-btn">삭제</button>
//               </div>
//             </div>
//             <p class="content">${commentData.comment}</p>
//         </li>
//     `
// }


// function createCommnet(e) {
//     e.preventDefault();

//     let nameValue = nameInput.value;
//     let inputValue = commentInput.value;

//     console.log(nameValue)

//     // 객체 생성
//     const obj = {
//         name: nameValue,
//         comment: inputValue
//     }

//     // 객체를 json으로 변환 -> localStorage에는 문자열만 저장됨
//     const objString = JSON.stringify(obj);

//     // localstorage에 obj객체 저장
//     window.localStorage.setItem({ nameValue, inputValue }, objString);

//     // localstorage에 저장된 객체 불러오기
//     const getData = window.localStorage.getItem({ nameValue, inputValue });

//     // json을 객체로 변환
//     const commentData = JSON.parse(getData);

//     listValue(commentData)
// }

// const commentInput = document.querySelector(".comment");
// const nameInput = document.querySelector(".user-name-input");
// const submitBtn = document.querySelector(".send-btn");

// submitBtn.addEventListener('click', createCommnet);