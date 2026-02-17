// 우클릭 차단
document.addEventListener("contextmenu", e => e.preventDefault());

// 단축키 차단
document.addEventListener("keydown", e => {

    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && e.key === "I") ||
        (e.ctrlKey && e.key === "U")
    ){
        e.preventDefault();
    }

});

// 개발자도구 감지
setInterval(()=>{

    if(
        window.outerWidth - window.innerWidth > 160 ||
        window.outerHeight - window.innerHeight > 160
    ){
        if(!devtoolsOpened){
            alert("개발자 도구 사용이 감지되었습니다.");
            devtoolsOpened = true;
        }
        
        document.body.innerHTML = "접근 제한";
    }

},1000);