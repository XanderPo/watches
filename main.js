let hourHand = document.querySelector('.hour-hand')
        let minuteHand = document.querySelector('.minute-hand')
        let secondHand = document.querySelector('.second-hand')
        let ampm = document.querySelector('.am-pm')
        
        function tick() {    
            h =  new Date().getHours() 
            m =  new Date().getMinutes() 
            s =  new Date().getSeconds() 
                       
            if (h > 12) {
                h = h - 12
                ampm.textContent = 'pm'
            }  
           
            hd = h * 30 + 270
            if (m>=20 && m<40) {hd = h * 30 + 280}   
            if (m>=40) {hd = h * 30 + 290}            
            md = m * 6 + 270
            sd = s * 6 + 270        
                 
            hourHand.style.transform= 'rotate(' + hd + 'deg) '
            minuteHand.style.transform= 'rotate(' + md +'deg) '
            secondHand.style.transform= 'rotate(' + sd + 'deg) '
        }
        setInterval(tick, 1000);