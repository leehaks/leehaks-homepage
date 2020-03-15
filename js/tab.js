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

    // tabComponent.forEach(items => { 
    //     let tabLabelFirst = items.querySelector('.tab-label-group .tab-label');
    //     let tabPanelFirst = items.querySelector('.tab-panel');
    //     activate(tabLabelFirst); 
    //     activatePanel(tabPanelFirst);

    //     let labelBar = document.createElement('div'); 
    //     labelBar.classList.add('bar');
    //     items.querySelector('.tab-label-group').appendChild(labelBar); 

    //     items.addEventListener('click', tabHandler); 
    // })
}
