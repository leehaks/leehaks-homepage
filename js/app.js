window.onload = function(){
    
    // tab-component

    let currentTabLabel, currentTabPanel; 
    let tabComponent = document.querySelectorAll('.tab-component'); 

    function activate(elem){
        elem.classList.add('active'); 
        currentTabLabel = elem; 
    }

    function inactivate(elem){ 
        elem.classList.remove('active'); 
    }

    function activatePanel(elem){
        elem.classList.add('active'); 
        currentTabPanel = elem; 
    }
    
    function tabHandler(e) { 
        const targetElem = e.target; 
        const targetContain = targetElem.classList.contains('tab-label')

        if (targetContain) { 
            inactivate(currentTabLabel); 
            inactivate(currentTabPanel); 

            activate(targetElem);     
            
            console.log(this)

            let tabOffSetLeft = this.getBoundingClientRect().left.toFixed(2)

            this.querySelector('.bar').style.left = 
            targetElem.getBoundingClientRect().left.toFixed(2) - tabOffSetLeft +"px"; 
            
            console.log(tabOffSetLeft,targetElem.getBoundingClientRect().left.toFixed(2)); 
            

            let targetHref, targetPanel; 
            targetHref = targetElem.getAttribute('data-name')
            targetPanel = this.querySelector(targetHref); 
            
            activatePanel(targetPanel); 
        }       
    }
    
    for(let i=0; i<tabComponent.length; i++){

        let tabLabelFirst = tabComponent[i].querySelector('.tab-label-group .tab-label');
        let tabPanelFirst = tabComponent[i].querySelector('.tab-panel');
        activate(tabLabelFirst); 
        activatePanel(tabPanelFirst);

        let labelBar = document.createElement('div'); 
        labelBar.classList.add('bar');
        tabComponent[i].querySelector('.tab-label-group').appendChild(labelBar); 

        tabComponent[i].addEventListener('click', tabHandler); 
    }


    // %값에 따른 progressbar 컬러값 채우기

    const progress = document.querySelectorAll('.progress-bar'); 

    for(let i=0;i<progress.length;i++){
        let progressWidth = progress[i].getAttribute('data-num'); 
        progress[i].querySelector('.progress').style.width = progressWidth + "%"
    }

    // 모바일용 메뉴 애니메이션

    const navToggleBtn = document.querySelector('.navbar-toggle-btn'); 
    const navMenu = document.querySelector('.navbar-menu'); 
    const navLink = document.querySelector('.navbar-link'); 

    navToggleBtn.addEventListener('click', function(e) {
        e.preventDefault(); 
        navMenu.classList.toggle('active'); 
        navLink.classList.toggle('active'); 
    })

    // navbar 스크롤 작동 애니메이션

    let navbar = document.querySelector('.navbar'); 
    let navbarLink = document.querySelectorAll('.navbar-menu a.scroll');
    let navbarCurrent;

    // active 효과 추가
    function activateScroll(elem){
        elem.classList.add('active'); 
        navbarCurrent = elem; 
    }

    // navbar a링크 클릭시 a.active 추가 및 해당 메뉴Top으로 이동
    function navbarLinkClick(e) { 
        e.preventDefault();
        
        const navbarHandler = e.target; 
        if(navbarCurrent) navbarCurrent.classList.remove('active'); 

        activateScroll(navbarHandler); 
        let targetId = navbarHandler.getAttribute('href'); 

        window.scrollTo({
            top: document.querySelector(targetId).offsetTop, 
            behavior: "smooth"
        });         
    }
    
    // navbar메뉴 a링크 클릭 이벤트적용
    for(let i=0;i<navbarLink.length;i++){
        activateScroll(navbarLink[0]); 
        navbarLink[i].addEventListener('click', navbarLinkClick);
    }

    if( window.pageYOffset > 0 ) navbar.classList.add('show'); 

    function scrollEvent() { 
        
        if ( window.pageYOffset > 0 ) { 
            navbar.classList.add('show')
        } else if ( window.pageYOffset == 0 ) { 
            navbar.classList.remove('show')
        }

        for(let i=0;i<navbarLink.length;i++){
            let targetId = navbarLink[i].getAttribute('href'); 
            let currentPageId = document.querySelector(targetId);        
            
            if(window.pageYOffset >= currentPageId.offsetTop) { 
                if(navbarCurrent) navbarCurrent.classList.remove('active'); 
                activateScroll(navbarLink[i]); 
            }
        }
    }

    // 스크롤 이벤트 추가
    window.addEventListener('scroll', scrollEvent); 
}
