const inputContainer = document.querySelector('.input-container')
        function addNote()
        {
            let div = document.createElement('div');
            div.classList.add('input-box')
            let div2 = document.createElement('div')
            div2.classList.add('input')
            div2.setAttribute('contenteditable','true')
            div.appendChild(div2);

            let span1 = document.createElement('span')
            let span2 = document.createElement('span')
            span1.innerHTML = '\u00d7';
            span2.innerHTML = '\u002B';
            
            div.appendChild(span1);
            div.appendChild(span2);
            inputContainer.appendChild(div);
            saveData()
        }

        inputContainer.addEventListener('click',function(e){
            if(e.target.innerHTML === '\u00d7')
            {
                e.target.parentElement.remove()
                saveData()
            }

            if(e.target.innerHTML === '\u002B')
            {
                addNote()
                saveData()
            }
        })

        function saveData()
        {
            localStorage.setItem('data',inputContainer.innerHTML)
        }

        function showData()
        {
            inputContainer.innerHTML = localStorage.getItem('data')
        }

        showData();