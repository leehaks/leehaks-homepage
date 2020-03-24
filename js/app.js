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

    const navToggleBtn = document.querySelector('.navbar-toggle-btn'); 
    const navMenu = document.querySelector('.navbar-menu'); 
    const navLink = document.querySelector('.navbar-link'); 

    navToggleBtn.addEventListener('click', function(e) {
        e.preventDefault(); 
        navMenu.classList.toggle('active'); 
        navLink.classList.toggle('active'); 
    })

    const progress = document.querySelectorAll('.progress-bar'); 

    for(let i=0;i<progress.length;i++){
        let progressWidth = progress[i].getAttribute('data-num'); 
        progress[i].querySelector('.progress').style.width = progressWidth + "%"
    }

}
